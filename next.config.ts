import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Disable Turbopack — it panics on the ü in Masaüstü (path encoding bug) */
};

export default nextConfig;
