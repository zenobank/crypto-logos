export const API_EXAMPLES = {
  getAllLogos: {
    request: 'curl {{baseUrl}}/api/logos',
    response: `{
  "data": [
    {
      "id": "nft_eth_0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e",
      "name": "Azuki Elementals",
      "symbol": "ELEM",
      "websiteLink": "https://www.azuki.com",
      "logo": {
        "icon": {
          "light": [
            {
              "url": "/library/icon_light_nft_eth_0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e.png",
              "format": "png"
            }
          ]
        }
      },
      "mainCategory": {
        "id": "nft",
        "name": "NFT"
      },
      "secondaryCategories": [
        {
          "id": "tokens",
          "name": "tokens"
        }
      ]
    },
    {
      "id": "nft_solana_4d3f3ecf1ba60fb5bfe314afb5d3f8b5",
      "name": "Doodle Devils Drip 2025",
      "symbol": "",
      "logo": {
        "icon": {
          "light": [
            {
              "url": "/library/icon_light_nft_solana_4d3f3ecf1ba60fb5bfe314afb5d3f8b5.png",
              "format": "png"
            }
          ]
        }
      },
      "mainCategory": {
        "id": "nft",
        "name": "NFT"
      },
      "secondaryCategories": [
        {
          "id": "tokens",
          "name": "tokens"
        }
      ]
    }
    // ...other items
  ],
  "total": 14714
}`,
  },

  getLogosWithLimit: {
    request: 'curl "{{baseUrl}}/api/logos?limit=10&skip=0"',
    response: `{
  "data": [
    {
      "id": "nft_eth_0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e",
      "name": "Azuki Elementals",
      "symbol": "ELEM",
      "websiteLink": "https://www.azuki.com",
      "logo": {
        "icon": {
          "light": [
            {
              "url": "/library/icon_light_nft_eth_0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e.png",
              "format": "png"
            }
          ]
        }
      },
      "mainCategory": {
        "id": "nft",
        "name": "NFT"
      },
      "secondaryCategories": [
        {
          "id": "tokens",
          "name": "tokens"
        }
      ]
    }
    // ... 9 more items
  ],
  "total": 14714
}`,
  },

  getLogosByCategory: {
    request: 'curl "{{baseUrl}}/api/logos?category=nft"',
    response: `{
  "data": [
    {
      "id": "nft_eth_0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e",
      "name": "Azuki Elementals",
      "symbol": "ELEM",
      "websiteLink": "https://www.azuki.com",
      "logo": {
        "icon": {
          "light": [
            {
              "url": "/library/icon_light_nft_eth_0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e.png",
              "format": "png"
            }
          ]
        }
      },
      "mainCategory": {
        "id": "nft",
        "name": "NFT"
      },
      "secondaryCategories": [
        {
          "id": "tokens",
          "name": "tokens"
        }
      ]
    },
    {
      "id": "nft_solana_4d3f3ecf1ba60fb5bfe314afb5d3f8b5",
      "name": "Doodle Devils Drip 2025",
      "symbol": "",
      "logo": {
        "icon": {
          "light": [
            {
              "url": "/library/icon_light_nft_solana_4d3f3ecf1ba60fb5bfe314afb5d3f8b5.png",
              "format": "png"
            }
          ]
        }
      },
      "mainCategory": {
        "id": "nft",
        "name": "NFT"
      },
      "secondaryCategories": [
        {
          "id": "tokens",
          "name": "tokens"
        }
      ]
    }
    // ...other items
  ],
  "total": 5163
}`,
  },

  searchLogos: {
    request: 'curl "{{baseUrl}}/api/logos?search=Azuki"',
    response: `{
  "data": [
    {
      "id": "nft_eth_0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e",
      "name": "Azuki Elementals",
      "symbol": "ELEM",
      "websiteLink": "https://www.azuki.com",
      "logo": {
        "icon": {
          "light": [
            {
              "url": "/library/icon_light_nft_eth_0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e.png",
              "format": "png"
            }
          ]
        }
      },
      "mainCategory": {
        "id": "nft",
        "name": "NFT"
      },
      "secondaryCategories": [
        {
          "id": "tokens",
          "name": "tokens"
        }
      ]
    }
  ],
  "total": 1
}`,
  },

  getCategories: {
    request: 'curl {{baseUrl}}/api/categories',
    response: `[
  {
    "id": "nft",
    "name": "NFT",
    "count": 5163
  },
  {
    "id": "tokens",
    "name": "tokens",
    "count": 13181
  }
]`,
  },
} as const;
