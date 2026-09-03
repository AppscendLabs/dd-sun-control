import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS } from "@/lib/config";

const SERVICE_LABELS: Record<string, string> = {
  automotive: "Automotive Tinting",
  residential: "Residential Tinting",
  commercial: "Commercial Tinting",
  ppf: "Paint Protection Film",
  other: "Other / Not Sure",
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const { name, email, phone, service, message } = await request.json();

  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !email.trim() ||
    typeof phone !== "string" || !phone.trim() ||
    typeof service !== "string" || !service.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `${BUSINESS.shortName} Website <onboarding@resend.dev>`,
      to: BUSINESS.email,
      replyTo: email,
      subject: `New quote request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${SERVICE_LABELS[service] ?? service}`,
        "",
        "Message:",
        typeof message === "string" && message.trim() ? message : "(none)",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
