import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-d6da5f8b739d43b9a79e7602b9a14133.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
