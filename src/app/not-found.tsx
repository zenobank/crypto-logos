import Link from 'next/link';

// components
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-4">
      <div className="w-full max-w-md space-y-4 text-center">
        <h1 className="text-4xl font-semibold">404</h1>
        <p className="text-muted-foreground">Page not found</p>

        <div className="flex justify-center gap-2">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
