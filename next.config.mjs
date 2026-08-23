/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/products', destination: '/software', permanent: true },
      { source: '/products/:slug', destination: '/software/:slug', permanent: true },
      { source: '/portfolio', destination: '/websites', permanent: true },
    ]
  },
}

export default nextConfig
