'use client';

import { ReactNode, useState } from 'react';
// import { BaselineIcon, Copy, Download, Link as LinkIcon, SparklesIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

// components
import { Image } from '@/components/ui/image';
// import { Button } from '@/components/ui/button';
// import CopyLogoPopover from '@/components/home/CopyLogoPopover';
// import DownloadLogoDialog from '@/components/home/DownloadLogoDialog';

// models
import type LogoItemsResponse from '@/shared/models/logos/logo-items-response';
import LogoAsset from '@/shared/models/logos/logo-asset';

// custom models
interface LogoCardContentProps {
  logo: LogoItemsResponse;
  children: ReactNode;
}

export default function LogoCardContent({
  logo,
  children,
}: LogoCardContentProps) {
  // state
  const [showWordmark] = useState(false);
  const { resolvedTheme } = useTheme();

  // computed
  const hasWordmark = Boolean(logo.logo.text?.light?.[0]);
  const isDarkTheme = resolvedTheme === 'dark';
  const currentLogo = getCurrentLogo();

  // helpers
  // Get the current logo based on variant (icon/text) and theme (light/dark)
  function getCurrentLogo(): LogoAsset {
    const variant =
      showWordmark && hasWordmark ? logo.logo.text : logo.logo.icon;
    if (!variant) {
      return logo.logo.icon.light[0];
    }

    // Try to get dark variant for a dark theme, fallback to light
    if (isDarkTheme && variant.dark?.[0]) {
      return variant.dark[0];
    }
    return variant.light[0];
  }

  // function handleOpenWebsite(): void {
  //   if (logo.websiteLink) {
  //     window.open(logo.websiteLink, '_blank', 'noopener,noreferrer');
  //   }
  // }

  // function handleToggleWordmark(): void {
  //   setShowWordmark(!showWordmark);
  // }

  return (
    <>
      <Image
        className="mx-auto mt-1.5 mb-4 h-10 min-w-10"
        fallbackText="No logo"
        src={currentLogo.url}
        alt={logo.name}
        height={40}
        width={showWordmark ? 240 : 40}
      />

      {children}
    </>
  );
}
