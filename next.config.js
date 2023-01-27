
/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized :true
  },
  assetPrefix: !debug ? 'https://hudsonprem.github.io/invoiceGen/' : '',
  // basePath: isProd ? basePath : "/",
    exportPathMap: function () {
      return {
        "/": { page: "/" },
        "/page": { page: "/page" },
      }
    },
}

module.exports = nextConfig
