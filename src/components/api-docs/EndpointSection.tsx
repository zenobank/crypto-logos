// components
import CodeBlock from '@/components/api-docs/CodeBlock';
import { Badge } from '@/components/ui/badge';
import RequestExample from '@/components/api-docs/RequestExample';

// custom models
interface QueryParam {
  name: string;
  type: string;
  description: string;
  required?: boolean;
}

interface EndpointSectionProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  queryParams?: QueryParam[];
  requestExample: string;
  responseExample: string;
}

export default function EndpointSection({
  method,
  path,
  description,
  queryParams,
  requestExample,
  responseExample,
}: EndpointSectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <Badge
          variant={method === 'GET' ? 'default' : 'secondary'}
          className="font-mono text-xs px-2 py-0.5"
        >
          {method}
        </Badge>
        <h3 className="text-xl font-semibold font-mono">{path}</h3>
      </div>

      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        {description}
      </p>

      {queryParams && queryParams.length > 0 && (
        <div className="mb-6">
          <h4 className="text-base font-semibold mb-4">Query Parameters</h4>
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-transparent">
            <table className="w-full">
              <thead className="border-b border-neutral-200 dark:border-neutral-800">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Parameter
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Type
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {queryParams.map((param) => (
                  <tr key={param.name}>
                    <td className="px-6 py-4 font-mono text-sm text-neutral-900 dark:text-neutral-100">
                      {param.name}
                      {param.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400 font-mono">
                      {param.type}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {param.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <h4 className="text-base font-semibold mb-4">Request</h4>
          <RequestExample example={requestExample} />
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4">Response</h4>
          <CodeBlock code={responseExample} language="json" />
        </div>
      </div>
    </section>
  );
}
