/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
       {
        protocol: "https",
        hostname: "static.exportersindia.com",
      },
      {
        protocol: "https",
        hostname: "dyimg77.exportersindia.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
