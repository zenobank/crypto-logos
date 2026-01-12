// models
import type LogoItem from "@/shared/models/logos/logo-item";

const LOGOS_DATA: LogoItem[] = [
  {
    id: "stripe",
    name: "Stripe",
    mainCategory: "fintech",
    secondaryCategories: ["payments", "billing"],
    websiteLink: "https://stripe.com",
    brandKitLink: "https://stripe.com/brand",
    mainLogo: { url: "https://example.com/logos/stripe/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/stripe/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/stripe/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/stripe/text-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/stripe/text-dark.svg", format: "svg" },
      },
    },
  },
  {
    id: "shopify",
    name: "Shopify",
    mainCategory: "ecommerce",
    secondaryCategories: ["commerce", "store"],
    websiteLink: "https://www.shopify.com",
    brandKitLink: "https://www.shopify.com/press",
    mainLogo: { url: "https://example.com/logos/shopify/main.png", format: "png" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/shopify/icon-light.png", format: "png" },
      },
      text: {
        light: { url: "https://example.com/logos/shopify/text-light.png", format: "png" },
      },
    },
  },
  {
    id: "notion",
    name: "Notion",
    mainCategory: "productivity",
    secondaryCategories: ["docs", "notes", "workspace"],
    websiteLink: "https://www.notion.so",
    brandKitLink: "https://www.notion.so/press",
    mainLogo: { url: "https://example.com/logos/notion/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/notion/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/notion/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/notion/text-light.svg", format: "svg" },
      },
    },
  },
  {
    id: "vercel",
    name: "Vercel",
    mainCategory: "devtools",
    secondaryCategories: ["hosting", "deployment", "nextjs"],
    websiteLink: "https://vercel.com",
    brandKitLink: "https://vercel.com/press",
    mainLogo: { url: "https://example.com/logos/vercel/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/vercel/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/vercel/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/vercel/text-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/vercel/text-dark.svg", format: "svg" },
      },
    },
  },
  {
    id: "openai",
    name: "OpenAI",
    mainCategory: "ai",
    secondaryCategories: ["ml", "research"],
    websiteLink: "https://openai.com",
    brandKitLink: "https://openai.com/brand",
    mainLogo: { url: "https://example.com/logos/openai/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/openai/icon-light.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/openai/text-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/openai/text-dark.svg", format: "svg" },
      },
    },
  },

  {
    id: "paypal",
    name: "PayPal",
    mainCategory: "fintech",
    secondaryCategories: ["payments", "wallet"],
    websiteLink: "https://www.paypal.com",
    brandKitLink: "https://www.paypal.com/us/webapps/mpp/logo-center",
    mainLogo: { url: "https://example.com/logos/paypal/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/paypal/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/paypal/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/paypal/text-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/paypal/text-dark.svg", format: "svg" },
      },
    },
  },
  {
    id: "wise",
    name: "Wise",
    mainCategory: "fintech",
    secondaryCategories: ["payments", "transfer"],
    websiteLink: "https://wise.com",
    brandKitLink: "https://wise.com/press",
    mainLogo: { url: "https://example.com/logos/wise/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/wise/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/wise/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/wise/text-light.svg", format: "svg" },
      },
    },
  },
  {
    id: "revolut",
    name: "Revolut",
    mainCategory: "fintech",
    secondaryCategories: ["banking", "payments"],
    websiteLink: "https://www.revolut.com",
    brandKitLink: "https://www.revolut.com/press/",
    mainLogo: { url: "https://example.com/logos/revolut/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/revolut/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/revolut/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/revolut/text-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/revolut/text-dark.svg", format: "svg" },
      },
    },
  },

  {
    id: "woocommerce",
    name: "WooCommerce",
    mainCategory: "ecommerce",
    secondaryCategories: ["commerce", "payments"],
    websiteLink: "https://woocommerce.com",
    brandKitLink: "https://woocommerce.com/press/",
    mainLogo: { url: "https://example.com/logos/woocommerce/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/woocommerce/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/woocommerce/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/woocommerce/text-light.svg", format: "svg" },
      },
    },
  },
  {
    id: "bigcommerce",
    name: "BigCommerce",
    mainCategory: "ecommerce",
    secondaryCategories: ["commerce", "platform"],
    websiteLink: "https://www.bigcommerce.com",
    brandKitLink: "https://www.bigcommerce.com/press/",
    mainLogo: { url: "https://example.com/logos/bigcommerce/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/bigcommerce/icon-light.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/bigcommerce/text-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/bigcommerce/text-dark.svg", format: "svg" },
      },
    },
  },

  {
    id: "slack",
    name: "Slack",
    mainCategory: "productivity",
    secondaryCategories: ["communication", "collaboration"],
    websiteLink: "https://slack.com",
    brandKitLink: "https://slack.com/intl/en-vn/brand-guidelines",
    mainLogo: { url: "https://example.com/logos/slack/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/slack/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/slack/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/slack/text-light.svg", format: "svg" },
      },
    },
  },
  {
    id: "asana",
    name: "Asana",
    mainCategory: "productivity",
    secondaryCategories: ["project-management", "tasks"],
    websiteLink: "https://asana.com",
    brandKitLink: "https://asana.com/brand",
    mainLogo: { url: "https://example.com/logos/asana/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/asana/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/asana/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/asana/text-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/asana/text-dark.svg", format: "svg" },
      },
    },
  },
  {
    id: "trello",
    name: "Trello",
    mainCategory: "productivity",
    secondaryCategories: ["kanban", "tasks"],
    websiteLink: "https://trello.com",
    brandKitLink: "https://www.atlassian.com/company/news/press-kit",
    mainLogo: { url: "https://example.com/logos/trello/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/trello/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/trello/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/trello/text-light.svg", format: "svg" },
      },
    },
  },

  {
    id: "github",
    name: "GitHub",
    mainCategory: "devtools",
    secondaryCategories: ["git", "collaboration", "ci-cd"],
    websiteLink: "https://github.com",
    brandKitLink: "https://github.com/logos",
    mainLogo: { url: "https://example.com/logos/github/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/github/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/github/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/github/text-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/github/text-dark.svg", format: "svg" },
      },
    },
  },
  {
    id: "gitlab",
    name: "GitLab",
    mainCategory: "devtools",
    secondaryCategories: ["git", "ci-cd", "devops"],
    websiteLink: "https://gitlab.com",
    brandKitLink: "https://about.gitlab.com/press/press-kit/",
    mainLogo: { url: "https://example.com/logos/gitlab/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/gitlab/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/gitlab/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/gitlab/text-light.svg", format: "svg" },
      },
    },
  },

  {
    id: "anthropic",
    name: "Anthropic",
    mainCategory: "ai",
    secondaryCategories: ["ml", "research", "llm"],
    websiteLink: "https://www.anthropic.com",
    brandKitLink: "https://www.anthropic.com/news",
    mainLogo: { url: "https://example.com/logos/anthropic/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/anthropic/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/anthropic/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/anthropic/text-light.svg", format: "svg" },
      },
    },
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    mainCategory: "ai",
    secondaryCategories: ["ml", "open-source", "platform"],
    websiteLink: "https://huggingface.co",
    brandKitLink: "https://huggingface.co/brand",
    mainLogo: { url: "https://example.com/logos/huggingface/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/huggingface/icon-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/huggingface/icon-dark.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/huggingface/text-light.svg", format: "svg" },
      },
    },
  },
  {
    id: "stabilityai",
    name: "Stability AI",
    mainCategory: "ai",
    secondaryCategories: ["generative-ai", "ml"],
    websiteLink: "https://stability.ai",
    brandKitLink: "https://stability.ai/press",
    mainLogo: { url: "https://example.com/logos/stabilityai/main.svg", format: "svg" },
    downloadableFiles: {
      icon: {
        light: { url: "https://example.com/logos/stabilityai/icon-light.svg", format: "svg" },
      },
      text: {
        light: { url: "https://example.com/logos/stabilityai/text-light.svg", format: "svg" },
        dark: { url: "https://example.com/logos/stabilityai/text-dark.svg", format: "svg" },
      },
    },
  },
];

export default LOGOS_DATA;