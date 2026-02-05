import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

// providers
import { ThemeProvider } from '@/providers/theme-provider';
import QueryProvider from '@/providers/QueryProvider';
import { FavoritesProvider } from '@/providers/FavoritesProvider';

// queries
import { getLogosQueryParams } from '@/queries/app-queries';

// components
import Header from '@/components/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { Toaster } from '@/components/ui/sonner';

// styles
import './globals.css';

// constants
import SERVER_BASE_URL from '@/shared/constants/server-base-url';

// custom constants
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: SERVER_BASE_URL,
  title: 'Crypto Logos - Download Crypto Logos',
  description:
    'Browse and download the major crypto and tech logos. Free, high-quality logos for your projects.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    shortcut: ['/favicon.ico'],
  },
};

// custom models
type Props = Readonly<{
  children: ReactNode;
}>;

export default async function RootLayout({ children }: Props) {
  // common
  const queryClient = new QueryClient();

  // prefetch
  await queryClient.prefetchInfiniteQuery(getLogosQueryParams('', ''));

  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-PFGGLPVM" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          enableSystem
          disableTransitionOnChange
          attribute="class"
          defaultTheme="system"
        >
          <QueryProvider>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <FavoritesProvider>
                <Header />
                <Sidebar className="max-md:hidden" />
                <main className="flex flex-1 flex-col pl-64 max-md:pl-0">
                  {children}
                </main>
                <Toaster />
              </FavoritesProvider>
            </HydrationBoundary>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
