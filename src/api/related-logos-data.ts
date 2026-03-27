// Each array represents a group of related logos (bidirectional)
// Example: ['usdc', 'tether'] means USDC and USDT are related to each other
export type RelatedLogosGroup = string[];

export const RELATED_LOGOS_DATA: RelatedLogosGroup[] = [
  // Existing groups
  ['usdt', 'usdt0', 'tether-gold'], // Tether family
  ['pathusd', 'stripe', 'tempo'], // pathUSD <-> Stripe <-> Tempo
  ['solana', 'solana-beach', 'solana-breakpoint', 'solana-compass', 'solana-explorer', 'solana-foundation', 'solana-tracker', 'solana-ventures', 'solanafloor', 'solanafm', 'solscan'], // Solana
  ['trezor', 'trezor-suite'], // Trezor
  ['paypal', 'paypal-usd'], // PayPal <-> PayPal USD (PYUSD)
  ['pax-dollar', 'pax-gold', 'usdg'], // Paxos family: USDP <-> PAXG <-> USDG
  ['ichi', 'gamma'], // ICHI <-> Gamma (DeFi liquidity management)
  ['oasis-emerald', 'oasis-sapphire'], // Oasis Emerald <-> Oasis Sapphire
  ['rootstock', 'rootstock-labs'], // Rootstock chain <-> Rootstock Labs

  // Brand families
  ['0x-explorer', '0x-protocol-token'], // 0x
  ['aave', 'aave-subgraph'], // Aave
  ['aioz-network', 'aioz-w3s'], // AIOZ
  ['airswap', 'airswap-subgraph'], // AirSwap
  ['alchemy', 'alchemy-bundler', 'alchemy-gas-manager', 'alchemy-nft-api', 'alchemy-node-rpc', 'alchemy-notify', 'alchemy-pay', 'alchemy-prices-api', 'alchemy-rollups', 'alchemy-smart-wallets', 'alchemy-university', 'alchemy-ventures'], // Alchemy
  ['alephium-bridge', 'alephium-wallet'], // Alephium
  ['alldomains', 'alldomains-bridge'], // AllDomains
  ['ampleforth', 'ampleforth-governance-token', 'wrapped-ampleforth'], // Ampleforth
  ['ankr', 'ankr-liquid-staking'], // Ankr
  ['ape-chain', 'apecoin', 'apenft', 'apescan', 'apespace'], // Ape/ApeCoin
  ['arbitrum', 'arbitrum-foundation', 'arbitrum-nova', 'arbitrum-orbit', 'arbiscan'], // Arbitrum
  ['augur', 'reputation-augur-v1', 'reputation-augur-v2'], // Augur
  ['aurora', 'aurora-pass'], // Aurora
  ['badger-dao', 'badger-finance'], // Badger
  ['bancor', 'bancor-network-token'], // Bancor
  ['base-formerly-coinbase-wallet', 'basescan'], // Base
  ['bibox', 'bibox-token'], // Bibox
  ['biconomy', 'biconomy-io', 'biconomy-paymaster', 'biconomy-v2'], // Biconomy
  ['bifrost-staking', 'bifrost-wallet'], // Bifrost
  ['binance', 'binance-pay', 'binance-us', 'binance-usd', 'bnb', 'bnb-chain', 'bscscan'], // Binance/BNB
  ['bitcoin', 'bitcoin-cash', 'bitcoin-diamond', 'bitcoin-gold', 'bitcoin-plus', 'bitcoin-sv', 'bitcoincom-wallet', 'wrapped-btc', 'tbtc'], // Bitcoin
  ['bitget', 'bitget-wallet-lite'], // Bitget
  ['bitso', 'bitso-web3-wallet'], // Bitso
  ['blast', 'blastscan'], // Blast
  ['blocknative', 'blocknative-gas-estimator'], // Blocknative
  ['blocksec', 'blocksec-phalcon'], // BlockSec
  ['blockstream', 'blockstream-app'], // Blockstream
  ['bybit', 'bybit-pay', 'bybit-wallet'], // Bybit
  ['cake-wallet', 'cakepay'], // Cake
  ['centrifuge', 'wrapped-centrifuge'], // Centrifuge
  ['chainsafe', 'chainsafe-marketplace-toolkit', 'chainsafe-unity-sdk'], // ChainSafe
  ['cobo', 'cobo-argus'], // Cobo
  ['coin98', 'coin98-super-wallet'], // Coin98
  ['coinbase', 'coinbase-nft-api', 'coinbase-pay', 'coinbase-smart-wallet', 'coinbase-ventures', 'coinbase-wallet', 'coinbase-wallet-sdk', 'coinbase-wrapped-btc', 'coinbase-wrapped-staked-eth', 'base-formerly-coinbase-wallet', 'basescan'], // Coinbase/Base
  ['coinex', 'coinex-wallet'], // CoinEx
  ['compound', 'compound-blue', 'compound-v2-subgraph', 'compound-v3-subgraph'], // Compound
  ['connext', 'connext-subgraph'], // Connext
  ['consensys-abi-decoder', 'consensys-diligence'], // ConsenSys
  ['convex-finance', 'convex-subgraph'], // Convex
  ['cow-protocol', 'cowswap'], // CoW Protocol
  ['cronos', 'cronos-accelerator-program', 'cronos-zkevm', 'the-cronosverse', 'crypto-dot-com'], // Cronos/Crypto.com
  ['cryptnox-bridge', 'cryptnox-wallet'], // Cryptnox
  ['curve-dao-token', 'curve-finance', 'curve-subgraph'], // Curve
  ['dedaub-security-suite', 'dedaub-tok-in'], // Dedaub
  ['defi-kingdoms', 'avalanche-dfk'], // DeFi Kingdoms
  ['developer-dao', 'developer-dao-academy'], // Developer DAO
  ['dogecoin', 'dogechain'], // Doge
  ['dune-analytics', 'dune-mev-dashboard'], // Dune
  ['eigencloud', 'eigenlayer'], // EigenLayer
  ['eigenphi', 'eigenphi-hq'], // EigenPhi
  ['elastos', 'elastos-essentials'], // Elastos
  ['enjin-coin', 'enjin-wallet'], // Enjin
  ['ens', 'ens-subgraph', 'ethereum-name-service'], // ENS
  ['enzyme', 'enzyme-finance', 'enzyme-subgraph'], // Enzyme
  ['espresso', 'espresso-sequencer'], // Espresso
  ['ethena', 'ethena-usde'], // Ethena
  ['ethereum', 'ethereum-classic', 'ethereum-etl', 'ethereum-follow-protocol', 'ethereum-gas-reporter', 'ethereum-transaction-viewer', 'ethereum-vscode-viewer', 'ethereum-world', 'ethereumpow', 'wrapped-ether'], // Ethereum
  ['etherscan', 'etherscan-online-decompiler'], // Etherscan
  ['etherspot', 'etherspot-sdk', 'etherspot-transactionkit'], // Etherspot
  ['fabwelt', 'fabwelt-studios'], // Fabwelt
  ['flashbots', 'flashbots-mev-dashboard'], // Flashbots
  ['flipside', 'flipside-crypto'], // Flipside
  ['flow', 'flow-evm', 'flow-wallet'], // Flow
  ['frax', 'frax-finance-frax-ether', 'frax-price-index', 'frax-price-index-share', 'frax-share', 'fraxscan'], // Frax
  ['frontier', 'frontier-wallet'], // Frontier
  ['gala', 'gala-games'], // Gala
  ['galaxia-chronicles', 'galaxia-explorer', 'galaxia-studios'], // Galaxia
  ['gate', 'gate-pay', 'gate-wallet'], // Gate.io
  ['gemini', 'gemini-dollar'], // Gemini
  ['gnosis-chain', 'gnosis-gno', 'gnosis-protocol', 'gnosis-v2', 'gnosisscan', 'xdai'], // Gnosis
  ['guarda', 'guarda-wallet'], // Guarda
  ['hacken', 'hai-by-hacken'], // Hacken
  ['haha', 'haha-wallet'], // HaHa
  ['hardhat', 'hardhat-template'], // Hardhat
  ['haven-protocol', 'haven-wallet'], // Haven
  ['heymint', 'heymint-launchpad'], // HeyMint
  ['hop', 'hop-protocol-subgraph'], // Hop
  ['hopr', 'hopr-network'], // HOPR
  ['huff', 'huff-starter-kit', 'huff-virtual-machine', 'huff-x-foundry', 'huffmate'], // Huff
  ['huobi', 'huobi-token', 'husd'], // Huobi
  ['idle', 'idle-finance'], // Idle
  ['ime', 'ime-lab', 'ime-messenger-crypto-wallet'], // iMe
  ['immutable-x', 'immutablex'], // ImmutableX
  ['intract-gate3', 'intract-mints'], // Intract
  ['jito', 'jito-labs'], // Jito
  ['juicebox', 'juicebox-subgraph'], // Juicebox
  ['kraken', 'kraken-wallet'], // Kraken
  ['kucoin', 'kucoin-pay', 'kucoin-web3-wallet', 'kcc'], // KuCoin
  ['kyber-network-crystal', 'kyber-network-crystal-v2', 'kyberswap'], // Kyber
  ['lido', 'lido-dao', 'lido-subgraph'], // Lido
  ['linea', 'lineascan'], // Linea
  ['liquity', 'liquity-usd'], // Liquity
  ['litecoin', 'litecoin-cash'], // Litecoin
  ['livepeer', 'livepeer-subgraph'], // Livepeer
  ['loopring', 'loopring-subgraph', 'loopringcoin-v2'], // Loopring
  ['maker', 'dai', 'sky', 'usds-stablecoin'], // MakerDAO/Sky
  ['mantle', 'mantlescan'], // Mantle
  ['maple', 'maple-finance'], // Maple
  ['moni-discover', 'moni-social-api'], // Moni
  ['moonbeam', 'moonriver'], // Moonbeam/Moonriver
  ['mpcvault', 'mpcvault-team-crypto-wallet'], // MPCVault
  ['mysterium', 'mysterium-network'], // Mysterium
  ['nansen', 'nansen-portfolio'], // Nansen
  ['near', 'near-intents'], // NEAR
  ['nethermind', 'nethermind-security'], // Nethermind
  ['okx', 'okx-wallet', 'okb', 'x-layer'], // OKX
  ['opensea', 'opensea-subgraph'], // OpenSea
  ['openzeppelin', 'openzeppelin-defender', 'openzeppelin-gas-station-network', 'openzeppelin-relay', 'openzeppelin-test-helpers', 'openzeppelin-upgrades'], // OpenZeppelin
  ['optimism-ethereum', 'optimistic-etherscan', 'optimisticscan', 'optimism-eth-faucet', 'op-mainnet', 'op-stack', 'superchain-dev-console', 'superchain-faucet'], // Optimism/OP
  ['origin-dollar', 'origin-ether', 'origin-protocol'], // Origin
  ['orion', 'orion-protocol'], // Orion
  ['paradigm', 'paradigm-ctf', 'paradigm-faucet'], // Paradigm
  ['plume', 'plume-mainnet'], // Plume
  ['polkadot', 'kusama'], // Polkadot/Kusama
  ['polygon', 'polygon-ecosystem-token', 'polygon-faucet', 'polygon-id', 'polygon-smart-contract-tutorial', 'polygon-smart-contracts', 'polygon-ventures', 'polygon-zkevm', 'polygonscan'], // Polygon
  ['pooltogether', 'pooltogether-subgraph'], // PoolTogether
  ['purewallet', 'purewallet-app'], // PureWallet
  ['quantoz-eurq', 'quantoz-usdq'], // Quantoz
  ['quillaudits', 'quillcheck', 'quillshield'], // Quill
  ['rarible', 'rarible-mulitchain-sdk'], // Rarible
  ['render-network', 'render-token'], // Render
  ['request', 'request-finance', 'request-network'], // Request
  ['revolut', 'revolut-business', 'revolut-pay'], // Revolut
  ['ripio-credit-network', 'ripio-portal'], // Ripio
  ['rocket-pool-protocol', 'rocket-pool-subgraph'], // Rocket Pool
  ['ronin', 'ronin-wallet', 'sky-mavis', 'axie-infinity'], // Sky Mavis/Ronin/Axie
  ['router-nitro', 'router-protocol'], // Router Protocol
  ['safe', 'safe-core', 'safe-edges'], // Safe
  ['sei', 'sei-v2', 'seiscan'], // Sei
  ['shapeshift', 'shapeshift-fox-token'], // ShapeShift
  ['snapshot', 'snapshot-subgraph'], // Snapshot
  ['solhint', 'solhint-for-intellij', 'solhint-prettier-plugin'], // Solhint
  ['stablr-euro', 'stablr-usd'], // StablR
  ['stackup', 'stackup-bundler'], // Stackup
  ['star-atlas', 'star-atlas-dao'], // Star Atlas
  ['starknet', 'starknet-earn', 'starknet-ecosystem', 'starknet-react', 'starkware', 'starkgate'], // StarkNet/StarkWare
  ['status', 'status-im', 'status-legacy'], // Status
  ['steem', 'steem-dollars'], // Steem
  ['sushi', 'sushiswap-subgraph'], // Sushi
  ['synthetix', 'synthetix-smart-contracts', 'synthetix-subgraph', 'synth-susd'], // Synthetix
  ['taho', 'taho-wallet'], // Taho
  ['tenderly', 'tenderly-gas-profiler', 'tenderly-sandbox'], // Tenderly
  ['tezos', 'tezos-sdk-for-unity'], // Tezos
  ['the-graph', 'graph-network-subgraph'], // The Graph
  ['theta-fuel', 'theta-network', 'theta-wallet'], // Theta
  ['thorchain', 'thorwallet'], // THORChain
  ['tron', 'tronscan'], // Tron
  ['trust-wallet', 'trustwallet'], // Trust Wallet
  ['uma', 'uma-subgraph', 'uma-voting-token-v1'], // UMA
  ['uniswap', 'uniswap-v3-core', 'uniswap-v3-subgraph', 'uniswap-web3-react', 'unichain'], // Uniswap
  ['vechain', 'vethor-token', 'veworld-mobile'], // VeChain
  ['venly', 'venly-gaming-sdk', 'venly-nft-api'], // Venly
  ['walletconnect', 'walletconnect-token'], // WalletConnect
  ['wanchain', 'wanchain-bridge'], // Wanchain
  ['wemix-3-0', 'wemix-play', 'wemixwallet'], // WEMIX
  ['world-liberty-financial-wlfi', 'usd1', 'trump', 'official-melania-meme'], // World Liberty Financial / Trump family
  ['worldcoin', 'world-chain'], // Worldcoin
  ['wow-earn', 'wow-earn-chain'], // WOW EARN
  ['xrp', 'xrpl-xrp-network', 'ripple-usd'], // XRP/Ripple
  ['yearn', 'yearn-smart-contracts', 'yearn-subgraph'], // Yearn
  ['ziion', 'ziion-linux-distro'], // ZIION
  ['zypto', 'zypto-wallet'], // Zypto
];
