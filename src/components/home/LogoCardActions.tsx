'use client';

import { MouseEvent } from 'react';
import { Copy, Download, ExternalLink } from 'lucide-react';
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
  const asset = logo.logo.icon?.light?.[0] ?? logo.logo.icon?.dark?.[0];

  function handleCopy(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    if (!asset) return;
    copyLogoToClipboard(asset.url)
      .then(() => toast.success(`${asset.format.toUpperCase()} copied to clipboard!`))
      .catch(() => toast.error('Failed to copy logo'));
  }

  function handleDownload(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
    if (!asset) return;
    downloadLogo(asset.url, `${logo.id}-icon-light.${asset.format}`);
  }

  function handleLink(e: MouseEvent): void {
    e.stopPropagation();
  }

  const websiteLink = logo.websiteLink ?? logo.brandKitLink;

  return (
    <div className="flex items-center gap-0.5">
      <Button
        variant="ghost"
        size="icon"
        className="z-1 h-7 w-7"
        onClick={handleCopy}
        aria-label="Copy logo"
      >
        <Copy className="h-3.5 w-3.5" />
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
      {websiteLink && (
        <Button
          variant="ghost"
          size="icon"
          className="z-1 h-7 w-7"
          asChild
        >
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={handleLink}
            aria-label="Visit website"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
      )}
    </div>
  );
}
