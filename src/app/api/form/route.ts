import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ReservationRequestBody {
  email: string;
  struggles: string[];
  additionalInfo?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ReservationRequestBody = await request.json();
    const { email, struggles, additionalInfo } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Missing email field' },
        { status: 400 }
      );
    }

    if (!struggles || struggles.length === 0) {
      return NextResponse.json(
        { error: 'Missing struggles field' },
        { status: 400 }
      );
    }

    const adminEmail = process.env.EMAIL!;

    // Admin notification email
    const adminEmailHtml = `
      <div style="
        font-family: 'Geist', Arial, sans-serif; 
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
        color: #333333;
      ">
        <div style="
          background: #f9fafb;
          padding: 20px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        ">
          <h2 style="
            margin: 0;
            font-size: 1.75rem;
            font-weight: 600;
            color: #111827;
          ">
            New Reservation Request
          </h2>
        </div>

        <div style="
          background: #ffffff;
          padding: 24px;
        ">
          <h3 style="
            margin-top: 0;
            margin-bottom: 12px;
            color: #1f2937;
            font-size: 1.25rem;
            font-weight: 500;
          ">
            Reservation Details
          </h3>

          <table style="
            width: 100%;
            border-collapse: collapse;
          ">
            <tr>
              <td style="
                padding: 6px 0;
                font-weight: 500;
                color: #6b7280;
              ">Email:</td>
              <td style="
                padding: 6px 0;
              ">
                <a href="mailto:${email}" style="
                  color: #2563eb;
                  text-decoration: none;
                ">${email}</a>
              </td>
            </tr>

            <tr>
              <td style="
                padding: 6px 0;
                font-weight: 500;
                color: #6b7280;
                vertical-align: top;
              ">Struggles:</td>
              <td style="
                padding: 6px 0;
                color: #111827;
              ">
                <ul style="margin: 0; padding-left: 20px;">
                  ${struggles.map((struggle) => `<li style="margin-bottom: 4px;">${struggle}</li>`).join('')}
                </ul>
              </td>
            </tr>

            ${
              additionalInfo
                ? `
            <tr>
              <td style="
                padding: 6px 0;
                font-weight: 500;
                color: #6b7280;
                vertical-align: top;
              ">Additional Info:</td>
              <td style="
                padding: 6px 0;
                color: #111827;
              ">${additionalInfo}</td>
            </tr>
            `
                : ''
            }
          </table>
        </div>

        <div style="
          background: #e0f2fe;
          padding: 16px;
          border-top: 1px solid #bae6fd;
          border-left: 4px solid #3b82f6;
        ">
          <p style="
            margin: 0;
            color: #1e40af;
            font-size: 0.9rem;
          ">
            <strong>Timestamp:</strong> ${new Date().toLocaleString()}
          </p>
        </div>

        <div style="
          text-align: center;
          font-size: 0.75rem;
          color: #9ca3af;
          padding: 16px;
          border-top: 1px solid #e5e7eb;
        ">
          This email was sent from the <strong>Codabu</strong> reservation form.
        </div>
      </div>
    `;

    // User confirmation email
    const userEmailHtml = `
      <div style="
        font-family: 'Geist', Arial, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
        color: #333333;
      ">
        <div style="
          background: #f9fafb;
          padding: 20px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        ">
          <h2 style="
            margin: 0;
            font-size: 1.75rem;
            font-weight: 600;
            color: #111827;
          ">
            Reservation Confirmed!
          </h2>
        </div>

        <div style="padding: 24px;">
          <p style="color: #374151; line-height: 1.6; margin-top: 0;">
            <strong>Hey,</strong>
          </p>

          <p style="color: #374151; line-height: 1.6;">
            Thank you for reserving your spot for Codabu early access! We've received your reservation and will be in touch soon with more details about your early access.
          </p>

          <div style="
            background: #f9fafb;
            padding: 20px;
            border-radius: 6px;
            margin: 20px 0;
            border: 1px solid #e5e7eb;
          ">
            <h3 style="
              color: #1d4ed8;
              margin-top: 0;
              margin-bottom: 12px;
              font-size: 1.15rem;
              font-weight: 500;
            ">
              Your Reservation Details
            </h3>

            <p style="margin: 8px 0; color: #4b5563;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Reservation Date:</strong> ${new Date().toLocaleDateString()}</p>
            <p style="margin: 8px 0; color: #4b5563;"><strong>Your Struggles:</strong></p>
            <ul style="margin: 4px 0 8px 0; padding-left: 20px; color: #4b5563;">
              ${struggles.map((struggle) => `<li style="margin-bottom: 2px;">${struggle}</li>`).join('')}
            </ul>
            ${
              additionalInfo
                ? `
            <p style="margin: 8px 0; color: #4b5563;"><strong>Additional Information:</strong></p>
            <p style="margin: 4px 0 8px 0; color: #4b5563; background: #f3f4f6; padding: 12px; border-radius: 4px;">${additionalInfo}</p>
            `
                : ''
            }
          </div>

          <p style="color: #374151; line-height: 1.6;">
            We're excited to have you on board! Keep an eye on your email for updates.
          </p>
        </div>

        <div style="
          margin-top: 0;
          padding: 16px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          background: #f9fafb;
        ">
          <p style="color: #6b7280; font-size: 0.75rem; margin: 0;">
            Best regards,<br>
            The Codabu Team
          </p>
        </div>
      </div>
    `;

    // Send admin notification
    const { error: adminError } = await resend.emails.send({
      from: adminEmail,
      to: [adminEmail],
      subject: `New Reservation: ${email}`,
      html: adminEmailHtml
    });

    if (adminError) {
      console.error('Resend admin email error:', adminError);
      return NextResponse.json(
        { error: 'Failed to send admin notification email' },
        { status: 500 }
      );
    }

    // Send user confirmation
    const { error: userError } = await resend.emails.send({
      from: adminEmail,
      to: [email],
      subject: 'Reservation Confirmed - Codabu Early Access',
      html: userEmailHtml
    });

    if (userError) {
      console.error('Resend user email error:', userError);
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Reservation submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
