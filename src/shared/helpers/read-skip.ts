// helpers
import toErrorResponse from '@/shared/helpers/to-error-response';
import toInt from '@/shared/helpers/to-int';

// models
import { QueryResult } from '@/shared/models/common/query';

function readSkip(params: URLSearchParams): QueryResult<number> {
  const raw = params.get('skip');
  const parsed = toInt(raw);

  if (parsed === null) return { ok: true, value: 0 };

  if (parsed < 0) {
    return {
      ok: false,
      error: toErrorResponse(
        400,
        'INVALID_QUERY',
        "Query param 'skip' must be a non-negative integer.",
        { skip: raw },
      ),
    };
  }

  return { ok: true, value: parsed };
}

export default readSkip;
