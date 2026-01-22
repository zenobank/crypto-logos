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
      <div className="mb-4 flex items-center gap-3">
        <Badge
          variant={method === 'GET' ? 'default' : 'secondary'}
          className="px-2 py-0.5 font-mono text-xs"
        >
          {method}
        </Badge>
        <h3 className="font-mono text-xl font-semibold">{path}</h3>
      </div>

      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        {description}
      </p>

      {queryParams && queryParams.length > 0 && (
        <div className="mb-6">
          <h4 className="mb-4 text-base font-semibold">Query Parameters</h4>
          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-transparent dark:border-neutral-800">
            <table className="w-full">
              <thead className="border-b border-neutral-200 dark:border-neutral-800">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Parameter
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-neutral-700 dark:text-neutral-300">
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
                        <span className="ml-1 text-red-500">*</span>
                      )}
                    </td>
                    <td className="px-6 py-4 font-mono text-sm text-neutral-600 dark:text-neutral-400">
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
          <h4 className="mb-4 text-base font-semibold">Request</h4>
          <RequestExample example={requestExample} />
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold">Response</h4>
          <CodeBlock code={responseExample} language="json" />
        </div>
      </div>
    </section>
  );
}
