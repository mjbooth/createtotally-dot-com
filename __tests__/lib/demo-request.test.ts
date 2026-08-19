/**
 * @jest-environment node
 */
import { saveDemoRequest, sendDemoRequestSummary, DemoRequest } from '@/lib/demo-request';

const mockSend = jest.fn();
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({ emails: { send: mockSend } })),
}));

const demoRequest: DemoRequest = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  title: 'Engineer',
  companyName: 'Acme Inc',
  companySize: '50-100',
  details: 'Keen to see the Figma plugin',
};

describe('saveDemoRequest', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn().mockResolvedValue({ ok: true, status: 200 } as Response);
  });

  it('posts the request to the Get Started Submissions table', async () => {
    await saveDemoRequest(demoRequest);

    const [url, init] = (global.fetch as jest.Mock).mock.calls[0];
    expect(url).toBe('https://api.airtable.com/v0/app8665VLvzHsc5rX/tblPBNkotXrW3TBPY');
    expect(init.headers.Authorization).toBe('Bearer test-airtable-token');
    // Field names must match the Airtable schema exactly or the write is rejected.
    expect(JSON.parse(init.body).fields).toEqual({
      'First Name': 'John',
      'Last name': 'Doe',
      Email: 'john@example.com',
      'Job title': 'Engineer',
      'Company name': 'Acme Inc',
      'Company size': '50-100',
      Comments: 'Keen to see the Figma plugin',
    });
  });

  it('throws when Airtable rejects the record', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: false, status: 422 } as Response);

    await expect(saveDemoRequest(demoRequest)).rejects.toThrow('Airtable rejected the record (422)');
  });
});

describe('sendDemoRequestSummary', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSend.mockResolvedValue({ error: null });
  });

  it('emails a summary to matt@createtotally.com, replying to the submitter', async () => {
    await sendDemoRequestSummary(demoRequest);

    const email = mockSend.mock.calls[0][0];
    expect(email.to).toBe('matt@createtotally.com');
    expect(email.from).toContain('notifications@createtotally.com');
    expect(email.replyTo).toBe('john@example.com');
    expect(email.subject).toBe('New demo request: John Doe, Acme Inc');
    expect(email.text).toContain('Company: Acme Inc');
    expect(email.text).toContain('Comments: Keen to see the Figma plugin');
  });

  it('escapes submitted values in the HTML body', async () => {
    await sendDemoRequestSummary({ ...demoRequest, companyName: '<script>x</script>' });

    expect(mockSend.mock.calls[0][0].html).toContain('&lt;script&gt;x&lt;/script&gt;');
  });

  it('throws when Resend rejects the email', async () => {
    mockSend.mockResolvedValue({ error: { message: 'domain not verified' } });

    await expect(sendDemoRequestSummary(demoRequest)).rejects.toThrow('domain not verified');
  });
});
