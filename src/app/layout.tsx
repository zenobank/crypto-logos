import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

// providers
import { ThemeProvider } from '@/providers/theme-provider';
import QueryProvider from '@/providers/QueryProvider';
import { FavoritesProvider } from '@/providers/FavoritesProvider';

// components
import Header from '@/components/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import { Toaster } from '@/components/ui/sonner';

// styles
import './globals.css';

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
  title: 'Crypto Logos - Free SVG Logo Collection',
  description: 'Browse and download 576+ crypto and tech logos in SVG format',
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

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <NuqsAdapter>
      <ThemeProvider
        enableSystem
        disableTransitionOnChange
        attribute="class"
        defaultTheme="system"
      >
        <QueryProvider>
          <FavoritesProvider>
            <Header />
            <Sidebar className="max-md:hidden" />
            <main className="flex-1 flex flex-col pl-64 max-md:pl-0">
              {children}
            </main>
            <Toaster />
          </FavoritesProvider>
        </QueryProvider>
      </ThemeProvider>
    </NuqsAdapter>
    </body>
    </html>
  );
}
