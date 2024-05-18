// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: 'https://cloud.appwrite.io/v1',
          },
        ]
      },
  };