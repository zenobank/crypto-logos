import LogoItem from '@/shared/models/logos/logo-item';

export const LOGOS_DATA: LogoItem[] = [
  {
    id: 'zenobank',
    name: 'Zeno Bank',
    mainCategory: 'crypto-banks',
    secondaryCategories: ['payments'],
    websiteLink: 'https://zenobank.io',
    brandKitLink: 'https://docs.zenobank.io/brand-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/zenobank-icon-light.png',
            format: 'png',
          },
        ],
        dark: [
          {
            url: '/library/zenobank-icon-dark.png',
            format: 'png',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/zenobank-text-light.png',
            format: 'png',
          },
        ],
        dark: [
          {
            url: '/library/zenobank-text-dark.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ethena-usde',
    name: 'Ethena USDe',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    websiteLink: 'https://www.ethena.fi',
    brandKitLink: 'https://docs.ethena.fi/resources/media-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ethena-usde-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },

  {
    id: 'aptos',
    name: 'Aptos (APT)',
    brandKitLink: 'https://aptosnetwork.com/media-kit',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/aptos-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum (ARB)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://arbitrum.foundation',
    brandKitLink: 'https://arbitrum.io/brand-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/arbitrum-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitcoin',
    name: 'Bitcoin (BTC)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitcoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hedera',
    name: 'Hedera (HBAR)',
    brandKitLink: 'https://brand.hedera.com/',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/hedera-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'optimism-ethereum',
    name: 'Optimism (OP)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://www.optimism.io',
    brandKitLink: 'https://www.optimism.io/brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/optimism-ethereum-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },

  {
    id: 'solana',
    name: 'Solana (SOL)',
    brandKitLink:
      'https://drive.google.com/drive/folders/1Y882o7uxW4Bx2vL6MXI-IozbGTX3ztBk',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/solana-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tezos',
    name: 'Tezos (XTZ)',
    brandKitLink: 'https://tezos.com/visual-identity/',
    mainCategory: 'chains',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/tezos-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'thorchain',
    name: 'thorchain (RUNE)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/thorchain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cobo',
    name: 'Cobo',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://cobo.com',
    brandKitLink: 'https://brandfetch.com/cobo.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cobo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'carbon-perpetuals',
    name: 'Carbon',
    brandKitLink:
      'https://docs.carbon.inc/additional-information/brand-and-media-kit',
    mainCategory: 'defi',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/carbon-perpetuals-icon-light.svg',
            format: 'svg',
          },
          {
            url: '/library/carbon-perpetuals-icon-light.png',
            format: 'png',
          },
        ],
        dark: [
          {
            url: '/library/carbon-perpetuals-icon-dark.svg',
            format: 'svg',
          },
          {
            url: '/library/carbon-perpetuals-icon-dark.png',
            format: 'png',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/carbon-perpetuals-text-light.svg',
            format: 'svg',
          },
          {
            url: '/library/carbon-perpetuals-text-light.png',
            format: 'png',
          },
        ],
        dark: [
          {
            url: '/library/carbon-perpetuals-text-dark.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'decentraland',
    name: 'Decentraland (MANA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://decentraland.org',
    brandKitLink:
      'https://drive.google.com/drive/folders/1ZTEgSGg7yX_gjLOVzIvvria-j2tOBQme',
    logo: {
      icon: {
        light: [
          {
            url: '/library/decentraland-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'depay',
    name: 'DePay',
    mainCategory: 'payments',
    secondaryCategories: [],
    websiteLink: 'https://depay.com',
    brandKitLink: 'https://depay.com/brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/depay-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dune-analytics',
    name: 'Dune Analytics',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://dune.com/home',
    brandKitLink: 'https://dune.com/brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dune-analytics-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/dune-analytics-icon-light.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'dydx',
    name: 'dYdX',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://dydx.exchange',
    brandKitLink: 'https://www.dydx.foundation/brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dydx-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ethereum-name-service',
    name: 'Ethereum Name Service (ENS)',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: ['nft'],
    websiteLink: 'https://ens.domains',
    brandKitLink: 'https://ens.domains/assets/brand/ENS Brand Guidelines.pdf',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ethereum-name-service-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'farcaster',
    name: 'Farcaster',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://www.farcaster.xyz',
    brandKitLink: 'https://github.com/vrypan/farcaster-brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/farcaster-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gate',
    name: 'Gate (GATE)',
    mainCategory: 'exchanges',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://www.gate.io',
    brandKitLink: 'https://www.gate.com/media-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gate-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'geckoterminal',
    name: 'GeckoTerminal',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://www.geckoterminal.com',
    brandKitLink: 'https://brand.coingecko.com/resources/brand-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/geckoterminal-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gemini',
    name: 'Gemini',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.gemini.com',
    brandKitLink: 'https://brandfolder.com/gemini/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gemini-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gmx',
    name: 'GMX',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://gmx.io',
    brandKitLink:
      'https://github.com/gmx-io/gmx-assets/raw/main/GMX-Assets.zip',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gmx-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'huobi',
    name: 'Huobi (HTX)',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.htx.com',
    brandKitLink:
      'https://brandfetch.com/htx.gov.sg?view=library&library=default',
    logo: {
      icon: {
        light: [
          {
            url: '/library/huobi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.kucoin.com',
    brandKitLink: 'https://www.kucoin.com/announcement/en-kucoin-media-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kucoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kwenta',
    name: 'Kwenta',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://kwenta.io',
    brandKitLink: 'https://github.com/Kwenta/brand-kit/tree/main/assets/png',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kwenta-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kyberswap',
    name: 'KyberSwap',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://kyberswap.com',
    brandKitLink: 'https://kyber.network/media-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kyberswap-icon-light.svg',
            format: 'svg',
          },
          {
            url: '/library/kyberswap-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lido',
    name: 'Lido',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://lido.fi',
    brandKitLink:
      'https://drive.google.com/drive/folders/1aubFyvG7YVyyVWGf5yDxjtv6CwvAXdJU',
    logo: {
      icon: {
        light: [
          {
            url: '/library/lido-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'liquity',
    name: 'Liquity (LQTY)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://www.liquity.org',
    brandKitLink:
      'https://uploads-ssl.webflow.com/5fd883457ba5da4c3822b02c/6011885fae7ee22bd6732e34_liquity_press_kit.pdf',
    logo: {
      icon: {
        light: [
          {
            url: '/library/liquity-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'm1-capital',
    name: 'M1 Capital',
    mainCategory: 'investors',
    secondaryCategories: [],
    websiteLink: 'https://m1-capital.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/m1-capital-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'manifold',
    name: 'Manifold',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://manifold.xyz',
    brandKitLink: 'https://github.com/manifoldxyz/manifold-brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/manifold-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'maple-finance',
    name: 'Maple Finance (SYRUP)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://maple.finance',
    brandKitLink:
      'https://drive.google.com/drive/folders/1Fagf8mfVOBnSVWmN7UHiD57ZQQjO4EQB',
    logo: {
      icon: {
        light: [
          {
            url: '/library/maple-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'metamask',
    name: 'MetaMask',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://metamask.io',
    brandKitLink: 'https://metamask.io/assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/metamask-icon-light.svg',
            format: 'svg',
          },
          {
            url: '/library/metamask-icon-light.png',
            format: 'png',
          },
        ],
        dark: [
          {
            url: '/library/metamask-icon-dark.svg',
            format: 'svg',
          },
          {
            url: '/library/metamask-icon-dark.png',
            format: 'png',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/metamask-text-light.png',
            format: 'png',
          },
          {
            url: '/library/metamask-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/metamask-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/metamask-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },

  {
    id: 'moonpay',
    name: 'MoonPay',
    mainCategory: 'payments',
    secondaryCategories: [],
    websiteLink: 'https://www.moonpay.com',
    brandKitLink: 'https://brandfetch.com/moonpay.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/moonpay-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'moralis',
    name: 'Moralis',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://developers.moralis.com',
    brandKitLink: 'https://moralis.com/brand-resources/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/moralis-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'morpho',
    name: 'Morpho',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://morpho.org',
    brandKitLink: 'https://brand.morpho.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/morpho-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mpcvault',
    name: 'MPCVault',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://mpcvault.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mpcvault-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nfts2me',
    name: 'NFTs2Me',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://nfts2me.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nfts2me-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'op-mainnet',
    name: 'OP Mainnet',
    mainCategory: 'chains',
    secondaryCategories: [],
    websiteLink: 'https://www.optimism.io',
    brandKitLink:
      'https://framerusercontent.com/assets/Wn6u304MllKTQuVWtSywXaEtnyM.zip',
    logo: {
      icon: {
        light: [
          {
            url: '/library/op-mainnet-icon-light.svg',
            format: 'svg',
          },
          {
            url: '/library/op-mainnet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'paradigm',
    name: 'Paradigm',
    mainCategory: 'investors',
    secondaryCategories: [],
    websiteLink: 'https://www.paradigm.xyz',
    brandKitLink: 'https://www.paradigm.co/help/miscellaneous/media-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/paradigm-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'phantom',
    name: 'Phantom Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://phantom.app',
    brandKitLink: 'https://docs.phantom.com/resources/assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/phantom-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pinata',
    name: 'Pinata',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://pinata.cloud',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pinata-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'polygon',
    name: 'Polygon',
    mainCategory: 'chains',
    secondaryCategories: [],
    websiteLink: 'https://polygon.technology',
    brandKitLink: 'https://brandfetch.com/polygon.technology',
    logo: {
      icon: {
        light: [
          {
            url: '/library/polygon-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'privy',
    name: 'Privy',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.privy.io',
    brandKitLink:
      'https://drive.google.com/drive/folders/1Vm-Bs1arm3WgQ4tlzu9trGv6b-fiDQf2',
    logo: {
      icon: {
        light: [
          {
            url: '/library/privy-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'Quantstamp',
    name: 'Quantstamp',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://quantstamp.com',
    brandKitLink: 'https://quantstamp.com/media',
    logo: {
      icon: {
        light: [
          {
            url: '/library/quantstamp-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rabby-wallet',
    name: 'Rabby Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://rabby.io',
    brandKitLink: 'https://github.com/RabbyHub/logo',
    logo: {
      icon: {
        light: [
          {
            url: '/library/rabby-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rainbowkit',
    name: 'RainbowKit',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://www.rainbowkit.com',
    brandKitLink:
      'https://www.figma.com/community/file/1139300796265858893/rainbow-brand-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/rainbowkit-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rareskills',
    name: 'RareSkills',
    mainCategory: 'education',
    secondaryCategories: [],
    websiteLink: 'https://www.rareskills.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/rareskills-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rarible',
    name: 'Rarible',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://rari.foundation',
    brandKitLink: 'https://og.rarible.com/branding',
    logo: {
      icon: {
        light: [
          {
            url: '/library/rarible-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'raydium',
    name: 'Raydium (RAY)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://raydium.io/#',
    brandKitLink: 'https://docs.raydium.io/raydium/protocol/media-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/raydium-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'trader-joe',
    name: 'Trader Joe',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://traderjoexyz.com',
    brandKitLink:
      'https://lfjgg.notion.site/LFJ-Media-Kit-84b6e05c50a1447395ad1105f536ff82',
    logo: {
      icon: {
        light: [
          {
            url: '/library/trader-joe-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'remix',
    name: 'Remix',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://remix-project.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/remix-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rhinofi',
    name: 'RhinoFi',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://rhino.fi',
    brandKitLink: 'https://rhino.fi/media-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/rhinofi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'safe',
    name: 'Safe',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://safe.global',
    brandKitLink: 'https://brandfetch.com/safe.global',
    logo: {
      icon: {
        light: [
          {
            url: '/library/safe1-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sherlock',
    name: 'Sherlock',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://www.sherlock.xyz',
    brandKitLink:
      'https://www.figma.com/design/H5xwkBU76qbi7WbJpzUCQ4/Sherlock-Brandkit-2026--External-',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sherlock-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'solana-ventures',
    name: 'Solana Ventures',
    mainCategory: 'investors',
    secondaryCategories: [],
    websiteLink: 'https://solana.ventures',
    logo: {
      icon: {
        light: [
          {
            url: '/library/solana-ventures-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'solidity',
    name: 'Solidity',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://docs.soliditylang.org/en/latest',
    brandKitLink: 'https://docs.soliditylang.org/en/latest/brand-guide.html',
    logo: {
      icon: {
        light: [
          {
            url: '/library/solidity-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'spark',
    name: 'Spark',
    mainCategory: 'chains',
    secondaryCategories: [],
    websiteLink: 'https://spark.fi',
    logo: {
      icon: {
        light: [
          {
            url: '/library/spark-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sphere',
    name: 'Sphere',
    mainCategory: 'payments',
    secondaryCategories: [],
    websiteLink: 'https://spherepay.co',
    brandKitLink: 'https://presskit.sphereinc.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sphere-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'squid',
    name: 'Squid',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://app.squidrouter.com',
    brandKitLink:
      'https://docs.squidrouter.com/additional-resources/brand-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/squid-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },

  {
    id: 'stealthex',
    name: 'StealthEX',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://stealthex.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/stealthex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'stellar',
    name: 'Stellar (XLM)',
    brandKitLink: 'https://stellar.org/brand-resources',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/stellar-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sushi',
    name: 'Sushi',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://www.sushi.com',
    brandKitLink: 'https://github.com/sushiswap/art',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sushi-icon-light.svg',
            format: 'svg',
          },
          {
            url: '/library/sushi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'synthetix',
    name: 'Synthetix (SNX)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://www.synthetix.io',
    brandKitLink: 'https://www.synthetix.io/brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/synthetix-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tangible',
    name: 'Tangible',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://www.tangible.store',
    brandKitLink: 'https://playbook.tangible.is/brand-kit/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tangible-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tenderly',
    name: 'Tenderly',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://tenderly.co',
    brandKitLink:
      'https://tenderlydev.notion.site/brand-assets?v=14584be6a2e68193bb4c000c1d311ff5',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tenderly-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'thirdweb',
    name: 'thirdweb',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://thirdweb.com',
    brandKitLink: 'https://thirdweb.com/brand-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/thirdweb-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tradingview',
    name: 'TradingView',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://www.tradingview.com/crypto-screener',
    brandKitLink: 'https://www.tradingview.com/media-kit/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tradingview-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'trezor',
    name: 'Trezor',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://trezor.io',
    brandKitLink: 'https://satoshilabs.visualbook.pro/trezor',
    logo: {
      icon: {
        light: [
          {
            url: '/library/trezor-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'turnkey',
    name: 'Turnkey',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.turnkey.com',
    brandKitLink: 'https://www.turnkey.com/turnkey-brand-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/turnkey-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'uma-subgraph',
    name: 'UMA Subgraph',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://github.com/UMAprotocol/subgraphs',
    brandKitLink:
      'https://github.com/UMAprotocol/website/raw/master/documents/press-kit/UMA_Style_Guide_v2.pdf',
    logo: {
      icon: {
        light: [
          {
            url: '/library/uma-subgraph-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'uniswap',
    name: 'Uniswap (UNI)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://uniswap.org/blog/uni',
    brandKitLink:
      'https://github.com/Uniswap/brand-assets/raw/main/Uniswap%20Brand%20Assets.zip',
    logo: {
      icon: {
        light: [
          {
            url: '/library/uniswap-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'velodrome',
    name: 'Velodrome',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://velodrome.finance',
    brandKitLink: 'https://velodrome.finance/brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/velodrome-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'web3-js',
    name: 'web3.js',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://web3js.org',
    brandKitLink: 'https://github.com/web3/web3.js/tree/4.x/assets/logo',
    logo: {
      icon: {
        light: [
          {
            url: '/library/web3-js-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'yearn',
    name: 'Yearn Finance',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://yearn.finance/vaults',
    brandKitLink: 'https://presskit.yearn.fi/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/yearn-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'beethoven-x',
    name: 'Beethoven X',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://beets.fi',
    brandKitLink: 'https://brand.beets.fi/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/beethoven-x-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },

  {
    id: 'lifi',
    name: 'LI.FI',
    mainCategory: 'exchanges',
    secondaryCategories: ['defi'],
    websiteLink: 'https://li.fi',
    brandKitLink: 'https://li.fi/brand-guidelines/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/lifi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'matcha',
    name: 'Matcha',
    mainCategory: 'exchanges',
    secondaryCategories: ['defi'],
    websiteLink: 'https://matcha.xyz',
    brandKitLink:
      'https://drive.google.com/drive/folders/16z4lhn1h9pm7n12b0hTMwzCknjtZKzaf',
    logo: {
      icon: {
        light: [
          {
            url: '/library/matcha-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'merlin-chain',
    name: 'Merlin Chain (MERL)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://merlinchain.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/merlin-chain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mexc',
    name: 'MEXC',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.mexc.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mexc-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nest',
    name: 'Nest',
    mainCategory: 'defi',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/nest-icon-light.svg',
            format: 'svg',
          },
          {
            url: '/library/nest-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'okx',
    name: 'OKX',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.okx.com',
    brandKitLink: 'https://brandfetch.com/okx.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/okx-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'privex',
    name: 'Privex',
    brandKitLink: 'https://cdn.privex.io/Privex%20Brand%20Pack.zip',
    mainCategory: 'defi',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/privex-icon-light.svg',
            format: 'svg',
          },
          {
            url: '/library/privex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'avalanche',
    name: 'Avalanche (AVAX)',
    brandKitLink:
      'https://drive.google.com/drive/folders/1i81sIjB6Z8hmQIITyXB37c1thodumFKJ',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/avalanche-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'iota',
    name: 'IOTA',
    brandKitLink: 'https://assets.iota.org/',
    mainCategory: 'chains',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/iota-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ondo-finance',
    name: 'Ondo',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://ondo.foundation',
    brandKitLink:
      'https://ondo-finance.notion.site/Ondo-Media-Kit-3bc0a5aced014cc4b0ef62f1638bbf8e',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ondo-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pendle',
    name: 'Pendle',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://pendle.finance',
    brandKitLink: 'https://www.pendle.finance/brand-guide',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pendle-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tether-gold',
    name: 'Tether Gold',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://gold.tether.to',
    brandKitLink: 'https://tether.to/en/media/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tether-gold-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'vechain',
    name: 'VeChain (VET)',
    brandKitLink: 'https://vechain.org/brand-assets',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/vechain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'a16z',
    name: 'a16z crypto',
    mainCategory: 'investors',
    secondaryCategories: [],
    websiteLink: 'https://a16zcrypto.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/a16z-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pantera-capital',
    name: 'Pantera Capital',
    mainCategory: 'investors',
    secondaryCategories: [],
    websiteLink: 'https://panteracapital.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pantera-capital-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'biconomy-io',
    name: 'Biconomy',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://biconomy.io',
    brandKitLink:
      'https://biconomy.notion.site/Biconomy-Brand-Kit-f79e3e17243e411fb573c8437a5719d0',
    logo: {
      icon: {
        light: [
          {
            url: '/library/biconomy-io-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitgo',
    name: 'BitGo',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.bitgo.com',
    brandKitLink: 'https://design.bitgo.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitgo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },

  {
    id: 'guardarian',
    name: 'Guardarian',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://guardarian.com',
    brandKitLink: 'https://guardarian.com/press-and-media#brand-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/guardarian-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'impersonator',
    name: 'Impersonator',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://impersonator.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/impersonator-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lightning-network',
    name: 'Lightning Network',
    mainCategory: 'chains',
    secondaryCategories: [],
    websiteLink: 'https://github.com/lightningnetwork/lnd',
    brandKitLink:
      'https://design.blockstream.com/styleguide/branding/core-lightning.html',
    logo: {
      icon: {
        light: [
          {
            url: '/library/lightning-network-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'liquifi',
    name: 'Liquifi',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://www.liquifi.finance',
    logo: {
      icon: {
        light: [
          {
            url: '/library/liquifi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mercuryo',
    name: 'Mercuryo',
    mainCategory: 'payments',
    secondaryCategories: [],
    websiteLink: 'https://mercuryo.io',
    brandKitLink: 'https://mercuryo.io/press',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mercuryo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'reap',
    name: 'REAP',
    mainCategory: 'payments',
    secondaryCategories: [],
    websiteLink: 'https://reap.global',
    brandKitLink:
      'https://drive.google.com/drive/folders/14pAxwcqyAY9Os3mJQGPkZCKu0hET0ZnV',
    logo: {
      icon: {
        light: [
          {
            url: '/library/reap-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'solflare',
    name: 'Solflare',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://solflare.com',
    brandKitLink: 'https://brandfetch.com/solflare.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/solflare-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'vaultody',
    name: 'Vaultody',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://vaultody.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/vaultody-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://walletconnect.com',
    brandKitLink: 'https://github.com/WalletConnect/walletconnect-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/walletconnect-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'zerion',
    name: 'Zerion',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://zerion.io',
    brandKitLink:
      'https://zerion.notion.site/Company-info-brand-assets-b9bfad1ef7b745a7a2e09640f6374ff1',
    logo: {
      icon: {
        light: [
          {
            url: '/library/zerion-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ganache',
    name: 'Ganache',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://github.com/trufflesuite/ganache',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ganache-icon-light.svg',
            format: 'svg',
          },
          {
            url: '/library/ganache-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'azuki',
    name: 'Azuki (AZUKI)',
    mainCategory: 'nft',
    secondaryCategories: [],
    websiteLink: 'http://www.azuki.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/azuki-icon-light.jpeg',
            format: 'jpg',
          },
        ],
      },
    },
  },
  {
    id: 'crypto-punks',
    name: 'CryptoPunks (PUNK)',
    mainCategory: 'nft',
    secondaryCategories: [],
    websiteLink: 'https://www.v1punks.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/crypto-punks-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'doodles',
    name: 'Doodles (DOODLE)',
    mainCategory: 'nft',
    secondaryCategories: [],
    websiteLink: 'https://www.doodles.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/doodles-icon-light.png',
            format: 'png',
          },
        ],
        dark: [
          {
            url: '/library/doodles-icon-light.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'magic-eden',
    name: 'Magic Eden',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://magiceden.io',
    brandKitLink:
      'https://docs-wallet.magiceden.io/resources/ME_Wallet_BrandGuide_062524.pdf',
    logo: {
      icon: {
        light: [
          {
            url: '/library/magic-eden-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'milady',
    name: 'Milady (MIL)',
    mainCategory: 'nft',
    secondaryCategories: [],
    websiteLink: 'https://miladymaker.net',
    logo: {
      icon: {
        light: [
          {
            url: '/library/milady-icon-light.jpeg',
            format: 'jpg',
          },
        ],
      },
    },
  },
  {
    id: 'opensea',
    name: 'OpenSea',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://opensea.io',
    brandKitLink: 'https://docs.opensea.io/docs/logos',
    logo: {
      icon: {
        light: [
          {
            url: '/library/opensea-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'algorand',
    name: 'Algorand (ALGO)',
    brandKitLink:
      'https://drive.google.com/drive/folders/16KHGZK5nsAbXN9AyKF0U2IP5LRr2XZJ8',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/algorand-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'astar',
    name: 'Astar (ASTR)',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: ['tokens', 'chains'],
    websiteLink: 'https://astar.network',
    brandKitLink: 'https://astar.network/brand-asset-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/astar-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aster',
    name: 'Aster',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://www.asterdex.com',
    brandKitLink: 'https://astar.network/brand-asset-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/aster-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'basic-attention-token',
    name: 'Basic Attention Token (BAT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://basicattentiontoken.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/basic-attention-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'onbeam',
    name: 'Beam (BEAM)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://www.onbeam.com',
    brandKitLink: 'https://www.beam.mw/Media_Kit.zip',
    logo: {
      icon: {
        light: [
          {
            url: '/library/onbeam-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'berachain',
    name: 'Berachain (BERA)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://berachain.com',
    brandKitLink: 'https://brandfetch.com/berachain.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/berachain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bittensor',
    name: 'Bittensor (TAO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://bittensor.com',
    brandKitLink:
      'https://github.com/latent-to/developer-docs/tree/main/static/bittensor-media-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bittensor-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cardano',
    name: 'Cardano (ADA)',
    brandKitLink: 'https://cardano.org/brand-assets/',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/cardano-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cow-protocol',
    name: 'CoW Protocol (COW)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://cow.fi',
    brandKitLink:
      'https://cownation.notion.site/CoW-DAO-Brand-Kit-dad6212f182f49d38683e8410bfb37d2',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cow-protocol-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'crypto-kitties',
    name: 'CryptoKitties (CKITTY)',
    mainCategory: 'nft',
    secondaryCategories: [],
    websiteLink: 'https://www.cryptokitties.co',
    logo: {
      icon: {
        light: [
          {
            url: '/library/crypto-kitties-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dogwifhat',
    name: 'dogwifhat (WIF)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://dogwifhat.us',
    brandKitLink: 'https://cryptologos.cc/dogwifhat',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dogwifhat-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'eigencloud',
    name: 'Eigen Layer (EIGEN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://www.eigenlayer.xyz',
    brandKitLink:
      'https://github.com/Layr-Labs/media-kit/blob/master/EigenLayer-Brand-Guidelines.pdf',
    logo: {
      icon: {
        light: [
          {
            url: '/library/eigencloud-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ethena',
    name: 'Ethena (ENA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://www.ethena.fi',
    brandKitLink:
      'https://www.figma.com/file/OYn3YOnDrt77qNLSGDuVkH/Ethena-Media-Assets?type=design&node-id=733%3A1794&mode=design&t=D3VpsKDeYJb8oT4G-1',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ethena-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ether-fi-ethfi',
    name: 'ether.fi (ETHFI)',
    mainCategory: 'defi',
    secondaryCategories: ['crypto-banks', 'tokens'],
    websiteLink: 'https://www.ether.fi',
    brandKitLink: 'https://etherfi.notion.site/ether-fi-media-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ether-fi-ethfi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ethereum',
    name: 'Ethereum (ETH)',
    brandKitLink: 'https://ethereum.org/assets/#brand',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/ethereum-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'falcon-finance-ff',
    name: 'Falcon Finance (FF)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://falcon.finance',
    brandKitLink: 'https://docs.falcon.finance/resources/brand-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/falcon-finance-ff-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'fartcoin',
    name: 'Fartcoin',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://fart.dev',
    logo: {
      icon: {
        light: [
          {
            url: '/library/fartcoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'floki-inu',
    name: 'FLOKI',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://floki.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/floki-inu-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gala',
    name: 'Gala (GALA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://gala.com',
    brandKitLink:
      'https://drive.google.com/drive/folders/1GMaNMUCyFq6SxQVFohK9SdsL78IrPb15?usp=drive_link',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gala-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gnosis-gno',
    name: 'Gnosis (GNO)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://gnosis.io',
    brandKitLink: 'https://github.com/gnosischain/media-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gnosis-gno-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hyperliquid',
    name: 'Hyperliquid (HYPE)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens', 'exchanges'],
    websiteLink: 'https://hyperliquid.xyz',
    brandKitLink: 'https://hyperliquid.gitbook.io/hyperliquid-docs/brand-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hyperliquid-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'integral',
    name: 'Integral (ITGR)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://integral.link',
    brandKitLink: 'https://brandfetch.com/integral.link',
    logo: {
      icon: {
        light: [
          {
            url: '/library/integral-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'jito',
    name: 'Jito (JTO)',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: ['tokens', 'defi'],
    websiteLink: 'https://www.jito.network',
    brandKitLink: 'https://brandfetch.com/jito.network',
    logo: {
      icon: {
        light: [
          {
            url: '/library/jito-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'layerzero',
    name: 'LayerZero (ZRO)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://layerzero.foundation',
    brandKitLink:
      'https://publicdocs.notion.site/LayerZero-Media-Kit-bd838df13f864a4b9f403c789c670d9a',
    logo: {
      icon: {
        light: [
          {
            url: '/library/layerzero-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lil-pudgys',
    name: 'Lil Pudgys (LP)',
    mainCategory: 'nft',
    secondaryCategories: [],
    websiteLink: 'https://www.pudgypenguins.com',
    brandKitLink: 'https://media.pudgypenguins.com/brand-builders',
    logo: {
      icon: {
        light: [
          {
            url: '/library/lil-pudgys-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mantle',
    name: 'Mantle (MNT)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://group.mantle.xyz',
    brandKitLink:
      'https://drive.google.com/drive/folders/1ByNQpJ9RTat9valFheMN3vBF_fCt7qzx',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mantle-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'metaplex',
    name: 'Metaplex (MPLX)',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://www.metaplex.com',
    brandKitLink: 'https://brandfetch.com/metaplex.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/metaplex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'shiba-inu',
    name: 'Shiba Inu (SHIB)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://shibatoken.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/shiba-inu-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sky',
    name: 'Sky (SKY)',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://sky.money',
    brandKitLink:
      'https://makerdao.notion.site/Maker-Brand-ac517c82ff9a43089d0db5bb2ee045a4',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sky-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sui',
    name: 'Sui (SUI)',
    brandKitLink: 'https://live.standards.site/sui-media-kit',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/sui-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'the-graph',
    name: 'The Graph (GRT)',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://thegraph.com',
    brandKitLink: 'https://thegraph.com/brand/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/the-graph-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'toncoin',
    name: 'Toncoin (TON)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/toncoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tron',
    name: 'Tron (TRX)',
    brandKitLink: 'https://tron.network/resources/',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    logo: {
      icon: {
        light: [
          {
            url: '/library/tron-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'world-liberty-financial-wlfi',
    name: 'World Liberty Financial (WLFI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    websiteLink: 'https://www.worldlibertyfinancial.com',
    brandKitLink: 'https://worldlibertyfinancial.com/brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/world-liberty-financial-wlfi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'zksync',
    name: 'ZKsync (ZK)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://zksync.io',
    brandKitLink: 'https://www.zksync.io/brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/zksync-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'simpleswap',
    name: 'SimpleSwap',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://simpleswap.io',
    brandKitLink: 'https://simpleswap.to/about.php#press-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/simpleswap-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'zora',
    name: 'ZORA',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://zora.co',
    brandKitLink: 'https://brandfetch.com/zora.bg?view=library',
    logo: {
      icon: {
        light: [
          {
            url: '/library/zora-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kraken',
    name: 'Kraken',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.kraken.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kraken-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    mainCategory: 'exchanges',
    secondaryCategories: ['defi'],
    websiteLink: 'https://jup.ag',
    brandKitLink:
      'https://github.com/jup-ag/docs/raw/main/static/files/brand-kit/jupiter-brand-kit.zip',
    logo: {
      icon: {
        light: [
          {
            url: '/library/jupiter-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'fireblocks',
    name: 'Fireblocks',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.fireblocks.com',
    brandKitLink: 'https://www.fireblocks.com/brandkit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/fireblocks-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ethers-js',
    name: 'ethers.js',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://docs.ethers.io/v5',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ethers-js-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'defi',
    name: 'De.Fi',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: ' https://de.fi',
    brandKitLink:
      'https://drive.google.com/drive/folders/1K7urRSWuUUeaDT2LXRovvk6KNwGQ28GQ',
    logo: {
      icon: {
        light: [
          {
            url: '/library/defi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'debank',
    name: 'DeBank',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://debank.com',
    brandKitLink: 'https://github.com/DeBankDeFi/logo/tree/master/DeBank',
    logo: {
      icon: {
        light: [
          {
            url: '/library/debank-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'euro-coin',
    name: 'EURC',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    websiteLink: 'https://www.circle.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/euro-coin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'first-digital-usd',
    name: 'First Digital USD (FDUSD)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    websiteLink: 'https://firstdigitallabs.com',
    brandKitLink: 'https://www.firstdigitallabs.com/brand-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/first-digital-usd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'global-dollar-usdg',
    name: 'Global Dollar (USDG)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    websiteLink: 'https://globaldollar.com',
    brandKitLink: 'https://globaldollar.com/brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/global-dollar-usdg-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dai',
    name: 'Dai (DAI)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    websiteLink: 'https://makerdao.com',
    brandKitLink:
      'https://makerdao.notion.site/Maker-Brand-ac517c82ff9a43089d0db5bb2ee045a4',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dai-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'paypal-usd',
    name: 'PayPal USD (PYUSD)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    websiteLink: 'https://www.paypal.com/pyusd',
    brandKitLink:
      'https://newsroom.paypal-corp.com/download/PayPal+Media+Assets+2025+%282%29.zip',
    logo: {
      icon: {
        light: [
          {
            url: '/library/paypal-usd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ripple-usd',
    name: 'Ripple USD (RLUSD)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    websiteLink: 'https://ripple.com/solutions/stablecoin',
    brandKitLink: 'https://ripple.com/media-kit/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ripple-usd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'usdc',
    name: 'USDC',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    websiteLink: 'https://www.circle.com/en/usdc',
    brandKitLink: 'https://www.circle.com/pressroom#brandkit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/usdc-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'usd1',
    name: 'World Liberty Financial USD (USD1)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    websiteLink: 'https://www.worldlibertyfinancial.com',
    brandKitLink: 'https://worldlibertyfinancial.com/brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/usd1-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'alchemy',
    name: 'Alchemy',
    brandKitLink: 'https://www.alchemy.com/brand',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/alchemy-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'alchemy-ventures',
    name: 'Alchemy Ventures',
    brandKitLink: 'https://www.alchemy.com/brand',
    mainCategory: 'investors',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/alchemy-ventures-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'anchorage',
    name: 'Anchorage Digital',
    mainCategory: 'crypto-banks',
    secondaryCategories: [],
    websiteLink: 'https://www.anchorage.com',
    brandKitLink: 'https://www.anchorage.com/press-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/anchorage-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'angle',
    name: 'Angle (ANGLE)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://www.angle.money',
    brandKitLink: 'https://github.com/AngleProtocol/angle-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/angle-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aave',
    name: 'Aave (AAVE)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://aave.com',
    brandKitLink: 'https://aave.com/brand',
    logo: {
      icon: {
        light: [
          {
            url: '/library/aave-token-round.png',
            format: 'png',
          },
          {
            url: '/library/aave-token-round.png',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/aave-token-round.png',
            format: 'png',
          },
          {
            url: '/library/aave-token-round.png',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/aave-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/aave-icon-dark.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/aave-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/aave-icon-light.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'foundry-anvil',
    name: 'anvil',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://book.getfoundry.sh/anvil',
    logo: {
      icon: {
        light: [
          {
            url: '/library/foundry-anvil-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aragon',
    name: 'Aragon (ANT)',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://aragon.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/aragon-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'binance',
    name: 'Binance',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.binance.com/en',
    logo: {
      icon: {
        light: [
          {
            url: '/library/binance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cyfrin',
    name: 'Cyfrin',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://www.cyfrin.io',
    brandKitLink: 'https://www.cyfrin.io/branding',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cyfrin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'curve-finance',
    name: 'Curve Finance (CRV)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://curve.fi',
    brandKitLink: 'https://resources.curve.finance/glossary-branding/branding/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/curve-finance-icon-light.svg',
            format: 'svg',
          },
          {
            url: '/library/curve-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'crypto-dot-com',
    name: 'Crypto.com',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://crypto.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/crypto-dot-com-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'crypto-apis',
    name: 'Crypto APIs',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://cryptoapis.io',
    brandKitLink: 'https://brandfetch.com/cryptoapis.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/crypto-apis-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'crossmint',
    name: 'Crossmint',
    mainCategory: 'payments',
    secondaryCategories: [],
    websiteLink: 'https://www.crossmint.io',
    brandKitLink:
      'https://crossmint.notion.site/Crossmint-Brand-Assets-4c70854d2aec477789e3868b9390d3f2',
    logo: {
      icon: {
        light: [
          {
            url: '/library/crossmint-icon-light.svg',
            format: 'svg',
          },
          {
            url: '/library/crossmint-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cowswap',
    name: 'CowSwap',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://swap.cow.fi',
    brandKitLink:
      'https://cownation.notion.site/CoW-DAO-Brand-Kit-dad6212f182f49d38683e8410bfb37d2',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cowswap-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'convex-finance',
    name: 'Convex Finance (CVX)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://www.convexfinance.com',
    brandKitLink:
      'https://docs.convexfinance.com/convexfinanceintegration/convex-branding',
    logo: {
      icon: {
        light: [
          {
            url: '/library/convex-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'compound',
    name: 'Compound (COMP)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://compound.finance',
    logo: {
      icon: {
        light: [
          {
            url: '/library/compound-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'euler',
    name: 'Euler Finance',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://www.euler.finance',
    brandKitLink: 'https://www.euler.finance/branding/Euler_Brand_Assets.zip',
    logo: {
      icon: {
        light: [
          {
            url: '/library/euler-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coinsdo',
    name: 'CoinsDo',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.coinsdo.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coinsdo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coingecko-api',
    name: 'CoinGecko API',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://www.coingecko.com/en/api',
    brandKitLink: 'https://brand.coingecko.com/resources/brand-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coingecko-api-icon-light.webp',
            format: 'webp',
          },
        ],
      },
    },
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.coinbase.com',
    brandKitLink: 'https://www.coinbase.com/en-fr/press',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coinbase-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'code4rena',
    name: 'Code4rena',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://code4rena.com',
    brandKitLink: 'https://github.com/code-423n4/media-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/code4rena-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'changenow',
    name: 'ChangeNOW API',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://changenow.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/changenow-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'chainlink',
    name: 'Chainlink (LINK)',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://chain.link',
    brandKitLink: 'https://chain.link/brand-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/chainlink-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'chainalysis',
    name: 'Chainalysis',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://www.chainalysis.com',
    brandKitLink: 'https://www.chainalysis.com/press/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/chainalysis-icon-light.webp',
            format: 'webp',
          },
        ],
      },
    },
  },
  {
    id: 'certik',
    name: 'Certik',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://www.certik.com',
    brandKitLink: 'https://www.certik.com/company/about',
    logo: {
      icon: {
        light: [
          {
            url: '/library/certik-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'celestia',
    name: 'Celestia (TIA)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://www.celestia.org',
    brandKitLink:
      'https://company-223625.frontify.com/d/JoSwaZS4Mjpj/guidelines#/basics/logos',
    logo: {
      icon: {
        light: [
          {
            url: '/library/celestia-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bnb-chain',
    name: 'BNB Chain',
    mainCategory: 'chains',
    secondaryCategories: [],
    websiteLink: 'https://www.bnbchain.org',
    brandKitLink: 'https://www.bnbchain.org/en/brand-guidelines',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bnb-chain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'blur',
    name: 'Blur',
    mainCategory: 'defi',
    secondaryCategories: [],
    websiteLink: 'https://blur.io',
    brandKitLink: 'https://docs.blur.foundation/brand-assets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/blur-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'blast',
    name: 'Blast (BLAST)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://blast.io/en',
    brandKitLink: 'https://brandkit.blast.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/blast-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitpay',
    name: 'Bitpay',
    mainCategory: 'payments',
    secondaryCategories: [],
    websiteLink: 'https://bitpay.com',
    brandKitLink:
      'https://drive.usercontent.google.com/download?id=1kjok0Pta78dWGoQYdNpW-dz5dJs7EB_g&export=download&authuser=0',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitpay-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitget',
    name: 'Bitget',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.bitget.com',
    brandKitLink: 'https://www.bitget.com/en-CA/media-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitget-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'binance-us',
    name: 'Binance.US',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.binance.us/en',
    brandKitLink: 'https://brandfetch.com/binance.us',
    logo: {
      icon: {
        light: [
          {
            url: '/library/binance-us-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'beefy-finance',
    name: 'Beefy (BIFI)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://beefy.com',
    brandKitLink: 'https://beefy.com/media-kit/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/beefy-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'backpack',
    name: 'Backpack',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.backpack.app',
    brandKitLink:
      'https://drive.google.com/drive/folders/1aUyUTIJT2N1Z4IggWQauBoeM6uVJzTzZ',
    logo: {
      icon: {
        light: [
          {
            url: '/library/backpack-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'axelar',
    name: 'Axelar (AXL)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://axelar.network',
    brandKitLink: 'https://brandfetch.com/axelar.network',
    logo: {
      icon: {
        light: [
          {
            url: '/library/axelar-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'axie-infinity',
    name: 'Axie Infinity (AXS)',
    mainCategory: 'defi',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://axieinfinity.com',
    brandKitLink:
      'https://skymavis.notion.site/Axie-Ronin-Media-Kit-114c48ae3fdd80a39b6ecc0950ea19d0',
    logo: {
      icon: {
        light: [
          {
            url: '/library/axie-infinity-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'arweave',
    name: 'Arweave',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://www.arweave.org',
    brandKitLink: 'https://www.arweave.org/brand-kit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/arweave-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },

  {
    id: 'trueusd',
    name: 'TrueUSD (TUSD)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    websiteLink: 'https://tusd.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/trueusd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'usdd',
    name: 'Decentralized USD (USDD)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    websiteLink: 'https://usdd.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/usdd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'usdt',
    name: 'Tether USD (USDT)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    websiteLink: 'https://tether.to',
    brandKitLink: 'https://tether.to/en/media',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tether-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'multisender',
    name: 'Multisender',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://multisender.app',
    brandKitLink:
      'https://static.multisender.app/brandkit/multisender-brand-assets.zip',
    logo: {
      icon: {
        light: [
          {
            url: '/library/multisender-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tronscan',
    name: 'Tronscan',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://tronscan.org',
    brandKitLink: 'https://tronscan.org/branding',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tronscan-icon-light.png',
            format: 'png',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/tronscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/tronscan-text-light.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'solscan',
    name: 'Solscan',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    websiteLink: 'https://solscan.io',
    brandKitLink: 'https://solscan.io/branding',
    logo: {
      icon: {
        light: [
          {
            url: '/library/solscan-icon-light.svg',
            format: 'svg',
          },
          {
            url: '/library/solscan-icon-light.png',
            format: 'png',
          },
        ],
        dark: [
          {
            url: '/library/solscan-icon-dark.svg',
            format: 'svg',
          },
          {
            url: '/library/solscan-icon-dark.png',
            format: 'png',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/solscan-text-light.svg',
            format: 'svg',
          },
          {
            url: '/library/solscan-text-light.png',
            format: 'png',
          },
        ],
        dark: [
          {
            url: '/library/solscan-text-dark.svg',
            format: 'svg',
          },
          {
            url: '/library/solscan-text-dark.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'etherscan',
    name: 'Etherscan',
    websiteLink: 'https://etherscan.io',
    brandKitLink: 'https://etherscan.io/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/etherscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/etherscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/etherscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/etherscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/etherscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/etherscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/etherscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/etherscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'bscscan',
    name: 'Bscscan',
    websiteLink: 'https://bscscan.com',
    brandKitLink: 'https://bscscan.com/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/bscscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/bscscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/bscscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/bscscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/bscscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/bscscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/bscscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/bscscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'polygonscan',
    name: 'Polygon Scan',
    websiteLink: 'https://polygonscan.com',
    brandKitLink: 'https://polygonscan.com/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/polygonscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/polygonscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/polygonscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/polygonscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/polygonscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/polygonscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/polygonscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/polygonscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'basescan',
    name: 'Basescan',
    websiteLink: 'https://basescan.org',
    brandKitLink: 'https://basescan.org/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/basescan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/basescan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/basescan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/basescan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/basescan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/basescan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/basescan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/basescan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'arbiscan',
    name: 'Arbiscan',
    websiteLink: 'https://arbiscan.io',
    brandKitLink: 'https://arbiscan.io/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/arbiscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/arbiscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/arbiscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/arbiscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/arbiscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/arbiscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/arbiscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/arbiscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'lineascan',
    name: 'Lineascan',
    websiteLink: 'https://lineascan.build',
    brandKitLink: 'https://lineascan.build/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/lineascan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/lineascan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/lineascan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/lineascan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/lineascan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/lineascan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/lineascan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/lineascan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'blastscan',
    name: 'Blastscan',
    websiteLink: 'https://blastscan.io',
    brandKitLink: 'https://blastscan.io/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/blastscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/blastscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/blastscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/blastscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/blastscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/blastscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/blastscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/blastscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'optimisticscan',
    name: 'Optimisticscan',
    websiteLink: 'https://optimistic.etherscan.io',
    brandKitLink: 'https://optimistic.etherscan.io/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/optimisticscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/optimisticscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/optimisticscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/optimisticscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/optimisticscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/optimisticscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/optimisticscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/optimisticscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'bttcscan',
    name: 'Bttcscan',
    websiteLink: 'https://bttcscan.com',
    brandKitLink: 'https://bttcscan.com/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/bttcscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/bttcscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/bttcscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/bttcscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/bttcscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/bttcscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/bttcscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/bttcscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'celoscan',
    name: 'Celoscan',
    websiteLink: 'https://celoscan.io',
    brandKitLink: 'https://celoscan.io/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/celoscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/celoscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/celoscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/celoscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/celoscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/celoscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/celoscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/celoscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'fraxscan',
    name: 'Fraxscan',
    websiteLink: 'https://fraxscan.com',
    brandKitLink: 'https://fraxscan.com/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/fraxscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/fraxscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/fraxscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/fraxscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/fraxscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/fraxscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/fraxscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/fraxscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'gnosisscan',
    name: 'Gnosisscan',
    websiteLink: 'https://gnosisscan.io',
    brandKitLink: 'https://gnosisscan.io/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/gnosisscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/gnosisscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/gnosisscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/gnosisscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/gnosisscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/gnosisscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/gnosisscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/gnosisscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'mantlescan',
    name: 'Mantlescan',
    websiteLink: 'https://mantlescan.xyz',
    brandKitLink: 'https://mantlescan.xyz/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/mantlescan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/mantlescan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/mantlescan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/mantlescan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/mantlescan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/mantlescan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/mantlescan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/mantlescan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'moonbeam',
    name: 'Moonbeam',
    websiteLink: 'https://moonbeam.moonscan.io',
    brandKitLink: 'https://moonbeam.moonscan.io/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/moonbeam-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/moonbeam-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/moonbeam-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/moonbeam-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/moonbeam-text-light.png',
            format: 'png',
          },
          {
            url: '/library/moonbeam-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/moonbeam-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/moonbeam-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'moonriver',
    name: 'Moonriver',
    websiteLink: 'https://moonriver.moonscan.io',
    brandKitLink: 'https://moonriver.moonscan.io/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/moonriver-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/moonriver-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/moonriver-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/moonriver-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/moonriver-text-light.png',
            format: 'png',
          },
          {
            url: '/library/moonriver-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/moonriver-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/moonriver-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'opbnbscan',
    name: 'Opbnb Scan',
    websiteLink: 'https://opbnb.bscscan.com',
    brandKitLink: 'https://opbnb.bscscan.com/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/opbnbscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/opbnbscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/opbnbscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/opbnbscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/opbnbscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/opbnbscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/opbnbscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/opbnbscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'scrollscan',
    name: 'Scrollscan',
    websiteLink: 'https://scrollscan.com',
    brandKitLink: 'https://scrollscan.com/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/scrollscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/scrollscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/scrollscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/scrollscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/scrollscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/scrollscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/scrollscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/scrollscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'taikoscan',
    name: 'Taikoscan',
    websiteLink: 'https://taikoscan.io',
    brandKitLink: 'https://taikoscan.io/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/taikoscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/taikoscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/taikoscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/taikoscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/taikoscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/taikoscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/taikoscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/taikoscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'apescan',
    name: 'Apescan',
    websiteLink: 'https://apescan.io',
    brandKitLink: 'https://apescan.io/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/apescan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/apescan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/apescan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/apescan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/apescan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/apescan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/apescan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/apescan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'sonicscan',
    name: 'Sonicscan',
    websiteLink: 'https://sonicscan.org',
    brandKitLink: 'https://sonicscan.org/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/sonicscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/sonicscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/sonicscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/sonicscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/sonicscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/sonicscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/sonicscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/sonicscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'hyperevmscan',
    name: 'Hyperevmscan',
    websiteLink: 'https://hyperevmscan.io',
    brandKitLink: 'https://hyperevmscan.io/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/hyperevmscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/hyperevmscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/hyperevmscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/hyperevmscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/hyperevmscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/hyperevmscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/hyperevmscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/hyperevmscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'seiscan',
    name: 'Seiscan',
    websiteLink: 'https://seiscan.io',
    brandKitLink: 'https://seiscan.io/brandassets',
    mainCategory: 'infrastructure-tools',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/seiscan-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/seiscan-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/seiscan-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/seiscan-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/seiscan-text-light.png',
            format: 'png',
          },
          {
            url: '/library/seiscan-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/seiscan-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/seiscan-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },
  {
    id: 'litecoin',
    name: 'Litecoin (LTC)',
    mainCategory: 'chains',
    secondaryCategories: ['tokens'],
    websiteLink: 'https://litecoin.com',
    brandKitLink: 'https://litecoin.com/resources',
    logo: {
      icon: {
        light: [
          {
            url: '/library/litecoin-icon-light.png',
            format: 'png',
          },
          {
            url: '/library/litecoin-icon-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/litecoin-icon-dark.png',
            format: 'png',
          },
          {
            url: '/library/litecoin-icon-dark.svg',
            format: 'svg',
          },
        ],
      },
      text: {
        light: [
          {
            url: '/library/litecoin-text-light.png',
            format: 'png',
          },
          {
            url: '/library/litecoin-text-light.svg',
            format: 'svg',
          },
        ],
        dark: [
          {
            url: '/library/litecoin-text-dark.png',
            format: 'png',
          },
          {
            url: '/library/litecoin-text-dark.svg',
            format: 'svg',
          },
        ],
      },
    },
  },

  {
    id: 'wrapped-ether',
    name: 'Wrapped Ether (WETH)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/wrapped-ether-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: '0x-protocol-token',
    name: '0x Protocol Token (ZRX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/0x-protocol-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'orchid',
    name: 'Orchid (OXT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/orchid-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'maker',
    name: 'Maker (MKR)',
    mainCategory: 'defi',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/maker-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'reputation-augur-v1',
    name: 'Reputation Augur v1 (REP)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/reputation-augur-v1-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'reputation-augur-v2',
    name: 'Reputation Augur v2 (REPv2)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/reputation-augur-v2-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kyber-network-crystal',
    name: 'Kyber Network Crystal (KNC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/kyber-network-crystal-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'band-protocol',
    name: 'Band Protocol (BAND)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/band-protocol-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'numeraire',
    name: 'Numeraire (NMR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/numeraire-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'uma-voting-token-v1',
    name: 'UMA Voting Token v1 (UMA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/uma-voting-token-v1-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'loopringcoin-v2',
    name: 'LoopringCoin V2 (LRC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/loopringcoin-v2-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'republic-token',
    name: 'Republic Token (REN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/republic-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wrapped-btc',
    name: 'Wrapped BTC (WBTC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/wrapped-btc-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'balancer',
    name: 'Balancer (BAL)',
    mainCategory: 'defi',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/balancer-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nucypher',
    name: 'NuCypher (NU)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/nucypher-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bancor-network-token',
    name: 'Bancor Network Token (BNT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/bancor-network-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'loom-network',
    name: 'Loom Network (LOOM)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/loom-network-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'civic',
    name: 'Civic (CVC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/civic-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'district0x',
    name: 'district0x (DNT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/district0x-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'storj-token',
    name: 'Storj Token (STORJ)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/storj-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'amp',
    name: 'Amp (AMP)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/amp-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'keep-network',
    name: 'Keep Network (KEEP)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/keep-network-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tbtc',
    name: 'tBTC (tBTC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/tbtc-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'melon',
    name: 'Melon (MLN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/melon-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'synth-susd',
    name: 'Synth sUSD (sUSD)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/synth-susd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'apecoin',
    name: 'ApeCoin (APE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/apecoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: '1inch',
    name: '1inch (1INCH)',
    mainCategory: 'defi',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/1inch-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aergo',
    name: 'Aergo (AERGO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/aergo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aioz-network',
    name: 'AIOZ Network (AIOZ)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/aioz-network-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'alchemix',
    name: 'Alchemix (ALCX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/alchemix-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'artverse-token',
    name: 'Artverse Token (AVT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/artverse-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'adventure-gold',
    name: 'Adventure Gold (AGLD)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/adventure-gold-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'barnbridge',
    name: 'BarnBridge (BOND)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/barnbridge-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ampleforth-governance-token',
    name: 'Ampleforth Governance Token (FORTH)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/ampleforth-governance-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ankr',
    name: 'Ankr (ANKR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/ankr-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'api3',
    name: 'API3 (API3)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/api3-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'arpa-chain',
    name: 'ARPA Chain (ARPA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/arpa-chain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'assemble-protocol',
    name: 'Assemble Protocol (ASM)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/assemble-protocol-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'clover-finance',
    name: 'Clover Finance (CLV)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/clover-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cryptex-finance',
    name: 'Cryptex Finance (CTX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/cryptex-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'badger-dao',
    name: 'Badger DAO (BADGER)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/badger-dao-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cronos',
    name: 'Cronos (CRO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/cronos-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'biconomy',
    name: 'Biconomy (BICO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/biconomy-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gitcoin',
    name: 'Gitcoin (GTC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/gitcoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'immutable-x',
    name: 'Immutable X (IMX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/immutable-x-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bluzelle',
    name: 'Bluzelle (BLZ)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/bluzelle-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mask-network',
    name: 'Mask Network (MASK)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/mask-network-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bounce',
    name: 'Bounce (AUCTION)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/bounce-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'braintrust',
    name: 'Braintrust (BTRST)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/braintrust-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cartesi',
    name: 'Cartesi (CTSI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/cartesi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pluton',
    name: 'Pluton (PLU)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/pluton-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'chiliz',
    name: 'Chiliz (CHZ)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/chiliz-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'polyswarm',
    name: 'PolySwarm (NCT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/polyswarm-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rai-reflex-index',
    name: 'Rai Reflex Index (RAI)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/rai-reflex-index-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coti',
    name: 'COTI (COTI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/coti-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'crypterium',
    name: 'Crypterium (CRPT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/crypterium-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'superfarm',
    name: 'SuperFarm (SUPER)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/superfarm-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'synapse',
    name: 'Synapse (SYN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/synapse-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'truefi',
    name: 'TrueFi (TRU)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/truefi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'derivadao',
    name: 'DerivaDAO (DDX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/derivadao-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dfi-money',
    name: 'DFI money (YFII)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/dfi-money-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dia',
    name: 'DIA (DIA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/dia-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rubic',
    name: 'Rubic (RBC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/rubic-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'enjin-coin',
    name: 'Enjin Coin (ENJ)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/enjin-coin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'superrare',
    name: 'SuperRare (RARE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/superrare-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tokemak',
    name: 'Tokemak (TOKE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/tokemak-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ethernity-chain',
    name: 'Ethernity Chain (ERN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/ethernity-chain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'fetch-ai',
    name: 'Fetch ai (FET)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/fetch-ai-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'function-x',
    name: 'Function X (FX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/function-x-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gods-unchained',
    name: 'Gods Unchained (GODS)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/gods-unchained-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'goldfinch',
    name: 'Goldfinch (GFI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/goldfinch-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'golem',
    name: 'Golem (GLM)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/golem-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gyen',
    name: 'GYEN (GYEN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/gyen-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'harvest-finance',
    name: 'Harvest Finance (FARM)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/harvest-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'highstreet',
    name: 'Highstreet (HIGH)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/highstreet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'idex',
    name: 'IDEX (IDEX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/idex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'iexec-rlc',
    name: 'iExec RLC (RLC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/iexec-rlc-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'inverse-finance',
    name: 'Inverse Finance (INV)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/inverse-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'jasmycoin',
    name: 'JasmyCoin (JASMY)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/jasmycoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kryll',
    name: 'KRYLL (KRL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/kryll-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lcx',
    name: 'LCX (LCX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/lcx-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'livepeer',
    name: 'Livepeer (LPT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/livepeer-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'maple',
    name: 'Maple (MPL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/maple-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'measurable-data-token',
    name: 'Measurable Data Token (MDT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/measurable-data-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mirror-protocol',
    name: 'Mirror Protocol (MIR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/mirror-protocol-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'moss-carbon-credit',
    name: 'Moss Carbon Credit (MCO2)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/moss-carbon-credit-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mstable-usd',
    name: 'mStable USD (MUSD)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/mstable-usd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'omg-network',
    name: 'OMG Network (OMG)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/omg-network-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'origin-protocol',
    name: 'Origin Protocol (OGN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/origin-protocol-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'origintrail',
    name: 'OriginTrail (TRAC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/origintrail-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'orion-protocol',
    name: 'Orion Protocol (ORN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/orion-protocol-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pawtocol',
    name: 'Pawtocol (UPI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/pawtocol-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'perpetual-protocol',
    name: 'Perpetual Protocol (PERP)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/perpetual-protocol-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'iotex',
    name: 'IoTeX (IOTX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/iotex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'polkastarter',
    name: 'Polkastarter (POLS)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/polkastarter-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'polymath',
    name: 'Polymath (POLY)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/polymath-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'propy',
    name: 'Propy (PRO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/propy-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'quant',
    name: 'Quant (QNT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/quant-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'quickswap',
    name: 'Quickswap (QUICK)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/quickswap-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'radicle',
    name: 'Radicle (RAD)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/radicle-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nkn',
    name: 'NKN (NKN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/nkn-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rally',
    name: 'Rally (RLY)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/rally-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rari-governance-token',
    name: 'Rari Governance Token (RGT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/rari-governance-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'render-token',
    name: 'Render Token (RNDR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/render-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'request',
    name: 'Request (REQ)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/request-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ribbon-finance',
    name: 'Ribbon Finance (RBN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/ribbon-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'shapeshift-fox-token',
    name: 'ShapeShift FOX Token (FOX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/shapeshift-fox-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'shping',
    name: 'Shping (SHPING)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/shping-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'skale',
    name: 'SKALE (SKL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/skale-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'orca-alliance',
    name: 'ORCA Alliance (ORCA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/orca-alliance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'spell-token',
    name: 'Spell Token (SPELL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/spell-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'stox',
    name: 'Stox (STX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/stox-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'status',
    name: 'Status (SNT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/status-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'payperex',
    name: 'PayperEx (PAX)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/payperex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'suku',
    name: 'SUKU (SUKU)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/suku-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tellor',
    name: 'Tellor (TRB)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/tellor-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tribe',
    name: 'Tribe (TRIBE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/tribe-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'unifi-protocol-dao',
    name: 'Unifi Protocol DAO (UNFI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/unifi-protocol-dao-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'voyager-token',
    name: 'Voyager Token (VGX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/voyager-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'xyo-network',
    name: 'XYO Network (XYO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/xyo-network-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'smooth-love-potion',
    name: 'Smooth Love Potion (SLP)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/smooth-love-potion-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'frax-share',
    name: 'Frax Share (FXS)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/frax-share-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'keep3rv1',
    name: 'Keep3rV1 (KP3R)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/keep3rv1-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'multichain',
    name: 'Multichain (MULTI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/multichain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ocean-protocol',
    name: 'Ocean Protocol (OCEAN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/ocean-protocol-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pax-gold',
    name: 'PAX Gold (PAXG)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/pax-gold-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'alchemy-pay',
    name: 'Alchemy Pay (ACH)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/alchemy-pay-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'circuits-of-value',
    name: 'Circuits of Value (COVAL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/circuits-of-value-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'the-sandbox',
    name: 'The Sandbox (SAND)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/the-sandbox-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gemini-dollar',
    name: 'Gemini Dollar (GUSD)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/gemini-dollar-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'audius',
    name: 'Audius (AUDIO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/audius-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ash',
    name: 'ASH (ASH)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/ash-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dogelon-mars',
    name: 'Dogelon Mars (ELON)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/dogelon-mars-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'fantom',
    name: 'Fantom (FTM)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/fantom-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'injective',
    name: 'Injective (INJ)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/injective-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lido-dao',
    name: 'Lido DAO (LDO)',
    mainCategory: 'defi',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/lido-dao-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'magic-internet-money',
    name: 'Magic Internet Money (MIM)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/magic-internet-money-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'merit-circle',
    name: 'Merit Circle (MC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/merit-circle-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'somnium-space-cubes',
    name: 'Somnium Space CUBEs (CUBE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/somnium-space-cubes-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'my-neighbor-alice',
    name: 'My Neighbor Alice (ALICE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/my-neighbor-alice-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'power-ledger',
    name: 'Power Ledger (POWR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/power-ledger-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'arcblock',
    name: 'Arcblock (ABT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/arcblock-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ambire-adex',
    name: 'Ambire AdEx (ADX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/ambire-adex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aleph-im',
    name: 'Aleph im (ALEPH)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/aleph-im-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'alethea-artificial-liquid-intelligence',
    name: 'Alethea Artificial Liquid Intelligence (ALI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/alethea-artificial-liquid-intelligence-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'alpha-venture-dao',
    name: 'Alpha Venture DAO (ALPHA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/alpha-venture-dao-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'airswap',
    name: 'AirSwap (AST)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/airswap-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'automata',
    name: 'Automata (ATA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/automata-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitdao',
    name: 'BitDAO (BIT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitdao-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'boba-network',
    name: 'Boba Network (BOBA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/boba-network-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'binance-usd',
    name: 'Binance USD (BUSD)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/binance-usd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coin98',
    name: 'Coin98 (C98)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/coin98-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'celer-network',
    name: 'Celer Network (CELR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/celer-network-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'chromia',
    name: 'Chromia (CHR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/chromia-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'covalent',
    name: 'Covalent (CQT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/covalent-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mines-of-dalarnia',
    name: 'Mines of Dalarnia (DAR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/mines-of-dalarnia-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dent',
    name: 'Dent (DENT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/dent-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dextools',
    name: 'DexTools (DEXT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/dextools-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'defi-pulse-index',
    name: 'DeFi Pulse Index (DPI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/defi-pulse-index-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'drep',
    name: 'Drep (DREP)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/drep-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'defi-yield-protocol',
    name: 'DeFi Yield Protocol (DYP)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/defi-yield-protocol-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'elastos',
    name: 'Elastos (ELA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/elastos-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'stafi',
    name: 'Stafi (FIS)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/stafi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'forta',
    name: 'Forta (FORT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/forta-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'frax',
    name: 'Frax (FRAX)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/frax-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'galxe',
    name: 'Galxe (GAL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/galxe-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aavegotchi',
    name: 'Aavegotchi (GHST)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/aavegotchi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hopr',
    name: 'HOPR (HOPR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/hopr-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'index-cooperative',
    name: 'Index Cooperative (INDEX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/index-cooperative-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'geojam',
    name: 'Geojam (JAM)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/geojam-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'selfkey',
    name: 'SelfKey (KEY)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/selfkey-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'league-of-kingdoms',
    name: 'League of Kingdoms (LOKA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/league-of-kingdoms-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'liquity-usd',
    name: 'Liquity USD (LUSD)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/liquity-usd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'math',
    name: 'MATH (MATH)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/math-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'metis',
    name: 'Metis (METIS)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/metis-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'monavale',
    name: 'Monavale (MONA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/monavale-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'metal',
    name: 'Metal (MTL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/metal-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'muse-dao',
    name: 'Muse DAO (MUSE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/muse-dao-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gensokishi-metaverse',
    name: 'GensoKishi Metaverse (MV)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/gensokishi-metaverse-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mxc',
    name: 'MXC (MXC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/mxc-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'marlin',
    name: 'Marlin (POND)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/marlin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'parsiq',
    name: 'PARSIQ (PRQ)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/parsiq-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pstake-finance',
    name: 'pSTAKE Finance (PSTAKE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/pstake-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'qredo',
    name: 'Qredo (QRDO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/qredo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'revv',
    name: 'REVV (REVV)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/revv-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rook',
    name: 'Rook (ROOK)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/rook-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'stargate-finance',
    name: 'Stargate Finance (STG)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/stargate-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'swftcoin',
    name: 'SWFTCOIN (SWFTC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/swftcoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'swipe',
    name: 'Swipe (SXP)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/swipe-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sylo',
    name: 'Sylo (SYLO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/sylo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'threshold-network',
    name: 'Threshold Network (T)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/threshold-network-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'chronotech',
    name: 'ChronoTech (TIME)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/chronotech-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'alien-worlds',
    name: 'Alien Worlds (TLM)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/alien-worlds-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'te-food',
    name: 'TE FOOD (TONE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/te-food-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'the-virtua-kolect',
    name: 'The Virtua Kolect (TVK)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/the-virtua-kolect-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wrapped-ampleforth',
    name: 'Wrapped Ampleforth (WAMPL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/wrapped-ampleforth-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wrapped-centrifuge',
    name: 'Wrapped Centrifuge (WCFG)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/wrapped-centrifuge-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'woo-network',
    name: 'WOO Network (WOO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/woo-network-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'chain',
    name: 'Chain (XCN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/chain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'yield-guild-games',
    name: 'Yield Guild Games (YGG)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/yield-guild-games-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'unisocks',
    name: 'Unisocks (SOCKS)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/unisocks-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'illuvium',
    name: 'Illuvium (ILV)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/illuvium-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hashflow',
    name: 'Hashflow (HFT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/hashflow-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coinbase-wrapped-staked-eth',
    name: 'Coinbase Wrapped Staked ETH (cbETH)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/coinbase-wrapped-staked-eth-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pepe',
    name: 'Pepe (PEPE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/pepe-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'prime',
    name: 'Prime (PRIME)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/prime-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'celo-native-asset-wormhole',
    name: 'Celo native asset (Wormhole) (CELO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/celo-native-asset-wormhole-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ageur',
    name: 'agEur (agEUR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/ageur-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'xsgd',
    name: 'XSGD (XSGD)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/xsgd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'big-time',
    name: 'Big Time (BIGTIME)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/big-time-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'zetachain',
    name: 'Zetachain (Zeta)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/zetachain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'starknet',
    name: 'Starknet (STRK)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/starknet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'arkham',
    name: 'Arkham (ARKM)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/arkham-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'omni-network',
    name: 'Omni Network (OMNI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/omni-network-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'altlayer',
    name: 'AltLayer (ALT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/altlayer-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aevo',
    name: 'Aevo (AEVO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/aevo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'playdapp',
    name: 'PlayDapp (PDA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/playdapp-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'portal',
    name: 'Portal (PORTAL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/portal-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pax-dollar',
    name: 'Pax Dollar (USDP)',
    mainCategory: 'stablecoins',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/pax-dollar-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kujira',
    name: 'Kujira (KUJI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/kujira-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pirate-nation',
    name: 'Pirate Nation (PIRATE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/pirate-nation-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'renzo',
    name: 'Renzo (REZ)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/renzo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ancient8',
    name: 'Ancient8 (A8)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/ancient8-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'blocklords',
    name: 'BLOCKLORDS (LRDS)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/blocklords-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'stader',
    name: 'Stader (SD)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/stader-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'layer3',
    name: 'Layer3 (L3)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/layer3-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'covalent-x-token',
    name: 'Covalent X Token (CXT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/covalent-x-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gravity',
    name: 'Gravity (G)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/gravity-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'turbo',
    name: 'Turbo (TURBO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/turbo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'clearpool',
    name: 'Clearpool (CPOOL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/clearpool-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'across-protocol-token',
    name: 'Across Protocol Token (ACX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/across-protocol-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mog-coin',
    name: 'Mog Coin (MOG)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/mog-coin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'memecoin',
    name: 'Memecoin (MEME)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/memecoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'litentry',
    name: 'Litentry (LIT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/litentry-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'polygon-ecosystem-token',
    name: 'Polygon Ecosystem Token (POL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/polygon-ecosystem-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coinbase-wrapped-btc',
    name: 'Coinbase Wrapped BTC (cbBTC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/coinbase-wrapped-btc-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'usds-stablecoin',
    name: 'USDS Stablecoin (USDS)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/usds-stablecoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'puffer-finance',
    name: 'Puffer Finance (PUFFER)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/puffer-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aethir-token',
    name: 'Aethir Token (ATH)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/aethir-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'apu-apustaja',
    name: 'Apu Apustaja (APU)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/apu-apustaja-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'quantoz-eurq',
    name: 'Quantoz EURQ (EURQ)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/quantoz-eurq-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'quantoz-usdq',
    name: 'Quantoz USDQ (USDQ)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/quantoz-usdq-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'movement',
    name: 'Movement (MOVE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/movement-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lisk',
    name: 'Lisk (LSK)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/lisk-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'neiro',
    name: 'Neiro (Neiro)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/neiro-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'swell',
    name: 'Swell (SWELL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/swell-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'spx6900',
    name: 'SPX6900 (SPX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/spx6900-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'reserve-rights',
    name: 'Reserve Rights (RSR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/reserve-rights-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'vanry',
    name: 'VANRY (VANRY)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/vanry-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'usual',
    name: 'USUAL (USUAL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/usual-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'stablr-euro',
    name: 'StablR Euro (EURR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/stablr-euro-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'stablr-usd',
    name: 'StablR USD (USDR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/stablr-usd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bio',
    name: 'BIO (BIO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/bio-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'flux',
    name: 'Flux (FLUX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/flux-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wrapped-analog-one-token',
    name: 'Wrapped Analog One Token (WANLOG)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/wrapped-analog-one-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'redstone',
    name: 'Redstone (RED)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/redstone-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'liquid-staked-eth',
    name: 'Liquid Staked ETH (LSETH)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/liquid-staked-eth-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'schuman-eur-p',
    name: 'Schuman EUR P (EUROP)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/schuman-eur-p-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tokenfi',
    name: 'TokenFi (TOKEN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/tokenfi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'derive',
    name: 'Derive (DRV)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/derive-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'term-finance',
    name: 'Term Finance (TERM)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/term-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'corn',
    name: 'Corn (CORN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/corn-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kerneldao',
    name: 'KernelDAO (KERNEL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/kerneldao-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'space-and-time',
    name: 'Space and Time (SXT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/space-and-time-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lagrange',
    name: 'Lagrange (LA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/lagrange-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pancakeswap',
    name: 'PancakeSwap (CAKE)',
    mainCategory: 'defi',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/pancakeswap-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'newton',
    name: 'Newton (NEWT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/newton-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'caldera',
    name: 'Caldera (ERA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/caldera-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rocket-pool-protocol',
    name: 'Rocket Pool Protocol (RPL)',
    mainCategory: 'defi',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/rocket-pool-protocol-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'treehouse-token',
    name: 'Treehouse Token (TREE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/treehouse-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'succinct',
    name: 'Succinct (PROVE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/succinct-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'walletconnect-token',
    name: 'WalletConnect Token (WCT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/walletconnect-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'centrifuge',
    name: 'Centrifuge (CFG)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/centrifuge-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'audd',
    name: 'AUDD (AUDD)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/audd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'plume',
    name: 'Plume (PLUME)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/plume-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dolomite',
    name: 'Dolomite (DOLO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/dolomite-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'irys',
    name: 'Irys (IRYS)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/irys-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bob',
    name: 'BOB (BOBBOB)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/bob-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nomina',
    name: 'Nomina (NOM)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/nomina-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'allora',
    name: 'Allora (ALLO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/allora-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kite',
    name: 'Kite (KITE)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/kite-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'apriori',
    name: 'aPriori (APR)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/apriori-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'yield-basis',
    name: 'Yield Basis (YB)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/yield-basis-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'linea',
    name: 'Linea (LINEA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/linea-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'anoma',
    name: 'Anoma (XAN)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/anoma-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lombard',
    name: 'Lombard (BARD)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/lombard-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'boundless',
    name: 'Boundless (ZKC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/boundless-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'theoriq',
    name: 'Theoriq (THQ)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/theoriq-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lighter',
    name: 'Lighter (LIT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/lighter-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'immunefi',
    name: 'ImmuneFi (IMU)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/immunefi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sentient',
    name: 'Sentient (SENT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/sentient-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'brevis',
    name: 'Brevis (BREV)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/brevis-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'zkpass',
    name: 'zkPass (ZKP)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/zkpass-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rayls',
    name: 'Rayls (RLS)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/rayls-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aztec',
    name: 'Aztec (AZTEC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/aztec-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'infinex',
    name: 'Infinex (INX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/infinex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'zama',
    name: 'Zama (ZAMA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/zama-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tria',
    name: 'Tria (TRIA)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/tria-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'espresso',
    name: 'Espresso (ESP)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/espresso-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'fidelity-digital-dollar',
    name: 'Fidelity Digital Dollar (FIDD)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/fidelity-digital-dollar-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'robo-token',
    name: 'ROBO Token (ROBO)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/robo-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ethgas',
    name: 'ETHGas (GWEI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/ethgas-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dovu',
    name: 'DOVU (DOVU)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/dovu-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'whitebit-coin',
    name: 'WhiteBIT Coin (WBT)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/whitebit-coin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'portal-to-bitcoin',
    name: 'Portal to Bitcoin (PTB)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/portal-to-bitcoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'adi',
    name: 'ADI (ADI)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/adi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'telcoin',
    name: 'Telcoin (TEL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/telcoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'creditcoin',
    name: 'Creditcoin (CTC)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/creditcoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wrapped-fb',
    name: 'Wrapped FB (WFB)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/wrapped-fb-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'billions',
    name: 'Billions (BILL)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/billions-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'eclipse',
    name: 'Eclipse (ES)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/eclipse-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'meth-protocol',
    name: 'mETH Protocol (COOK)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/meth-protocol-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sidekick',
    name: 'Sidekick (K)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/sidekick-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'edgex',
    name: 'EDGEX (EDGEX)',
    mainCategory: 'tokens',
    secondaryCategories: [],
    logo: {
      icon: {
        light: [
          {
            url: '/library/edgex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },

  {
    id: 'safepal',
    name: 'SafePal',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://safepal.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/safepal-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'trust-wallet',
    name: 'Trust Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://trustwallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/trust-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tokenpocket',
    name: 'TokenPocket',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tokenpocket.pro/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tokenpocket-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ledger-live',
    name: 'Ledger Live',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.ledger.com/ledger-live',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ledger-live-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'best-wallet',
    name: 'Best Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bestwallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/best-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cryptocom-onchain',
    name: 'Crypto.com Onchain',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://crypto.com/onchain',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cryptocom-onchain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bifrost-wallet',
    name: 'Bifrost Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bifrostwallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bifrost-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'xportal',
    name: 'xPortal',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://xportal.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/xportal-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitcoincom-wallet',
    name: 'Bitcoin.com Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.bitcoin.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitcoincom-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'trezor-suite',
    name: 'Trezor Suite',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://trezor.io/trezor-suite',
    logo: {
      icon: {
        light: [
          {
            url: '/library/trezor-suite-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'blockchaincom',
    name: 'Blockchain.com',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://login.blockchain.com/auth/signup',
    logo: {
      icon: {
        light: [
          {
            url: '/library/blockchaincom-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'imtoken',
    name: 'imToken',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://token.im/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/imtoken-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'arculus-wallet',
    name: 'Arculus Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.arculus.co',
    logo: {
      icon: {
        light: [
          {
            url: '/library/arculus-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ctrl-wallet',
    name: 'Ctrl Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ctrl.xyz/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ctrl-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ronin-wallet',
    name: 'Ronin Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.roninchain.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ronin-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bybit-wallet',
    name: 'Bybit Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.bybit.com/web3/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bybit-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rakuten-wallet',
    name: 'Rakuten Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.rakuten-wallet.co.jp/web3/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/rakuten-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wemix-play',
    name: 'WEMIX Play',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wemixplay.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/wemix-play-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'exodus',
    name: 'Exodus',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://exodus.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/exodus-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tangem-wallet',
    name: 'Tangem Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tangem.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tangem-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'blackfort-wallet',
    name: 'BlackFort Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://blackfort.network',
    logo: {
      icon: {
        light: [
          {
            url: '/library/blackfort-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hashpack',
    name: 'HashPack',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://hashpack.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hashpack-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'onekey',
    name: 'OneKey',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://onekey.so',
    logo: {
      icon: {
        light: [
          {
            url: '/library/onekey-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'haha',
    name: 'HaHa',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.haha.me',
    logo: {
      icon: {
        light: [
          {
            url: '/library/haha-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'subwallet',
    name: 'SubWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.subwallet.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/subwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'beewallet',
    name: 'BeeWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.bee.com/en',
    logo: {
      icon: {
        light: [
          {
            url: '/library/beewallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'flow-wallet',
    name: 'Flow Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.flow.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/flow-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'avacus',
    name: 'Avacus',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://avacus.cc',
    logo: {
      icon: {
        light: [
          {
            url: '/library/avacus-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rainbow',
    name: 'Rainbow',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://rainbow.me/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/rainbow-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'new-goodwallet',
    name: 'New GoodWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://goodwallet.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/new-goodwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'robinhood-wallet',
    name: 'Robinhood Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://robinhood.com/web3-wallet/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/robinhood-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dcent-wallet',
    name: 'D\'CENT Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://dcentwallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dcent-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hot-wallet',
    name: 'HOT Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://hot-labs.org/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hot-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wigwam',
    name: 'Wigwam',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wigwam.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/wigwam-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'socioscom-wallet-tokens',
    name: 'Socios.com - Wallet & Tokens',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://app.socios.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/socioscom-wallet-tokens-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kucoin-web3-wallet',
    name: 'KuCoin Web3 Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.kucoin.com/Web3',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kucoin-web3-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cypher-wallet',
    name: 'Cypher Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://cypherhq.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cypher-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'klip',
    name: 'klip',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://klipwallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/klip-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'core',
    name: 'Core',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://core.app/?utm_source=referral&utm_medium=website&utm_campaign=walletconnect',
    logo: {
      icon: {
        light: [
          {
            url: '/library/core-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'oasys-passport',
    name: 'Oasys Passport',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.oasys-wallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/oasys-passport-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hashport-wallet',
    name: 'HashPort Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.hashport.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hashport-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'thorwallet',
    name: 'THORWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.thorwallet.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/thorwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'internet-money',
    name: 'Internet Money',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://internetmoney.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/internet-money-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'base-formerly-coinbase-wallet',
    name: 'Base (formerly Coinbase Wallet)',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://base.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/base-formerly-coinbase-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'argent',
    name: 'Argent',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.argent.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/argent-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mew-wallet',
    name: 'MEW wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://mewwallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mew-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'keplr',
    name: 'Keplr',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://keplr.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/keplr-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mathwallet',
    name: 'MathWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://mathwallet.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mathwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pintu',
    name: 'Pintu',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://pintu.co.id/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pintu-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coin-wallet',
    name: 'Coin Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://coin.space',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coin-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lobstr-wallet',
    name: 'LOBSTR Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://lobstr.co/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/lobstr-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'opera-crypto-browser',
    name: 'Opera Crypto Browser',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'http://opera.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/opera-crypto-browser-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'valora',
    name: 'Valora',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://valoraapp.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/valora-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cobalt-wallet',
    name: 'Cobalt Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.horizen.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cobalt-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'unstoppable-wallet',
    name: 'Unstoppable Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://unstoppable.money/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/unstoppable-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'huddln',
    name: 'Huddln',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.huddln.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/huddln-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'joey-wallet',
    name: 'Joey Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://joeywallet.xyz/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/joey-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cake-wallet',
    name: 'Cake Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://cakewallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cake-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'xenea-wallet',
    name: 'XENEA Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://xenea.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/xenea-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'jade-wallet',
    name: 'Jade Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.jadewallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/jade-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gem-wallet',
    name: 'Gem Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://gemwallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gem-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kabila',
    name: 'Kabila',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://kabila.app/docs/kabila-wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kabila-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'modular-wallet-prod',
    name: 'Modular Wallet Prod',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://modular.pk',
    logo: {
      icon: {
        light: [
          {
            url: '/library/modular-wallet-prod-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'numio',
    name: 'Numio',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://numio.one',
    logo: {
      icon: {
        light: [
          {
            url: '/library/numio-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'xova',
    name: 'Xova',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://xovawallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/xova-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'freedom-world',
    name: 'Freedom World',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://freedom.world/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/freedom-world-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'credit-wallet',
    name: 'Credit Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://app.creditcoin.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/credit-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tomi-wallet',
    name: 'tomi Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tomi.com/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tomi-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sabay-wallet-app',
    name: 'Sabay Wallet App',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.sabay.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sabay-wallet-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sweat-wallet',
    name: 'Sweat Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://swe.at',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sweat-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nova-wallet',
    name: 'Nova Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://novawallet.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nova-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bridge-wallet',
    name: 'Bridge Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://mtpelerin.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bridge-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tokoin-my-t-wallet',
    name: 'Tokoin | My-T Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tokoin.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tokoin-my-t-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'zengo-wallet',
    name: 'Zengo Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://zengo.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/zengo-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'imota',
    name: 'Imota ',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://imota.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/imota-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'u-wallet',
    name: 'αU wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://web.wallet.alpha-u.io/intro.html',
    logo: {
      icon: {
        light: [
          {
            url: '/library/u-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'zeal',
    name: 'Zeal',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.zeal.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/zeal-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'enjin-wallet',
    name: 'Enjin Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://enjin.io/products/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/enjin-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cvl-wallet',
    name: 'CVL Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://cvl.network',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cvl-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'moonpay-account',
    name: 'MoonPay Account',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://moonpay.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/moonpay-account-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wombat',
    name: 'Wombat',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wombat.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/wombat-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitso-web3-wallet',
    name: 'Bitso Web3 Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bitso.com/web3-wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitso-web3-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cold-wallet',
    name: 'Cold Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://coldwallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cold-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'purewallet-app',
    name: 'PureWallet app',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://purewallet.ai',
    logo: {
      icon: {
        light: [
          {
            url: '/library/purewallet-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'everspace',
    name: 'Everspace',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://everspace.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/everspace-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'blockwallet',
    name: 'BlockWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://blockwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/blockwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coolwallet',
    name: 'CoolWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://coolwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coolwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kriptomat',
    name: 'Kriptomat',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://kriptomat.io/web3/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kriptomat-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'yowallet',
    name: 'YoWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://yowallet.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/yowallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'keyring-pro',
    name: 'KEYRING PRO',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://keyring.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/keyring-pro-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nightly',
    name: 'Nightly',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://nightly.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nightly-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'oxalus-wallet',
    name: 'Oxalus Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://oxalus.io/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/oxalus-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'frontier',
    name: 'Frontier',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.frontier.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/frontier-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'reown-wallet-beta',
    name: 'Reown Wallet [BETA]',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://reown.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/reown-wallet-beta-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dawn-wallet',
    name: 'Dawn Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.dawnwallet.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dawn-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'atomic-wallet',
    name: 'Atomic Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://atomicwallet.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/atomic-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bron',
    name: 'Bron',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bron.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bron-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'leap',
    name: 'Leap',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://leapwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/leap-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'burrito',
    name: 'Burrito',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://burritowallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/burrito-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'krystal',
    name: 'Krystal',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://krystal.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/krystal-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bcertin-wallet',
    name: 'BCERTin wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://blockcerts.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bcertin-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'monarch-wallet',
    name: 'Monarch Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://monarchwallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/monarch-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ellipal',
    name: 'ELLIPAL',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.ellipal.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ellipal-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'freighter',
    name: 'Freighter',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.freighter.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/freighter-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coin98-super-wallet',
    name: 'Coin98 Super Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://coin98.com/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coin98-super-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mywallid',
    name: 'MyWalliD',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.wallid.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mywallid-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'u2u-wallet',
    name: 'U2U Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.uniultra.xyz/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/u2u-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tholos',
    name: 'Tholos',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tholos.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tholos-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gamestop-wallet',
    name: 'GameStop Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.gamestop.com/wallets',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gamestop-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'now-wallet',
    name: 'NOW Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://walletnow.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/now-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'uvtoken',
    name: 'UvToken',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.uvtoken.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/uvtoken-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'family',
    name: 'Family',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://family.co',
    logo: {
      icon: {
        light: [
          {
            url: '/library/family-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dohrnii-wallet',
    name: 'Dohrnii Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://dohrnii.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dohrnii-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'localtrade-wallet',
    name: 'LocalTrade Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://lab.localtrade.cc',
    logo: {
      icon: {
        light: [
          {
            url: '/library/localtrade-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'iopay',
    name: 'ioPay',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://iopay.me/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/iopay-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'xcapit',
    name: 'Xcapit',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://xcapit.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/xcapit-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nicegram-wallet',
    name: 'Nicegram Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://nicegram.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nicegram-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gooddollar',
    name: 'GoodDollar',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://gooddollar.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gooddollar-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'absolute-wallet',
    name: 'Absolute Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://absolutewallet.com/dashboard/bridge',
    logo: {
      icon: {
        light: [
          {
            url: '/library/absolute-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coinomi',
    name: 'Coinomi',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.coinomi.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coinomi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'locker-token',
    name: 'Locker Token',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://locker-token.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/locker-token-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hb-wallet',
    name: 'HB WALLET',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://hbwallet.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hb-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aurora-pass',
    name: 'Aurora Pass',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://auroracloud.dev/pass',
    logo: {
      icon: {
        light: [
          {
            url: '/library/aurora-pass-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'linen',
    name: 'Linen',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://linen.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/linen-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cfcx',
    name: 'CFCX',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://cfcx.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cfcx-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'marble',
    name: 'Marble',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.marblewallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/marble-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aton',
    name: 'ATON',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.platon.network/en/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/aton-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wow-earn',
    name: 'WOW EARN',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.ullapay.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/wow-earn-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'brave-wallet',
    name: 'Brave Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://brave.com/wallet/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/brave-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gryfyn',
    name: 'Gryfyn',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://gryfyn.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gryfyn-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'taho',
    name: 'Taho',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://taho.xyz/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/taho-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pionewallet',
    name: 'PioneWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://pionewallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pionewallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'frame',
    name: 'Frame',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://frame.sh/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/frame-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'paper',
    name: 'Paper',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://withpaper.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/paper-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ricewallet',
    name: 'RiceWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ricewallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ricewallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coca-wallet',
    name: 'COCA Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.coca.xyz/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coca-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'okse-wallet',
    name: 'Okse Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://okse.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/okse-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'alicebob-wallet',
    name: 'Alicebob Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://alicebob.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/alicebob-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'aktionariat',
    name: 'Aktionariat',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://aktionariat.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/aktionariat-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'paybolt',
    name: 'PayBolt',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.paybolt.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/paybolt-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ibvm-wallet',
    name: 'IBVM Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ibvm.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ibvm-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ethermail',
    name: 'EtherMail',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ethermail.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ethermail-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'plasma-wallet',
    name: 'Plasma Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://plasma-wallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/plasma-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bytebank',
    name: 'ByteBank',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.bytebank.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bytebank-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mone-superapp',
    name: 'mOne superapp',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://mone.my/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mone-superapp-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'okto',
    name: 'Okto',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://okto.tech/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/okto-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'opto-wallet',
    name: 'Opto Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://optowallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/opto-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'whitewallet',
    name: 'Whitewallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://whitewallet.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/whitewallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'klever-wallet',
    name: 'Klever Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://klever.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/klever-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'alephium-wallet',
    name: 'Alephium Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://alephium.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/alephium-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'airgap-wallet',
    name: 'AirGap Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://airgap.it',
    logo: {
      icon: {
        light: [
          {
            url: '/library/airgap-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitpie',
    name: 'Bitpie',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bitpie.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitpie-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'oisy',
    name: 'OISY',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://oisy.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/oisy-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'zelcore',
    name: 'Zelcore',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://zelcore.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/zelcore-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gaya-wallet',
    name: 'Gaya Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://gayawallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gaya-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'veworld-mobile',
    name: 'VeWorld Mobile',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://veworld.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/veworld-mobile-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'holdstation-wallet',
    name: 'Holdstation Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.holdstation.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/holdstation-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'universalprofiles',
    name: 'UniversalProfiles',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://universaleverything.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/universalprofiles-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'abra-wallet',
    name: 'Abra Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://abra.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/abra-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'torus',
    name: 'Torus',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://app.tor.us',
    logo: {
      icon: {
        light: [
          {
            url: '/library/torus-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'prema-wallet',
    name: 'PREMA Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://premanft.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/prema-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pundi-wallet',
    name: 'Pundi Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://pundi.ai/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pundi-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'timeless-wallet',
    name: 'Timeless Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://timelesswallet.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/timeless-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'onyx-wallet',
    name: 'Onyx Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://onyx.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/onyx-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sequence-wallet',
    name: 'Sequence Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://sequence.xyz/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sequence-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitizen',
    name: 'Bitizen',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bitizen.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitizen-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ultimate.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ultimate-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'fizz',
    name: 'Fizz',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.fizzwallet.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/fizz-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'foxwallet',
    name: 'FoxWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'http://foxwallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/foxwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'stickey-wallet',
    name: 'Stickey Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://stickey.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/stickey-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'overflex',
    name: 'OverFlex',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://over.network/overflex',
    logo: {
      icon: {
        light: [
          {
            url: '/library/overflex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coinstats',
    name: 'CoinStats',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://coinstats.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coinstats-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'harti-wallet',
    name: 'HARTi Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://harti.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/harti-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dttd',
    name: 'DTTD',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.dttd.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dttd-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'noone-wallet',
    name: 'Noone Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://noone.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/noone-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hinkal-wallet',
    name: 'Hinkal Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://hinkal.pro',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hinkal-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tellaw-wallet',
    name: 'Tellaw Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.tellaw.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tellaw-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'callback',
    name: 'Callback',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://callback.is',
    logo: {
      icon: {
        light: [
          {
            url: '/library/callback-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sa-assistant',
    name: 'SA ASSISTANT',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://summonersarena.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sa-assistant-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'impact-wallet',
    name: 'Impact Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.ixo.world/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/impact-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gatewallet',
    name: 'GateWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.gateweb3.net/web3',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gatewallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'koala-wallet',
    name: 'Koala Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://koalawallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/koala-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ammer-wallet',
    name: 'Ammer Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ammer.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ammer-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'haqq-wallet',
    name: 'HAQQ Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://haqq.network/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/haqq-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sistemas',
    name: 'SISTEMAS',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://waynance.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sistemas-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'muza',
    name: 'MUZA',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://muza.co',
    logo: {
      icon: {
        light: [
          {
            url: '/library/muza-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wallletcom',
    name: 'walllet.com',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://walllet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/wallletcom-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'trustee-wallet',
    name: 'Trustee Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://trusteeglobal.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/trustee-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ryipay',
    name: 'RYIPAY',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ryipay.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ryipay-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'uniblow',
    name: 'Uniblow',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://uniblow.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/uniblow-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sequel-wallet',
    name: 'Sequel Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.sequelfi.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sequel-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'metawallet',
    name: 'MetaWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'http://www.dota168.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/metawallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'unity-wallet',
    name: 'Unity Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://unitywallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/unity-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'unido',
    name: 'Unido',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.unido.us/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/unido-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nufi',
    name: 'NUFI',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://nu.fi',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nufi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coininn-wallet',
    name: 'Coininn Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.coininn.com/coinwallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coininn-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'safe-app-syscoin',
    name: 'Safe App Syscoin',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://syscoin.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/safe-app-syscoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'easy',
    name: 'EASY',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://easy.me',
    logo: {
      icon: {
        light: [
          {
            url: '/library/easy-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'open-wallet',
    name: 'Open Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://openwallet.finance',
    logo: {
      icon: {
        light: [
          {
            url: '/library/open-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitbox',
    name: 'BitBox',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bitbox.swiss',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitbox-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'solace',
    name: 'Solace',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://solaceprotocol.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/solace-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'status-legacy',
    name: 'Status Legacy',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://status.app/blog/migrate-from-status-legacy-to-unified-status-mobile-app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/status-legacy-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hyperpay',
    name: 'HyperPay',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.hyperpay.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hyperpay-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'meter-wallet',
    name: 'Meter Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.meter.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/meter-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'secux',
    name: 'SecuX',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://secuxtech.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/secux-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dmtoken',
    name: 'DMToken',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://defim.site',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dmtoken-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'theta-wallet',
    name: 'Theta Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.thetatoken.org/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/theta-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'campuxdigital',
    name: 'campux.digital',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://campux.digital',
    logo: {
      icon: {
        light: [
          {
            url: '/library/campuxdigital-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bexo',
    name: 'Bexo',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bexo.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bexo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'midoin',
    name: 'midoin',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://midoin.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/midoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'compass-wallet',
    name: 'Compass Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://compasswallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/compass-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hell',
    name: 'Hellō',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.hello.coop/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hell-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'competenceid',
    name: 'Competence.id',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://competence.id',
    logo: {
      icon: {
        light: [
          {
            url: '/library/competenceid-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dropp',
    name: 'Dropp',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://dropp.cc/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dropp-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'yo-wallet',
    name: 'Yo Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://yowallet.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/yo-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'deficloud',
    name: 'Deficloud',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://app.deficloud.cc',
    logo: {
      icon: {
        light: [
          {
            url: '/library/deficloud-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pockie',
    name: 'pockie',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.pockie.io/ko',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pockie-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'beanbag',
    name: 'BeanBag',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://besc.llc',
    logo: {
      icon: {
        light: [
          {
            url: '/library/beanbag-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wallet-3',
    name: 'Wallet 3',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet3.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/wallet-3-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'smartbaby',
    name: 'Smart.Baby',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://smart.baby',
    logo: {
      icon: {
        light: [
          {
            url: '/library/smartbaby-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'newmoneyai',
    name: 'Newmoney.AI',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://newmoney.ai',
    logo: {
      icon: {
        light: [
          {
            url: '/library/newmoneyai-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'caesium',
    name: 'Caesium',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://caesiumlab.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/caesium-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'iapp',
    name: 'IApp',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ivirse.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/iapp-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'onto',
    name: 'ONTO',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://onto.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/onto-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kayros',
    name: 'Kayros',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.kayros.games/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kayros-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'm-wallet',
    name: 'm-Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://mwallet.yieldcraft.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/m-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ds-security-sa',
    name: 'DS Security SA',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.dssecurity.ch',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ds-security-sa-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'concordium',
    name: 'Concordium',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://concordium.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/concordium-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ape-wallet',
    name: 'Ape Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.zkape.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ape-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pitaka',
    name: 'Pitaka',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://pitaka.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pitaka-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'saitapro',
    name: 'SaitaPro',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.saitamatoken.com/saitapro/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/saitapro-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cosmostation',
    name: 'Cosmostation',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.cosmostation.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cosmostation-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lichtbit',
    name: 'LichtBit',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://scan.lichtbit.net',
    logo: {
      icon: {
        light: [
          {
            url: '/library/lichtbit-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rss-wallet',
    name: 'rss wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://mugambo.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/rss-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'my-cloud-wallet',
    name: 'My Cloud Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.mycloudwallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/my-cloud-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'fxwallet',
    name: 'FxWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.fxwallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/fxwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: '3mint',
    name: '3mint',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://app.3mint.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/3mint-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'me-wallet',
    name: 'Me Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://astrox.me/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/me-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'qie-wallet',
    name: 'QIE Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.qiewallet.me/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/qie-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'meldapp',
    name: 'MELDapp',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://app.meld.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/meldapp-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'saify',
    name: 'Saify',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://saify.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/saify-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'atwallet',
    name: 'AT.Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://authentrend.com/at-wallet/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/atwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'fizen-wallet',
    name: 'Fizen Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://fizen.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/fizen-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'webauth',
    name: 'WebAuth',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://webauth.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/webauth-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mg',
    name: 'MG',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://moongate.one',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mg-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'safemoon',
    name: 'SafeMoon',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://safemoon.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/safemoon-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'fintoken',
    name: 'FINTOKEN',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://fintoken.pro/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/fintoken-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'uiic',
    name: 'UIIC',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://api.uincubator.vc/download/?company_id=NTU2NjIwMDA=',
    logo: {
      icon: {
        light: [
          {
            url: '/library/uiic-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'blade-wallet',
    name: 'Blade Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bladewallet.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/blade-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'una-wallet',
    name: 'una Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://unawallet.unagi.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/una-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bsc-wallet',
    name: 'BSC Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bscecowallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bsc-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nova-spektr',
    name: 'Nova Spektr',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://novaspektr.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nova-spektr-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'smartrush',
    name: 'SmartRush',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://smartmoneyrush.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/smartrush-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'keepkey-desktop',
    name: 'KeepKey Desktop',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.keepkey.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/keepkey-desktop-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nash',
    name: 'Nash',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://nash.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nash-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitwinex',
    name: 'Bitwinex',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bitwinex.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitwinex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'stablez',
    name: 'Stablez',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://stablez.fi/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/stablez-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'armana-portal',
    name: 'Armana Portal',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://portal.armana.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/armana-portal-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'the-pulse-wallet',
    name: 'The Pulse Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://thepulsewallet.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/the-pulse-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ballet-crypto',
    name: 'Ballet Crypto',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.ballet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ballet-crypto-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'eth-q1',
    name: 'eth-q1',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://webeasy.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/eth-q1-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'utorg',
    name: 'UTORG',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://utorg.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/utorg-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'x9wallet',
    name: 'X9Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://x9wallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/x9wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kigo',
    name: 'Kigo',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://kigo.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kigo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tucop-wallet',
    name: 'TuCOP Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tucop.xyz/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tucop-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sahal-wallet',
    name: 'Sahal Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://mrhb.network',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sahal-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mirai-app',
    name: 'Mirai App',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://miraiapp.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mirai-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mixin-messenger',
    name: 'Mixin Messenger',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://messenger.mixin.one',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mixin-messenger-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'levain',
    name: 'Levain',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://levain.tech/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/levain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'billion',
    name: 'Billion',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://billionwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/billion-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cogni',
    name: 'Cogni ',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.getcogni.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cogni-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: '37x',
    name: '37x',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://37xdubai.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/37x-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nonbank',
    name: 'NonBank',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://nonbank.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nonbank-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nof',
    name: 'NoF',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://nof.town',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nof-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'enkrypt',
    name: 'Enkrypt',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.enkrypt.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/enkrypt-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'scramble',
    name: 'Scramble',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://scramble-wallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/scramble-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'uxlink',
    name: 'UXLINK',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://oaog.uxlink.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/uxlink-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'shimmersea',
    name: 'ShimmerSea',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://shimmersea.finance',
    logo: {
      icon: {
        light: [
          {
            url: '/library/shimmersea-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'shido-app',
    name: 'Shido App',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.shido.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/shido-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sinum',
    name: 'Sinum',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://sinum.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sinum-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'soulswap',
    name: 'SoulSwap',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://app.soulswap.finance',
    logo: {
      icon: {
        light: [
          {
            url: '/library/soulswap-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'shapeshift',
    name: 'ShapeShift',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://shapeshift.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/shapeshift-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'essentials',
    name: 'Essentials',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.trinity-tech.io/essentials',
    logo: {
      icon: {
        light: [
          {
            url: '/library/essentials-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'keychain',
    name: 'Keychain',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'http://keychain.money/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/keychain-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'omni',
    name: 'Omni',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://omni.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/omni-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bettatrade',
    name: 'Bettatrade',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bettatrade.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bettatrade-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'finoaconnect',
    name: 'FinoaConnect',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://app.finoa.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/finoaconnect-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'puzzle-wallet',
    name: 'Puzzle Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://puzzle.online',
    logo: {
      icon: {
        light: [
          {
            url: '/library/puzzle-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'greenhood',
    name: 'Greenhood',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.greenhood.nl',
    logo: {
      icon: {
        light: [
          {
            url: '/library/greenhood-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'echooo-wallet',
    name: 'Echooo Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.echooo.xyz/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/echooo-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'maxwallet',
    name: 'MaxWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://maxwallet.cc',
    logo: {
      icon: {
        light: [
          {
            url: '/library/maxwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rezor',
    name: 'Rezor',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.rezor.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/rezor-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'trust-asset-wallet',
    name: 'Trust Asset Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://trustasset.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/trust-asset-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dfinn-wallet',
    name: 'Dfinn Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://dfinnwallet.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dfinn-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'alphawallet',
    name: 'AlphaWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://alphawallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/alphawallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'legionnetwork',
    name: 'LegionNetwork',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.legionnetwork.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/legionnetwork-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'halo-wallet',
    name: 'Halo Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://halo.social/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/halo-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dexari',
    name: 'Dexari',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://dexari.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dexari-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'meco-wallet',
    name: 'MeCo Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://mecowallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/meco-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ripio-portal',
    name: 'Ripio Portal',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ripio.com/portal',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ripio-portal-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'silk',
    name: 'Silk',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.silk.sc/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/silk-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bloom',
    name: 'Bloom',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bloomwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bloom-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'likerland-app',
    name: 'LikerLand App',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://liker.land/getapp',
    logo: {
      icon: {
        light: [
          {
            url: '/library/likerland-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tomo-wallet',
    name: 'Tomo Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tomo.inc',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tomo-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'komet',
    name: 'Komet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://komet.me',
    logo: {
      icon: {
        light: [
          {
            url: '/library/komet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'guardiian-wallet',
    name: 'GUARDIIAN Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://guardiianwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/guardiian-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'venly',
    name: 'Venly',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.venly.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/venly-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cryptnox-bridge',
    name: 'Cryptnox Bridge',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://cryptnox.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cryptnox-bridge-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'zypto',
    name: 'Zypto',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://zypto.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/zypto-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nabox',
    name: 'Nabox',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://nabox.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nabox-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitget-wallet-lite',
    name: 'Bitget Wallet Lite',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://web3.bitget.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitget-wallet-lite-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tastycrypto',
    name: 'tastycrypto',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.tastycrypto.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tastycrypto-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rewardy-wallet',
    name: 'Rewardy Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.rewardywallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/rewardy-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dynamic',
    name: 'Dynamic',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.dynamic.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dynamic-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'solutions-team-test',
    name: 'Solutions Team Test',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://solutions-team-test.ecosystem.thirdweb.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/solutions-team-test-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'blazpay',
    name: 'Blazpay',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://blazpay.com/download',
    logo: {
      icon: {
        light: [
          {
            url: '/library/blazpay-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kamiyagura',
    name: 'KAMIYAGURA',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://kamiyagura.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kamiyagura-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ktc',
    name: 'KTC',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://keytrust.one/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ktc-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ironwallet',
    name: 'IronWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ironwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ironwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'join-mobile-app',
    name: 'JOIN MOBILE APP',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://getjoin.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/join-mobile-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'yuse-wallet',
    name: 'Yuse Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://yusetoken.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/yuse-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'talisman-wallet',
    name: 'Talisman Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://talisman.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/talisman-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'clear-wallet',
    name: 'clear-wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://clear-wallet.flashsoft.eu',
    logo: {
      icon: {
        light: [
          {
            url: '/library/clear-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'berasig',
    name: 'BeraSig',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.berasig.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/berasig-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'digital-shield',
    name: 'Digital Shield',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://app.ds.pro',
    logo: {
      icon: {
        light: [
          {
            url: '/library/digital-shield-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'poolswallet',
    name: 'poolswallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.poolsmobility.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/poolswallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'roam',
    name: 'Roam',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://roam.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/roam-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gamic',
    name: 'Gamic',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://gamic.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gamic-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'm1nty',
    name: 'M1NTY',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://m1nty.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/m1nty-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'catecoin-wallet',
    name: 'Catecoin Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://catecoin.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/catecoin-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hootark',
    name: 'HootArk',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.hootark.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hootark-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coincircle',
    name: 'CoinCircle',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://coincircle.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coincircle-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bharatbox-app',
    name: 'BharatBox App',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bharatbox.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bharatbox-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'swop',
    name: 'SWOP',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://swopme.co/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/swop-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dollet',
    name: 'Dollet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://dolletwallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dollet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'shinobi-wallet',
    name: 'Shinobi-Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://shinobi-wallet.net/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/shinobi-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'azcoiner',
    name: 'AZCoiner',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://azcoiner.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/azcoiner-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'loopring',
    name: 'Loopring',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://loopring.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/loopring-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pass-app',
    name: 'Pass App',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://pass.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pass-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'superhero-wallet',
    name: 'Superhero Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.superhero.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/superhero-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coinex-wallet',
    name: 'CoinEx Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.coinex.com/en/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coinex-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wallet-v',
    name: 'Wallet V',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://walletv.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/wallet-v-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'n3mus',
    name: 'N3MUS',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://n3mus.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/n3mus-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cypherock-cysync',
    name: 'Cypherock cySync',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.cypherock.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cypherock-cysync-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'leather',
    name: 'Leather',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://leather.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/leather-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'xverse-wallet',
    name: 'Xverse Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.xverse.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/xverse-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'flash-wallet',
    name: 'Flash Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://flash-wallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/flash-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ab-pay',
    name: 'AB Pay',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://abpay.cash',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ab-pay-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'vgx-wallet',
    name: 'VGX Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://vgxfoundation.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/vgx-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'arianee-wallet',
    name: 'Arianee Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://arianee.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/arianee-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pali-wallet',
    name: 'Pali Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://paliwallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pali-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'diam-wallet',
    name: 'DIAM Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://diamante.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/diam-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'zelus-wallet',
    name: 'Zelus Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://zelus.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/zelus-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hai-by-hacken',
    name: 'hAI by Hacken',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://hai.hacken.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hai-by-hacken-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cling-wallet',
    name: 'Cling Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://clingon.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cling-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'iluminaryai-wallet',
    name: 'iLuminaryAi Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://iluminary.ai',
    logo: {
      icon: {
        light: [
          {
            url: '/library/iluminaryai-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'opz-wallet',
    name: 'OPZ Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.opz.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/opz-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'streakk-wallet',
    name: 'Streakk Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://streakk.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/streakk-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lunascape-browser',
    name: 'Lunascape Browser',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.lunascape.org/browser/mobile',
    logo: {
      icon: {
        light: [
          {
            url: '/library/lunascape-browser-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lode-wallet',
    name: 'Lode Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://lode.one/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/lode-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gems-pocket',
    name: 'Gems Pocket',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://gemspocket.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gems-pocket-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'portawallet',
    name: 'PortaWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://porta.finance',
    logo: {
      icon: {
        light: [
          {
            url: '/library/portawallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pwc-super-app',
    name: 'PWC Super App',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://paywithcrypto.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pwc-super-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'earth-wallet',
    name: 'Earth Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.earthwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/earth-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'spatium',
    name: 'Spatium',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.spatium.net',
    logo: {
      icon: {
        light: [
          {
            url: '/library/spatium-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'adf-wallet',
    name: 'ADF Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.adftechnology.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/adf-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'xellar',
    name: 'Xellar',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://xellar.co',
    logo: {
      icon: {
        light: [
          {
            url: '/library/xellar-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'abstract',
    name: 'Abstract',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://abs.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/abstract-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wallypto',
    name: 'Wallypto',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallypto.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/wallypto-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'react-native-sample-wallet',
    name: 'React Native Sample Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://reown.com/walletkit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/react-native-sample-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'talken-wallet',
    name: 'Talken Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://talken.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/talken-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'swift-sample-wallet',
    name: 'Swift Sample Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://walletconnect.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/swift-sample-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'passpay-wallet',
    name: 'PassPay Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.passpay.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/passpay-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'obvious',
    name: 'Obvious',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://obvious.technology',
    logo: {
      icon: {
        light: [
          {
            url: '/library/obvious-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'blanq',
    name: 'Blanq',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.blanqlabs.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/blanq-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'revelator-wallet',
    name: 'Revelator Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.revelator.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/revelator-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'upbond-wallet',
    name: 'UPBOND Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.upbond.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/upbond-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kaxaa-wallet',
    name: 'KAXAA Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://kaxaa.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kaxaa-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tokenb',
    name: 'TokenB',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tokenb.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tokenb-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'orion',
    name: 'Orion',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://orion.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/orion-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gridlock-wallet',
    name: 'Gridlock Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://gridlock.network/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gridlock-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'scramberrywallet',
    name: 'ScramberryWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://scramberry.io/ja/wallet/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/scramberrywallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bma-wallet',
    name: 'BMA Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bmawallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bma-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kryptogo-wallet',
    name: 'KryptoGO Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://kryptogo.com/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kryptogo-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'life-defi',
    name: 'Life DeFi',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://lifedefi.co',
    logo: {
      icon: {
        light: [
          {
            url: '/library/life-defi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'abc-wallet',
    name: 'ABC Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://myabcwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/abc-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'rovi-money',
    name: 'Rovi Money',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://rovi.money',
    logo: {
      icon: {
        light: [
          {
            url: '/library/rovi-money-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bc-vault',
    name: 'BC Vault',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bc-vault.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bc-vault-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'blocto',
    name: 'Blocto',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://blocto.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/blocto-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'indigg',
    name: 'IndiGG',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://indi.gg',
    logo: {
      icon: {
        light: [
          {
            url: '/library/indigg-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'volt-wallet',
    name: 'Volt Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://voltage.finance',
    logo: {
      icon: {
        light: [
          {
            url: '/library/volt-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'meta-wonder-verse',
    name: 'meta-WONDER-verse',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://metawonderverse.custonomy.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/meta-wonder-verse-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ownbit',
    name: 'Ownbit',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ownbit.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ownbit-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'didwallet',
    name: 'DIDWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.didwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/didwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'frostfire',
    name: 'Frostfire',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://frostfirewallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/frostfire-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'para',
    name: 'Para',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://getpara.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/para-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mon-id',
    name: 'MON ID',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://monprotocol.ai',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mon-id-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'clave',
    name: 'Clave',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://getclave.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/clave-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'buzzup',
    name: 'BUZZUP',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://buzz-up.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/buzzup-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'jambo',
    name: 'Jambo',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.jambo.technology/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/jambo-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'edge',
    name: 'Edge',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://edge.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/edge-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'plena-app',
    name: 'Plena-App',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://plena.finance',
    logo: {
      icon: {
        light: [
          {
            url: '/library/plena-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'banksocial',
    name: 'BankSocial ',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.banksocial.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/banksocial-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cryptic',
    name: 'Cryptic',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://play.google.com/store/apps/details?id=com.cypherchat',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cryptic-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'superwallet',
    name: 'SuperWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://superex.live',
    logo: {
      icon: {
        light: [
          {
            url: '/library/superwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'qubeticswallet',
    name: 'QubeticsWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.qubetics.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/qubeticswallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ime-messenger-crypto-wallet',
    name: 'iMe Messenger & Crypto Wallet ',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://imem.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ime-messenger-crypto-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'purewallet',
    name: 'PureWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://purechain.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/purewallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ethos-self-custody-vault',
    name: 'Ethos Self-Custody Vault',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.ethos.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ethos-self-custody-vault-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'joyid-passkey',
    name: 'JoyID Passkey',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://joy.id/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/joyid-passkey-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'certhis',
    name: 'Certhis',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://certhis.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/certhis-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'safewallet',
    name: 'SafeWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://safecryptowallet.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/safewallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'plutope',
    name: 'Plutope',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.plutope.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/plutope-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'onewallet',
    name: 'onewallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://onewallet.it.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/onewallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lf-wallet-app',
    name: 'LF Wallet App',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://lflabs.fund/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/lf-wallet-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'id-pocket',
    name: 'ID Pocket',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://rktechworks.com/idpocket',
    logo: {
      icon: {
        light: [
          {
            url: '/library/id-pocket-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wallacy',
    name: 'Wallacy',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallacy.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/wallacy-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dgpub-app',
    name: 'DGPub App',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://dg.pub',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dgpub-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'uptn',
    name: 'UPTN',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://dapp-web.uptn.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/uptn-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ecoin-wallet',
    name: 'ECOIN Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ecoinwallet.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ecoin-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wali-wallet',
    name: 'Wali Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'http://wali.network',
    logo: {
      icon: {
        light: [
          {
            url: '/library/wali-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'grindery-wallet',
    name: 'Grindery Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.grindery.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/grindery-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'stasis-wallet',
    name: 'Stasis Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://stasis.net/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/stasis-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitverse',
    name: 'Bitverse',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.bitverse.zone',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitverse-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'reunit',
    name: 'Reunit',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://everywhere.finance',
    logo: {
      icon: {
        light: [
          {
            url: '/library/reunit-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'shyft-wallet',
    name: 'Shyft Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://shyft.tech',
    logo: {
      icon: {
        light: [
          {
            url: '/library/shyft-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mpcvault-team-crypto-wallet',
    name: 'MPCVault | Team crypto wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://mpcvault.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mpcvault-team-crypto-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'peakdefi',
    name: 'PEAKDEFI',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://peakdefi.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/peakdefi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'multix',
    name: 'Multix',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://multix.chainsafe.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/multix-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'strikex-wallet',
    name: 'StrikeX Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tradestrike.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/strikex-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'key3',
    name: 'Key3',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://key3.ai',
    logo: {
      icon: {
        light: [
          {
            url: '/library/key3-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'flutter-sample-wallet',
    name: 'Flutter Sample Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://appkit-lab.reown.com/flutter_walletkit',
    logo: {
      icon: {
        light: [
          {
            url: '/library/flutter-sample-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'daily-wallet',
    name: 'Daily Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.dailychain.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/daily-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'konio',
    name: 'Konio',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://konio.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/konio-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dokwallet',
    name: 'Dokwallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.dokwallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dokwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'plumaa-id',
    name: 'Plumaa ID',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://plumaa.id',
    logo: {
      icon: {
        light: [
          {
            url: '/library/plumaa-id-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kgen-wallet',
    name: 'KGeN Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://kgen.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kgen-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'squirrel-wallet',
    name: 'Squirrel Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.squirrelwallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/squirrel-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ssp',
    name: 'SSP',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://sspwallet.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ssp-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitdog-wallet',
    name: 'BitDog Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bit-dog.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitdog-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'qubic-wallet',
    name: 'Qubic Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.qubic.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/qubic-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'saakuru-all-in-one-crypto-app',
    name: 'Saakuru All-in-One crypto App',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://app.saakuru.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/saakuru-all-in-one-crypto-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'r0ar-mobile-wallet',
    name: 'R0AR Mobile Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.r0ar.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/r0ar-mobile-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'binance-wallet-bitcoin',
    name: 'Binance Wallet (Bitcoin)',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.binance.com/en/web3wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/binance-wallet-bitcoin-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'w3-wallet',
    name: 'W3 Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://w3wallet.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/w3-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'timeless-x',
    name: 'Timeless X',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://timelesswallet.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/timeless-x-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nvxo-wallet',
    name: 'NVXO Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.nvxowallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nvxo-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pillar',
    name: 'Pillar',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://pillar.fi',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pillar-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kotlin-sample-wallet',
    name: 'Kotlin Sample Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://docs.reown.com/walletkit/android/installation',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kotlin-sample-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'apollox',
    name: 'ApolloX',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.apollox.com/en',
    logo: {
      icon: {
        light: [
          {
            url: '/library/apollox-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nufinetes',
    name: 'Nufinetes',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.nufinetes.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nufinetes-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dropmate',
    name: 'Dropmate',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://dropmate.fi',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dropmate-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nodle',
    name: 'Nodle',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.nodle.com/products/cash_app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nodle-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kriptonio',
    name: 'Kriptonio',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://kriptonio.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kriptonio-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'minerva-wallet',
    name: 'Minerva Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://minerva.digital/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/minerva-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'libera',
    name: 'Libera',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://liberawallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/libera-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kelp',
    name: 'Kelp',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://kelp.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kelp-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'payperless',
    name: 'Payperless',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://payperless.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/payperless-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mdao-wallet',
    name: 'MDAO Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ttmwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mdao-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ready',
    name: 'Ready',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ready.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ready-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'upio',
    name: 'UP.io',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://up.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/upio-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'facewallet',
    name: 'Facewallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://facewallet.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/facewallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'iskra-wallet',
    name: 'Iskra Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://app.iskra.world/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/iskra-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coinwallet',
    name: 'CoinWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.coinsdo.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coinwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'asigna',
    name: 'Asigna',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.asigna.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/asigna-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'unipass-wallet',
    name: 'UniPass Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://unipass.id',
    logo: {
      icon: {
        light: [
          {
            url: '/library/unipass-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'owallet',
    name: 'OWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://owallet.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/owallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tobi',
    name: 'Tobi',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tobi.fun',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tobi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pandoshi-wallet',
    name: 'Pandoshi Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://pandoshi.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pandoshi-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kresus-superapp',
    name: 'Kresus SuperApp',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.kresus.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kresus-superapp-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'panaroma-wallet',
    name: 'Panaroma Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://panaroma.finance',
    logo: {
      icon: {
        light: [
          {
            url: '/library/panaroma-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'paribu-self',
    name: 'Paribu Self',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.paribu.com/self/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/paribu-self-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'clot',
    name: 'Clot',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://clot.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/clot-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'transi',
    name: 'Transi',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.transi.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/transi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'qoin-wallet',
    name: 'Qoin Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://qoin.world',
    logo: {
      icon: {
        light: [
          {
            url: '/library/qoin-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'blockaura',
    name: 'Blockaura',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://greengloryglobal.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/blockaura-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'keeper',
    name: 'Keeper',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://keeper-wallet.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/keeper-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pier',
    name: 'pier',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.pierwallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pier-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'amazewallet',
    name: 'AmazeWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://amazewallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/amazewallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gm-social',
    name: 'GM² Social',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://gm2.social/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gm-social-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ozonewallet',
    name: 'OzoneWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ozonewallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ozonewallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cryptnox-wallet',
    name: 'Cryptnox Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://cryptnox.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cryptnox-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tychi-wallet',
    name: 'Tychi Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tychiwallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tychi-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ipmb-wallet',
    name: 'IPMB Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.ipmb.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ipmb-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'onlybulls-wallet',
    name: 'OnlyBulls Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://onlybulls.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/onlybulls-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'youba',
    name: 'Youba',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://youba.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/youba-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'islamiwallet',
    name: 'ISLAMIwallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://islamicoin.finance/islamiwallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/islamiwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'vive-wallet',
    name: 'VIVE Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.viverse.com/apps/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/vive-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'copiosa',
    name: 'Copiosa',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://copiosa.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/copiosa-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'fncy-mobile-wallet',
    name: 'Fncy Mobile Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://fncy.world',
    logo: {
      icon: {
        light: [
          {
            url: '/library/fncy-mobile-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'moonstake',
    name: 'MOONSTAKE',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://moonstake.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/moonstake-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'altme',
    name: 'Altme',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://altme.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/altme-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'gk8',
    name: 'GK8',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.gk8.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/gk8-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hub-alpha',
    name: 'Hub [ALPHA]',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://hub.walletconnect.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hub-alpha-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'react-wallet',
    name: 'React Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://reactwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/react-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bim-wallet',
    name: 'BIM Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.bimwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bim-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dlicom',
    name: 'DLICOM',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://dlicom.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dlicom-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'verified-wallet',
    name: 'Verified Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.verified.network',
    logo: {
      icon: {
        light: [
          {
            url: '/library/verified-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'utila',
    name: 'Utila',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://utila.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/utila-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cosine-wallet',
    name: 'Cosine Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://getcosine.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cosine-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'itlx-wallet',
    name: 'ITLX Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://interlinklabs.ai/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/itlx-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'renegade',
    name: 'Renegade',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.myrenegade.net',
    logo: {
      icon: {
        light: [
          {
            url: '/library/renegade-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: '3s-wallet',
    name: '3S Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://3swallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/3s-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 't-wallet',
    name: 'T+ Wallet ',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.talkapp.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/t-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'daffione',
    name: 'DaffiOne',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.daffione.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/daffione-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'soc-wallet',
    name: 'SOC Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://socjsc.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/soc-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'trustkeys-web3-socialfi',
    name: 'TrustKeys Web3 SocialFi',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://trustkeys.network',
    logo: {
      icon: {
        light: [
          {
            url: '/library/trustkeys-web3-socialfi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'micet',
    name: 'Micet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://addons.mozilla.org/en-US/firefox/addon/micet/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/micet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'outlaw-wallet',
    name: 'Outlaw Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.outlawgames.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/outlaw-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bonuz-social-smart-wallet',
    name: 'Bonuz Social Smart Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bonuz.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bonuz-social-smart-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'haust-wallet',
    name: 'Haust wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.haust.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/haust-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sentry',
    name: 'SENTRY',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://app.sentrywallet.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sentry-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tap-wallet',
    name: 'TAP WALLET',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tapwallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tap-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kotai-wallet',
    name: 'Kotai Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'kotaiwallet://',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kotai-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'meetwith',
    name: 'Meetwith',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://meetwith.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/meetwith-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'assetguard',
    name: 'AssetGuard',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.hashgraph-group.com/products/assetguard',
    logo: {
      icon: {
        light: [
          {
            url: '/library/assetguard-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'volsungar',
    name: 'Volsungar',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://volsungar.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/volsungar-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'numo-wallet',
    name: 'Numo Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://my.r3vl.xyz',
    logo: {
      icon: {
        light: [
          {
            url: '/library/numo-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'unstoppable-domains',
    name: 'Unstoppable Domains',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://unstoppabledomains.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/unstoppable-domains-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'neon-wallet',
    name: 'Neon Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://neonwallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/neon-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hippo-wallet',
    name: 'Hippo Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://hippowallet.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hippo-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'verso',
    name: 'Verso',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://get-verso.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/verso-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'oblio-wallet',
    name: 'Oblio Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://obliowallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/oblio-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'flooz',
    name: 'Flooz',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.flooz.trade',
    logo: {
      icon: {
        light: [
          {
            url: '/library/flooz-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitski',
    name: 'Bitski',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bitski.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitski-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'prettygood-keyboard',
    name: 'PrettyGood Keyboard',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://x.prettygood.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/prettygood-keyboard-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hero-wallet',
    name: 'Hero Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.hero.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hero-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'spot-on-chain-app',
    name: 'Spot On Chain App',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://platform.spotonchain.ai',
    logo: {
      icon: {
        light: [
          {
            url: '/library/spot-on-chain-app-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'legacy-wallet',
    name: 'Legacy Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.legacynetwork.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/legacy-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'pltwallet',
    name: 'PLTwallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://pltwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/pltwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tofee-wallet-official',
    name: 'Tofee Wallet Official',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tofee.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tofee-wallet-official-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'newwallet',
    name: 'NewWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://newwallet.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/newwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dosi-vault',
    name: 'DOSI Vault',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://vault.dosi.world/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dosi-vault-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'icewal',
    name: 'icewal',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://icewal.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/icewal-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dextrade',
    name: 'DexTrade',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://dextrade.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dextrade-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wemixwallet',
    name: 'WemixWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.wemix.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/wemixwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cryptokara',
    name: 'Cryptokara',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://cryptokara.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cryptokara-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitnovo-wallet',
    name: 'Bitnovo Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bitnovo.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitnovo-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nodevault',
    name: 'NodeVault',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://chain.dolphinode.world/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nodevault-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'xucre',
    name: 'Xucre',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.xucre.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/xucre-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sinohope',
    name: 'Sinohope',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.sinohope.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sinohope-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'paraswap-wallet',
    name: 'ParaSwap Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://paraswap.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/paraswap-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'girin-wallet',
    name: 'Girin Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://girin.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/girin-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ukiss-hub',
    name: 'UKISS Hub',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.ukiss.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ukiss-hub-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cyberwallet',
    name: 'CyberWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://wallet.cyber.co',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cyberwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dgg-wallet',
    name: 'DGG Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://dgg.network',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dgg-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tidus-wallet',
    name: 'Tidus Wallet ',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tiduswallet.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tidus-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'shefi',
    name: 'SheFi',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.shefi.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/shefi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'helix-id',
    name: 'helix id',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://helixid.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/helix-id-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'here-wallet',
    name: 'HERE Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://herewallet.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/here-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lif3-wallet',
    name: 'Lif3 Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://lif3.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/lif3-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'broearn-wallet',
    name: 'Broearn Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.broearn.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/broearn-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'filwallet',
    name: 'FILWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://filwallet.co/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/filwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'brise-wallet',
    name: 'BRISE Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://bitgert.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/brise-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'snowball',
    name: 'Snowball',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://snowball.money/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/snowball-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'realt-wallet',
    name: 'RealT Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://realt.co',
    logo: {
      icon: {
        light: [
          {
            url: '/library/realt-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'enno-wallet',
    name: 'Enno Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.ennowallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/enno-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'a4-wallet',
    name: 'A4 Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://a4.finance',
    logo: {
      icon: {
        light: [
          {
            url: '/library/a4-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'safematrix',
    name: 'Safematrix',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://safematrix.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/safematrix-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'assure',
    name: 'Assure',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.assure.pro',
    logo: {
      icon: {
        light: [
          {
            url: '/library/assure-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'neftiwallet',
    name: 'NeftiWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://neftipedia.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/neftiwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'goldbit',
    name: 'GoldBit',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'http://goldbit.io/gbapp.php',
    logo: {
      icon: {
        light: [
          {
            url: '/library/goldbit-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coingrig',
    name: 'Coingrig',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://coingrig.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coingrig-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'xfun-wallet',
    name: 'XFUN Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://xfun.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/xfun-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ancrypto-wallet',
    name: 'Ancrypto Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.antiersolutions.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ancrypto-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'itoken-wallet',
    name: 'iToken Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.itoken.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/itoken-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'card-wallet',
    name: 'Card Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://cardstack.com/earn-together',
    logo: {
      icon: {
        light: [
          {
            url: '/library/card-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'slavi-wallet',
    name: 'Slavi Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://slavi.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/slavi-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'defiant',
    name: 'Defiant',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.defiantapp.tech/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/defiant-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'tk-finance',
    name: 'TK Finance',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://trustkeys.network/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/tk-finance-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'haven-wallet',
    name: 'Haven Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://havensuite.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/haven-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'volt-defi',
    name: 'Volt: DeFi',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://voltage.finance/app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/volt-defi-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ime',
    name: 'iMe',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://imem.app/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ime-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'mpcwallet',
    name: 'MPCWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.mpcwallet.xyz/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/mpcwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'treasure',
    name: 'TREASURE',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://treasurewallet.co/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/treasure-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'sender',
    name: 'Sender',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://sender.org/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/sender-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nfid-wallet',
    name: 'NFID Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://nfid.one/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nfid-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'velgazm',
    name: 'Velgazm',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://velgazm.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/velgazm-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'saucerswap-wallet',
    name: 'SaucerSwap Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.saucerswap.finance/saucerswap-wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/saucerswap-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'staticbit',
    name: 'StaticBit',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://staticbit.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/staticbit-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'vkx-wallet',
    name: 'VKX WALLET',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://vkinha.com/download',
    logo: {
      icon: {
        light: [
          {
            url: '/library/vkx-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'dfns',
    name: 'Dfns',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.dfns.co/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/dfns-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'oxpay',
    name: 'OXPAY',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://oxpaywallet.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/oxpay-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'elastos-essentials',
    name: 'Elastos Essentials',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://elastos.net/wallet',
    logo: {
      icon: {
        light: [
          {
            url: '/library/elastos-essentials-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cornwallet',
    name: 'CornWallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.cornwallet.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cornwallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ttchain-wallet',
    name: 'TTChain Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://tt-chain.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ttchain-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ggp-wallet',
    name: 'GGP Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ggp.gg/en',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ggp-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'guarda',
    name: 'Guarda',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://guarda.com/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/guarda-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nulltrace',
    name: 'NullTrace',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://apps.apple.com/us/app/nulltrace/id6758411859',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nulltrace-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'beeswarm-wallet',
    name: 'BeeSwarm Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://mobile.beeswarm.app',
    logo: {
      icon: {
        light: [
          {
            url: '/library/beeswarm-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'anybit',
    name: 'Anybit',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://www.anybit.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/anybit-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'debox-wallet',
    name: 'DeBox Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://debox.pro',
    logo: {
      icon: {
        light: [
          {
            url: '/library/debox-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ukey-wallet',
    name: 'Ukey Wallet',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ukey.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ukey-wallet-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'ciphertrade',
    name: 'CipherTrade',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://ciphertrade.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/ciphertrade-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'walletverse',
    name: 'Walletverse',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://walletverse.io/',
    logo: {
      icon: {
        light: [
          {
            url: '/library/walletverse-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'the-real-u',
    name: 'The real u',
    mainCategory: 'wallets',
    secondaryCategories: [],
    websiteLink: 'https://therealu.org',
    logo: {
      icon: {
        light: [
          {
            url: '/library/the-real-u-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },

  {
    id: 'bitmex',
    name: 'Bitmex',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.bitmex.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitmex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bingx',
    name: 'BingX',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://bingx.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bingx-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitmart',
    name: 'BitMart',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.bitmart.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitmart-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'digifinex',
    name: 'Digifinex',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.digifinex.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/digifinex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'lbank',
    name: 'LBank',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.lbank.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/lbank-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'phemex',
    name: 'Phemex',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://phemex.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/phemex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'poloniex',
    name: 'Poloniex',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://poloniex.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/poloniex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitstamp',
    name: 'Bitstamp',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.bitstamp.net',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitstamp-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bigone',
    name: 'BigONE',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://big.one',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bigone-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitfinex',
    name: 'Bitfinex',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.bitfinex.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitfinex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bkex',
    name: 'BKEX',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.bkex.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bkex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitflyer',
    name: 'bitFlyer',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://bitflyer.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitflyer-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coinex',
    name: 'CoinEx',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.coinex.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coinex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitbank',
    name: 'Bitbank',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://bitbank.cc',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitbank-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'btcturk-pro',
    name: 'BtcTurk Pro',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.btcturk.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/btcturk-pro-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitkub',
    name: 'Bitkub',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.bitkub.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitkub-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'hitbtc',
    name: 'HitBTC',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://hitbtc.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/hitbtc-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'etorox',
    name: 'eToroX',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.etoro.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/etorox-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'btc-markets',
    name: 'BTC Markets',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.btcmarkets.net',
    logo: {
      icon: {
        light: [
          {
            url: '/library/btc-markets-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitso',
    name: 'Bitso',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://bitso.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitso-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bitpanda-pro',
    name: 'Bitpanda Pro',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.bitpanda.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bitpanda-pro-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'wazirx',
    name: 'WazirX',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://wazirx.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/wazirx-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'luno',
    name: 'Luno',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.luno.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/luno-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coinlist',
    name: 'CoinList',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://coinlist.co',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coinlist-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'nominex',
    name: 'Nominex',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://nominex.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/nominex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'kuna-exchange',
    name: 'Kuna Exchange',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://kuna.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/kuna-exchange-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bittrex',
    name: 'Bittrex',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://bittrex.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bittrex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'bibox',
    name: 'Bibox',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.bibox.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/bibox-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'zbcom',
    name: 'ZB.COM',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.zb.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/zbcom-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'cexio',
    name: 'CEX.IO',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://cex.io',
    logo: {
      icon: {
        light: [
          {
            url: '/library/cexio-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'btse',
    name: 'BTSE',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://www.btse.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/btse-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
  {
    id: 'coinflex',
    name: 'CoinFLEX',
    mainCategory: 'exchanges',
    secondaryCategories: [],
    websiteLink: 'https://coinflex.com',
    logo: {
      icon: {
        light: [
          {
            url: '/library/coinflex-icon-light.png',
            format: 'png',
          },
        ],
      },
    },
  },
];
