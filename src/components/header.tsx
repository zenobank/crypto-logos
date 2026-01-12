import Link from "next/link";
import { Settings, Send } from "lucide-react";

// components
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full border-b border-border/40 bg-background">
      <div className="flex-1 flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          Logo
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            asChild
          >
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              X
            </a>
          </Button>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            asChild
          >
            <Link href="/ui-kit">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-12 gap-1"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              5.4k
            </a>
          </Button>

          <Button size="sm" className="gap-2" asChild>
            <Link href="/submit">
              <Send className="h-4 w-4" />
              Submit
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
