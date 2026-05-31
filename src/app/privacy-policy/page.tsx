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
        <p className="mt-4 text-sm text-[var(--color-taupe)]">Last updated: June 2026</p>

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


          <div className="mt-12 rounded-2xl border border-[var(--color-rosegold)]/30 bg-[var(--color-blush)]/40 p-6 sm:p-8">
            <p className="eyebrow mb-4">KVKK — Türkiye</p>
            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)] mb-3">Kişisel Verilerin Korunması Kanunu (KVKK) Kapsamında Aydınlatma Metni</h2>
            <p className="text-sm mb-4">6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz aşağıda açıklanan kapsamda işlenmektedir.</p>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-[var(--color-ink)]">Veri Sorumlusu</p>
                <p>Dr. Güler Gamze Eren — İstanbul, Türkiye<br />E-posta: info@drgamzeeren.com</p>
              </div>

              <div>
                <p className="font-semibold text-[var(--color-ink)]">İşlenen Kişisel Veriler</p>
                <p>Ad-soyad, e-posta adresi, telefon/WhatsApp numarası, ülke, dil tercihi, ilgilenilen estetik prosedür(ler) ve iletişim formu aracılığıyla paylaşılan notlar.</p>
              </div>

              <div>
                <p className="font-semibold text-[var(--color-ink)]">İşleme Amaçları (KVKK Madde 5 ve 6)</p>
                <p>Kişisel verileriniz; konsültasyon talebinizin yanıtlanması, randevu planlanması, WhatsApp veya e-posta yoluyla iletişim kurulması ve ilgilendiğiniz prosedürlere ilişkin bilgi sağlanması amacıyla işlenmektedir. Sağlığa ilişkin veriler, KVKK Madde 6 kapsamında hassas kişisel veri niteliği taşımakta olup yalnızca açık rızanıza dayanılarak işlenmektedir.</p>
              </div>

              <div>
                <p className="font-semibold text-[var(--color-ink)]">Hukuki Dayanak</p>
                <p>Kişisel verileriniz; açık rızanız (KVKK Madde 5/1), sözleşmenin kurulması veya ifası (KVKK Madde 5/2-c) ve meşru menfaat (KVKK Madde 5/2-f) hukuki sebeplerine dayanılarak işlenmektedir.</p>
              </div>

              <div>
                <p className="font-semibold text-[var(--color-ink)]">Verilerin Aktarımı</p>
                <p>Kişisel verileriniz; yalnızca prosedür planlaması amacıyla ilgili hastane (Medicana veya Başkent) ile ve yasal yükümlülükler çerçevesinde yetkili mercilerle paylaşılabilir. Pazarlama amacıyla üçüncü taraflarla kesinlikle paylaşılmamaktadır.</p>
              </div>

              <div>
                <p className="font-semibold text-[var(--color-ink)]">Saklama Süresi</p>
                <p>Verileriniz, konsültasyon talebinizin tamamlanmasından itibaren en fazla 12 ay süreyle saklanacak; bu sürenin sonunda imha edilecektir. Aktif hasta ilişkisi söz konusu olması halinde yasal saklama süreleri uygulanır.</p>
              </div>

              <div>
                <p className="font-semibold text-[var(--color-ink)]">KVKK Kapsamındaki Haklarınız (Madde 11)</p>
                <p>Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenen verilere ilişkin bilgi talep etme, işleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri öğrenme, eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme, KVKK Madde 7 kapsamında silinmesini veya yok edilmesini talep etme ve işlemeye itiraz etme haklarına sahipsiniz.</p>
                <p className="mt-1">Bu haklarınızı kullanmak için: <a href="mailto:info@drgamzeeren.com" className="underline hover:text-[var(--color-ink)]">info@drgamzeeren.com</a></p>
              </div>

              <div>
                <p className="font-semibold text-[var(--color-ink)]">Şikayet Hakkı</p>
                <p>Verilerinizin işlenmesine ilişkin şikayetlerinizi Kişisel Verileri Koruma Kurumu'na (KVKK) iletme hakkına sahipsiniz: <a href="https://www.kvkk.gov.tr" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--color-ink)]">www.kvkk.gov.tr</a></p>
              </div>

              <p className="text-xs text-[var(--color-taupe)] pt-2 border-t border-[var(--color-line)]">Bu aydınlatma metni, 6698 sayılı KVKK'nın 10. maddesi ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında hazırlanmıştır. VERBIS kaydı ve veri envanteri gereklilikleri için bir hukuk danışmanına başvurulması tavsiye edilir.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
