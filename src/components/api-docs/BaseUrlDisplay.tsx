// components
import DynamicUrl from '@/components/api-docs/DynamicUrl';

export default function BaseUrlDisplayWithCopy() {
  return (
    <div className="mb-8 rounded-lg border border-neutral-200 bg-transparent px-5 py-4 font-mono text-sm dark:border-neutral-800">
      <DynamicUrl />
    </div>
  );
}
