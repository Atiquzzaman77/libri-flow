/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // আপনার JSON ডেটার ইমেজের জন্য এটিও লাগবে
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;