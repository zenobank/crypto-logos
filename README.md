## Getting Started

You will need:

- [Node.js 20+](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

1. [**Fork this repository**](https://github.com/zenobank/crypto-logos/fork) and clone it locally:

```bash
git clone https://github.com/zenobank/crypto-logos.git
```

2. Move into the project folder:

```bash
cd crypto-logos
```

3. Install dependencies:

```bash
pnpm install
```

4. Run the development server:

```bash
pnpm dev
```

5. Add your logo files

Add your `.svg`, `.png`, `.jpg`, or `.webp` files into [**`public/library`**](https://github.com/zenobank/crypto-logos/tree/main/public/library).

6. Add logo metadata

Go to [**`src/api/logos-data.ts`**](https://github.com/zenobank/crypto-logos/tree/main/src/api/logos-data.ts) and add the information about your logo following the [**`LogoItem`**](https://github.com/zenobank/crypto-logos/tree/main/src/shared/models/logos/logo-item.ts) model.

- **Data model**:

```ts
interface LogoItem {
  id: string;
  name: string;
  mainCategory: string;
  secondaryCategories: string[];
  logo: LogoDownloadableFiles;
  websiteLink?: string;
  brandKitLink?: string;
}

interface LogoAsset {
  url: string;
  format: LogoFileFormat;
}

type LogoFileFormat = 'svg' | 'png' | 'jpg' | 'webp' | 'unknown';

interface LogoDownloadableFiles {
  icon: LogoVariantGroup;
  text?: LogoVariantGroup;
}

interface LogoVariantGroup {
  light: LogoAsset[];
  dark?: LogoAsset[];
}
```

> [!NOTE]
>
> - `id`: unique key (lowercase, no spaces, usually the brand name).
> - `name`: display name (e.g. `Solana (SOL)`).
> - `mainCategory`: primary category (e.g. `chains`).
> - `secondaryCategories`: extra categories (e.g. `["tokens"]`).
> - `websiteLink` (optional): official website.
> - `brandKitLink` (optional): brand guidelines / press kit.
> - `logo`: logo files users can download:
>   - `icon`: required.
>   - `text`: optional (wordmark logo).
>   - Each supports `light` and optionally `dark`.
>   - Each variant is an array so you can provide multiple formats (SVG, PNG, etc.).

- **Simple logo (one icon, light only)**:

```ts
{
  id: 'bitcoin',
  name: 'Bitcoin (BTC)',
  mainCategory: 'tokens',
  secondaryCategories: [],
  logo: {
    icon: {
      light: [{ url: '/library/bitcoin-icon-light.svg', format: 'svg' }]
    }
  }
}
```

- **Logo with light & dark variants and multiple formats**:

```ts
{
  id: 'solana',
  name: 'Solana (SOL)',
  mainCategory: 'chains',
  secondaryCategories: ['tokens'],
  logo: {
    icon: {
      light: [
        { url: '/library/solana-icon-light.svg', format: 'svg' },
        { url: '/library/solana-icon-light.png', format: 'png' }
      ],
      dark: [
        { url: '/library/solana-icon-dark.svg', format: 'svg' },
        { url: '/library/solana-icon-dark.png', format: 'png' }
      ]
    }
  }
}
```

- **Full example with all properties**:

```ts
{
  id: 'ethereum',
  name: 'Ethereum (ETH)',
  mainCategory: 'chains',
  secondaryCategories: ['tokens', 'defi'],
  websiteLink: 'https://ethereum.org',
  brandKitLink: 'https://ethereum.org/assets',
  logo: {
    icon: {
      light: [
        { url: '/library/ethereum-icon-light.svg', format: 'svg' },
        { url: '/library/ethereum-icon-light.png', format: 'png' }
      ],
      dark: [
        { url: '/library/ethereum-icon-dark.svg', format: 'svg' },
        { url: '/library/ethereum-icon-dark.png', format: 'png' }
      ]
    },
    text: {
      light: [{ url: '/library/ethereum-text-light.svg', format: 'svg' }],
      dark: [{ url: '/library/ethereum-text-dark.svg', format: 'svg' }]
    }
  }
}
```

> [!NOTE]
>
> - You can add multiple categories to the same logo, for example: `secondaryCategories: ['chains', 'tokens']`.
> - You can provide multiple formats per variant (SVG, PNG, JPG, WebP) so users can download the one they need.

And create a pull request with your logo.
