'use client';

import { ImgHTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

// custom models
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackText?: string;
}

export function Image({
  src,
  alt,
  fallbackText,
  className,
  ...props
}: ImageProps) {
  // states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground font-medium text-sm p-4 rounded-xl',
          className,
        )}
      >
        {fallbackText || alt}
      </div>
    );
  }

  return (
    <div className={cn('relative flex items-center justify-center z-0', className)}>
      {loading && <Skeleton className="absolute inset-0 z-[-1]" />}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...props}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
    </div>
  );
}
