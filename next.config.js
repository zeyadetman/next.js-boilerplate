/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/blog/topic",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};
