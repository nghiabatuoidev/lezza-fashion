import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Thử bật cái này lên trước để xác định lỗi
  },
};

export default nextConfig;
