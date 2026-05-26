import { NextResponse } from "next/server";

// Hardcoded Resend API Key configuration
const RESEND_API_KEY = "re_RaQD3MEN_9ha1sYzvHpKzfyxqcTF8P64n";

export async function POST(request: Request) {
  try {
    const { name, email, scope } = await request.json();

    if (!name || !email || !scope) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Direct HTTP POST to Resend API (no package installation required!)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Acumo Inquiry <onboarding@resend.dev>",
        to: ["teamacumo@gmail.com"],
        subject: `New Technical Inquiry from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; color: #111; line-height: 1.6; border: 1px solid #eaeaea; border-radius: 8px; padding: 24px; background-color: #fafafa;">
            <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 8px; margin-top: 0; font-family: 'League Spartan', sans-serif; text-transform: uppercase;">
              Acumo Technical Inquiry
            </h2>
            <p style="margin: 16px 0;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 16px 0;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #1e3a8a; text-decoration: none;">${email}</a></p>
            <p style="margin: 20px 0 8px 0; font-weight: bold; uppercase;">Project Scope & Constraints:</p>
            <div style="background-color: #ffffff; border: 1px solid #e2e8f0; padding: 18px; border-radius: 6px; font-family: monospace; font-size: 13px; white-space: pre-wrap; color: #334155; box-shadow: inset 0 1px 2px rgba(0,0,0,0.02);">
              ${scope}
            </div>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0 20px 0;" />
            <p style="font-size: 11px; color: #94a3b8; text-align: center; margin: 0; font-family: monospace;">
              This inquiry was securely dispatched via Acumo AI-Native Transmission.
            </p>
          </div>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.message || "Failed to send email via Resend" }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
