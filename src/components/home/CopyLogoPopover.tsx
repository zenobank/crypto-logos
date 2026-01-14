'use client';

import { ReactNode, useState } from 'react';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

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
import ShadcnIcon from '@/components/icons/ShadcnIcon';
import WebComponentIcon from '@/components/icons/WebComponentIcon';
import ReactIcon from '@/components/icons/ReactIcon';
import VueIcon from '@/components/icons/VueIcon';
import SvelteIcon from '@/components/icons/SvelteIcon';
import AngularIcon from '@/components/icons/AngularIcon';
import AstroIcon from '@/components/icons/AstroIcon';

// models
import type LogoItem from '@/shared/models/logos/logo-item';

// custom models
interface CopyLogoPopoverProps {
  logo: LogoItem;
  children: ReactNode;
}

enum Framework {
  Source = 'source',
  Shadcn = 'shadcn',
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
  { id: Framework.Shadcn, label: 'shadcn/ui', icon: ShadcnIcon },
  { id: Framework.WebComponent, label: 'Web Component', icon: WebComponentIcon },
  { id: Framework.React, label: 'React', icon: ReactIcon },
  { id: Framework.Vue, label: 'Vue', icon: VueIcon },
  { id: Framework.Svelte, label: 'Svelte', icon: SvelteIcon },
  { id: Framework.Angular, label: 'Angular', icon: AngularIcon },
  { id: Framework.Astro, label: 'Astro', icon: AstroIcon },
] as const;

export default function CopyLogoPopover({ logo, children }: CopyLogoPopoverProps) {
  // states
  const [selectedFramework, setSelectedFramework] = useState<Framework>(Framework.Source);

  // computed
  const ActiveIcon = frameworks.find((framework) => framework.id === selectedFramework)?.icon;

  // helpers
  async function handleCopySVG(): Promise<void> {
    try {
      await copyLogoToClipboard(logo.mainLogo.url);
      toast.success('SVG copied to clipboard!');
    } catch {
      toast.error('Failed to copy SVG');
    }
  }

  async function handleCopyTemplate(generator: (url: string, name: string) => Promise<string>, successMessage: string): Promise<void> {
    try {
      const template = await generator(logo.mainLogo.url, logo.name);
      await navigator.clipboard.writeText(template);
      toast.success(successMessage);
    } catch {
      toast.error('Failed to copy template');
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
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
          <Button
            onClick={handleCopySVG}
            className="w-full justify-start"
            variant="outline"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy SVG
          </Button>
        )}

        {selectedFramework === Framework.Shadcn && (
          <Button
            onClick={handleCopySVG}
            className="w-full justify-start"
            variant="outline"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy SVG
          </Button>
        )}

        {selectedFramework === Framework.WebComponent && (
          <Button
            onClick={() => handleCopyTemplate(generateWebComponentTemplate, 'Web Component copied!')}
            className="w-full justify-start"
            variant="outline"
          >
            {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
            Copy Web Component
          </Button>
        )}

        {selectedFramework === Framework.React && (
          <div className="space-y-2">
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
          </div>
        )}

        {selectedFramework === Framework.Vue && (
          <div className="space-y-2">
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
          </div>
        )}

        {selectedFramework === Framework.Svelte && (
          <div className="space-y-2">
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
          </div>
        )}

        {selectedFramework === Framework.Angular && (
          <Button
            onClick={() => handleCopyTemplate(generateAngularTemplate, 'Angular component copied!')}
            className="w-full justify-start"
            variant="outline"
          >
            {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
            Copy Standalone Component
          </Button>
        )}

        {selectedFramework === Framework.Astro && (
          <Button
            onClick={() => handleCopyTemplate(generateAstroTemplate, 'Astro component copied!')}
            className="w-full justify-start"
            variant="outline"
          >
            {ActiveIcon && <ActiveIcon className="h-4 w-4" />}
            Copy Component
          </Button>
        )}

        {/* Disclaimer */}
        <div className="mt-1 flex w-full items-center text-center text-[12px] text-muted-foreground">
          <p>
            Please ensure you have permission from the creators before using the SVG.
            Modifications are not permitted.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
