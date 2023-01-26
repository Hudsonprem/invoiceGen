
/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repo = 'invoice-gen'
const assetPrefix = `./`
const basePath = `/${repo}`

const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized :true
  },
  assetPrefix: !debug ? 'https://hudsonprem.github.io/invoice-gen/' : '',
  // basePath: isProd ? basePath : "/",
    exportPathMap: function () {
      return {
        "/": { page: "/" },
        "/page": { page: "/page" },
      }
    },
}

module.exports = nextConfig
