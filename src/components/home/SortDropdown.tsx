'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ArrowUpDown } from 'lucide-react';

// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

// models
import LogosSortBy from '@/shared/models/logos/logos-sort-by';

// custom models
interface Props {
  value: LogosSortBy;
}

// custom constants
const sortOptions: { value: LogosSortBy; label: string }[] = [
  { value: LogosSortBy.NameAsc, label: 'Sort A-Z' },
  { value: LogosSortBy.NameDesc, label: 'Sort Z-A' },
];

export default function SortDropdown({ value }: Props) {
  // common
  const router = useRouter();
  const pathname = usePathname();

  // computed
  const currentOption =
    sortOptions.find((opt) => opt.value === value) || sortOptions[0];

  // helpers
  function handleSort(newSort: LogosSortBy): void {
    const params = new URLSearchParams(window.location.search);
    params.set('sort', newSort);
    router.push(`${pathname}?${params}`);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <ArrowUpDown className="h-4 w-4" />
          {currentOption.label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleSort(option.value)}
            className={value === option.value ? 'bg-accent' : ''}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
