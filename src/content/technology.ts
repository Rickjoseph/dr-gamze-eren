import type { Locale } from "@/i18n/dict";

export type TechContent = {
  metaTitle: string;
  eyebrow: string;
  headlineA: string;
  headlineAccent: string;
  lede: string;
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  steps: { eyebrow: string; title: string; items: { t: string; d: string }[] };
  benefits: { eyebrow: string; title: string; items: { t: string; d: string }[] };
  note: { eyebrow: string; title: string; body: string };
  cta: { headline: string; body: string; primary: string; secondary: string };
};

// Content for the dedicated "3D Kratos pre-operative simulation" page,
// linked from the homepage stats card. Trilingual to match the rest of
// the site (EN/TR/RU). NOTE: the clinical framing (Kratos used mainly for
// rhinoplasty/facial planning) and the "guide, not a guarantee" caveat
// should be reviewed by Dr. Gamze Eren before launch.
export const technologyContent: Record<Locale, TechContent> = {
  en: {
    metaTitle: "3D Kratos Simulation, Dr. Gamze Eren",
    eyebrow: "Technology",
    headlineA: "Plan your result in",
    headlineAccent: "three dimensions",
    lede: "With 3D Kratos pre-operative simulation, you and Dr. Gamze Eren design and preview a natural, proportionate result together, before any decision is made.",
    intro: {
      eyebrow: "What it is",
      title: "A shared plan, visualised in 3D",
      paragraphs: [
        "Kratos is a 3D pre-operative simulation platform used most often for rhinoplasty and facial planning. Starting from photographs of your face, it builds an accurate three-dimensional model that Dr. Gamze Eren uses to plan and visualise the proposed result.",
        "Instead of describing an outcome in words, the simulation lets you see a realistic preview, so the goal of your surgery is clear, shared, and agreed before you proceed.",
      ],
    },
    steps: {
      eyebrow: "How it works",
      title: "Three steps, one clear plan",
      items: [
        { t: "1 · Capture", d: "We take precise photographs of your face from standardised angles to build an accurate 3D model." },
        { t: "2 · Simulate", d: "Dr. Gamze Eren designs the planned result on your own anatomy, balancing proportion, profile and harmony." },
        { t: "3 · Review together", d: "You see the simulation beside your starting point, refine it, and agree the plan before surgery." },
      ],
    },
    benefits: {
      eyebrow: "Why it matters",
      title: "Clarity, precision, confidence",
      items: [
        { t: "Shared expectations", d: "You and your surgeon work toward the same, visualised goal, far less guesswork, fewer surprises." },
        { t: "Surgical precision", d: "A detailed 3D plan informs the operative steps, supporting a more predictable, refined result." },
        { t: "Naturally yours", d: "Changes are planned in proportion to your features, protecting a result that still looks unmistakably like you." },
      ],
    },
    note: {
      eyebrow: "An honest note",
      title: "A guide to the goal, not a guarantee",
      body: "A simulation is a planning tool that illustrates the intended result. It is a guide we work toward, not a promise of an exact outcome, final results depend on your anatomy, healing and biology, which Dr. Gamze will discuss with you in person.",
    },
    cta: {
      headline: "Plan your procedure in 3D",
      body: "Book a consultation to see your personalised simulation and discuss what's realistic for you.",
      primary: "Book a consultation",
      secondary: "Explore services",
    },
  },
  tr: {
    metaTitle: "3D Kratos Simülasyonu, Dr. Gamze Eren",
    eyebrow: "Teknoloji",
    headlineA: "Sonucunuzu",
    headlineAccent: "üç boyutta planlayın",
    lede: "3D Kratos ameliyat öncesi simülasyonu ile, herhangi bir karar verilmeden önce doğal ve orantılı sonucu Dr. Gamze Eren ile birlikte tasarlayıp önizlersiniz.",
    intro: {
      eyebrow: "Nedir",
      title: "3D olarak görselleştirilen ortak bir plan",
      paragraphs: [
        "Kratos, çoğunlukla rinoplasti ve yüz planlamasında kullanılan 3D ameliyat öncesi simülasyon platformudur. Yüzünüzün fotoğraflarından başlayarak, Dr. Gamze Eren'in planlanan sonucu tasarlamak ve görselleştirmek için kullandığı hassas üç boyutlu bir model oluşturur.",
        "Sonucu kelimelerle anlatmak yerine, simülasyon gerçekçi bir önizleme görmenizi sağlar; böylece ameliyatınızın hedefi siz ilerlemeden önce net, paylaşılmış ve üzerinde anlaşılmış olur.",
      ],
    },
    steps: {
      eyebrow: "Nasıl çalışır",
      title: "Üç adım, net bir plan",
      items: [
        { t: "1 · Görüntüleme", d: "Doğru bir 3D model oluşturmak için yüzünüzün standart açılardan hassas fotoğraflarını çekeriz." },
        { t: "2 · Simülasyon", d: "Dr. Gamze Eren planlanan sonucu kendi anatominiz üzerinde, oran, profil ve uyumu dengeleyerek tasarlar." },
        { t: "3 · Birlikte inceleme", d: "Simülasyonu başlangıç noktanızla yan yana görür, üzerinde değişiklik yapar ve ameliyattan önce planı onaylarsınız." },
      ],
    },
    benefits: {
      eyebrow: "Neden önemli",
      title: "Netlik, hassasiyet, güven",
      items: [
        { t: "Ortak beklentiler", d: "Siz ve cerrahınız aynı, görselleştirilmiş hedefe doğru çalışırsınız; çok daha az tahmin, daha az sürpriz." },
        { t: "Cerrahi hassasiyet", d: "Ayrıntılı bir 3D plan, ameliyat adımlarına yön vererek daha öngörülebilir ve incelikli bir sonucu destekler." },
        { t: "Size özgü doğallık", d: "Değişiklikler yüz hatlarınızla orantılı planlanır; sonucun hâlâ tam olarak size benzemesini korur." },
      ],
    },
    note: {
      eyebrow: "Dürüst bir not",
      title: "Hedefe bir rehber, garanti değil",
      body: "Simülasyon, amaçlanan sonucu gösteren bir planlama aracıdır. Ulaşmaya çalıştığımız bir rehberdir, kesin sonucun garantisi değildir; nihai sonuçlar anatominize, iyileşmenize ve biyolojinize bağlıdır ve Dr. Gamze bunları sizinle yüz yüze görüşecektir.",
    },
    cta: {
      headline: "İşleminizi 3D olarak planlayın",
      body: "Kişiye özel simülasyonunuzu görmek ve sizin için neyin gerçekçi olduğunu konuşmak üzere bir konsültasyon ayırtın.",
      primary: "Konsültasyon ayırtın",
      secondary: "Hizmetleri keşfedin",
    },
  },
  ru: {
    metaTitle: "3D-симуляция Kratos — Dr. Gamze Eren",
    eyebrow: "Технология",
    headlineA: "Спланируйте результат",
    headlineAccent: "в трёх измерениях",
    lede: "С предоперационной 3D-симуляцией Kratos вы вместе с доктором Гамзе Эрен проектируете и заранее видите естественный, пропорциональный результат — ещё до принятия решения.",
    intro: {
      eyebrow: "Что это",
      title: "Общий план, визуализированный в 3D",
      paragraphs: [
        "Kratos — это платформа предоперационной 3D-симуляции, которая чаще всего используется для планирования ринопластики и операций на лице. На основе фотографий вашего лица она создаёт точную трёхмерную модель, которую доктор Гамзе Эрен использует для планирования и визуализации предполагаемого результата.",
        "Вместо описания результата словами симуляция позволяет увидеть реалистичный предпросмотр — так цель операции становится понятной, общей и согласованной ещё до того, как вы продолжите.",
      ],
    },
    steps: {
      eyebrow: "Как это работает",
      title: "Три шага — один ясный план",
      items: [
        { t: "1 · Съёмка", d: "Мы делаем точные фотографии вашего лица под стандартными углами, чтобы создать достоверную 3D-модель." },
        { t: "2 · Симуляция", d: "Доктор Гамзе Эрен проектирует планируемый результат на вашей собственной анатомии, балансируя пропорции, профиль и гармонию." },
        { t: "3 · Совместный просмотр", d: "Вы видите симуляцию рядом с исходной точкой, уточняете её и согласовываете план до операции." },
      ],
    },
    benefits: {
      eyebrow: "Почему это важно",
      title: "Ясность, точность, уверенность",
      items: [
        { t: "Общие ожидания", d: "Вы и ваш хирург работаете к одной визуализированной цели — гораздо меньше догадок и неожиданностей." },
        { t: "Хирургическая точность", d: "Детальный 3D-план определяет этапы операции, способствуя более предсказуемому и утончённому результату." },
        { t: "Естественно ваше", d: "Изменения планируются пропорционально вашим чертам, сохраняя результат, который по-прежнему выглядит именно как вы." },
      ],
    },
    note: {
      eyebrow: "Честное замечание",
      title: "Ориентир к цели — не гарантия",
      body: "Симуляция — это инструмент планирования, который показывает предполагаемый результат. Это ориентир, к которому мы стремимся, а не обещание точного исхода; окончательный результат зависит от вашей анатомии, заживления и биологии, которые доктор Гамзе обсудит с вами лично.",
    },
    cta: {
      headline: "Спланируйте свою процедуру в 3D",
      body: "Запишитесь на консультацию, чтобы увидеть вашу персональную симуляцию и обсудить, что реалистично именно для вас.",
      primary: "Записаться на консультацию",
      secondary: "Услуги",
    },
  },
  de: {
    metaTitle: "3D-Kratos-Simulation – Dr. Gamze Eren",
    eyebrow: "Technologie",
    headlineA: "Ihr Ergebnis in",
    headlineAccent: "drei Dimensionen planen",
    lede: "Mit der präoperativen 3D-Kratos-Simulation entwerfen und besichtigen Sie gemeinsam mit Dr. Gamze Eren ein natürliches, proportioniertes Ergebnis – noch bevor eine Entscheidung getroffen wird.",
    intro: {
      eyebrow: "Was es ist",
      title: "Ein gemeinsamer Plan, visualisiert in 3D",
      paragraphs: [
        "Kratos ist eine präoperative 3D-Simulationsplattform, die am häufigsten für Rhinoplastik und Gesichtsplanung eingesetzt wird. Auf Basis von Fotos Ihres Gesichts erstellt sie ein genaues dreidimensionales Modell, das Dr. Gamze Eren zur Planung und Visualisierung des vorgeschlagenen Ergebnisses verwendet.",
        "Statt das Ergebnis in Worten zu beschreiben, ermöglicht die Simulation eine realistische Vorschau – das Ziel Ihrer Operation ist vor dem Eingriff klar, geteilt und vereinbart.",
      ],
    },
    steps: {
      eyebrow: "Wie es funktioniert",
      title: "Drei Schritte, ein klarer Plan",
      items: [
        { t: "1 · Aufnahme", d: "Wir machen präzise Fotos Ihres Gesichts aus standardisierten Winkeln, um ein genaues 3D-Modell zu erstellen." },
        { t: "2 · Simulation", d: "Dr. Gamze Eren plant das vorgesehene Ergebnis an Ihrer eigenen Anatomie und balanciert Proportionen, Profil und Harmonie." },
        { t: "3 · Gemeinsame Überprüfung", d: "Sie sehen die Simulation neben Ihrem Ausgangspunkt, verfeinern sie und stimmen dem Plan vor der Operation zu." },
      ],
    },
    benefits: {
      eyebrow: "Warum es wichtig ist",
      title: "Klarheit, Präzision, Vertrauen",
      items: [
        { t: "Gemeinsame Erwartungen", d: "Sie und Ihr Chirurg arbeiten auf dasselbe, visualisierte Ziel hin – weit weniger Unsicherheit, weniger Überraschungen." },
        { t: "Chirurgische Präzision", d: "Ein detaillierter 3D-Plan leitet die Operationsschritte und unterstützt ein vorhersehbareres, verfeinerteres Ergebnis." },
        { t: "Natürlich Ihrer", d: "Veränderungen werden proportional zu Ihren Gesichtszügen geplant, damit das Ergebnis unverwechselbar wie Sie aussieht." },
      ],
    },
    note: {
      eyebrow: "Ein ehrlicher Hinweis",
      title: "Ein Wegweiser zum Ziel – keine Garantie",
      body: "Eine Simulation ist ein Planungswerkzeug, das das beabsichtigte Ergebnis veranschaulicht. Es ist ein Orientierungspunkt, auf den wir hinarbeiten – kein Versprechen eines exakten Ergebnisses. Das endgültige Resultat hängt von Ihrer Anatomie, Heilung und Biologie ab, die Dr. Gamze persönlich mit Ihnen besprechen wird.",
    },
    cta: {
      headline: "Planen Sie Ihren Eingriff in 3D",
      body: "Buchen Sie eine Beratung, um Ihre personalisierte Simulation zu sehen und zu besprechen, was für Sie realistisch ist.",
      primary: "Beratung buchen",
      secondary: "Leistungen entdecken",
    },
  },
};
