'use client';

import { ReactNode, useState, MouseEvent } from 'react';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';
import { useTheme } from 'next-themes';

// helpers
import {
  copyLogoToClipboard,
  generateWebComponentTemplate,
  generateReactTSXTemplate,
  generateReactJSXTemplate,
  generateVueTSTemplate,
  generateVueJSTemplate,
  generateSvelteTSTemplate,
  generateSvelteJSTemplate,
  generateAngularTemplate,
  generateAstroTemplate,
} from '@/shared/helpers/logo-actions';

// components
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
// import ShadcnIcon from '@/components/icons/ShadcnIcon';
import WebComponentIcon from '@/components/icons/WebComponentIcon';
import ReactIcon from '@/components/icons/ReactIcon';
import VueIcon from '@/components/icons/VueIcon';
import SvelteIcon from '@/components/icons/SvelteIcon';
import AngularIcon from '@/components/icons/AngularIcon';
import AstroIcon from '@/components/icons/AstroIcon';

// models
import type LogoItemsResponse from '@/shared/models/logos/logo-items-response';
import LogoAsset from '@/shared/models/logos/logo-asset';

// custom models
interface CopyLogoPopoverProps {
  logo: LogoItemsResponse;
  showWordmark: boolean;
  children: ReactNode;
}

enum Framework {
  Source = 'source',
  // Shadcn = 'shadcn',
  WebComponent = 'web-component',
  React = 'react',
  Vue = 'vue',
  Svelte = 'svelte',
  Angular = 'angular',
  Astro = 'astro',
}

// custom constants
const frameworks = [
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { id: Framework.Source, label: 'Source', icon: ({ className }: { className?: string }) => 'Source' },
  // { id: Framework.Shadcn, label: 'shadcn/ui', icon: ShadcnIcon },
  { id: Framework.WebComponent, label: 'Web Component', icon: WebComponentIcon },
  { id: Framework.React, label: 'React', icon: ReactIcon },
  { id: Framework.Vue, label: 'Vue', icon: VueIcon },
  { id: Framework.Svelte, label: 'Svelte', icon: SvelteIcon },
  { id: Framework.Angular, label: 'Angular', icon: AngularIcon },
  { id: Framework.Astro, label: 'Astro', icon: AstroIcon },
] as const;

