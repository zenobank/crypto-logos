'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

// helpers
import { copyLogoToClipboard } from '@/shared/helpers/logo-actions';

// components
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

// models
import type LogoAsset from '@/shared/models/logos/logo-asset';

interface CopyButtonProps {
  assets: LogoAsset[];
  variant: 'light' | 'dark';
}

export default function CopyButton({ assets, variant }: CopyButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const isLight = variant === 'light';

  const buttonClass = isLight
    ? 'absolute z-1 top-3 right-3 h-8 w-8 bg-white/80 hover:bg-white/100 shadow-sm'
    : 'absolute z-1 top-3 right-3 h-8 w-8 bg-zinc-800/80 hover:bg-zinc-800/100 shadow-sm';

  const iconClass = isLight ? 'h-4 w-4 text-zinc-600' : 'h-4 w-4 text-zinc-400';

  const checkClass = isLight
    ? 'h-4 w-4 text-green-600'
    : 'h-4 w-4 text-green-400';

  async function handleCopy(asset: LogoAsset) {
    try {
      await copyLogoToClipboard(asset.url);
      toast.success(`${asset.format.toUpperCase()} copied to clipboard`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  }

  // If only one asset, copy directly
  if (assets.length === 1) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={buttonClass}
        onClick={() => handleCopy(assets[0])}
      >
        {copied ? (
          <Check className={checkClass} />
        ) : (
          <Copy className={iconClass} />
        )}
      </Button>
    );
  }

  // Multiple assets - show popover
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className={buttonClass}>
          {copied ? (
            <Check className={checkClass} />
          ) : (
            <Copy className={iconClass} />
          )}
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
              onClick={() => {
                handleCopy(asset);
                setOpen(false);
              }}
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy {asset.format.toUpperCase()}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
