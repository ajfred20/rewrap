import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Only use this if you want to temporarily ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
