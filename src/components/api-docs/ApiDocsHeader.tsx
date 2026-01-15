import { FileJson } from 'lucide-react';

export default function ApiDocsHeader() {
  return (
    <div className="sticky top-0 z-10 flex h-12.5 items-center justify-between py-1.5 pr-2 pl-3 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 backdrop-blur-sm dark:bg-neutral-900/40">
      <div className="flex items-center space-x-2 font-medium text-neutral-950 dark:text-neutral-50">
        <FileJson size={18} />
        <p>API Reference</p>
      </div>
    </div>
  );
}
