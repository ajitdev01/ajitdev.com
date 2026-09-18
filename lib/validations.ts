/**
 * Input Validation Utilities
 *
 * Lightweight schema validation helpers for API routes, form inputs,
 * and query parameters. Implemented without external dependencies to
 * avoid adding unnecessary package weight.
 *
 * If you add `zod` to the project in future, these can be replaced with
 * zod schemas — the function signatures are compatible.
 */

// ============================================================
// TYPES
// ============================================================

export type ValidationError = {
  field: string;
  message: string;
};

export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: ValidationError[] };

// ============================================================
// PRIMITIVES
// ============================================================

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function isValidEmail(value: unknown): value is string {
  if (!isNonEmptyString(value)) return false;
  // RFC 5322 simplified pattern
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidUrl(value: unknown): value is string {
  if (!isNonEmptyString(value)) return false;
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol);
  } catch {
    return false;
  }
}

export function isWithinLength(
  value: unknown,
  min: number,
  max: number
): boolean {
  if (typeof value === "string") {
    const len = value.trim().length;
    return len >= min && len <= max;
  }
  return false;
}

// ============================================================
// XSS / INJECTION SANITIZATION
// ============================================================

const HTML_ENTITY_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/**
 * Escape HTML characters to prevent XSS injection in server-rendered output.
 * For client-side DOM insertion use `isomorphic-dompurify` instead.
 */
export function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (char) => HTML_ENTITY_MAP[char] ?? char);
}

/**
 * Strip all HTML tags from a string.
 * Does NOT parse HTML — only removes tag-like patterns.
 */
export function stripHtmlTags(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

/**
 * Sanitize a text string for safe server-side usage:
 * - Trim whitespace
 * - Strip HTML tags
 * - Escape remaining special HTML characters
 */
export function sanitizeText(input: unknown): string {
  if (!isNonEmptyString(input)) return "";
  return escapeHtml(stripHtmlTags(input.trim()));
}

// ============================================================
// CONTACT FORM VALIDATION
// ============================================================

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function validateContactForm(
  data: Record<string, unknown>
): ValidationResult<ContactFormInput> {
  const errors: ValidationError[] = [];

  if (!isNonEmptyString(data.name) || !isWithinLength(data.name, 2, 100)) {
    errors.push({ field: "name", message: "Name must be between 2 and 100 characters." });
  }

  if (!isValidEmail(data.email)) {
    errors.push({ field: "email", message: "A valid email address is required." });
  }

  if (!isNonEmptyString(data.subject) || !isWithinLength(data.subject, 3, 200)) {
    errors.push({ field: "subject", message: "Subject must be between 3 and 200 characters." });
  }

  if (!isNonEmptyString(data.message) || !isWithinLength(data.message, 10, 5000)) {
    errors.push({ field: "message", message: "Message must be between 10 and 5000 characters." });
  }

  if (errors.length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      name: sanitizeText(data.name),
      email: (data.email as string).trim().toLowerCase(),
      subject: sanitizeText(data.subject),
      message: sanitizeText(data.message),
    },
  };
}

// ============================================================
// API QUERY PARAMETER VALIDATION
// ============================================================

export interface SearchQueryInput {
  q: string;
  page: number;
  limit: number;
  category?: string;
}

export function validateSearchQuery(
  params: Record<string, string | string[] | undefined>
): ValidationResult<SearchQueryInput> {
  const errors: ValidationError[] = [];

  const q = typeof params.q === "string" ? params.q.trim() : "";
  if (q.length > 200) {
    errors.push({ field: "q", message: "Search query cannot exceed 200 characters." });
  }

  const rawPage = typeof params.page === "string" ? parseInt(params.page, 10) : 1;
  const page = isNaN(rawPage) || rawPage < 1 ? 1 : Math.min(rawPage, 1000);

  const rawLimit = typeof params.limit === "string" ? parseInt(params.limit, 10) : 10;
  const limit = isNaN(rawLimit) || rawLimit < 1 ? 10 : Math.min(rawLimit, 100);

  const category = typeof params.category === "string"
    ? params.category.toLowerCase().trim()
    : undefined;

  if (category && (category.length > 50 || !/^[a-z0-9-_ ]+$/.test(category))) {
    errors.push({ field: "category", message: "Category must be alphanumeric (max 50 characters)." });
  }

  if (errors.length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: { q: sanitizeText(q) || "", page, limit, category },
  };
}

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
  [key: string]: unknown;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: ValidationError[];
  };
}

/**
 * Parse and validate a JSON request body with type safety.
 * Returns null on malformed JSON or empty request.
 */
export async function parseJsonBody(
  request: Request
): Promise<Record<string, unknown> | null> {
  try {
    const text = await request.text();
    if (!text || text.trim().length === 0) return null;
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return null;
  }
}

/**
 * Build a standardized API error response.
 */
export function apiError(
  message: string,
  status: number = 400,
  code: string = "VALIDATION_ERROR",
  errors?: ValidationError[]
): Response {
  const body: ApiErrorResponse = {
    success: false,
    error: {
      code,
      message,
      ...(errors && errors.length > 0 ? { details: errors } : {}),
    },
  };
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * Build a standardized API success response.
 */
export function apiSuccess<T>(
  data: T,
  message: string = "Success",
  status: number = 200,
  extra: Record<string, unknown> = {}
): Response {
  const body = {
    success: true,
    data,
    message,
    ...extra,
  };
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * Build a standardized 405 Method Not Allowed response with Allow header.
 */
export function methodNotAllowed(allowedMethods: string[]): Response {
  const body: ApiErrorResponse = {
    success: false,
    error: {
      code: "METHOD_NOT_ALLOWED",
      message: `Method not allowed. Supported: ${allowedMethods.join(", ")}`,
    },
  };
  return new Response(JSON.stringify(body), {
    status: 405,
    headers: {
      "Content-Type": "application/json",
      Allow: allowedMethods.join(", "),
    },
  });
}

