/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  env: {
    NEXT_PUBLIC_ROOFERLY_GA4_ID: process.env.NEXT_PUBLIC_ROOFERLY_GA4_ID,
    NEXT_PUBLIC_ROOFERLY_GTM_ID: process.env.NEXT_PUBLIC_ROOFERLY_GTM_ID,
  },
  // Vercel deployment optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
