// Sample API request and response examples for documentation

export const API_EXAMPLES = {
  getAllLogos: {
    request: 'curl {{baseUrl}}/api/logos',
    response: `{
  "data": [
    {
      "id": "bitcoin",
      "name": "Bitcoin",
      "mainCategory": "cryptocurrency",
      "mainLogo": {
        "url": "/logos/bitcoin.svg",
        "format": "svg"
      },
      "secondaryCategories": ["payment", "defi"],
      "downloadableFiles": {
        "icon": {
          "light": [
            {
              "url": "/logos/bitcoin.svg",
              "format": "svg"
            }
          ]
        }
      },
      "websiteLink": "https://bitcoin.org"
    },
    {
      "id": "ethereum",
      "name": "Ethereum",
      "mainCategory": "cryptocurrency",
      "mainLogo": {
        "url": "/logos/ethereum.svg",
        "format": "svg"
      },
      "secondaryCategories": ["blockchain", "defi"],
      "downloadableFiles": {
        "icon": {
          "light": [
            {
              "url": "/logos/ethereum.svg",
              "format": "svg"
            }
          ],
          "dark": [
            {
              "url": "/logos/ethereum-dark.svg",
              "format": "svg"
            }
          ]
        }
      },
      "websiteLink": "https://ethereum.org"
    }
  ],
  "total": 576
}`,
  },

  getLogosWithLimit: {
    request: 'curl "{{baseUrl}}/api/logos?limit=10&skip=0"',
    response: `{
  "data": [
    {
      "id": "bitcoin",
      "name": "Bitcoin",
      "mainCategory": "cryptocurrency",
      "mainLogo": {
        "url": "/logos/bitcoin.svg",
        "format": "svg"
      },
      "secondaryCategories": ["payment", "defi"],
      "downloadableFiles": {
        "icon": {
          "light": [
            {
              "url": "/logos/bitcoin.svg",
              "format": "svg"
            }
          ]
        }
      },
      "websiteLink": "https://bitcoin.org"
    }
    // ... 9 more items
  ],
  "total": 576
}`,
  },

  getLogosByCategory: {
    request: 'curl "{{baseUrl}}/api/logos?category=defi"',
    response: `{
  "data": [
    {
      "id": "uniswap",
      "name": "Uniswap",
      "mainCategory": "defi",
      "mainLogo": {
        "url": "/logos/uniswap.svg",
        "format": "svg"
      },
      "secondaryCategories": ["cryptocurrency", "dex"],
      "downloadableFiles": {
        "icon": {
          "light": [
            {
              "url": "/logos/uniswap.svg",
              "format": "svg"
            }
          ]
        }
      },
      "websiteLink": "https://uniswap.org"
    },
    {
      "id": "aave",
      "name": "Aave",
      "mainCategory": "defi",
      "mainLogo": {
        "url": "/logos/aave.svg",
        "format": "svg"
      },
      "secondaryCategories": ["cryptocurrency", "lending"],
      "downloadableFiles": {
        "icon": {
          "light": [
            {
              "url": "/logos/aave.svg",
              "format": "svg"
            }
          ]
        }
      },
      "websiteLink": "https://aave.com"
    }
  ],
  "total": 45
}`,
  },

  searchLogos: {
    request: 'curl "{{baseUrl}}/api/logos?search=bitcoin"',
    response: `{
  "data": [
    {
      "id": "bitcoin",
      "name": "Bitcoin",
      "mainCategory": "cryptocurrency",
      "mainLogo": {
        "url": "/logos/bitcoin.svg",
        "format": "svg"
      },
      "secondaryCategories": ["payment", "defi"],
      "downloadableFiles": {
        "icon": {
          "light": [
            {
              "url": "/logos/bitcoin.svg",
              "format": "svg"
            }
          ]
        }
      },
      "websiteLink": "https://bitcoin.org"
    }
  ],
  "total": 1
}`,
  },

  getCategories: {
    request: 'curl {{baseUrl}}/api/categories',
    response: `[
  {
    "category": "cryptocurrency",
    "count": 287
  },
  {
    "category": "defi",
    "count": 45
  },
  {
    "category": "blockchain",
    "count": 123
  },
  {
    "category": "payment",
    "count": 67
  },
  {
    "category": "exchange",
    "count": 54
  }
]`,
  },
} as const;

// Helper to replace {{baseUrl}} placeholder with actual base URL
export function formatRequest(request: string, baseUrl: string): string {
  return request.replace(/\{\{baseUrl\}\}/g, baseUrl);
}
