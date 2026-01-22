'use client';

import { FileImage, FileCode } from 'lucide-react';

// helpers
import { downloadLogo } from '@/shared/helpers/logo-actions';

// components
import { Button } from '@/components/ui/button';

interface DownloadButtonProps {
  url: string;
  filename: string;
  format: string;
}

export default function DownloadButton({
  url,
  filename,
  format,
}: DownloadButtonProps) {
  const Icon = format === 'svg' ? FileCode : FileImage;

  return (
    <Button
      variant="outline"
      className="flex-1"
      onClick={() => downloadLogo(url, filename)}
    >
      <Icon className="mr-2 h-4 w-4" />
      {format.toUpperCase()}
    </Button>
  );
}
