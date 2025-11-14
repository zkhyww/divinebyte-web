/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = config.resolve.alias || {}
    config.resolve.alias['ai/react'] = require.resolve('@ai-sdk/react')
    return config
  }
}

module.exports = nextConfig