export default function CopyLogoPopover({ logo, showWordmark, children }: CopyLogoPopoverProps) {
  // states
  const [selectedFramework, setSelectedFramework] = useState<Framework>(Framework.Source);
  const [open, setOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  // computed
  const ActiveIcon = frameworks.find((framework) => framework.id === selectedFramework)?.icon;
  const hasWordmark = Boolean(logo.logo.text?.light?.[0]);
  const isDarkTheme = resolvedTheme === 'dark';
  const currentAsset = getCurrentLogoAsset();
  const allVariantAssets = getAllVariantAssets();
  const hasSvgInVariants = allVariantAssets.some((item) => item.asset.format === 'svg');
  const hasOnlyOneNonSvgAsset = allVariantAssets.length === 1 && !hasSvgInVariants;
  const svgVariants = allVariantAssets.filter((item) => item.asset.format === 'svg');
  const hasLightSvg = svgVariants.some((item) => item.theme === 'light');
  const hasDarkSvg = svgVariants.some((item) => item.theme === 'dark');
  const hasBothSvgVariants = hasLightSvg && hasDarkSvg;

  // helpers
  // Get all assets for the current variant (icon/text) including both light and dark
  function getAllVariantAssets(): Array<{ asset: LogoAsset; theme: 'light' | 'dark' }> {
    const variant = showWordmark && hasWordmark ? logo.logo.text : logo.logo.icon;
    if (!variant) {
      return logo.logo.icon.light.map((asset) => ({ asset, theme: 'light' as const }));
    }

    const result: Array<{ asset: LogoAsset; theme: 'light' | 'dark' }> = [];

    // Add light variants
    variant.light.forEach((asset) => {
      result.push({ asset, theme: 'light' });
    });

    // Add dark variants
    if (variant.dark && variant.dark.length > 0) {
      variant.dark.forEach((asset) => {
        result.push({ asset, theme: 'dark' });
      });
    }

    return result;
  }

  // Get the current logo asset based on variant (icon/text) and theme (light/dark)
  function getCurrentLogoAsset(): LogoAsset {
    const variant = showWordmark && hasWordmark ? logo.logo.text : logo.logo.icon;
    if (!variant) {
      return logo.logo.icon.light[0];
    }

    // Try to get dark variant for a dark theme, fallback to light
    const themeAssets = (isDarkTheme && variant.dark && variant.dark.length > 0)
      ? variant.dark
      : variant.light;

    // Prefer SVG if available, otherwise return first asset
    return themeAssets.find((asset) => asset.format === 'svg') || themeAssets[0];
  }

  function handleTriggerClick(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    handleCopyImage();
  }

  // async helpers
  async function handleCopyImage(): Promise<void> {
    try {
      await copyLogoToClipboard(currentAsset.url);
      toast.success(`${currentAsset.format.toUpperCase()} copied to clipboard!`);
    } catch {
      toast.error('Failed to copy image');
    }
  }

  async function handleCopyTemplate(
    generator: (url: string, name: string) => Promise<string>,
    successMessage: string,
    preferredTheme?: 'light' | 'dark'
  ): Promise<void> {
    try {
      // Find SVG asset for templates (prefer SVG for code generation)
      const svgItem = preferredTheme
        ? allVariantAssets.find((item) => item.asset.format === 'svg' && item.theme === preferredTheme)
        : allVariantAssets.find((item) => item.asset.format === 'svg');

      const assetToUse = svgItem ? svgItem.asset : currentAsset;

      const template = await generator(assetToUse.url, logo.name);
      await navigator.clipboard.writeText(template);
      toast.success(successMessage);
    } catch {
      toast.error('Failed to copy template');
    }
  }

  async function handleCopyAsset(asset: LogoAsset): Promise<void> {
    try {
      await copyLogoToClipboard(asset.url);
      toast.success(`${asset.format.toUpperCase()} copied to clipboard!`);
    } catch {
      toast.error('Failed to copy image');
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {
        hasOnlyOneNonSvgAsset ? (
          <div onClick={handleTriggerClick}>
            {children}
          </div>
        ) : (
          <PopoverTrigger asChild>
            {children}
          </PopoverTrigger>
        )
      }
      <PopoverContent className="w-auto max-w-96 p-4 flex flex-col space-y-2" align="center">
        {/* Framework Selection */}
        <div className="flex items-center justify-center gap-1">
          {frameworks.map((framework) => {
            const IconComponent = framework.icon;
            return (
              <Button
                key={framework.id}
                variant={selectedFramework === framework.id ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setSelectedFramework(framework.id as Framework)}
                title={framework.label}
              >
                <IconComponent className="h-5 w-5" />
              </Button>
            );
          })}
        </div>

        {/* Copy Button */}
        {selectedFramework === Framework.Source && (
          <div className="space-y-2">
            {allVariantAssets.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleCopyAsset(item.asset)}
                className="w-full justify-start"
                variant="outline"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy {item.theme === 'dark' ? 'Dark' : 'Light'} {item.asset.format.toUpperCase()}
              </Button>
            ))}
          </div>
        )}

        {/*{selectedFramework === Framework.Shadcn && (*/}
        {/*  <Button*/}
        {/*    onClick={handleCopyImage}*/}
        {/*    className="w-full justify-start"*/}
        {/*    variant="outline"*/}
        {/*  >*/}
        {/*    <Copy className="h-4 w-4 mr-2" />*/}
        {/*    Copy {currentAsset.format.toUpperCase()}*/}
        {/*  </Button>*/}
        {/*)}*/}

        {selectedFramework === Framework.WebComponent && (
          <div className="space-y-2">
            {hasBothSvgVariants ? (
              <>
                <Button
                  onClick={() => handleCopyTemplate(generateWebComponentTemplate, 'Light Web Component copied!', 'light')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Light Component
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateWebComponentTemplate, 'Dark Web Component copied!', 'dark')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Dark Component
                </Button>
              </>
            ) : (
              <Button
                onClick={() => handleCopyTemplate(generateWebComponentTemplate, 'Web Component copied!')}
                className="w-full justify-start"
                variant="outline"
              >
                {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                Copy Component
              </Button>
            )}
          </div>
        )}

        {selectedFramework === Framework.React && (
          <div className="space-y-2">
            {hasBothSvgVariants ? (
              <>
                <Button
                  onClick={() => handleCopyTemplate(generateReactTSXTemplate, 'Light React TSX copied!', 'light')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Light TSX
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateReactTSXTemplate, 'Dark React TSX copied!', 'dark')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Dark TSX
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateReactJSXTemplate, 'Light React JSX copied!', 'light')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Light JSX
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateReactJSXTemplate, 'Dark React JSX copied!', 'dark')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Dark JSX
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => handleCopyTemplate(generateReactTSXTemplate, 'React TSX copied!')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy TSX
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateReactJSXTemplate, 'React JSX copied!')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy JSX
                </Button>
              </>
            )}
          </div>
        )}

        {selectedFramework === Framework.Vue && (
          <div className="space-y-2">
            {hasBothSvgVariants ? (
              <>
                <Button
                  onClick={() => handleCopyTemplate(generateVueTSTemplate, 'Light Vue TS component copied!', 'light')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Light TS
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateVueTSTemplate, 'Dark Vue TS component copied!', 'dark')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Dark TS
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateVueJSTemplate, 'Light Vue JS component copied!', 'light')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Light JS
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateVueJSTemplate, 'Dark Vue JS component copied!', 'dark')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Dark JS
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => handleCopyTemplate(generateVueTSTemplate, 'Vue TS component copied!')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy TS
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateVueJSTemplate, 'Vue JS component copied!')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy JS
                </Button>
              </>
            )}
          </div>
        )}

        {selectedFramework === Framework.Svelte && (
          <div className="space-y-2">
            {hasBothSvgVariants ? (
              <>
                <Button
                  onClick={() => handleCopyTemplate(generateSvelteTSTemplate, 'Light Svelte TS component copied!', 'light')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Light TS
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateSvelteTSTemplate, 'Dark Svelte TS component copied!', 'dark')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Dark TS
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateSvelteJSTemplate, 'Light Svelte JS component copied!', 'light')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Light JS
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateSvelteJSTemplate, 'Dark Svelte JS component copied!', 'dark')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Dark JS
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => handleCopyTemplate(generateSvelteTSTemplate, 'Svelte TS component copied!')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy TS
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateSvelteJSTemplate, 'Svelte JS component copied!')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy JS
                </Button>
              </>
            )}
          </div>
        )}

        {selectedFramework === Framework.Angular && (
          <div className="space-y-2">
            {hasBothSvgVariants ? (
              <>
                <Button
                  onClick={() => handleCopyTemplate(generateAngularTemplate, 'Light Angular component copied!', 'light')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Light Component
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateAngularTemplate, 'Dark Angular component copied!', 'dark')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Dark Component
                </Button>
              </>
            ) : (
              <Button
                onClick={() => handleCopyTemplate(generateAngularTemplate, 'Angular component copied!')}
                className="w-full justify-start"
                variant="outline"
              >
                {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                Copy Standalone Component
              </Button>
            )}
          </div>
        )}

        {selectedFramework === Framework.Astro && (
          <div className="space-y-2">
            {hasBothSvgVariants ? (
              <>
                <Button
                  onClick={() => handleCopyTemplate(generateAstroTemplate, 'Light Astro component copied!', 'light')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Light Component
                </Button>
                <Button
                  onClick={() => handleCopyTemplate(generateAstroTemplate, 'Dark Astro component copied!', 'dark')}
                  className="w-full justify-start"
                  variant="outline"
                >
                  {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                  Copy Dark Component
                </Button>
              </>
            ) : (
              <Button
                onClick={() => handleCopyTemplate(generateAstroTemplate, 'Astro component copied!')}
                className="w-full justify-start"
                variant="outline"
              >
                {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
                Copy Component
              </Button>
            )}
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-1 flex w-full items-center text-center text-[12px] text-muted-foreground">
          <p>
            Please ensure you have permission from the creators before using the logo.
            Modifications are not permitted.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
