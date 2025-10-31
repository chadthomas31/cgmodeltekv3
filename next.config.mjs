/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-front.freepik.com",
        pathname: "/home/**",
      },
    ],
    // Fallback for development - remove external domains in production
    unoptimized: process.env.NODE_ENV === "development",
  },
  async redirects() {
    return [
      {
        source: "/industries",
        destination: "/aerospace",
        permanent: true,
      },
      {
        source: "/industries/aerospace",
        destination: "/aerospace",
        permanent: true,
      },
      {
        source: "/industries/:slug",
        destination: "/aerospace",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
