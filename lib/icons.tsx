import React from "react";

// Standard icon properties interface
export interface IconProps {
  size?: number;
  className?: string;
}

// Global SVG container styling helper
const getSvgProps = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
});

export const FiBriefcase = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const FiAward = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

export const FiTrendingUp = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export const FiDatabase = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
  </svg>
);

export const FiGlobe = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const FiPackage = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <polygon points="12 22.08 12 12 3 6.92 3 17.08 12 22.08" />
    <polygon points="12 22.08 12 12 21 6.92 21 17.08 12 22.08" />
    <polygon points="12 2 3 6.92 12 11.84 21 6.92 12 2" />
    <line x1="17.27" y1="9.01" x2="8.3" y2="13.98" />
  </svg>
);

export const FiGitPullRequest = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <line x1="6" y1="9" x2="6" y2="21" />
  </svg>
);

export const FiTerminal = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

export const FiStar = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const FiZap = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const FiGithub = ({ size = 20, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export const FiExternalLink = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const FiShield = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const FiTarget = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const FiClock = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const FiCheckCircle = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const FiMapPin = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const FiCalendar = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const FiArrowRight = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const FiCode = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const FiServer = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

export const FiChevronDown = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const FiChevronUp = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export const FiLayers = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polygon points="2 17 12 22 22 17" />
    <polygon points="2 12 12 17 22 12" />
  </svg>
);

export const FiSmartphone = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

export const FiCpu = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

export const FiSend = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export const FiLock = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const FiTool = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export const FiGitBranch = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

export const FiActivity = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

export const FiBook = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z" />
  </svg>
);

export const FiCloud = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

export const FiCheck = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const FiBarChart2 = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

export const FiFolder = ({ size = 20, className }: IconProps) => (
  <svg {...getSvgProps(size, className)}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);
