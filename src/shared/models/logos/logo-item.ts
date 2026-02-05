// models
import LogoDownloadableFiles from '@/shared/models/logos/logo-downloadable-files';
import { LogoCategory } from './logo-category';

interface LogoItem {
  id: string;
  name: string;
  mainCategory: LogoCategory;
  secondaryCategories: LogoCategory[];
  logo: LogoDownloadableFiles;
  websiteLink?: string;
  brandKitLink?: string;
}

export default LogoItem;
