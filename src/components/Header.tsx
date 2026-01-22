import Link from 'next/link';
import { Send, Github } from 'lucide-react';
import Image from 'next/image';

// api
import GithubApi from '@/api/github.api';

// components
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import Sidebar from '@/components/sidebar/Sidebar';
import MenuToggle from '@/components/MenuToggle';

// constants
import {
  GITHUB_GET_STARTED_LINK_URL,
  GITHUB_LINK_URL,
} from '@/shared/constants/links';

// helpers
import formatNumber from '@/shared/helpers/format-number';

export default async function Header() {
  const stars = await GithubApi.getRepoStars('zenobank', 'crypto-logos');
  const starsLabel = formatNumber(stars);

  return (
    <header className="sticky top-0 z-50 flex w-full border-b border-border/40 bg-background">
      <div className="flex h-14 flex-1 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <MenuToggle>
            <Sidebar />
          </MenuToggle>
          <Link
            href="/"
            className="flex h-fit w-fit cursor-pointer items-center gap-2"
          >
            <Image
              width={63}
              height={16}
              className="h-auto w-16 dark:hidden"
              src="/images/logo-dark.svg"
              alt="logo"
            />
            <Image
              width={63}
              height={16}
              className="hidden h-auto w-16 dark:block"
              src="/images/logo-light.svg"
              alt="logo"
            />
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-fit min-w-12 gap-1 px-2"
            asChild
          >
            <a
              href={GITHUB_LINK_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center"
            >
              <Github className="h-4 w-4" />
              <span>{starsLabel}</span>
            </a>
          </Button>

          <Button size="sm" className="gap-2" asChild>
            <a
              href={GITHUB_GET_STARTED_LINK_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Send className="h-4 w-4" />
              Add Logo
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
