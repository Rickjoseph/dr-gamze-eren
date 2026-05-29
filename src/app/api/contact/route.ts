import { NextRequest, NextResponse } from "next/server";

const GEMSTONE_WEBHOOK = "https://aurenza-v1-1-gemstone.base44.app/api/functions/auraWebhook";
const AURA_SECRET = process.env.AURA_WEBHOOK_SECRET ?? "";
const CLINIC_ID = "6a0accc2ed885a92edfa5ed1";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, interest, message, honeypot } = body;

    // Anti-spam: reject bots that filled the honeypot
    if (honeypot) return NextResponse.json({ ok: true });
    if (!firstName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const acceptLang = req.headers.get("accept-language") ?? "";
    const lang = acceptLang.startsWith("ru") ? "russian"
      : acceptLang.startsWith("tr") ? "turkish"
      : acceptLang.startsWith("de") ? "german"
      : acceptLang.startsWith("fr") ? "french"
      : acceptLang.startsWith("es") ? "spanish"
      : "english";

    await fetch(GEMSTONE_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-aura-secret": AURA_SECRET,
      },
      body: JSON.stringify({
        action: "create_lead",
        data: {
          clinic_id: CLINIC_ID,
          name: `${firstName.trim()} ${lastName?.trim() ?? ""}`.trim(),
          email: email.trim(),
          phone: phone?.trim() ?? "",
          language: lang,
          procedure_interest: interest ?? "",
          source: "website_contact",
          status: "new",
          notes: message ? `Message: ${message}` : "Lead captured via website contact form.",
        },
      }),
    });
  } catch {
    // Fail silently
  }

  return NextResponse.json({ ok: true });
}
