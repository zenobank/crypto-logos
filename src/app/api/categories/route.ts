import { NextResponse } from "next/server";

// data
import LOGOS_DATA from "@/shared/constants/logos-data";

// helpers
import toErrorResponse from "@/shared/helpers/to-error-response";
import normalizeString from "@/shared/helpers/normalize-string";

// constants
import CACHE_HEADERS from '@/shared/constants/cache-headers';

// personal constants
const uniqueCategories = Array.from(
  new Set(
    LOGOS_DATA
      .flatMap((logo) => [logo.mainCategory, ...logo.secondaryCategories])
      .map(normalizeString)
      .filter(Boolean)
  )
).sort();

// request
export async function GET() {
  try {
    return NextResponse.json(uniqueCategories, {
      status: 200,
      headers: CACHE_HEADERS,
    });
  } catch {
    return toErrorResponse(500, "INTERNAL_ERROR", "Unexpected server error.");
  }
}
