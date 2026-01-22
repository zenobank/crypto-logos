// helpers
import normalizeString from '@/shared/helpers/normalize-string';
import toErrorResponse from '@/shared/helpers/to-error-response';

// models
import { QueryResult } from '@/shared/models/common/query';

function readOptionalNonEmpty(
  params: URLSearchParams,
  key: string,
): QueryResult<string | null> {
  const raw = params.get(key);
  if (raw === null) return { ok: true, value: null };

  if (!normalizeString(raw)) {
    return {
      ok: false,
      error: toErrorResponse(
        400,
        'INVALID_QUERY',
        `Query param '${key}' cannot be empty.`,
        { [key]: raw },
      ),
    };
  }

  return { ok: true, value: raw };
}

export default readOptionalNonEmpty;
