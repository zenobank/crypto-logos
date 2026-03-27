import { NextResponse } from 'next/server';

// env
import { env } from '@/env';

// helpers
import toErrorResponse from '@/shared/helpers/to-error-response';

// constants
import SERVER_BASE_URL from '@/shared/constants/server-base-url';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { logoId, logoName } = body;

    if (!logoId || typeof logoId !== 'string' || !logoName || typeof logoName !== 'string') {
      return toErrorResponse(400, 'INVALID_BODY', 'logoId and logoName are required strings.');
    }

    const text = `🚩 Report: Incorrect Data\nLogo: ${logoName} (ID: ${logoId})\nPage: ${SERVER_BASE_URL}/logo/${logoId}`;

    const response = await fetch(
      `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_GROUP_ID,
          text,
          disable_web_page_preview: true,
        }),
      },
    );

    if (!response.ok) {
      console.error('Telegram API error:', await response.text());
      return toErrorResponse(502, 'TELEGRAM_ERROR', 'Failed to send report.');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return toErrorResponse(500, 'INTERNAL_ERROR', 'Unexpected server error.');
  }
}
