/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  outputFileTracingRoot: process.cwd(),
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'**'
      },
       {
        protocol:'http',
        hostname:'**'
      }
    ]
  }
};

export default nextConfig;