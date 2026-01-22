// models
import LogoAsset from '@/shared/models/logos/logo-asset';

interface LogoVariantGroup {
  light: LogoAsset[];
  dark?: LogoAsset[];
}

export default LogoVariantGroup;
