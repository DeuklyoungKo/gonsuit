/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resources",
        destination: "/lab",
        permanent: true, // 308 redirect (SEO 전달)
      },
    ];
  },
};
module.exports = nextConfig;
