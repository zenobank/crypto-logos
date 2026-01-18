import { downloadZip } from 'client-zip';

export async function copyLogoToClipboard(logoUrl: string): Promise<void> {
  try {
    // Determine a file type from URL
    const fileExtension = logoUrl.split('.').pop()?.toLowerCase();
    const isSvg = fileExtension === 'svg';

    if (isSvg) {
      const response = await fetch(logoUrl);
      const logoContent = await response.text();
      await navigator.clipboard.writeText(logoContent);
    } else {
      const mimeType = `image/${(fileExtension || 'png')?.replace('jpg', 'jpeg')}`; // default

      async function getBlobPromise(): Promise<Blob> {
        const response = await fetch(logoUrl);
        return await response.blob();
      }

      const clipboardItem = new ClipboardItem({
        [mimeType]: getBlobPromise(),
      });

      await navigator.clipboard.write([clipboardItem]);
    }
  } catch (error) {
    console.error('Failed to copy logo:', error);
    throw error;
  }
}

export function downloadLogo(logoUrl: string, fileName: string): void {
  const link = document.createElement('a');
  link.href = logoUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function downloadAssetsAsZip(
  assets: Array<{ url: string; fileName: string }>,
  zipFileName: string,
): Promise<void> {
  try {
    // Fetch all assets and prepare files for zipping
    const files = await Promise.all(
      assets.map(async ({ url, fileName }) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return { name: fileName, input: blob };
      }),
    );

    // Create and download the zip file
    const zipBlob = await downloadZip(files).blob();

    // Download the zip file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipBlob);
    link.download = zipFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the object URL
    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error('Failed to create zip file:', error);
    throw error;
  }
}

async function fetchSVGContent(logoUrl: string): Promise<string> {
  const response = await fetch(logoUrl);
  return await response.text();
}

function extractSVGAttributes(svgContent: string): string {
  const match = svgContent.match(/<svg([^>]*)>/);
  if (!match) return 'viewBox="0 0 24 24"';
  return match[1].trim();
}

function extractSVGInner(svgContent: string): string {
  const match = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  if (!match) return '';
  return match[1].trim();
}

function toKebabCase(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-');
}

function toPascalCase(str: string): string {
  return str.replace(/(?:^|[\s-])(\w)/g, (_, char) => char.toUpperCase()).replace(/[\s-]/g, '');
}

export async function generateWebComponentTemplate(
  logoUrl: string,
  logoName: string,
): Promise<string> {
  const svgContent = await fetchSVGContent(logoUrl);
  const svgAttributes = extractSVGAttributes(svgContent);
  const svgInner = extractSVGInner(svgContent);
  const componentName = toKebabCase(logoName);

  return `class Icon${toPascalCase(logoName)} extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ \`
      <style>
        svg {
          width: var(--size, 128px);
          color: var(--color, currentColor);
        }
      </style>
      <svg ${svgAttributes}>
        ${svgInner}
      </svg>
    \`;
  }
}
customElements.define("icon-${componentName}", Icon${toPascalCase(logoName)});`;
}

export async function generateReactTSXTemplate(
  logoUrl: string,
  logoName: string,
): Promise<string> {
  const svgContent = await fetchSVGContent(logoUrl);
  const svgAttributes = extractSVGAttributes(svgContent);
  const svgInner = extractSVGInner(svgContent);
  const componentName = toPascalCase(logoName);

  return `interface ${componentName}IconProps {
  className?: string;
  size?: number | string;
}

export default function ${componentName}Icon({
  className,
  size = 24,
}: ${componentName}IconProps) {
  return (
    <svg ${svgAttributes} width={size} height={size} className={className}>
      ${svgInner}
    </svg>
  );
}`;
}

export async function generateReactJSXTemplate(
  logoUrl: string,
  logoName: string,
): Promise<string> {
  const svgContent = await fetchSVGContent(logoUrl);
  const svgAttributes = extractSVGAttributes(svgContent);
  const svgInner = extractSVGInner(svgContent);
  const componentName = toPascalCase(logoName);

  return `export default function ${componentName}Icon({ className, size = 24 }) {
  return (
    <svg ${svgAttributes} width={size} height={size} className={className}>
      ${svgInner}
    </svg>
  );
}`;
}

export async function generateVueTSTemplate(logoUrl: string): Promise<string> {
  const svgContent = await fetchSVGContent(logoUrl);
  const svgAttributes = extractSVGAttributes(svgContent);
  const svgInner = extractSVGInner(svgContent);

  return `<script setup lang="ts">
interface Props {
  className?: string;
  size?: number | string;
}

withDefaults(defineProps<Props>(), {
  size: 24,
});
</script>

<template>
  <svg ${svgAttributes} :width="size" :height="size" :class="className">
    ${svgInner}
  </svg>
</template>`;
}

export async function generateVueJSTemplate(logoUrl: string): Promise<string> {
  const svgContent = await fetchSVGContent(logoUrl);
  const svgAttributes = extractSVGAttributes(svgContent);
  const svgInner = extractSVGInner(svgContent);

  return `<script setup>
defineProps({
  className: {
    type: String,
    default: '',
  },
  size: {
    type: [Number, String],
    default: 24,
  },
});
</script>

<template>
  <svg ${svgAttributes} :width="size" :height="size" :class="className">
    ${svgInner}
  </svg>
</template>`;
}

export async function generateSvelteTSTemplate(logoUrl: string): Promise<string> {
  const svgContent = await fetchSVGContent(logoUrl);
  const svgAttributes = extractSVGAttributes(svgContent);
  const svgInner = extractSVGInner(svgContent);

  return `<script lang="ts">
  let className: string = '';
  export { className as class };
  export let size: number | string = 24;
</script>

<svg ${svgAttributes} width={size} height={size} class={className}>
  ${svgInner}
</svg>`;
}

export async function generateSvelteJSTemplate(logoUrl: string): Promise<string> {
  const svgContent = await fetchSVGContent(logoUrl);
  const svgAttributes = extractSVGAttributes(svgContent);
  const svgInner = extractSVGInner(svgContent);

  return `<script>
  let className = '';
  export { className as class };
  export let size = 24;
</script>

<svg ${svgAttributes} width={size} height={size} class={className}>
  ${svgInner}
</svg>`;
}

export async function generateAngularTemplate(
  logoUrl: string,
  logoName: string,
): Promise<string> {
  const svgContent = await fetchSVGContent(logoUrl);
  const svgAttributes = extractSVGAttributes(svgContent);
  const svgInner = extractSVGInner(svgContent);
  const componentName = toPascalCase(logoName);
  const selector = toKebabCase(logoName);

  return `import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'icon-${selector}',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <svg ${svgAttributes} [attr.width]="size" [attr.height]="size" [ngClass]="className">
      ${svgInner}
    </svg>
  \`,
})
export class ${componentName}IconComponent {
  @Input() className?: string;
  @Input() size: number | string = 24;
}`;
}

export async function generateAstroTemplate(logoUrl: string): Promise<string> {
  const svgContent = await fetchSVGContent(logoUrl);
  const svgAttributes = extractSVGAttributes(svgContent);
  const svgInner = extractSVGInner(svgContent);

  return `---
interface Props {
  class?: string;
  size?: number | string;
}

const { class: className, size = 24 } = Astro.props;
---

<svg ${svgAttributes} width={size} height={size} class={className}>
  ${svgInner}
</svg>`;
}
