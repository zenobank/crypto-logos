// models
import LogoAsset from '@/shared/models/logos/logo-asset';
import LogoDownloadableFiles from '@/shared/models/logos/logo-downloadable-files';

interface LogoItem {
  id: string;
  name: string;
  mainCategory: string;
  secondaryCategories: string[];
  websiteLink?: string;
  brandKitLink?: string;
  mainLogo: LogoAsset;
  downloadableFiles: LogoDownloadableFiles;
}

export default LogoItem;