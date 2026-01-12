import { NextResponse } from 'next/server';

// models
import ApiErrorResponse from '@/shared/models/common/api-error-response';

export type QueryOk<T> = { ok: true; value: T };
export type QueryFail = { ok: false; error: NextResponse<ApiErrorResponse> };
export type QueryResult<T> = QueryOk<T> | QueryFail;