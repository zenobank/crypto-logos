// helpers
import buildReqParams from '@/shared/helpers/build-req-params';

// models
import ListResponse from '@/shared/models/common/list-response';
import LogoItemsResponse from '@/shared/models/logos/logo-items-response';
import CategoryListItem from '@/shared/models/categories/category-list-item';
import LogosSortBy from '@/shared/models/logos/logos-sort-by';

// custom constants
const isServer = typeof window === 'undefined';

const AppApi = {
  async getLogos(params: {
    limit?: number;
    skip?: number;
    category?: string;
    search?: string;
    sortBy?: LogosSortBy;
  }): Promise<ListResponse<LogoItemsResponse>> {
    if (isServer) {
      const { getLogos } = await import('@/lib/logos');
      return getLogos(params);
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
      const { getCategories } = await import('@/lib/categories');
      return getCategories();
    }

    const response = await fetch('/api/categories');

    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    return response.json();
  },
};

export default AppApi;
