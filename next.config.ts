import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Form-Test",
  assetPrefix: "/Form-Test",
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: "docs",
};

export default nextConfig;
