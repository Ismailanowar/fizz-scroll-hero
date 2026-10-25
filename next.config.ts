
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fizz-scroll-hero",
  assetPrefix: "/fizz-scroll-hero/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
