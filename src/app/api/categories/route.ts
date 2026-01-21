import { NextResponse } from 'next/server';

// lib
import { getCategories } from '@/lib/categories';

// helpers
import toErrorResponse from '@/shared/helpers/to-error-response';

// constants
import CACHE_HEADERS from '@/shared/constants/cache-headers';

export async function GET() {
  try {
    return NextResponse.json(getCategories(), {
      status: 200,
      headers: CACHE_HEADERS,
    });
  } catch {
    return toErrorResponse(500, 'INTERNAL_ERROR', 'Unexpected server error.');
  }
}
