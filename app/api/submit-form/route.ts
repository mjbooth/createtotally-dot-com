import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Check for honeypot
    if (formData.honeypot) {
      console.log('Potential spam detected');
      return NextResponse.json({ message: 'Spam detected' }, { status: 400 });
    }

    const response = await fetch('https://f597b15e-1f58-489c-96fd-d4c0b8495e72.eu1.trayapp.io', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Form submission failed' }, { status: response.status });
    }
  } catch (error: unknown) {
    console.error('Error processing form submission:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ message: 'Server error', error: errorMessage }, { status: 500 });
  }
}