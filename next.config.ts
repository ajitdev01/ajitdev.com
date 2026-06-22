import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: "/.well-known/security.txt",
        destination: "/.well-known/security.txt",
      },
    ];
  },
};

export default nextConfig;
