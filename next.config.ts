import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ['192.168.1.105'], // Allow local network access
  },
};

export default nextConfig;
