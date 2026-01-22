'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';

// components
import CopyButton from '@/components/api-docs/CopyButton';

// custom models
interface CodeBlockProps {
  code: string;
  language: 'json' | 'bash' | 'typescript';
  title?: string;
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const syntaxTheme = resolvedTheme === 'dark' ? oneDark : oneLight;

  return (
    <div className="group relative">
      {title && <div className="mb-2 text-sm font-medium">{title}</div>}
      <div className="flex">
        <div className="relative w-0 grow overflow-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div className="absolute top-3 right-3 z-10">
            <CopyButton code={code} />
          </div>
          <SyntaxHighlighter
            language={language}
            style={syntaxTheme}
            customStyle={{
              margin: 0,
              padding: '1.25rem',
              fontSize: '0.875rem',
              lineHeight: '1.6',
              borderRadius: '0.5rem',
              background: 'transparent',
            }}
            codeTagProps={{
              style: {
                fontFamily: 'var(--font-geist-mono), monospace',
              },
            }}
            showLineNumbers={language === 'typescript' || language === 'json'}
            lineNumberStyle={{
              minWidth: '2.5em',
              paddingRight: '1em',
              userSelect: 'none',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
