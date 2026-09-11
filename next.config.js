/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily disable static export for development
  // output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
