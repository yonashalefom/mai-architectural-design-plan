/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@magnoli/ui', '@magnoli/shared'],
  experimental: {
    optimizePackageImports: ['@magnoli/ui'],
  },
}

module.exports = nextConfig

