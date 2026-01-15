// components
import DynamicUrl from '@/components/api-docs/DynamicUrl';

export default function BaseUrlDisplayWithCopy() {
  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent px-5 py-4 font-mono text-sm mb-8">
      <DynamicUrl />
    </div>
  );
}
