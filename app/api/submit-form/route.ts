import { NextResponse, NextRequest } from 'next/server';

const WEBHOOK_URL = process.env.TRAY_WEBHOOK_URL;

const ALLOWED_ORIGINS = [
  'https://www.createtotally.com',
  'https://createtotally.com',
];

// Simple in-memory rate limiter: max 5 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const MAX_FIELD_LENGTH = 500;
const REQUIRED_FIELDS = ['firstName', 'lastName', 'email', 'title', 'companyName', 'companySize'];
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function validateFormData(data: Record<string, unknown>): string | null {
  for (const field of REQUIRED_FIELDS) {
    if (!data[field] || typeof data[field] !== 'string' || (data[field] as string).trim() === '') {
      return `Missing required field: ${field}`;
    }
    if ((data[field] as string).length > MAX_FIELD_LENGTH) {
      return `Field ${field} exceeds maximum length`;
    }
  }

  if (!EMAIL_REGEX.test(data.email as string)) {
    return 'Invalid email address';
  }

  if (data.details && typeof data.details === 'string' && data.details.length > 2000) {
    return 'Details field exceeds maximum length';
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    if (!WEBHOOK_URL) {
      return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json({ message: 'Too many requests' }, { status: 429 });
    }

    // Origin check (skip in development)
    if (process.env.NODE_ENV === 'production') {
      const origin = request.headers.get('origin');
      if (origin && !ALLOWED_ORIGINS.includes(origin)) {
        return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
      }
    }

    const formData = await request.json();

    // Honeypot check
    if (formData.honeypot || formData.capture) {
      return NextResponse.json({ message: 'Spam detected' }, { status: 400 });
    }

    // Input validation
    const validationError = validateFormData(formData);
    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
    }

    // Only forward known fields
    const sanitizedData = {
      firstName: (formData.firstName as string).trim(),
      lastName: (formData.lastName as string).trim(),
      email: (formData.email as string).trim(),
      title: (formData.title as string).trim(),
      companyName: (formData.companyName as string).trim(),
      companySize: (formData.companySize as string).trim(),
      details: formData.details ? (formData.details as string).trim() : '',
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitizedData),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Form submission failed' }, { status: response.status });
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ message: 'Server error', error: errorMessage }, { status: 500 });
  }
}
