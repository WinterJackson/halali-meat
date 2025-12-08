import { prisma } from '@/lib/db';
import { getClientIp, rateLimiter } from '@/lib/rate-limiter';
import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering - this API route uses headers for rate limiting
export const dynamic = 'force-dynamic';

/**
 * GET /api/contact-info
 * Public endpoint to fetch company contact information
 * Used by contact page and WhatsApp buttons
 * 
 * Security:
 * - Rate limited: 60 requests per minute per IP
 * - Minimal data exposure (only public contact fields)
 * - Sanitized error responses
 */
export async function GET(request: NextRequest) {
    try {
        // Rate limiting: 60 requests per minute per IP
        const clientIp = getClientIp(request);
        const rateLimitResult = rateLimiter.check(clientIp, 60, 60 * 1000);

        if (!rateLimitResult.allowed) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                {
                    status: 429,
                    headers: {
                        'Retry-After': Math.ceil((rateLimitResult.resetAt.getTime() - Date.now()) / 1000).toString(),
                        'X-RateLimit-Limit': '60',
                        'X-RateLimit-Remaining': '0',
                        'X-RateLimit-Reset': rateLimitResult.resetAt.toISOString(),
                    },
                }
            );
        }

        // Find the first admin user's settings
        const admin = await prisma.user.findFirst({
            where: { role: 'ADMIN' },
            select: { id: true },
        });

        // Default fallback values
        const defaults = {
            companyEmail: 'info@halalimeatltd.com',
            companyPhone: '+254 123 456 789',
            companyAddress: 'Nairobi, Kenya',
            companyWhatsapp: '+254123456789',
        };

        if (!admin) {
            return NextResponse.json(defaults, {
                headers: getSecurityHeaders(rateLimitResult),
            });
        }

        const settings = await prisma.settings.findUnique({
            where: { userId: admin.id },
            select: {
                companyEmail: true,
                companyPhone: true,
                companyAddress: true,
                companyWhatsapp: true,
            },
        });

        // Return settings with fallbacks to defaults
        return NextResponse.json(
            {
                companyEmail: settings?.companyEmail || defaults.companyEmail,
                companyPhone: settings?.companyPhone || defaults.companyPhone,
                companyAddress: settings?.companyAddress || defaults.companyAddress,
                companyWhatsapp: settings?.companyWhatsapp || defaults.companyWhatsapp,
            },
            {
                headers: getSecurityHeaders(rateLimitResult),
            }
        );
    } catch (error) {
        // Log error server-side but don't expose details to client
        console.error('[contact-info] Error:', error);

        // Return defaults on error (fail safely)
        return NextResponse.json(
            {
                companyEmail: 'info@halalimeatltd.com',
                companyPhone: '+254 123 456 789',
                companyAddress: 'Nairobi, Kenya',
                companyWhatsapp: '+254123456789',
            },
            {
                status: 200, // Return 200 with defaults instead of error
                headers: getSecurityHeaders(),
            }
        );
    }
}

/**
 * Generate security headers for response
 */
function getSecurityHeaders(rateLimitResult?: { remaining: number; resetAt: Date }) {
    const headers: HeadersInit = {
        // Cache control
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',

        // Security headers
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',

        // CORS - Allow all origins for public data
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Add rate limit headers if provided
    if (rateLimitResult) {
        headers['X-RateLimit-Limit'] = '60';
        headers['X-RateLimit-Remaining'] = rateLimitResult.remaining.toString();
        headers['X-RateLimit-Reset'] = rateLimitResult.resetAt.toISOString();
    }

    return headers;
}
