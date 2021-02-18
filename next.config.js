module.exports = {
  async headers() {
    return [
      {
        source: '/static',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=60, stale-while-revalidate=86400',
          },
          {
            key: 'X-Custom-Header',
            value: 'no props, no link',
          },
        ],
      },
      {
        source: '/static-link',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=60, stale-while-revalidate=86400',
          },
          {
            key: 'X-Custom-Header',
            value: 'no props, with link',
          },
        ],
      },
      {
        source: '/props',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=60, stale-while-revalidate=86400',
          },
          {
            key: 'X-Custom-Header',
            value: 'with static props',
          },
        ],
      },
      {
        source: '/props-link',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=60, stale-while-revalidate=86400',
          },
          {
            key: 'X-Custom-Header',
            value: 'with static props, with next/link',
          },
        ],
      },
      {
        source: '/_next/data/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=60, stale-while-revalidate=86400',
          },
          {
            key: 'X-Custom-Header',
            value: '_next/data',
          },
        ],
      },
    ];
  },
};
