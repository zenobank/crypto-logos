// helpers
import toInt from '@/shared/helpers/to-int';
import toErrorResponse from '@/shared/helpers/to-error-response';
import clamp from '@/shared/helpers/clamp';

// models
import { QueryResult } from '@/shared/models/common/query';

// constants
import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from '@/shared/constants/pagination';

function readPageSize(params: URLSearchParams): QueryResult<number> {
  const raw = params.get('pageSize');
  const parsed = toInt(raw);

  if (parsed === null) return { ok: true as const, value: DEFAULT_PAGE_SIZE };

  if (parsed <= 0) {
    return { ok: false as const, error: toErrorResponse(400, 'INVALID_QUERY', 'Query param \'pageSize\' must be a positive integer.', { pageSize: raw }) };
  }

  return { ok: true as const, value: clamp(parsed, 1, MAX_PAGE_SIZE) };
}

export default readPageSize;