import Link from "next/link";
import { Home, Heart, Cloud, Code, Package } from "lucide-react";

// components
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// custom constants
const categories = [
  { name: "AI", count: 48 },
  { name: "Analytics", count: 4 },
  { name: "Authentication", count: 10 },
  { name: "Automation", count: 1 },
  { name: "Browser", count: 13 },
  { name: "CMS", count: 12 },
  { name: "Communications", count: 1 },
  { name: "Community", count: 13 },
  { name: "Compiler", count: 9 },
  { name: "Config", count: 2 },
  { name: "Crypto", count: 21 },
  { name: "Cybersecurity", count: 2 },
  { name: "Database", count: 21 },
  { name: "Design", count: 29 },
  { name: "Devtool", count: 16 },
  { name: "Education", count: 10 },
  { name: "Entertainment", count: 9 },
  { name: "Framework", count: 49 },
];

const mainNavigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Favorites", href: "/favorites", icon: Heart },
  { name: "API", href: "/api", icon: Cloud },
  { name: "shadcn/ui", href: "/ui-kit", icon: Code },
  { name: "Extensions", href: "/extensions", icon: Package },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 z-40 flex flex-col h-[calc(100vh-3.5rem)] w-64 overflow-y-auto border-r border-border/40 bg-background overscroll-none">
      <div className="flex-1 flex flex-col gap-4 p-4">
        {/* Main Navigation */}
        <nav className="flex flex-col gap-1">
          {mainNavigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-5 w-5" />
                <span className="text-base">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <Separator />

        {/* Categories */}
        <nav className="grow flex flex-col gap-1 h-0 overflow-auto">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="flex items-center justify-between rounded-lg px-3 py-1.5 text-muted-foreground hover:text-foreground"
            >
              <span className="text-base">{category.name}</span>
              <Badge
                variant="outline"
                className="text-muted-foreground hover:bg-muted rounded-xl"
              >
                {category.count}
              </Badge>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
