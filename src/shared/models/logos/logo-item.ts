// models
import LogoDownloadableFiles from '@/shared/models/logos/logo-downloadable-files';

interface LogoItem {
  id: string;
  name: string;
  mainCategory: string;
  secondaryCategories: string[];
  logo: LogoDownloadableFiles;
  websiteLink?: string;
  brandKitLink?: string;
}

export default LogoItem;
