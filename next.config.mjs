/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "th.bing.com",
      "capnis.com",
      "cdn4.iconfinder.com",
      "cdn1.iconfinder.com",
      "creazilla-store.fra1.digitaloceanspaces.com",
      "download.logo.wine",
      "umangsoftware.com",
      "www.safike.com",
      "www.creasystem.com",
      "replit.com",
      "raw.githubusercontent.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: ["*.jsx", "pages/home.js"],
  },
};

export default nextConfig;
