import { Resend } from 'resend';

/** A validated, sanitized demo request from the get-started form. */
export interface DemoRequest {
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  companyName: string;
  companySize: string;
  details: string;
}

// Airtable base "Website Submissions" → table "Get Started Submissions".
// Not secrets, so they live here rather than in env.
const AIRTABLE_BASE_ID = 'app8665VLvzHsc5rX';
const AIRTABLE_TABLE_ID = 'tblPBNkotXrW3TBPY';

const SUMMARY_FROM = 'CreateTOTALLY <notifications@createtotally.com>';
const SUMMARY_TO = 'matt@createtotally.com';

/**
 * Writes the demo request to Airtable. Throws if the record is not created —
 * Airtable is the system of record, so a failure here must fail the submission.
 */
export async function saveDemoRequest(request: DemoRequest): Promise<void> {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    throw new Error('AIRTABLE_TOKEN is not configured');
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          'First Name': request.firstName,
          'Last name': request.lastName,
          Email: request.email,
          'Job title': request.title,
          'Company name': request.companyName,
          'Company size': request.companySize,
          Comments: request.details,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Airtable rejected the record (${response.status})`);
  }
}

/**
 * Emails a summary of the request. Throws on failure; callers treat this as
 * best-effort, since the record is already safely in Airtable.
 */
export async function sendDemoRequestSummary(request: DemoRequest): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const fullName = `${request.firstName} ${request.lastName}`;
  const rows: [string, string][] = [
    ['Name', fullName],
    ['Email', request.email],
    ['Job title', request.title],
    ['Company', request.companyName],
    ['Company size', request.companySize],
    ['Comments', request.details || '—'],
  ];

  const { error } = await new Resend(apiKey).emails.send({
    from: SUMMARY_FROM,
    to: SUMMARY_TO,
    replyTo: request.email,
    subject: `New demo request: ${fullName}, ${request.companyName}`,
    text: rows.map(([label, value]) => `${label}: ${value}`).join('\n'),
    html: `<table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows
      .map(
        ([label, value]) =>
          `<tr><td style="color:#666">${escapeHtml(label)}</td><td><strong>${escapeHtml(
            value
          )}</strong></td></tr>`
      )
      .join('')}</table>`,
  });

  if (error) {
    throw new Error(`Resend rejected the email: ${error.message}`);
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
