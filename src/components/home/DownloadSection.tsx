'use client';

import { Download } from 'lucide-react';
import { useTheme } from 'next-themes';

// helpers
import { downloadLogo, downloadAssetsAsZip } from '@/shared/helpers/logo-actions';

// components
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

// models
import type LogoAsset from '@/shared/models/logos/logo-asset';

// custom models
interface DownloadSectionProps {
  title: string;
  logoName: string;
  lightAssets: LogoAsset[];
  darkAssets?: LogoAsset[];
  filePrefix: string;
}

export default function DownloadSection({
  title,
  logoName,
  lightAssets,
  darkAssets,
  filePrefix,
}: DownloadSectionProps) {
  // hooks
  const { resolvedTheme } = useTheme();

  // computed
  const hasBothVariants = lightAssets.length > 0 && darkAssets && darkAssets.length > 0;
  const previewUrl = (resolvedTheme === 'dark' && darkAssets?.[0]?.url) || lightAssets[0]?.url;
  const alternativeSrcs = [...lightAssets, ...(darkAssets || [])].map(el => el.url);
  const hasMultipleFormats = lightAssets.length > 1 || (darkAssets && darkAssets.length > 1);

  // helpers
  function handleDownloadVariant(asset: LogoAsset, variantName: string): void {
    downloadLogo(asset.url, `${logoName}-${filePrefix}-${variantName}.${asset.format}`);
  }

  async function handleDownloadAll(): Promise<void> {
    const assets = [];

    for (const asset of lightAssets) {
      assets.push({
        url: asset.url,
        fileName: `${logoName}-${filePrefix}-light.${asset.format}`,
      });
    }

    if (darkAssets) {
      for (const asset of darkAssets) {
        assets.push({
          url: asset.url,
          fileName: `${logoName}-${filePrefix}-dark.${asset.format}`,
        });
      }
    }

    await downloadAssetsAsZip(assets, `${logoName}-${filePrefix}.zip`);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg bg-card">
      <Image
        className="h-16 w-auto"
        src={previewUrl}
        alt={title}
        alternativeSrcs={alternativeSrcs}
        height={240}
        width={240}
        fallbackText={title}
      />

      <div className="flex flex-col gap-2 w-full">
        {(hasBothVariants || hasMultipleFormats) && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownloadAll}
            className="w-full justify-start"
          >
            <Download className="h-4 w-4 mr-2" />
            {hasBothVariants ? 'All variants & formats' : 'All formats'}
            <span className="ml-auto text-xs text-muted-foreground">.zip</span>
          </Button>
        )}

        {lightAssets.map((asset, index) => (
          <Button
            key={`light-${index}`}
            variant="outline"
            size="sm"
            onClick={() => handleDownloadVariant(asset, 'light')}
            className="w-full justify-start"
          >
            <Download className="h-4 w-4 mr-2" />
            Light {lightAssets.length > 1 ? asset.format.toUpperCase() : 'variant'}
            <span className="ml-auto text-xs text-muted-foreground">.{asset.format}</span>
          </Button>
        ))}

        {darkAssets?.map((asset, index) => (
          <Button
            key={`dark-${index}`}
            variant="outline"
            size="sm"
            onClick={() => handleDownloadVariant(asset, 'dark')}
            className="w-full justify-start"
          >
            <Download className="h-4 w-4 mr-2" />
            Dark {darkAssets.length > 1 ? asset.format.toUpperCase() : 'variant'}
            <span className="ml-auto text-xs text-muted-foreground">.{asset.format}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
