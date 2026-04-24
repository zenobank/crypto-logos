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
      {
        source: '/logo/quicknode-nft-api',
        destination: '/logo/quicknode',
        permanent: true,
      },
      {
        source: '/logo/quicknode-rollups',
        destination: '/logo/quicknode',
        permanent: true,
      },
      {
        source: '/logo/quicknode-sdk',
        destination: '/logo/quicknode',
        permanent: true,
      },
      {
        source: '/logo/trojan-bot',
        destination: '/logo/trojan',
        permanent: true,
      },
      {
        source: '/logo/global-dollar-usdg',
        destination: '/logo/usdg',
        permanent: true,
      },
      {
        source: '/logo/paradigm-ctf',
        destination: '/logo/paradigm',
        permanent: true,
      },
      {
        source: '/logo/paradigm-faucet',
        destination: '/logo/paradigm',
        permanent: true,
      },
      {
        source: '/logo/bifrost-staking',
        destination: '/logo/bifrost',
        permanent: true,
      },
      {
        source: '/logo/curve-dao-token',
        destination: '/logo/curve-finance',
        permanent: true,
      },
      {
        source: '/logo/curve-dex',
        destination: '/logo/curve-finance',
        permanent: true,
      },
      {
        source: '/logo/curve-subgraph',
        destination: '/logo/curve-finance',
        permanent: true,
      },
      {
        source: '/logo/lido-dao',
        destination: '/logo/lido',
        permanent: true,
      },
      {
        source: '/logo/lido-subgraph',
        destination: '/logo/lido',
        permanent: true,
      },
      {
        source: '/logo/aa-bundler',
        destination: '/',
        permanent: true,
      },
      {
        source: '/logo/4byte',
        destination: '/',
        permanent: true,
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
