'use client';

import { useState, useEffect } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

// custom models
interface ImageProps extends Omit<NextImageProps, 'onLoad' | 'onError'> {
  src: string;
  alt: string;
  fallbackText?: string;
  alternativeSrcs?: string[];
}

export function Image({
  src,
  alt,
  width,
  height,
  fallbackText,
  alternativeSrcs = [],
  className,
  ...props
}: ImageProps) {
  // states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(-1);

  // computed
  const allSrcs = [src, ...alternativeSrcs];
  const currentSrc = currentSrcIndex === -1 ? src : allSrcs[currentSrcIndex];

  // effects
  useEffect(() => {
    setLoading(true);
    setError(false);
    setCurrentSrcIndex(-1);
  }, [src]);

  // helpers
  function handleLoad(): void {
    setLoading(false);
  }

  function handleError(): void {
    const nextIndex = currentSrcIndex + 1;

    // If there are more alternative sources, try the next one
    if (nextIndex < allSrcs.length) {
      setCurrentSrcIndex(nextIndex);
      setLoading(true);
    } else {
      // All sources failed, show error
      setLoading(false);
      setError(true);
    }
  }

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
    <div className={cn('relative flex items-center justify-center', className)}>
      {loading && <Skeleton className="absolute inset-0" />}

      <NextImage
        {...props}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        fetchPriority="high"
        quality={75}
        className={cn('h-full object-contain', loading && 'opacity-0')}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
