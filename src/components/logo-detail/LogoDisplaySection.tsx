// components
import { Image } from '@/components/ui/image';
import CopyButton from './CopyButton';
import DownloadIconButton from './DownloadIconButton';

// models
import type LogoItemsResponse from '@/shared/models/logos/logo-items-response';

// custom models
interface LogoDisplaySectionProps {
  logo: LogoItemsResponse;
}

export default function LogoDisplaySection({ logo }: LogoDisplaySectionProps) {
  // computed
  const iconLightAssets = logo.logo.icon.light;
  const iconDarkAssets = logo.logo.icon.dark || logo.logo.icon.light;
  const textLightAssets = logo.logo.text?.light;
  const textDarkAssets = logo.logo.text?.dark || logo.logo.text?.light;
  const hasWordmark = Boolean(textLightAssets?.[0]);

  // Display assets (first one for preview)
  const iconLight = iconLightAssets[0];
  const iconDark = logo.logo.icon.dark?.[0] || iconLight;
  const textLight = textLightAssets?.[0];
  const textDark = logo.logo.text?.dark?.[0] || textLight;

  return (
    <div className="space-y-8">
      {/* Icon variants */}
      <div>
        <h2 className="mb-3 text-xl font-semibold">Icon</h2>
        <div className="flex items-center gap-4 max-sm:flex-col">
          {/* Light icon on a light background */}
          <div className="flex flex-col items-center gap-3 max-sm:w-full">
            <div className="relative flex aspect-square h-78 max-lg:h-54 max-sm:h-auto max-sm:w-full items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-9 dark:border-zinc-300 dark:bg-zinc-100">
              <DownloadIconButton assets={iconLightAssets} logoName={logo.name} variant="light" />
              <CopyButton assets={iconLightAssets} variant="light" />
              <Image
                className="max-h-full max-w-full object-contain"
                src={iconLight.url}
                alt={`${logo.name} light icon`}
                width={120}
                height={120}
                fallbackText="No logo"
                preload
              />
            </div>
            <span className="text-sm text-muted-foreground">Light</span>
          </div>

          {/* Dark icon on a dark background */}
          <div className="flex flex-col items-center gap-3 max-sm:w-full">
            <div className="relative flex aspect-square h-78 max-lg:h-54 max-sm:h-auto max-sm:w-full items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 p-9 dark:bg-zinc-900">
              <DownloadIconButton assets={iconDarkAssets} logoName={logo.name} variant="dark" />
              <CopyButton assets={iconDarkAssets} variant="dark" />
              <Image
                className="max-h-full max-w-full object-contain"
                src={iconDark.url}
                alt={`${logo.name} dark icon`}
                width={120}
                height={120}
                fallbackText="No logo"
                preload
              />
            </div>
            <span className="text-sm text-muted-foreground">Dark</span>
          </div>
        </div>
      </div>

      {/* Wordmark variants */}
      {hasWordmark && textLightAssets && (
        <div>
          <h2 className="mb-3 text-xl font-semibold">Wordmark</h2>
          <div className="flex items-center gap-4 max-sm:flex-col">
            {/* Light wordmark on a light background */}
            <div className="flex flex-col items-center gap-3 max-sm:w-full">
              <div className="relative flex h-24 w-78 max-lg:h-20 max-lg:w-54 max-sm:w-full max-sm:h-24 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 px-6 dark:border-zinc-300 dark:bg-zinc-100">
                <DownloadIconButton assets={textLightAssets} logoName={logo.name} variant="light" />
                <CopyButton assets={textLightAssets} variant="light" />
                <Image
                  className="max-h-full max-w-full object-contain"
                  src={textLight!.url}
                  alt={`${logo.name} light wordmark`}
                  width={180}
                  height={60}
                  fallbackText="No wordmark"
                  preload
                />
              </div>
              <span className="text-sm text-muted-foreground">Light</span>
            </div>

            {/* Dark wordmark on a dark background */}
            {textDarkAssets && (
              <div className="flex flex-col items-center gap-3 max-sm:w-full">
                <div className="relative flex h-24 w-78 max-lg:h-20 max-lg:w-54 max-sm:w-full max-sm:h-24 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 px-6 dark:bg-zinc-900">
                  <DownloadIconButton assets={textDarkAssets} logoName={logo.name} variant="dark" />
                  <CopyButton assets={textDarkAssets} variant="dark" />
                  <Image
                    className="max-h-full max-w-full object-contain"
                    src={textDark!.url}
                    alt={`${logo.name} dark wordmark`}
                    width={180}
                    height={60}
                    fallbackText="No wordmark"
                    preload
                  />
                </div>
                <span className="text-sm text-muted-foreground">Dark</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
