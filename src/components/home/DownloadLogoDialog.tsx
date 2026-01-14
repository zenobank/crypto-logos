import { ReactNode } from 'react';
import { Download } from 'lucide-react';

// helpers
import { downloadLogo } from '@/shared/helpers/logo-actions';

// components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

// models
import type LogoItem from '@/shared/models/logos/logo-item';
import type LogoAsset from '@/shared/models/logos/logo-asset';

// custom models
interface DownloadLogoDialogProps {
  logo: LogoItem;
  children: ReactNode;
}

interface DownloadSectionProps {
  title: string;
  previewUrl: string;
  logoName: string;
  lightAssets: LogoAsset[];
  darkAssets?: LogoAsset[];
  filePrefix: string;
}

function DownloadSection({
  title,
  previewUrl,
  logoName,
  lightAssets,
  darkAssets,
  filePrefix,
}: DownloadSectionProps) {
  // computed
  const hasBothVariants = lightAssets.length > 0 && darkAssets && darkAssets.length > 0;
  const lightAsset = lightAssets[0];
  const darkAsset = darkAssets?.[0];

  // helpers
  function handleDownloadVariant(asset: LogoAsset, variantName: string): void {
    downloadLogo(asset.url, `${logoName}-${filePrefix}-${variantName}.${asset.format}`);
  }

  function handleDownloadBoth(): void {
    if (lightAsset) {
      downloadLogo(lightAsset.url, `${logoName}-${filePrefix}-light.${lightAsset.format}`);
    }
    if (darkAsset) {
      setTimeout(() => {
        downloadLogo(darkAsset.url, `${logoName}-${filePrefix}-dark.${darkAsset.format}`);
      }, 100);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg bg-card">
      <Image
        className="h-16 w-auto"
        src={previewUrl}
        alt={title}
        height={64}
        fallbackText={title}
      />

      <div className="flex flex-col gap-2 w-full">
        {hasBothVariants && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownloadBoth}
            className="w-full justify-start"
          >
            <Download className="h-4 w-4 mr-2" />
            Light & dark variants
            <span className="ml-auto text-xs text-muted-foreground">.zip</span>
          </Button>
        )}

        {lightAsset && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleDownloadVariant(lightAsset, 'light')}
            className="w-full justify-start"
          >
            <Download className="h-4 w-4 mr-2" />
            {hasBothVariants ? 'Only light variant' : 'Light variant'}
            <span className="ml-auto text-xs text-muted-foreground">.{lightAsset.format}</span>
          </Button>
        )}

        {darkAsset && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleDownloadVariant(darkAsset, 'dark')}
            className="w-full justify-start"
          >
            <Download className="h-4 w-4 mr-2" />
            {hasBothVariants ? 'Only dark variant' : 'Dark variant'}
            <span className="ml-auto text-xs text-muted-foreground">.{darkAsset.format}</span>
          </Button>
        )}
      </div>
    </div>
  );
}

export default function DownloadLogoDialog({ logo, children }: DownloadLogoDialogProps) {
  // computed
  const hasWordmark = Boolean(logo.downloadableFiles.text?.light?.[0]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Download {logo.name} SVGs</DialogTitle>
          <DialogDescription>
            This logo has multiple options to download:
          </DialogDescription>
        </DialogHeader>

        <div className={`grid gap-4 ${hasWordmark ? 'grid-cols-2' : 'grid-cols-1 max-w-sm mx-auto'}`}>
          <DownloadSection
            title="Icon only"
            previewUrl={logo.downloadableFiles.icon.light[0]?.url || logo.mainLogo.url}
            logoName={logo.id}
            lightAssets={logo.downloadableFiles.icon.light}
            darkAssets={logo.downloadableFiles.icon.dark}
            filePrefix="icon"
          />

          {hasWordmark && logo.downloadableFiles.text && (
            <DownloadSection
              title="With wordmark"
              previewUrl={logo.downloadableFiles.text.light[0].url}
              logoName={logo.id}
              lightAssets={logo.downloadableFiles.text.light}
              darkAssets={logo.downloadableFiles.text.dark}
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
      </DialogContent>
    </Dialog>
  );
}
