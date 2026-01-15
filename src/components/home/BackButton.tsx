'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

// components
import { Button } from '@/components/ui/button';

export default function BackButton() {
  // hooks
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => router.push('/')}
      className="h-8 w-8"
      aria-label="Back to home"
    >
      <ArrowLeft className="h-5 w-5" />
    </Button>
  );
}
