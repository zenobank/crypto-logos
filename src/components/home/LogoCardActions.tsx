'use client';

// components
import CopyUrlButton from '@/components/logo-detail/CopyUrlButton';
import DownloadIconButton from '@/components/logo-detail/DownloadIconButton';
import CopyButton from '@/components/logo-detail/CopyButton';

// models
import type LogoItemsResponse from '@/shared/models/logos/logo-items-response';

// custom constants
const BUTTON_CLASS = 'z-1 h-7 w-7';
const ICON_CLASS = 'h-3.5 w-3.5';

// custom models
interface Props {
  logo: LogoItemsResponse;
}

export default function LogoCardActions({ logo }: Props) {
  const assets = logo.logo.icon?.light ?? logo.logo.icon?.dark ?? [];

  if (assets.length === 0) return null;

  return (
    <div className="flex items-center gap-0.5">
      <CopyUrlButton
        assets={assets}
        className={BUTTON_CLASS}
        iconClassName={ICON_CLASS}
      />
      <DownloadIconButton
        assets={assets}
        logoName={logo.name}
        className={BUTTON_CLASS}
        iconClassName={ICON_CLASS}
      />
      <CopyButton
        assets={assets}
        className={BUTTON_CLASS}
        iconClassName={ICON_CLASS}
      />
    </div>
  );
}
