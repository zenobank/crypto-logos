// helpers
import toInt from '@/shared/helpers/to-int';
import toErrorResponse from '@/shared/helpers/to-error-response';

// models
import { QueryResult } from '@/shared/models/common/query';

function readOffset(params: URLSearchParams): QueryResult<number> {
  const raw = params.get('offset');
  const parsed = toInt(raw);

  if (parsed === null) return { ok: true as const, value: 0 };

  if (parsed < 0) {
    return { ok: false as const, error: toErrorResponse(400, 'INVALID_QUERY', 'Query param \'offset\' must be a non-negative integer.', { offset: raw }) };
  }

  return { ok: true as const, value: parsed };
}

export default readOffset;