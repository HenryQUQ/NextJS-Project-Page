import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Base path for subfolder deploys (e.g., GitHub Pages).
// Prefer NEXT_PUBLIC_BASE_PATH if set (e.g., "/YourRepoName"), otherwise fall back to repoName.
const repoName = "NextJS-Project-Page";
const basePathFromEnv = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "");
const basePath = basePathFromEnv || (isProd ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath || "",
  },
};

export default nextConfig;
