/**
 * @jest-environment node
 */
import { POST } from '@/app/api/submit-form/route';
import { saveDemoRequest, sendDemoRequestSummary } from '@/lib/demo-request';
import { NextRequest } from 'next/server';

jest.mock('@/lib/demo-request', () => ({
  saveDemoRequest: jest.fn(),
  sendDemoRequestSummary: jest.fn(),
}));

const mockSave = saveDemoRequest as jest.MockedFunction<typeof saveDemoRequest>;
const mockSendSummary = sendDemoRequestSummary as jest.MockedFunction<typeof sendDemoRequestSummary>;

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
    mockSave.mockResolvedValue(undefined);
    mockSendSummary.mockResolvedValue(undefined);
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should save the request to Airtable and email a summary', async () => {
    const response = await POST(createRequest(validFormData));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe('Form submitted successfully');
    expect(mockSave).toHaveBeenCalledWith({ ...validFormData, details: '' });
    expect(mockSendSummary).toHaveBeenCalledWith({ ...validFormData, details: '' });
  });

  it('should trim submitted values and pass through details', async () => {
    await POST(createRequest({ ...validFormData, firstName: '  John  ', details: '  Hi  ' }));

    expect(mockSave).toHaveBeenCalledWith({ ...validFormData, details: 'Hi' });
  });

  it('should detect and reject honeypot spam', async () => {
    const response = await POST(createRequest({ ...validFormData, honeypot: 'spam content' }));
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.message).toBe('Spam detected');
    expect(mockSave).not.toHaveBeenCalled();
  });

  it('should fail the submission when Airtable rejects the record', async () => {
    mockSave.mockRejectedValueOnce(new Error('Airtable rejected the record (401)'));

    const response = await POST(createRequest(validFormData));
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.message).toBe('Server error');
    expect(data.error).toBeUndefined();
    expect(mockSendSummary).not.toHaveBeenCalled();
  });

  it('should still succeed when the summary email fails', async () => {
    mockSendSummary.mockRejectedValueOnce(new Error('Resend is down'));

    const response = await POST(createRequest(validFormData));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe('Form submitted successfully');
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
    const response = await POST(createRequest({ ...validFormData, honeypot: '' }));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe('Form submitted successfully');
    expect(mockSave).toHaveBeenCalled();
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
