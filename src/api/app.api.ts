// lib
import { getLogos as getLogosLib, type GetLogosParams } from '@/lib/logos';
import { getCategories as getCategoriesLib } from '@/lib/categories';

// helpers
import buildReqParams from '@/shared/helpers/build-req-params';

// models
import ListResponse from '@/shared/models/common/list-response';
import LogoItem from '@/shared/models/logos/logo-item';
import CategoryListItem from '@/shared/models/categories/category-list-item';

// custom constants
const isServer = typeof window === 'undefined';

const AppApi = {
  async getLogos(params: GetLogosParams): Promise<ListResponse<LogoItem>> {
    if (isServer) {
      return getLogosLib(params);
    }

    const searchParams = buildReqParams(params as Record<string, string | number>);
    const response = await fetch(`/api/logos?${searchParams}`);

    if (!response.ok) {
      throw new Error('Failed to fetch logos');
    }

    return response.json();
  },

  async getCategories(): Promise<CategoryListItem[]> {
    if (isServer) {
      return getCategoriesLib();
    }

    const response = await fetch('/api/categories');

    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    return response.json();
  },
};

export default AppApi;
