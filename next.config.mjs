/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/resources/duas',
        destination: '/duas',
        permanent: true,
      },
      {
        source: '/resources/duas/:slug*',
        destination: '/duas/:slug*',
        permanent: true,
      },
      {
        source: '/prayer-times/qibla',
        destination: '/tools/qibla-finder',
        permanent: true,
      },
      {
        source: '/prayer-times/qibla/:slug*',
        destination: '/tools/qibla-finder',
        permanent: true,
      },
      {
        source: '/prayer-times/:country/:city',
        destination: '/ramadan/timings/:country/:city',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
