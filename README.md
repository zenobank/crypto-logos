## 🚀 Getting Started

> [!IMPORTANT]
> Before submitting an SVG, ensure you have the right to use it and that its license permits adding it to zeno. If you are uncertain, please contact the author or the company.

You will need:

- [Node.js 20+](https://nodejs.org/en/).
- [Git](https://git-scm.com/).

1. [**Fork this repository**](https://github.com/zenobank/crypto-logos/fork) and clone it locally:

```bash
git clone git@github.com:your_username/crypto-logos.git
```

2. Move into the project folder:

```
cd crypto-logos
```

3. Install dependencies:

```bash
# Install dependencies:
npm install
```

4. Run the development server:

```bash
# Run the development server:
npm run dev
```

5. Add your SVG file (or use a direct SVG URL).  
You have two options for providing the SVG:
- Option A — Add the .svg file into the repository:  
Put your file into: [**`public/library`**](https://github.com/zenobank/crypto-logos/tree/main/public/library).  
Example: [**`public/library/logo.svg`**](https://github.com/zenobank/crypto-logos/tree/main/public/library).

> [!WARNING]
>
> - Remember to optimize SVG for web, you can use [SVGOMG](https://jakearchibald.github.io/svgomg/).
> - When you optimize the SVG, make sure that the `viewBox` is not removed.
> - The size limit for each .svg is **21kb**.

- Option B — Use an external SVG link:   
If you already host the SVG somewhere reliable (CDN / official source), you can keep the logo as a URL in the data file.  
This is useful when you don’t want to commit the SVG file into the repo, but keep in mind external links can break later.

6. Add logo metadata (follow the [**`LogoItem`**](https://github.com/zenobank/crypto-logos/tree/main/src/shared/models/logos/logo-item.ts) model).   
Go to the [**`src/api/logos.json`**](https://github.com/zenobank/crypto-logos/tree/main/src/api/logos.json) and add the information about your logo, following the structure.   
Every logo entry must follow the [**`LogoItem`**](https://github.com/zenobank/crypto-logos/tree/main/src/shared/models/logos/logo-item.ts) model, so the app can render it correctly and keep the library consistent.   

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

type LogoFileFormat = "svg" | "png" | "jpg" | "webp" | "unknown";

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
> - `id`: unique key (use lowercase, no spaces, usually the brand name).
> - `name`: display name (example: `Stripe`).
> - `mainCategory`: primary category (example: `fintech`).
> - `secondaryCategories`: extra categories (example: `["payments", "billing"]`).
> - `websiteLink`: (optional): official website.
> - `brandKitLink`: (optional): brand guidelines / press kit.
> - `logo`: logo files users can download:  
> &nbsp;&nbsp;`icon`: required.  
> &nbsp;&nbsp;`text`: optional (text logo).  
> &nbsp;&nbsp; each supports `light` and optionally `dark`.  
> &nbsp;&nbsp; each variant is an array so you can provide multiple assets (formats/sizes) if needed.

- **Simple logo (one icon, light only)**:

```ts
{
  id: 'Id',
  name: 'Title',
  mainCategory: 'Main category',
  secondaryCategories: ['Secondary categories'],
  logo: {
    icon: {
      light: [{ url: 'https://example.com/icon-light.svg', format: 'svg' }]
    }
  }
}
```

- **Logo (light & dark mode)**:

```ts
{
  id: 'Id',
  name: 'Title',
  mainCategory: 'Main category',
  secondaryCategories: ['Secondary categories'],
  logo: {
    icon: {
      light: [{ url: 'https://example.com/icon-light.svg', format: 'svg' }],
      dark: [{ url: 'https://example.com/icon-dark.svg', format: 'svg' }]
    }
  }
}
```

- **Full example with all properties**:

```ts
{
  id: 'Id',
  name: 'Title',
  mainCategory: 'Main category',
  secondaryCategories: ['Secondary categories'],
  websiteLink: 'https://example.com',
  brandKitLink: 'https://example.com/brand',
  logo: {
    icon: {
      light: [{ url: 'https://example.com/icon-light.svg', format: 'svg' }],
      dark: [{ url: 'https://example.com/icon-dark.svg', format: 'svg' }]
    },
    text: {
      light: [{ url: 'https://example.com/text-icon-light.svg', format: 'svg' }],
      dark: [{ url: 'https://example.com/text-icon-dark.svg', format: 'svg' }]
    }
  }
}
```

- **Add brand guidelines** (where to find the images, how to use it, colors, fonts...):

```ts
{
  id: 'Id',
  name: 'Title',
  mainCategory: 'Main category',
  secondaryCategories: ['Secondary categories'],
  websiteLink: 'https://example.com',
  brandKitLink: 'https://example.com/brand',
  logo: {
    icon: {
      light: [{ url: 'https://example.com/icon-light.svg', format: 'svg' }],
      dark: [{ url: 'https://example.com/icon-dark.svg', format: 'svg' }]
    },
    text: {
      light: [{ url: 'https://example.com/text-icon-light.svg', format: 'svg' }],
      dark: [{ url: 'https://example.com/text-icon-dark.svg', format: 'svg' }]
    }
  }
}
```

> [!NOTE]
>
> - You can add multiple categories to the same logo, for example: `secondaryCategories: ['Social', 'Design']`.

And create a pull request with your logo ✨.
