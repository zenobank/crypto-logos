// helpers
import toInt from '@/shared/helpers/to-int';
import toErrorResponse from '@/shared/helpers/to-error-response';

// models
import { QueryResult } from '@/shared/models/common/query';

function readLimit(params: URLSearchParams): QueryResult<number | null> {
  const raw = params.get('limit');
  const parsed = toInt(raw);

  if (parsed === null) return { ok: true, value: null };

  if (parsed <= 0) {
    return {
      ok: false,
      error: toErrorResponse(
        400,
        'INVALID_QUERY',
        "Query param 'limit' must be a positive integer.",
        { limit: raw },
      ),
    };
  }

  return { ok: true, value: parsed };
}

export default readLimit;
