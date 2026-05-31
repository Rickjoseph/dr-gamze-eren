import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Gamze Eren",
  description: "How Dr. Gamze Eren's clinic collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative px-4 sm:px-8 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="headline mt-4">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[var(--color-taupe)]">Last updated: June 2025</p>

        <div className="mt-12 space-y-10 text-[var(--color-cocoa)] leading-relaxed">

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">1. Who we are</h2>
            <p>This website is operated by <strong>Dr. Güler Gamze Eren</strong>, a board-certified plastic surgeon practising at Medicana and Başkent hospitals in Istanbul, Turkey. References to "we", "us", or "the clinic" in this policy refer to the clinic and its administrative team.</p>
            <p className="mt-2">Contact: <a href="mailto:info@drgamzeeren.com" className="underline hover:text-[var(--color-ink)]">info@drgamzeeren.com</a></p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">2. What data we collect</h2>
            <p>When you use our contact form or price calculator, we may collect:</p>
            <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
              <li>Your name and email address</li>
              <li>Your phone number or WhatsApp number (optional)</li>
              <li>Your country and preferred language</li>
              <li>The procedure(s) you are interested in</li>
              <li>Any message or notes you provide</li>
            </ul>
            <p className="mt-2">We do not collect sensitive medical data through this website. Any medical details shared in subsequent conversations are treated with the highest level of confidentiality.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">3. How we use your data</h2>
            <p>We use the information you provide solely to:</p>
            <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
              <li>Respond to your consultation enquiry</li>
              <li>Contact you via email, phone, or WhatsApp about your enquiry</li>
              <li>Schedule or manage appointments if you proceed with a consultation</li>
              <li>Send relevant follow-up information about procedures you expressed interest in</li>
            </ul>
            <p className="mt-2">We will not use your data for unrelated marketing purposes without your explicit consent.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">4. Legal basis for processing (GDPR)</h2>
            <p>If you are based in the European Economic Area (EEA), we process your data under the following legal bases:</p>
            <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
              <li><strong>Consent</strong> — you give us explicit consent when submitting the contact form or calculator</li>
              <li><strong>Legitimate interest</strong> — to respond to your direct enquiry about our services</li>
              <li><strong>Contractual necessity</strong> — if you proceed to book a consultation or procedure</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">5. Data sharing</h2>
            <p>We <strong>never sell or share your personal data with third parties</strong> for marketing purposes. Your data may be shared only in the following limited circumstances:</p>
            <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
              <li>With the hospital (Medicana or Başkent) when a procedure is booked, for clinical administration purposes</li>
              <li>With our secure software tools used to manage patient enquiries (data processors), all of which are bound by confidentiality</li>
              <li>When required by law or regulatory authority</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">6. Data retention</h2>
            <p>We retain your contact details for as long as necessary to manage your enquiry or ongoing care relationship. If you do not proceed with a consultation, we will remove your data from our active systems within 12 months of your last contact. You may request earlier deletion at any time.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">7. Your rights</h2>
            <p>Under GDPR and applicable data protection law, you have the right to:</p>
            <ul className="mt-2 ml-4 space-y-1 list-disc list-inside">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data ("right to be forgotten")</li>
              <li>Withdraw consent at any time</li>
              <li>Object to processing based on legitimate interest</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:info@drgamzeeren.com" className="underline hover:text-[var(--color-ink)]">info@drgamzeeren.com</a>.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">8. Cookies</h2>
            <p>This website uses minimal cookies for essential functionality (language preference, session state). We do not use tracking or advertising cookies without your consent. A cookie consent notice is shown on your first visit.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">9. Security</h2>
            <p>We take reasonable technical and organisational measures to protect your data from unauthorised access, disclosure, or loss. Data submitted through this website is transmitted securely via HTTPS.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">10. Changes to this policy</h2>
            <p>We may update this policy from time to time. The latest version will always be available on this page. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">11. Contact</h2>
            <p>Questions about this policy? Get in touch:</p>
            <p className="mt-2"><strong>Dr. Güler Gamze Eren Clinic</strong><br />Istanbul, Turkey<br /><a href="mailto:info@drgamzeeren.com" className="underline hover:text-[var(--color-ink)]">info@drgamzeeren.com</a></p>
          </div>

        </div>
      </div>
    </section>
  );
}
