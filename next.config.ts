import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cho phép localhost dev (nếu dùng external images)
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "**",
        pathname: "**",
      },
    ],
  },
  // Tăng tốc build production
  experimental: {
    optimizePackageImports: ["lodash"],
  },
};

export default nextConfig;
