import Link from 'next/link';

// components
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-4xl font-semibold">404</h1>
        <p className="text-muted-foreground">
          Page not found
        </p>

        <div className="flex justify-center gap-2">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}