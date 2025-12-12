// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite al componente Next.js Image optimizar imágenes de estas fuentes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
