// All translatable strings. Add a new locale by extending each section.
// Keep keys identical across locales — TypeScript will enforce it via Dict.

export type Locale = "en" | "tr";

const en = {
  meta: {
    siteTitle: "Dr. Gamze Eren — Aesthetic & Reconstructive Surgery, Istanbul",
    siteDescription:
      "Board-certified plastic surgery in Istanbul. Surgical precision meets artistic vision — natural, confident results in a private Caddebostan clinic.",
    ogTitle: "Dr. Gamze Eren — Aesthetic Surgery, Istanbul",
    ogDescription:
      "Confidence is beautiful. Surgical precision, artistic vision, results that look unmistakably yours.",
  },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    book: "Book Consultation",
    menu: "Menu",
  },
  footer: {
    tagline:
      "Aesthetic & reconstructive surgery in Istanbul. Surgical precision, artistic vision, results that look unmistakably yours.",
    clinic: "Clinic",
    addressLines: [
      "Caddebostan Mah., Ethem Efendi Cad.",
      "No:3 Uğur Apt. D:9",
      "34728 Kadıköy / İstanbul",
    ],
    hours: "Hours",
    monFri: "Mon – Fri",
    sat: "Saturday",
    sun: "Sunday",
    closed: "Closed",
    getInTouch: "Get in touch",
    copyright: "All rights reserved.",
    credential: "Board-certified plastic surgeon · TPRECD Member",
  },
  home: {
    eyebrow: "Aesthetic & Reconstructive Surgery · Istanbul",
    headlineA: "Confidence is",
    headlineAccent1: "beautiful.",
    headlineB: "The rest is",
    headlineAccent2: "refinement.",
    lede: "Dr. Gamze Eren pairs surgical precision with an artist’s eye — shaping results that look like a quieter, more rested version of you, never someone else.",
    ctaPrimary: "Book a private consultation",
    ctaSecondary: "Explore procedures →",
    portraitTitle: "Op. Dr.",
    portraitName: ["Güler Gamze", "Eren"] as const,
    stats: {
      yearsValue: "15+",
      yearsLabel: "years of surgical practice",
      planningValue: "3D",
      planningLabel: "Kratos pre-operative simulation",
      patientsValue: "30+",
      patientsLabel: "international patients per month",
    },
    philosophy: {
      eyebrow: "Philosophy",
      quoteA: "“Beauty is not perfection — it is",
      quoteAccent1: "harmony",
      quoteB: ", confidence, and feeling at peace in your own body. Aesthetic surgery is not a transformation but a graceful return to your",
      quoteAccent2: "strongest self",
      quoteC: ".”",
      attribution: "— Dr. Gamze Eren",
      side: "Every consultation begins with listening. From there we plan in millimetres, simulate in three dimensions, and operate with the lightest hand the result will allow.",
      meet: "Meet Dr. Eren",
    },
    services: {
      eyebrow: "Procedures",
      headlineA: "A practice built around",
      headlineAccent: "four pillars.",
      viewAll: "View all →",
    },
    tourism: {
      eyebrow: "Concierge for international patients",
      headlineA: "Begin your aesthetic journey in",
      headlineAccent: "Istanbul.",
      body: "From flights and discreet accommodation to bilingual pre-operative planning and post-operative care, our team arranges every detail so you can focus on a calm, comfortable recovery.",
      cta: "Plan my visit →",
      tiles: [
        { k: "Flights", v: "Arranged" },
        { k: "Hotel", v: "5-star" },
        { k: "Languages", v: "TR · EN · DE" },
        { k: "Aftercare", v: "Concierge" },
      ],
    },
    journey: {
      eyebrow: "Your Journey",
      headlineA: "Considered care, from first message to",
      headlineAccent: "final follow-up.",
      steps: [
        { n: "01", t: "Discovery", d: "A private virtual or in-person consultation to understand your goals." },
        { n: "02", t: "3D Planning", d: "Kratos simulation visualises possible outcomes before any decision." },
        { n: "03", t: "Surgery", d: "Performed in an accredited hospital with senior anesthesia and nursing." },
        { n: "04", t: "Recovery", d: "Concierge follow-up, scar care, and long-term aesthetic support." },
      ],
    },
    testimonial: {
      quoteA: "I didn’t want to look different. I wanted to look like myself on my best morning — every morning.",
      quoteAccent: "Dr. Eren understood that.",
      attribution: "Patient · Rhinoplasty, 2025",
    },
    finalCta: {
      headlineA: "Ready to begin the",
      headlineAccent: "conversation?",
      body: "Every journey starts with a private consultation. Share your goals — we’ll take it from there.",
      primary: "Book consultation",
    },
  },
  about: {
    eyebrow: "About",
    headlineA: "Precision is a craft.",
    headlineAccent: "Beauty is the result.",
    lede: "Dr. Güler Gamze Eren is an Istanbul-based plastic surgeon known for natural results, fastidious technique, and an unhurried approach to consultation. Her practice combines surgical depth with the quiet confidence of an artist.",
    portrait: {
      role: "Op. Dr.",
      name: "Güler Gamze Eren",
      title: "Plastic, Reconstructive & Aesthetic Surgeon",
    },
    training: {
      eyebrow: "Training",
      items: [
        "Medical Doctor — Istanbul University, Cerrahpaşa",
        "Plastic Surgery Residency — Ministry of Health Teaching Hospital",
        "Aesthetic Surgery Fellowship — International rotations",
      ],
    },
    memberships: {
      eyebrow: "Memberships",
      items: [
        "Turkish Society of Plastic, Reconstructive & Aesthetic Surgery (TPRECD)",
        "Turkish Medical Association",
        "International Society of Aesthetic Plastic Surgery (associate)",
      ],
    },
    languages: {
      eyebrow: "Languages",
      body: "Turkish · English · Working German",
    },
    gallery: {
      eyebrow: "Inside the clinic",
      headlineA: "A small, private practice in",
      headlineAccent: "Caddebostan.",
      theatreEyebrow: "In theatre",
      theatreTitle: "Precision at work",
    },
    approach: {
      eyebrow: "Approach",
      headlineA: "An aesthetic that looks",
      headlineAccent: "unmistakably yours.",
      paragraphs: [
        "Dr. Eren’s practice is built on three principles. The first is harmony — every change is judged against the rest of the face or body, never in isolation. The second is restraint — taking only what is needed to reach the result you want, nothing more. The third is transparency — 3D simulation, frank conversation, and a written plan so you know precisely what is being proposed.",
        "The clinic in Caddebostan is intentionally small. Patients are seen privately, by name, and consultations are unrushed. International visitors are looked after with a concierge service that covers everything from airport pickup to follow-up at home.",
      ],
    },
    values: [
      { t: "Patient-first consultations", d: "60-minute private sessions. We listen first, recommend second." },
      { t: "Accredited hospital surgery", d: "Procedures performed in partner hospitals with senior anaesthesia and full ICU backup." },
      { t: "Long-term follow-up", d: "Aftercare scheduled for 24h, 7d, 1mo, 3mo, 12mo — by video if you live abroad." },
    ],
    cta: {
      headline: "Considering a procedure?",
      body: "A consultation is the right place to start — there’s no obligation, and you’ll leave with a clearer sense of what is possible.",
      primary: "Book consultation",
      secondary: "Browse procedures",
    },
  },
  services: {
    eyebrow: "Procedures",
    headlineA: "A practice of",
    headlineAccent1: "restraint.",
    headlineB: "A menu of",
    headlineAccent2: "possibilities.",
    lede: "Each procedure below is planned in millimetres and discussed in plain language. We will never propose more than the result requires.",
    proceduresOffered: "Procedures offered",
    discuss: "Discuss with Dr. Eren",
    kratos: {
      eyebrow: "How we plan together",
      headline: "3D before the OR. Always.",
      body: "Especially for rhinoplasty and facial work, we plan in three dimensions using Kratos Surgery — a digital system that maps your anatomy and lets you preview likely outcomes before any decision is made. It does not promise an exact result; it gives you a language to talk about one.",
    },
  },
  contact: {
    eyebrow: "Contact",
    headlineA: "Begin a",
    headlineAccent: "private",
    headlineB: "conversation.",
    lede: "Share a few details and Dr. Eren’s team will reach out within one working day. Every message is read by a person, not a chatbot.",
    form: {
      heading: "Request a consultation",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone / WhatsApp",
      interest: "Area of interest",
      interests: [
        "Facial Aesthetics",
        "Body Contouring",
        "Breast Aesthetics",
        "Non-surgical",
        "Not sure yet",
      ],
      message: "Your message",
      messagePlaceholder: "Tell us a little about your goals — there are no wrong answers.",
      consent:
        "I consent to my information being used to contact me about a consultation. We never share your details with third parties.",
      submit: "Send request",
      successTitle: "Thank you.",
      successAccent: "We’ll be in touch.",
      successBody:
        "Dr. Eren’s team responds personally within one working day. For anything urgent, please call",
    },
    sidebar: {
      clinic: "Clinic",
      direct: "Direct",
      phone: "Phone & WhatsApp",
      email: "Email",
      hours: "Hours",
    },
  },
  serviceContent: {
    facial: {
      title: "Facial Aesthetics",
      short: "A graceful refinement that respects your features — never overdone.",
      description:
        "Procedures shaped around your facial proportions, planned with 3D simulation so you understand every change before it is made.",
      procedures: [
        "Rhinoplasty (Kratos 3D planning)",
        "Upper & lower blepharoplasty",
        "Brow lift",
        "Lip lift",
        "Facial fat transfer",
      ],
    },
    body: {
      title: "Body Contouring",
      short: "Sculpt the silhouette you recognise as your own — balanced, natural.",
      description:
        "A bespoke approach to body shaping that prioritises proportion over volume. Recovery is supported by modern protocols and concierge care.",
      procedures: [
        "Mommy makeover",
        "Brazilian butt lift (BBL)",
        "Abdominoplasty",
        "Arm & thigh lift",
        "Liposuction (VASER, 360°)",
      ],
    },
    breast: {
      title: "Breast Aesthetics",
      short: "Restore volume, harmony, and a profile that feels truly yours.",
      description:
        "Breast surgery centred on shape, symmetry and a natural feel. Implant choices include FDA-approved silk-surface options.",
      procedures: ["Breast lift", "Augmentation", "Reduction", "Revision surgery"],
    },
    "non-surgical": {
      title: "Non-surgical Treatments",
      short: "Subtle refinements that brighten the skin without changing who you are.",
      description:
        "A medically supervised menu of injectables, energy-based devices and skin therapies to maintain, refine, and prolong surgical results.",
      procedures: [
        "Botulinum toxin",
        "Hyaluronic acid fillers",
        "Mesotherapy & skin boosters",
        "Medical-grade peels",
        "Bio-stimulators",
      ],
    },
  },
  groups: {
    facial: "Facial",
    body: "Body",
    breast: "Breast",
    "non-surgical": "Non-surgical",
  },
};

