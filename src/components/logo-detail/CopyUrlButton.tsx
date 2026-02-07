'use client';

import { useState } from 'react';
import { Link, Check } from 'lucide-react';
import { toast } from 'sonner';

// components
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

// models
import type LogoAsset from '@/shared/models/logos/logo-asset';

interface CopyUrlButtonProps {
  assets: LogoAsset[];
  variant: 'light' | 'dark';
}

export default function CopyUrlButton({ assets, variant }: CopyUrlButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const isLight = variant === 'light';

  const buttonClass = isLight
    ? 'absolute z-1 top-3 right-21 h-8 w-8 bg-white/80 hover:bg-white/100 shadow-sm'
    : 'absolute z-1 top-3 right-21 h-8 w-8 bg-zinc-800/80 hover:bg-zinc-800/100 shadow-sm';

  const iconClass = isLight ? 'h-4 w-4 text-zinc-600' : 'h-4 w-4 text-zinc-400';

  const checkClass = isLight
    ? 'h-4 w-4 text-green-600'
    : 'h-4 w-4 text-green-400';

  async function handleCopyUrl(asset: LogoAsset) {
    try {
      const fullUrl = `${window.location.origin}${asset.url}`;
      await navigator.clipboard.writeText(fullUrl);
      toast.success(`${asset.format.toUpperCase()} URL copied to clipboard`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy URL');
    }
  }

  // If only one asset, copy directly
  if (assets.length === 1) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={buttonClass}
        onClick={() => handleCopyUrl(assets[0])}
      >
        {copied ? (
          <Check className={checkClass} />
        ) : (
          <Link className={iconClass} />
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
            <Link className={iconClass} />
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
                handleCopyUrl(asset);
                setOpen(false);
              }}
            >
              <Link className="mr-2 h-4 w-4" />
              Copy {asset.format.toUpperCase()} URL
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
