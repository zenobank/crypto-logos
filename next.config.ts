import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/site.webmanifest',
        headers: [
          { key: 'Content-Type', value: 'application/manifest+json' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET' },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, content-type, Authorization',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/manifest.json',
        destination: '/site.webmanifest',
        permanent: true,
      },
      {
        source: '/logo/moralis-nft-api',
        destination: '/logo/moralis',
        permanent: true,
      },
      {
        source: '/logo/moralis-unity-sdk',
        destination: '/logo/moralis',
        permanent: true,
      },
      {
        source: '/logo/coingecko-api',
        destination: '/logo/coingecko',
        permanent: true,
      },
      {
        source: '/logo/dex-screener',
        destination: '/logo/dexscreener',
        permanent: true,
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
