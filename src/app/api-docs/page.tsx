import type { Metadata } from 'next';

// components
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import ApiDocsHeader from '@/components/api-docs/ApiDocsHeader';
import BaseUrlDisplayWithCopy from '@/components/api-docs/BaseUrlDisplay';
import EndpointSection from '@/components/api-docs/EndpointSection';
import TableOfContents from '@/components/api-docs/TableOfContents';
import CodeBlock from '@/components/api-docs/CodeBlock';

// constants
import { API_EXAMPLES } from '@/lib/api-examples';

export const metadata: Metadata = {
  title: 'API Documentation - Crypto Logos',
  description:
    'Complete API documentation for the Crypto Logos API endpoints',
};

const typescriptTypes = `type LogoFileFormat = 'svg'
 | 'png'
 | 'jpg'
 | 'webp'
 | 'unknown';
 
enum LogosSortBy {
  NameAsc = 'name-asc',
  NameDesc = 'name-desc',
}

interface LogoAsset {
  url: string;
  format: LogoFileFormat;
}

interface LogoVariantGroup {
  light: LogoAsset[];
  dark?: LogoAsset[];
}

interface LogoDownloadableFiles {
  icon: LogoVariantGroup;
  text?: LogoVariantGroup;
}

interface LogoItem {
  id: string;
  name: string;
  mainCategory: string;
  secondaryCategories: string[];
  logo: LogoDownloadableFiles;
  websiteLink?: string;
  brandKitLink?: string;
}

interface CategoryListItem {
  id: string;
  name: string;
  count: number;
}

interface ListResponse<T> {
  data: T[];
  total: number;
}`;

export default function ApiDocsPage() {
  return (
    <div className="flex-1 flex flex-col p-6 max-md:p-4">
      <Card className="flex-1 flex flex-col p-0 gap-0 overflow-hidden bg-transparent">
        <ScrollArea className="grow flex flex-col h-0">
          <div data-scroll-area-viewport="" className="size-full rounded-[inherit]">
            <div data-scroll-area-content="">
              <ApiDocsHeader />
              {/* Mobile TOC */}
              <div className="lg:hidden">
                <TableOfContents />
              </div>

              <div className="container mx-auto px-6 lg:px-4 flex-1 mt-8 mb-6">
                <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
                  <article className="markdown flex-1 min-w-0">
                    {/* Introduction */}
                    <h2 id="introduction" className="text-2xl font-bold mb-4 scroll-mt-20">Introduction</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                      The Crypto Logos API provides access to 576+ cryptocurrency and
                      blockchain project logos in SVG format. This RESTful API allows you
                      to fetch logos, filter by category, search by name, and retrieve
                      category information.
                    </p>

                    {/* Base URL */}
                    <h3 id="base-url" className="text-xl font-semibold mb-3 scroll-mt-20">Base URL</h3>
                    <BaseUrlDisplayWithCopy />

                    {/* TypeScript */}
                    <div id="typescript" className="mt-8 mb-12 scroll-mt-20">
                      <h2 className="text-2xl font-bold mb-4">TypeScript</h2>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                        You can use the following types for the API responses:
                      </p>
                      <CodeBlock code={typescriptTypes} language="typescript" />
                    </div>

                    {/* Endpoints */}
                    <h2 id="endpoints" className="text-2xl font-bold mb-6 scroll-mt-20">Endpoints</h2>

                    {/* GET /api/logos - Full */}
                    <div id="get-all-logos" className="scroll-mt-20">
                      <EndpointSection
                        method="GET"
                        path="/api/logos"
                        description="Retrieve a paginated list of logos with optional filtering by category, search query, and pagination parameters."
                        queryParams={[
                          {
                            name: 'category',
                            type: 'string',
                            description:
                              'Filter by category (case-insensitive). Matches both main and secondary categories.',
                          },
                          {
                            name: 'search',
                            type: 'string',
                            description:
                              'Search logos by name (case-insensitive substring match).',
                          },
                          {
                            name: 'sortBy',
                            type: 'LogosSortBy',
                            description:
                              'Sort logos by name in ascending or descending order. Default is \'name-asc\'.',
                          },
                          {
                            name: 'limit',
                            type: 'number',
                            description:
                              'Maximum number of items to return. If omitted, returns all items.',
                          },
                          {
                            name: 'skip',
                            type: 'number',
                            description:
                              'Number of items to skip for pagination. Default is 0.',
                          },
                        ]}
                        requestExample={API_EXAMPLES.getAllLogos.request}
                        responseExample={API_EXAMPLES.getAllLogos.response}
                      />
                    </div>

                    {/* GET /api/logos with limit */}
                    <div id="get-logos-with-limit" className="scroll-mt-20">
                      <EndpointSection
                        method="GET"
                        path="/api/logos?limit=10&skip=0"
                        description="Get a limited number of logos with pagination. Use the limit parameter to control page size and skip for offset-based pagination."
                        requestExample={API_EXAMPLES.getLogosWithLimit.request}
                        responseExample={API_EXAMPLES.getLogosWithLimit.response}
                      />
                    </div>

                    {/* GET /api/logos by category */}
                    <div id="get-logos-by-category" className="scroll-mt-20">
                      <EndpointSection
                        method="GET"
                        path="/api/logos?category=nft"
                        description="Filter logos by a specific category. Category matching is case-insensitive and searches both main and secondary categories."
                        requestExample={API_EXAMPLES.getLogosByCategory.request}
                        responseExample={API_EXAMPLES.getLogosByCategory.response}
                      />
                    </div>

                    {/* GET /api/logos with search */}
                    <div id="search-logos" className="scroll-mt-20">
                      <EndpointSection
                        method="GET"
                        path="/api/logos?search=Azuki"
                        description="Search for logos by name. The search performs a case-insensitive substring match against logo names."
                        requestExample={API_EXAMPLES.searchLogos.request}
                        responseExample={API_EXAMPLES.searchLogos.response}
                      />
                    </div>

                    {/* GET /api/categories */}
                    <div id="get-categories" className="scroll-mt-20">
                      <EndpointSection
                        method="GET"
                        path="/api/categories"
                        description="Retrieve a list of all available categories with their logo counts. Useful for building category filters or navigation."
                        requestExample={API_EXAMPLES.getCategories.request}
                        responseExample={API_EXAMPLES.getCategories.response}
                      />
                    </div>

                    {/* Notes */}
                    <div className="mt-12 p-6 bg-transparent rounded-lg border border-neutral-200 dark:border-neutral-800">
                      <h3 className="text-lg font-semibold mb-3">Notes</h3>
                      <ul className="list-disc list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                        <li>
                          All query parameters are optional unless specified otherwise
                        </li>
                        <li>
                          Category and search filters can be combined for more specific
                          results
                        </li>
                        <li>
                          The API returns SVG URLs that can be directly used in your
                          application
                        </li>
                        <li>
                          Responses include both light and dark variants when available
                        </li>
                        <li>
                          Some logos include wordmark/text variants in the
                          logo field
                        </li>
                      </ul>
                    </div>
                  </article>

                  {/* Desktop TOC */}
                  <div className="hidden lg:block">
                    <TableOfContents />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}
