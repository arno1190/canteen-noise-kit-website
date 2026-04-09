import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/canteen-noise-kit-website" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
