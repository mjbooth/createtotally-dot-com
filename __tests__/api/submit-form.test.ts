/**
 * @jest-environment node
 */
import { POST } from '@/app/api/submit-form/route';
import { NextRequest } from 'next/server';

// Mock fetch globally
global.fetch = jest.fn();

const validFormData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  title: 'Engineer',
  companyName: 'Acme Inc',
  companySize: '50-100',
};

let requestCounter = 0;

function createRequest(body: unknown) {
  requestCounter++;
  return new NextRequest('http://localhost:3000/api/submit-form', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'x-forwarded-for': `127.0.0.${requestCounter}`,
    },
  });
}

describe('/api/submit-form', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle successful form submission', async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
    } as Response);

    const response = await POST(createRequest(validFormData));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe('Form submitted successfully');
    expect(mockFetch).toHaveBeenCalledWith(
      'https://test-webhook.example.com',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
    );
  });

  it('should detect and reject honeypot spam', async () => {
    const response = await POST(createRequest({ ...validFormData, honeypot: 'spam content' }));
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.message).toBe('Spam detected');
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('should handle external service errors', async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    } as Response);

    const response = await POST(createRequest(validFormData));
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.message).toBe('Form submission failed');
  });

  it('should handle network errors', async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    const response = await POST(createRequest(validFormData));
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.message).toBe('Server error');
    expect(data.error).toBe('Network error');
  });

  it('should handle invalid JSON', async () => {
    const request = new NextRequest('http://localhost:3000/api/submit-form', {
      method: 'POST',
      body: 'invalid json',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.message).toBe('Server error');
  });

  it('should handle empty honeypot (legitimate submission)', async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
    } as Response);

    const response = await POST(createRequest({ ...validFormData, honeypot: '' }));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe('Form submitted successfully');
    expect(mockFetch).toHaveBeenCalled();
  });

  it('should reject missing required fields', async () => {
    const response = await POST(createRequest({ firstName: 'John' }));
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.message).toContain('Missing required field');
  });

  it('should reject invalid email', async () => {
    const response = await POST(createRequest({ ...validFormData, email: 'not-an-email' }));
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.message).toBe('Invalid email address');
  });
});
