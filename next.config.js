module.exports = {
    async rewrites() {
        return [
          {
            destination: 'https://abay-sankar.vercel.app/:path*',
          },
        ]
      },
  };