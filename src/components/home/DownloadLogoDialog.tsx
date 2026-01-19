import { ReactNode, MouseEvent } from 'react';

// helpers
import { downloadLogo } from '@/shared/helpers/logo-actions';

// components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle, DialogTrigger,
} from '@/components/ui/dialog';
import DownloadSection from '@/components/home/DownloadSection';

// models
import type LogoItem from '@/shared/models/logos/logo-item';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

// custom models
interface DownloadLogoDialogProps {
  logo: LogoItem;
  children: ReactNode;
}

export default function DownloadLogoDialog({ logo, children }: DownloadLogoDialogProps) {
  // computed
  const hasWordmark = Boolean(logo.logo.text?.light?.[0]);
  const hasDarkIcon = Boolean(logo.logo.icon.dark?.[0]);
  const hasMultipleFormats = logo.logo.icon.light.length > 1;

  // Check if there's only one image: single icon.light, no dark, no text, no multiple formats
  const hasOnlyOneImage = !hasDarkIcon && !hasWordmark && !hasMultipleFormats;

  // helpers
  function handleDownload(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();

    const asset = logo.logo.icon.light[0];
    if (asset) {
      downloadLogo(asset.url, `${logo.id}-icon-light.${asset.format}`);
    }
  }

  return (
    <Dialog>
      {
        hasOnlyOneImage ?
          <div onClick={handleDownload}>
            {children}
          </div>
          : <DialogTrigger asChild>{children}</DialogTrigger>
      }
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Download {logo.name} SVGs</DialogTitle>
          <DialogDescription>
            This logo has multiple options to download:
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(100dvh-10rem)]">
          <div className={cn('grid gap-4 max-md:gap-2 max-md:flex max-md:flex-col', hasWordmark ? 'grid-cols-2' : 'grid-cols-1 max-w-sm mx-auto')}>
            <DownloadSection
              title="Icon only"
              logoName={logo.id}
              lightAssets={logo.logo.icon.light}
              darkAssets={logo.logo.icon.dark}
              filePrefix="icon"
            />

            {hasWordmark && logo.logo.text && (
              <DownloadSection
                title="With wordmark"
                logoName={logo.id}
                lightAssets={logo.logo.text.light}
                darkAssets={logo.logo.text.dark}
                filePrefix="wordmark"
              />
            )}
          </div>

          <div className="mt-2 flex w-full items-center text-center text-xs text-muted-foreground">
            <p>
              Please ensure you have permission from the creators before using the SVG.
              Modifications are not permitted.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
