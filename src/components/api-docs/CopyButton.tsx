'use client';

import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

// components
import { Button } from '@/components/ui/button';

// custom models
interface CopyButtonProps {
  code: string;
}

export default function CopyButton({ code }: CopyButtonProps) {
  // states
  const [copied, setCopied] = useState(false);

  // async helpers
  async function handleCopy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(code);
      toast.success('Code copied to clipboard!');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy code');
    }
  }

  return (
    <Button
      onClick={handleCopy}
      variant="ghost"
      size="icon"
      className="h-8 w-8"
      aria-label="Copy code to clipboard"
    >
      {copied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );
}
