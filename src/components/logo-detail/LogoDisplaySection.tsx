// components
import { Image } from '@/components/ui/image';
import CopyButton from './CopyButton';

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
        <h3 className="text-sm font-medium text-muted-foreground mb-3">Icon</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Light icon on a light background */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-full aspect-square rounded-2xl bg-zinc-50 dark:bg-zinc-100 border border-zinc-200 dark:border-zinc-300 flex items-center justify-center p-12">
              <CopyButton
                assets={iconLightAssets}
                variant="light"
              />
              <Image
                className="max-h-full max-w-full object-contain"
                src={iconLight.url}
                alt={`${logo.name} light icon`}
                width={120}
                height={120}
                fallbackText="No logo"
              />
            </div>
            <span className="text-sm text-muted-foreground">Light</span>
          </div>

          {/* Dark icon on a dark background */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-full aspect-square rounded-2xl bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 flex items-center justify-center p-12">
              <CopyButton
                assets={iconDarkAssets}
                variant="dark"
              />
              <Image
                className="max-h-full max-w-full object-contain"
                src={iconDark.url}
                alt={`${logo.name} dark icon`}
                width={120}
                height={120}
                fallbackText="No logo"
              />
            </div>
            <span className="text-sm text-muted-foreground">Dark</span>
          </div>
        </div>
      </div>

      {/* Wordmark variants */}
      {hasWordmark && textLightAssets && (
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Wordmark</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Light wordmark on a light background */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-full h-32 rounded-2xl bg-zinc-50 dark:bg-zinc-100 border border-zinc-200 dark:border-zinc-300 flex items-center justify-center px-8">
                <CopyButton
                  assets={textLightAssets}
                  variant="light"
                />
                <Image
                  className="max-h-full max-w-full object-contain"
                  src={textLight!.url}
                  alt={`${logo.name} light wordmark`}
                  width={240}
                  height={80}
                  fallbackText="No wordmark"
                />
              </div>
              <span className="text-sm text-muted-foreground">Light</span>
            </div>

            {/* Dark wordmark on a dark background */}
            {textDarkAssets && (
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-full h-32 rounded-2xl bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 flex items-center justify-center px-8">
                  <CopyButton
                    assets={textDarkAssets}
                    variant="dark"
                  />
                  <Image
                    className="max-h-full max-w-full object-contain"
                    src={textDark!.url}
                    alt={`${logo.name} dark wordmark`}
                    width={240}
                    height={80}
                    fallbackText="No wordmark"
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
