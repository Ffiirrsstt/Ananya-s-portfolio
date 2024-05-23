/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "th.bing.com",
      "umangsoftware.com",
      "cdn1.iconfinder.com",
      "www.creasystem.com",
      "creazilla-store.fra1.digitaloceanspaces.com",
      "replit.com",
      "raw.githubusercontent.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: ["*.jsx", "pages/home.js"],
  },
};

export default nextConfig;
