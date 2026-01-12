import { NextResponse } from 'next/server';

// models
import type ApiErrorResponse from '@/shared/models/common/api-error-response';

function toErrorResponse(
  status: number,
  code: string,
  message: string,
  details?: Record<string, unknown>
): NextResponse<ApiErrorResponse> {
  const payload: ApiErrorResponse = { error: { code, message, details } };
  return NextResponse.json<ApiErrorResponse>(payload, { status });
}
export default toErrorResponse;