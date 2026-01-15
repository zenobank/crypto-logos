'use client';
import CodeBlock from '@/components/api-docs/CodeBlock';

// custom models
interface Props {
  example: string;
}

export default function RequestExample({ example }: Props) {
  // computed
  const requestExample = typeof window !== 'undefined' ? example.replace('{{baseUrl}}', window.location.origin) : example;

  return (
    <CodeBlock code={requestExample} language="bash" />
  );
}
