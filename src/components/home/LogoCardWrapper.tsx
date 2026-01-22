'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

// models
import LogoItemsResponse from '@/shared/models/logos/logo-items-response';

// custom models
interface Props {
  children: ReactNode;
  logoId: LogoItemsResponse['id'];
}

export default function LogoCardWrapper({ children, logoId }: Props) {
  // common
  const router = useRouter();

  // helpers
  function openDetails(): void {
    router.push(`/logo/${logoId}`);
  }

  return (
    <div
      className="flex min-h-60 cursor-pointer flex-col"
      onClick={openDetails}
    >
      {children}
    </div>
  );
}
