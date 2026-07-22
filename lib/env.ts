/**
 * Environment Variable Validation
 *
 * Validates that required environment variables are present and correctly
 * formatted at build time and server startup. Call `validateEnv()` in
 * server-only modules that need reliable configuration.
 *
 * No external dependencies required — uses only Node.js built-ins.
 */

type EnvSchema = {
  key: string;
  required: boolean;
  description: string;
  validate?: (value: string) => boolean;
};

const ENV_SCHEMA: EnvSchema[] = [
  {
    key: "NODE_ENV",
    required: true,
    description: "Runtime environment mode",
    validate: (v) => ["development", "production", "test"].includes(v),
  },
  {
    key: "NEXT_PUBLIC_SITE_URL",
    required: false,
    description: "Public site URL for canonical/OG meta generation",
    validate: (v) => v.startsWith("http"),
  },
  {
    key: "ANALYZE",
    required: false,
    description: "Bundle analyzer flag (set to 'true' to enable)",
    validate: (v) => ["true", "false", undefined as unknown as string].includes(v),
  },
];

type ValidationResult = {
  valid: boolean;
  errors: string[];
  warnings: string[];
};

export function validateEnv(): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const schema of ENV_SCHEMA) {
    const value = process.env[schema.key];

    if (schema.required && !value) {
      errors.push(
        `❌ Missing required environment variable: ${schema.key} — ${schema.description}`
      );
      continue;
    }

    if (!schema.required && !value) {
      warnings.push(
        `⚠️  Optional environment variable not set: ${schema.key} — ${schema.description}`
      );
      continue;
    }

    if (value && schema.validate && !schema.validate(value)) {
      errors.push(
        `❌ Invalid value for environment variable: ${schema.key}="${value}" — ${schema.description}`
      );
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Call this in server-only context (e.g., Route Handlers, Server Actions)
 * to assert all required environment variables are present.
 * Throws in production if any required variable is missing.
 */
export function assertEnv(): void {
  const result = validateEnv();

  if (result.warnings.length > 0 && process.env.NODE_ENV !== "production") {
    result.warnings.forEach((w) => console.warn(w));
  }

  if (!result.valid) {
    const message = [
      "🚨 Environment validation failed:",
      ...result.errors,
    ].join("\n");

    if (process.env.NODE_ENV === "production") {
      throw new Error(message);
    } else {
      console.error(message);
    }
  }
}

/**
 * Type-safe getter for environment variables with fallback support.
 *
 * @example
 * const siteUrl = getEnv("NEXT_PUBLIC_SITE_URL", "https://ajitdev.com");
 */
export function getEnv(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Environment variable "${key}" is not set and no fallback was provided.`);
  }
  return value;
}

/** Pre-validated site constants for use across the codebase */
export const ENV = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ajitdev.com",
  nodeEnv: process.env.NODE_ENV ?? "development",
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
} as const;
