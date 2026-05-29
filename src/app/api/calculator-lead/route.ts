import { NextRequest, NextResponse } from "next/server";

const AURA_WEBHOOK = "https://aurenza-v1-1-gemstone.base44.app/functions/auraWebhook";
const AURA_SECRET = process.env.AURA_WEBHOOK_SECRET ?? "";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Detect language from Accept-Language header as a best-effort signal
    const acceptLang = req.headers.get("accept-language") ?? "";
    const lang = acceptLang.startsWith("ru") ? "Russian"
      : acceptLang.startsWith("tr") ? "Turkish"
      : acceptLang.startsWith("de") ? "German"
      : "English";

    await fetch(AURA_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-aura-secret": AURA_SECRET,
      },
      body: JSON.stringify({
        action: "create_lead",
        name,
        email,
        phone: phone ?? "",
        language: lang,
        source: "website_calculator",
        notes: "Lead captured via procedure price calculator.",
        procedure_interest: "",
        country: "",
      }),
    });
  } catch {
    // Fail silently — don't block the user
  }

  return NextResponse.json({ ok: true });
}
