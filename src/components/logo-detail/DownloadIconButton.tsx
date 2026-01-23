'use client';

import { Download } from 'lucide-react';
import { toast } from 'sonner';

// helpers
import { downloadLogo } from '@/shared/helpers/logo-actions';

// components
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

// models
import type LogoAsset from '@/shared/models/logos/logo-asset';

interface DownloadIconButtonProps {
  assets: LogoAsset[];
  logoName: string;
  variant: 'light' | 'dark';
}

export default function DownloadIconButton({
  assets,
  logoName,
  variant,
}: DownloadIconButtonProps) {
  const isLight = variant === 'light';

  const buttonClass = isLight
    ? 'absolute z-1 top-3 right-12 h-8 w-8 bg-white/80 hover:bg-white/100 shadow-sm'
    : 'absolute z-1 top-3 right-12 h-8 w-8 bg-zinc-800/80 hover:bg-zinc-800/100 shadow-sm';

  const iconClass = isLight
    ? 'h-4 w-4 text-zinc-600'
    : 'h-4 w-4 text-zinc-400';

  function handleDownload(asset: LogoAsset) {
    const fileName = `${logoName.toLowerCase().replace(/\s+/g, '-')}-${variant}.${asset.format}`;
    downloadLogo(asset.url, fileName);
    toast.success(`${asset.format.toUpperCase()} downloaded`);
  }

  // If only one asset, download directly
  if (assets.length === 1) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={buttonClass}
        onClick={() => handleDownload(assets[0])}
      >
        <Download className={iconClass} />
      </Button>
    );
  }

  // Multiple assets - show popover
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className={buttonClass}>
          <Download className={iconClass} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2" align="end">
        <div className="flex flex-col gap-1">
          {assets.map((asset, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => handleDownload(asset)}
            >
              <Download className="mr-2 h-4 w-4" />
              Download {asset.format.toUpperCase()}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
