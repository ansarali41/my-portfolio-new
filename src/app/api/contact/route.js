import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Here you can add your email sending logic
    // For example, using nodemailer or any email service
    console.log('Received contact form submission:', { name, email, subject, message });

    // For now, we'll just return a success response
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    );
  }
}
