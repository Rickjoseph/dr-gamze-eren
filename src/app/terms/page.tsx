import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Dr. Gamze Eren",
  description: "Terms and conditions for using the Dr. Gamze Eren clinic website and consultation services.",
};

export default function TermsPage() {
  return (
    <section className="relative px-4 sm:px-8 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="headline mt-4">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-[var(--color-taupe)]">Last updated: June 2026</p>

        <div className="mt-12 space-y-10 text-[var(--color-cocoa)] leading-relaxed">

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">1. About this website</h2>
            <p>This website is operated by <strong>Dr. Güler Gamze Eren</strong>, a board-certified plastic surgeon based in Istanbul, Turkey. By using this website, you agree to these terms and conditions. If you do not agree, please do not use the site.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">2. Information only — not medical advice</h2>
            <p>The content on this website is provided for general informational purposes only. It does not constitute medical advice, diagnosis, or treatment recommendations. All clinical decisions are made on an individual basis during a formal consultation with Dr. Gamze Eren.</p>
            <p className="mt-2">Always seek the advice of a qualified medical professional before making any decisions about surgery or medical procedures.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">3. Price calculator — estimates only</h2>
            <p>The procedure price calculator on this website provides <strong>rough estimates only</strong>. Prices shown are indicative ranges based on standard packages and do not constitute a quote or offer. Final pricing is always determined after a personal consultation and review by the clinic team.</p>
            <p className="mt-2">Prices may vary based on individual anatomy, chosen hospital, surgical complexity, and other clinical factors. The clinic reserves the right to update pricing at any time.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">4. No guarantee of results</h2>
            <p>Aesthetic surgery results vary between individuals. Photographs, testimonials, and case studies shown on this website are examples of real patients who have given consent for their use. They do not represent a guarantee of the results you will achieve.</p>
            <p className="mt-2">All potential outcomes, risks, and realistic expectations will be discussed thoroughly during your personal consultation.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">5. Consultations and bookings</h2>
            <p>Submitting a contact form or enquiry does not constitute a booking or binding agreement. A consultation is confirmed only when explicitly acknowledged in writing by the clinic team.</p>
            <p className="mt-2">The clinic reserves the right to decline any consultation or procedure at its clinical discretion.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">6. WhatsApp communication</h2>
            <p>By providing your WhatsApp number and consenting on our contact form, you agree to receive messages from the clinic team regarding your enquiry. You may opt out at any time by informing us via email or WhatsApp message.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">7. Intellectual property</h2>
            <p>All content on this website — including text, images, graphics, logos, and design — is the intellectual property of Dr. Güler Gamze Eren or used with permission. You may not reproduce, distribute, or use any content without prior written consent.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">8. Limitation of liability</h2>
            <p>To the fullest extent permitted by law, the clinic is not liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">9. Governing law</h2>
            <p>These terms are governed by the laws of the Republic of Turkey. Any disputes shall be subject to the jurisdiction of Istanbul courts.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">10. Changes to these terms</h2>
            <p>We may update these terms from time to time. The current version will always be published on this page. Continued use of the website after updates constitutes acceptance of the revised terms.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">11. Contact</h2>
            <p>Questions about these terms? Contact us at <a href="mailto:info@drgamzeeren.com" className="underline hover:text-[var(--color-ink)]">info@drgamzeeren.com</a>.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
