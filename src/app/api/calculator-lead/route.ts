import { NextRequest, NextResponse } from "next/server";

const GEMSTONE_WEBHOOK = "https://aurenza-v1-1-gemstone.base44.app/api/functions/auraWebhook";
const AURA_SECRET = process.env.AURA_WEBHOOK_SECRET ?? "";
const CLINIC_ID = "6a0accc2ed885a92edfa5ed1";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, procedures, estimatedMin, estimatedMax } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const acceptLang = req.headers.get("accept-language") ?? "";
    const lang = acceptLang.startsWith("ru") ? "russian"
      : acceptLang.startsWith("tr") ? "turkish"
      : acceptLang.startsWith("de") ? "german"
      : acceptLang.startsWith("fr") ? "french"
      : acceptLang.startsWith("es") ? "spanish"
      : "english";

    // Build procedure list string for notes
    const procedureList = procedures?.length ? procedures.join(", ") : "";
    const priceRange = (estimatedMin && estimatedMax)
      ? `Estimated range: €${estimatedMin.toLocaleString()}–€${estimatedMax.toLocaleString()}. `
      : "";

    // Use midpoint as estimated_value
    const estimatedValue = (estimatedMin && estimatedMax)
      ? Math.round((estimatedMin + estimatedMax) / 2)
      : null;

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
          name: name.trim(),
          email: email.trim(),
          phone: phone?.trim() ?? "",
          language: lang,
          procedure_interest: procedureList,
          estimated_value: estimatedValue,
          source: "website_calculator",
          status: "new",
          notes: `${priceRange}${procedureList ? `Selected procedures: ${procedureList}. ` : ""}Lead captured via procedure price calculator on website.`,
        },
      }),
    });
  } catch {
    // Fail silently — never block the user from seeing their estimate
  }

  return NextResponse.json({ ok: true });
}
