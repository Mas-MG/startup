import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

};
module.exports = {
  // ... other configurations ...
  experimental: {
    turbo: {
      enabled: false,
    },
  },
};
export default nextConfig;
