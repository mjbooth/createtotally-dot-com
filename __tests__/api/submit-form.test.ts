import { POST } from '@/app/api/submit-form/route';
import { NextRequest } from 'next/server';

// Mock fetch globally
global.fetch = jest.fn();

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

    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
    };

    const request = new NextRequest('http://localhost:3000/api/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe('Form submitted successfully');
    expect(mockFetch).toHaveBeenCalledWith(
      'https://f597b15e-1f58-489c-96fd-d4c0b8495e72.eu1.trayapp.io',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
  });

  it('should detect and reject honeypot spam', async () => {
    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
      honeypot: 'spam content',
    };

    const request = new NextRequest('http://localhost:3000/api/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
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

    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
    };

    const request = new NextRequest('http://localhost:3000/api/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.message).toBe('Form submission failed');
  });

  it('should handle network errors', async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
    };

    const request = new NextRequest('http://localhost:3000/api/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
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

    const formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
      honeypot: '', // Empty honeypot should be allowed
    };

    const request = new NextRequest('http://localhost:3000/api/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe('Form submitted successfully');
    expect(mockFetch).toHaveBeenCalled();
  });
});