'use client';

import { useState, MouseEvent } from 'react';
import { Link, Download, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

// helpers
import { copyLogoToClipboard, downloadLogo } from '@/shared/helpers/logo-actions';

// components
import { Button } from '@/components/ui/button';

// models
import type LogoItemsResponse from '@/shared/models/logos/logo-items-response';

// custom models
interface Props {
  logo: LogoItemsResponse;
}

export default function LogoCardActions({ logo }: Props) {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedLogo, setCopiedLogo] = useState(false);

  const asset = logo.logo.icon?.light?.[0] ?? logo.logo.icon?.dark?.[0];

  // 1. Copy URL (same as CopyUrlButton)
  function handleCopyUrl(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    if (!asset) return;
    const fullUrl = `${window.location.origin}${asset.url}`;
    navigator.clipboard.writeText(fullUrl)
      .then(() => {
        toast.success(`${asset.format.toUpperCase()} URL copied to clipboard`);
        setCopiedUrl(true);
        setTimeout(() => setCopiedUrl(false), 2000);
      })
      .catch(() => toast.error('Failed to copy URL'));
  }

  // 2. Download (same as DownloadIconButton)
  function handleDownload(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    if (!asset) return;
    const fileName = `${logo.name.toLowerCase().replace(/\s+/g, '-')}-light.${asset.format}`;
    downloadLogo(asset.url, fileName);
    toast.success(`${asset.format.toUpperCase()} downloaded`);
  }

  // 3. Copy logo (same as CopyButton)
  function handleCopy(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    if (!asset) return;
    copyLogoToClipboard(asset.url)
      .then(() => {
        toast.success(`${asset.format.toUpperCase()} copied to clipboard`);
        setCopiedLogo(true);
        setTimeout(() => setCopiedLogo(false), 2000);
      })
      .catch(() => toast.error('Failed to copy'));
  }

  return (
    <div className="flex items-center gap-0.5">
      <Button
        variant="ghost"
        size="icon"
        className="z-1 h-7 w-7"
        onClick={handleCopyUrl}
        aria-label="Copy logo URL"
      >
        {copiedUrl ? (
          <Check className="h-3.5 w-3.5 text-green-500" />
        ) : (
          <Link className="h-3.5 w-3.5" />
        )}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="z-1 h-7 w-7"
        onClick={handleDownload}
        aria-label="Download logo"
      >
        <Download className="h-3.5 w-3.5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="z-1 h-7 w-7"
        onClick={handleCopy}
        aria-label="Copy logo"
      >
        {copiedLogo ? (
          <Check className="h-3.5 w-3.5 text-green-500" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </Button>
    </div>
  );
}
