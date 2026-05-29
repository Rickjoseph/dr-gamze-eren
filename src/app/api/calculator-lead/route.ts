import { NextRequest, NextResponse } from "next/server";

const GEMSTONE_WEBHOOK = "https://aurenza-v1-1-gemstone.base44.app/functions/auraWebhook";
const AURA_SECRET = process.env.AURA_WEBHOOK_SECRET ?? "";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const acceptLang = req.headers.get("accept-language") ?? "";
    const lang = acceptLang.startsWith("ru") ? "Russian"
      : acceptLang.startsWith("tr") ? "Turkish"
      : acceptLang.startsWith("de") ? "German"
      : acceptLang.startsWith("fr") ? "French"
      : acceptLang.startsWith("es") ? "Spanish"
      : "English";

    await fetch(GEMSTONE_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-aura-secret": AURA_SECRET,
      },
      body: JSON.stringify({
        action: "create_lead",
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() ?? "",
        language: lang,
        source: "website_calculator",
        status: "New",
        notes: "Lead captured via procedure price calculator on website.",
      }),
    });
  } catch {
    // Fail silently — never block the user from seeing their estimate
  }

  return NextResponse.json({ ok: true });
}
