'use client';

import { ReactNode, useState } from 'react';
import { BaselineIcon, Copy, Download, Link as LinkIcon, SparklesIcon } from 'lucide-react';

// components
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import CopyLogoPopover from '@/components/home/CopyLogoPopover';
import DownloadLogoDialog from '@/components/home/DownloadLogoDialog';

// models
import type LogoItem from '@/shared/models/logos/logo-item';

// custom models
interface LogoCardContentProps {
  logo: LogoItem;
  children: ReactNode;
}

export default function LogoCardContent({ logo, children }: LogoCardContentProps) {
  // state
  const [showWordmark, setShowWordmark] = useState(false);

  // computed
  const hasWordmark = Boolean(logo.downloadableFiles.text?.light?.[0]);
  const currentLogo = showWordmark && hasWordmark
    ? logo.downloadableFiles.text!.light[0]
    : logo.mainLogo;

  // helpers
  function handleOpenWebsite(): void {
    if (logo.websiteLink) {
      window.open(logo.websiteLink, '_blank', 'noopener,noreferrer');
    }
  }

  function handleToggleWordmark(): void {
    setShowWordmark(!showWordmark);
  }

  return (
    <>
      <Image
        className="mt-1.5 mb-4 mx-auto min-w-10 h-10"
        fallbackText="No logo"
        src={currentLogo.url}
        alt={logo.name}
        height={40}
      />

      {children}

      <div className="flex items-center justify-center gap-4">
        <CopyLogoPopover logo={logo}>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            aria-label={`Copy ${logo.name} logo to clipboard`}
          >
            <Copy className="h-5 w-5" />
          </Button>
        </CopyLogoPopover>
        <DownloadLogoDialog logo={logo}>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            aria-label={`Download ${logo.name} logo`}
          >
            <Download className="h-5 w-5" />
          </Button>
        </DownloadLogoDialog>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleOpenWebsite}
          className="h-10 w-10"
          disabled={!logo.websiteLink}
          aria-label={`Visit ${logo.name} website`}
        >
          <LinkIcon className="h-5 w-5" />
        </Button>
        {hasWordmark && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggleWordmark}
            className="h-10 w-10"
            title={showWordmark ? 'Show logo SVG' : 'Show wordmark SVG'}
            aria-label={showWordmark ? 'Show logo SVG' : 'Show wordmark SVG'}
          >
            {showWordmark ? <SparklesIcon className="h-5 w-5" /> : <BaselineIcon className="h-5 w-5" />}
          </Button>
        )}
      </div>
    </>
  );
}