const tr: typeof en = {
  meta: {
    siteTitle: "Dr. Gamze Eren — Estetik ve Plastik Cerrahi, İstanbul",
    siteDescription:
      "İstanbul’da kurul onaylı plastik cerrahi. Cerrahi hassasiyet ve sanatsal vizyonun buluşması — Caddebostan’da özel bir klinikte doğal, özgüvenli sonuçlar.",
    ogTitle: "Dr. Gamze Eren — Estetik Cerrahi, İstanbul",
    ogDescription:
      "Özgüven güzeldir. Cerrahi hassasiyet, sanatsal vizyon ve gerçekten size ait görünen sonuçlar.",
  },
  nav: {
    home: "Anasayfa",
    about: "Hakkımda",
    services: "Hizmetler",
    contact: "İletişim",
    book: "Randevu Al",
    menu: "Menü",
  },
  footer: {
    tagline:
      "İstanbul’da estetik ve rekonstrüktif cerrahi. Cerrahi hassasiyet, sanatsal vizyon ve gerçekten size ait görünen sonuçlar.",
    clinic: "Klinik",
    addressLines: [
      "Caddebostan Mah., Ethem Efendi Cad.",
      "No:3 Uğur Apt. D:9",
      "34728 Kadıköy / İstanbul",
    ],
    hours: "Çalışma Saatleri",
    monFri: "Pzt – Cum",
    sat: "Cumartesi",
    sun: "Pazar",
    closed: "Kapalı",
    getInTouch: "İletişime geç",
    copyright: "Tüm hakları saklıdır.",
    credential: "Kurul onaylı plastik cerrah · TPRECD Üyesi",
  },
  home: {
    eyebrow: "Estetik ve Rekonstrüktif Cerrahi · İstanbul",
    headlineA: "Özgüven",
    headlineAccent1: "güzeldir.",
    headlineB: "Gerisi",
    headlineAccent2: "incelikten ibarettir.",
    lede: "Dr. Gamze Eren, cerrahi hassasiyeti sanatçı bir bakışla harmanlayarak başkası gibi değil, daha dinlenmiş, daha sakin halinize benzeyen sonuçlar tasarlar.",
    ctaPrimary: "Özel konsültasyon randevusu",
    ctaSecondary: "İşlemleri keşfedin →",
    portraitTitle: "Op. Dr.",
    portraitName: ["Güler Gamze", "Eren"] as const,
    stats: {
      yearsValue: "15+",
      yearsLabel: "yıllık cerrahi deneyim",
      planningValue: "3D",
      planningLabel: "Kratos ile ameliyat öncesi simülasyon",
      patientsValue: "30+",
      patientsLabel: "her ay uluslararası hasta",
    },
    philosophy: {
      eyebrow: "Felsefe",
      quoteA: "“Güzellik kusursuzluk değildir — o,",
      quoteAccent1: "uyum",
      quoteB: ", özgüven ve kendi bedeninizde huzur duymaktır. Estetik cerrahi bir dönüşüm değil, içindeki",
      quoteAccent2: "en güçlü halinize",
      quoteC: " zarif bir dönüştür.”",
      attribution: "— Dr. Gamze Eren",
      side: "Her konsültasyon dinlemekle başlar. Buradan itibaren milimetrik plan yapar, üç boyutta simüle eder ve sonucun izin verdiği en hafif dokunuşla ameliyat ederiz.",
      meet: "Dr. Eren ile tanışın",
    },
    services: {
      eyebrow: "İşlemler",
      headlineA: "Dört temel üzerine kurulmuş",
      headlineAccent: "bir pratik.",
      viewAll: "Tümünü gör →",
    },
    tourism: {
      eyebrow: "Uluslararası hastalara özel hizmet",
      headlineA: "Estetik yolculuğunuza",
      headlineAccent: "İstanbul’da başlayın.",
      body: "Uçuş ve diskret konaklamadan iki dilli ameliyat öncesi planlamaya ve ameliyat sonrası bakıma kadar, sakin ve konforlu bir iyileşmeye odaklanmanız için her ayrıntıyı ekibimiz organize eder.",
      cta: "Ziyaretimi planla →",
      tiles: [
        { k: "Uçuş", v: "Düzenlenir" },
        { k: "Otel", v: "5 yıldız" },
        { k: "Diller", v: "TR · EN · DE" },
        { k: "Bakım", v: "Concierge" },
      ],
    },
    journey: {
      eyebrow: "Süreciniz",
      headlineA: "İlk mesajdan",
      headlineAccent: "son kontrole özenli bakım.",
      steps: [
        { n: "01", t: "Tanışma", d: "Hedeflerinizi anlamak için özel sanal veya yüz yüze konsültasyon." },
        { n: "02", t: "3D Planlama", d: "Karar öncesinde olası sonuçları Kratos simülasyonu ile görselleştirme." },
        { n: "03", t: "Ameliyat", d: "Akredite hastanede deneyimli anestezi ve hemşirelik ekibi ile gerçekleştirilir." },
        { n: "04", t: "İyileşme", d: "Concierge takip, iz bakımı ve uzun vadeli estetik destek." },
      ],
    },
    testimonial: {
      quoteA: "Farklı görünmek istemedim. Her sabah en iyi sabahımdaki halime benzemek istedim.",
      quoteAccent: "Dr. Eren bunu anladı.",
      attribution: "Hasta · Rinoplasti, 2025",
    },
    finalCta: {
      headlineA: "Konuşmaya",
      headlineAccent: "hazır mısınız?",
      body: "Her yolculuk özel bir konsültasyonla başlar. Hedeflerinizi paylaşın — gerisini biz hallederiz.",
      primary: "Randevu al",
    },
  },
  about: {
    eyebrow: "Hakkımda",
    headlineA: "Hassasiyet bir sanattır.",
    headlineAccent: "Güzellik onun sonucudur.",
    lede: "Dr. Güler Gamze Eren, doğal sonuçlar, titiz teknik ve aceleye getirmeden yürütülen konsültasyonlarıyla tanınan İstanbul merkezli bir plastik cerrahıdır. Pratiği, cerrahi derinliği bir sanatçının sakin özgüveniyle birleştirir.",
    portrait: {
      role: "Op. Dr.",
      name: "Güler Gamze Eren",
      title: "Plastik, Rekonstrüktif ve Estetik Cerrah",
    },
    training: {
      eyebrow: "Eğitim",
      items: [
        "Tıp Doktoru — İstanbul Üniversitesi, Cerrahpaşa",
        "Plastik Cerrahi İhtisası — Sağlık Bakanlığı Eğitim ve Araştırma Hastanesi",
        "Estetik Cerrahi Fellowship — Uluslararası rotasyonlar",
      ],
    },
    memberships: {
      eyebrow: "Üyelikler",
      items: [
        "Türk Plastik, Rekonstrüktif ve Estetik Cerrahi Derneği (TPRECD)",
        "Türk Tabipleri Birliği",
        "Uluslararası Estetik Plastik Cerrahi Derneği (ortak üye)",
      ],
    },
    languages: {
      eyebrow: "Diller",
      body: "Türkçe · İngilizce · Yeterli Almanca",
    },
    gallery: {
      eyebrow: "Klinikten",
      headlineA: "Caddebostan’da küçük ve",
      headlineAccent: "özel bir klinik.",
      theatreEyebrow: "Ameliyathanede",
      theatreTitle: "İş başında hassasiyet",
    },
    approach: {
      eyebrow: "Yaklaşım",
      headlineA: "Açıkça",
      headlineAccent: "size ait bir estetik.",
      paragraphs: [
        "Dr. Eren’in pratiği üç ilke üzerine kuruludur. Birincisi uyumdur — her değişiklik tek başına değil, yüzün veya bedenin geri kalanıyla birlikte değerlendirilir. İkincisi ölçülülüktür — istenen sonuca ulaşmak için sadece gerekenin yapılması, fazlasının yapılmaması. Üçüncüsü şeffaflıktır — 3D simülasyon, açık bir konuşma ve neyin önerildiğini tam olarak bilmeniz için yazılı bir plan.",
        "Caddebostan’daki klinik bilinçli olarak küçüktür. Hastalar isimleriyle, özel olarak ve acele edilmeden görülür. Uluslararası ziyaretçiler, havalimanı karşılamadan ev takibe kadar her şeyi kapsayan bir concierge hizmetiyle ağırlanır.",
      ],
    },
    values: [
      { t: "Önce hasta odaklı konsültasyon", d: "60 dakikalık özel görüşmeler. Önce dinleriz, sonra öneririz." },
      { t: "Akredite hastanede cerrahi", d: "Deneyimli anestezi ve tam yoğun bakım desteğiyle partner hastanelerde gerçekleştirilir." },
      { t: "Uzun vadeli takip", d: "24 saat, 7 gün, 1 ay, 3 ay, 12 ayda — yurt dışında yaşıyorsanız görüntülü olarak." },
    ],
    cta: {
      headline: "Bir işlem mi düşünüyorsunuz?",
      body: "Başlamak için en doğru yer bir konsültasyondur — herhangi bir yükümlülük yoktur ve neyin mümkün olduğuna dair daha net bir fikirle ayrılırsınız.",
      primary: "Randevu al",
      secondary: "İşlemleri incele",
    },
  },
  services: {
    eyebrow: "İşlemler",
    headlineA: "Ölçülü bir",
    headlineAccent1: "pratik.",
    headlineB: "Zengin",
    headlineAccent2: "olasılıklar.",
    lede: "Aşağıdaki her işlem milimetrik olarak planlanır ve sade bir dille konuşulur. Sonucun gerektirdiğinden fazlasını asla önermeyiz.",
    proceduresOffered: "Sunulan işlemler",
    discuss: "Dr. Eren ile görüşün",
    kratos: {
      eyebrow: "Birlikte nasıl planlıyoruz",
      headline: "Ameliyathaneden önce 3D. Her zaman.",
      body: "Özellikle rinoplasti ve yüz işlemlerinde Kratos Surgery ile üç boyutlu plan yapıyoruz — anatominizi haritalandıran ve karardan önce olası sonuçları önizlemenize olanak tanıyan dijital bir sistem. Birebir sonuç vaat etmez; sonuç üzerine konuşmanız için bir dil sağlar.",
    },
  },
  contact: {
    eyebrow: "İletişim",
    headlineA: "Özel bir",
    headlineAccent: "konuşmaya",
    headlineB: "başlayın.",
    lede: "Birkaç ayrıntı paylaşın, Dr. Eren’in ekibi bir iş günü içinde size ulaşacaktır. Her mesaj bir robot tarafından değil, bir insan tarafından okunur.",
    form: {
      heading: "Konsültasyon talebi",
      firstName: "Ad",
      lastName: "Soyad",
      email: "E-posta",
      phone: "Telefon / WhatsApp",
      interest: "İlgilendiğiniz alan",
      interests: [
        "Yüz Estetiği",
        "Vücut Şekillendirme",
        "Meme Estetiği",
        "Cerrahi olmayan",
        "Henüz emin değilim",
      ],
      message: "Mesajınız",
      messagePlaceholder: "Hedefleriniz hakkında biraz bilgi verin — yanlış cevap yoktur.",
      consent:
        "Bilgilerimin bir konsültasyon için benimle iletişime geçilmek üzere kullanılmasına onay veriyorum. Bilgileriniz üçüncü taraflarla asla paylaşılmaz.",
      submit: "Talebi gönder",
      successTitle: "Teşekkürler.",
      successAccent: "Sizinle iletişime geçeceğiz.",
      successBody:
        "Dr. Eren’in ekibi bir iş günü içinde kişisel olarak yanıt verir. Acil bir durum için lütfen arayın",
    },
    sidebar: {
      clinic: "Klinik",
      direct: "Doğrudan",
      phone: "Telefon & WhatsApp",
      email: "E-posta",
      hours: "Çalışma Saatleri",
    },
  },
  serviceContent: {
    facial: {
      title: "Yüz Estetiği",
      short: "Yüz hatlarınıza saygılı, zarif bir rötuş — asla abartısız.",
      description:
        "Yüz oranlarınıza göre şekillendirilen, her değişikliği önceden anlamanız için 3D simülasyonla planlanan işlemler.",
      procedures: [
        "Rinoplasti (Kratos 3D planlama)",
        "Üst & alt blefaroplasti",
        "Kaş kaldırma",
        "Dudak kaldırma",
        "Yüze yağ transferi",
      ],
    },
    body: {
      title: "Vücut Şekillendirme",
      short: "Tanıdığınız kendi silüetinizi heykelleyin — dengeli, doğal.",
      description:
        "Hacim yerine orantıya öncelik veren, kişiye özel bir vücut şekillendirme yaklaşımı. İyileşme, modern protokoller ve concierge bakım ile desteklenir.",
      procedures: [
        "Annelik estetiği",
        "Brezilya poposu (BBL)",
        "Karın germe",
        "Kol & uyluk germe",
        "Liposuction (VASER, 360°)",
      ],
    },
    breast: {
      title: "Meme Estetiği",
      short: "Hacmi, uyumu ve gerçekten size ait bir profili geri kazanın.",
      description:
        "Şekle, simetriye ve doğal hissiyata odaklanan meme cerrahisi. İmplant seçenekleri FDA onaylı silk-surface seçenekleri içerir.",
      procedures: ["Meme dikleştirme", "Meme büyütme", "Meme küçültme", "Revizyon cerrahisi"],
    },
    "non-surgical": {
      title: "Cerrahi Olmayan İşlemler",
      short: "Kim olduğunuzu değiştirmeden cildi aydınlatan ince rötuşlar.",
      description:
        "Cerrahi sonuçları korumak, inceltmek ve uzatmak için tıbbi gözetim altında enjeksiyon, enerji bazlı cihazlar ve cilt terapileri.",
      procedures: [
        "Botulinum toksin",
        "Hyalüronik asit dolgu",
        "Mezoterapi & cilt boosterları",
        "Tıbbi peelingler",
        "Biostimülatörler",
      ],
    },
  },
  groups: {
    facial: "Yüz",
    body: "Vücut",
    breast: "Meme",
    "non-surgical": "Cerrahi olmayan",
  },
};

export const dict = { en, tr };
export type Dict = typeof en;
