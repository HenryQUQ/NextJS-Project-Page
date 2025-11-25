import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// Change this to your repo name if you publish to GitHub Pages.
const repoName = "project_page_template";

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
