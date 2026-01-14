// models
import LogoAsset from '@/shared/models/logos/logo-asset';
import LogoDownloadableFiles from '@/shared/models/logos/logo-downloadable-files';

interface LogoItem {
  id: string;
  name: string;
  mainCategory: string;
  mainLogo: LogoAsset;
  secondaryCategories: string[];
  downloadableFiles: LogoDownloadableFiles;
  websiteLink?: string;
  brandKitLink?: string;
}

export default LogoItem;