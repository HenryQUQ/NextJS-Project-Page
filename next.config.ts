import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// Change this to your deployed subpath (e.g., GitHub Pages repo name).
// Example: if hosted at https://example.com/NextJS-Project-Page, set to "NextJS-Project-Page".
const repoName = "NextJS-Project-Page";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : undefined,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
  },
};

export default nextConfig;
