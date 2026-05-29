import { NextRequest, NextResponse } from "next/server";

const GEMSTONE_APP_ID = "69fc3c8482c8ea60f6d36104";
const GEMSTONE_CLINIC_ID = "dr-gamze-eren";
const BASE44_API = `https://api.base44.com/api/apps/${GEMSTONE_APP_ID}/entities`;
const SERVICE_TOKEN = process.env.BASE44_SERVICE_TOKEN ?? "";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Detect language from Accept-Language header
    const acceptLang = req.headers.get("accept-language") ?? "";
    const lang = acceptLang.startsWith("ru") ? "Russian"
      : acceptLang.startsWith("tr") ? "Turkish"
      : acceptLang.startsWith("de") ? "German"
      : acceptLang.startsWith("fr") ? "French"
      : acceptLang.startsWith("es") ? "Spanish"
      : "English";

    await fetch(`${BASE44_API}/Lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "app-id": GEMSTONE_APP_ID,
        "service-token": SERVICE_TOKEN,
      },
      body: JSON.stringify({
        clinic_id: GEMSTONE_CLINIC_ID,
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
