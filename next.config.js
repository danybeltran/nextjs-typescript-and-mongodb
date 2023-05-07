/**
 * @type { import("next").NextConfig }
 */
module.exports = {
  reactStrictMode: false,
  experimental: {
    serverComponentsExternalPackages: ['mongoose']
  }
}
