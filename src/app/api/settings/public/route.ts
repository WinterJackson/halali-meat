import { prisma } from '@/lib/db';
import { getClientIp, rateLimiter } from '@/lib/rate-limiter';
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/settings/public
 * Public endpoint to fetch logo URLs (no auth required)
 * 
 * Security:
 * - Rate limited: 100 requests per minute per IP
 * - Only exposes public branding assets
 */
export async function GET(request: NextRequest) {
  try {
    // Rate limiting: 100 requests per minute per IP
    const clientIp = getClientIp(request);
    const rateLimitResult = rateLimiter.check(clientIp, 100, 60 * 1000);

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many requests' },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimitResult.resetAt.getTime() - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // Get the first admin user's settings
    const setting = await prisma.settings.findFirst({
      select: {
        companyLogoUrl: true,
        companyLogoDarkUrl: true,
        faviconUrl: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        settings: setting || {},
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          'X-Content-Type-Options': 'nosniff',
          'X-RateLimit-Limit': '100',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error('[public-settings] Error:', error);
    return NextResponse.json(
      {
        success: false,
        settings: {},
      },
      {
        status: 200, // Return 200 with empty settings instead of error
        headers: {
          'Cache-Control': 'public, s-maxage=60',
          'X-Content-Type-Options': 'nosniff',
        },
      }
    );
  }
}
