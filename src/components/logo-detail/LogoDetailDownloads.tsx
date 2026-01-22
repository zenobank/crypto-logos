// components
import { Card } from '@/components/ui/card';
import DownloadButton from './DownloadButton';

// models
import type LogoItemsResponse from '@/shared/models/logos/logo-items-response';
import type LogoAsset from '@/shared/models/logos/logo-asset';

// custom models
interface LogoDetailDownloadsProps {
  logo: LogoItemsResponse;
}

interface DownloadCardProps {
  title: string;
  assets: LogoAsset[];
  logoName: string;
  type: 'icon' | 'wordmark';
  variant: 'light' | 'dark';
}

function DownloadCard({
  title,
  assets,
  logoName,
  type,
  variant,
}: DownloadCardProps) {
  return (
    <Card className="p-4">
      <h3 className="mb-3 font-medium">{title}</h3>
      <div className="flex gap-2">
        {assets.map((asset) => (
          <DownloadButton
            key={asset.format}
            url={asset.url}
            filename={`${logoName}-${type}-${variant}.${asset.format}`}
            format={asset.format}
          />
        ))}
      </div>
    </Card>
  );
}

export default function LogoDetailDownloads({
  logo,
}: LogoDetailDownloadsProps) {
  // computed
  const iconLight = logo.logo.icon.light;
  const iconDark = logo.logo.icon.dark;
  const hasWordmark = Boolean(logo.logo.text?.light?.[0]);
  const textLight = logo.logo.text?.light;
  const textDark = logo.logo.text?.dark;

  return (
    <div className="space-y-8">
      {/* Icon Downloads */}
      <div>
        <h2 className="mb-4 text-xl font-semibold">Download</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <DownloadCard
            title="Light Version"
            assets={iconLight}
            logoName={logo.name}
            type="icon"
            variant="light"
          />
          {iconDark && iconDark.length > 0 && (
            <DownloadCard
              title="Dark Version"
              assets={iconDark}
              logoName={logo.name}
              type="icon"
              variant="dark"
            />
          )}
        </div>
      </div>

      {/* Wordmark Downloads */}
      {hasWordmark && textLight && (
        <div>
          <h2 className="mb-4 text-xl font-semibold">Wordmark</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DownloadCard
              title="Light Version"
              assets={textLight}
              logoName={logo.name}
              type="wordmark"
              variant="light"
            />
            {textDark && textDark.length > 0 && (
              <DownloadCard
                title="Dark Version"
                assets={textDark}
                logoName={logo.name}
                type="wordmark"
                variant="dark"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
