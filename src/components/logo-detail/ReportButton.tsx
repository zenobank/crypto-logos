'use client';

import { useState } from 'react';
import { Flag } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

interface ReportButtonProps {
  logoId: string;
  logoName: string;
}

export default function ReportButton({ logoId, logoName }: ReportButtonProps) {
  const [reported, setReported] = useState(false);

  async function handleReport() {
    if (reported) return;
    setReported(true);
    toast.success('Thanks for your report, our team will review it');

    try {
      await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logoId, logoName }),
      });
    } catch {
      // Silent fail — user already got their toast
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleReport}
      disabled={reported}
      className="text-muted-foreground"
    >
      <Flag className="mr-2 h-4 w-4" />
      Report Incorrect Data
    </Button>
  );
}
