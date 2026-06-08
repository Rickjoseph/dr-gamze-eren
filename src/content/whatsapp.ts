import type { Locale } from "@/i18n/dict";

// Canonical procedure/country VALUES sent to the CRM webhook. These stay in
// English regardless of the UI language so lead data is consistent; the
// localized label arrays below are display-only and map 1:1 by index.
export const PROCEDURE_VALUES = [
  "Rhinoplasty",
  "Breast Augmentation",
  "Breast Lift / Reduction",
  "Tummy Tuck",
  "Liposuction / Body Contouring",
  "Blepharoplasty (Eyelid)",
  "Brow Lift",
  "Mommy Makeover",
  "Non-surgical Treatment",
  "Other / Not sure yet",
] as const;

export const COUNTRY_VALUES = [
  "United Kingdom", "Germany", "Netherlands", "France", "Spain",
  "Ukraine", "Russia", "Poland", "Belgium", "Switzerland",
  "United States", "Canada", "Australia", "Other",
] as const;

// Lead-language tag sent to the CRM, keyed by UI locale.
export const LEAD_LANGUAGE: Record<Locale, string> = {
  en: "english",
  tr: "turkish",
  ru: "russian",
};

export type WhatsAppStrings = {
  aria: string;
  tooltip: string;
  clinicName: string;
  replyTime: string;
  intro: string;
  nameLabel: string;
  namePlaceholder: string;
  countryLabel: string;
  countryPlaceholder: string;
  procedureLabel: string;
  procedurePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  consentPrefix: string;
  consentPrivacyLink: string;
  consentAnd: string;
  consentTermsLink: string;
  consentSuffix: string;
  submit: string;
  submitting: string;
  closeAria: string;
  successTitle: string;
  successBody: string;
  successCta: string;
  successClose: string;
  waPrefill: string;
  procedures: string[]; // display labels, index-aligned with PROCEDURE_VALUES
  countries: string[]; // display labels, index-aligned with COUNTRY_VALUES
};

export const whatsappContent: Record<Locale, WhatsAppStrings> = {
  en: {
    aria: "Chat on WhatsApp",
    tooltip: "Chat with us",
    clinicName: "Dr. Gamze Eren Clinic",
    replyTime: "We typically reply within a few hours",
    intro: "Share a few details and we'll reach out on WhatsApp.",
    nameLabel: "Your name *",
    namePlaceholder: "e.g. Sophie",
    countryLabel: "Country *",
    countryPlaceholder: "Select your country",
    procedureLabel: "Procedure of interest *",
    procedurePlaceholder: "Select a procedure",
    messageLabel: "Anything else? (optional)",
    messagePlaceholder: "Timeline, questions, concerns...",
    consentPrefix:
      "I agree to be contacted via WhatsApp and to my details being used to handle my enquiry, as set out in the ",
    consentPrivacyLink: "Privacy Policy",
    consentAnd: " and ",
    consentTermsLink: "Terms & Conditions",
    consentSuffix: ".",
    submit: "Send & start conversation →",
    submitting: "Sending…",
    closeAria: "Close",
    successTitle: "Thank you!",
    successBody: "We've received your details and will reach out on WhatsApp shortly.",
    successCta: "Open WhatsApp now",
    successClose: "Close",
    waPrefill: "Hi, I'd like to enquire about a consultation with Dr. Gamze Eren.",
    procedures: [
      "Rhinoplasty",
      "Breast Augmentation",
      "Breast Lift / Reduction",
      "Tummy Tuck",
      "Liposuction / Body Contouring",
      "Blepharoplasty (Eyelid)",
      "Brow Lift",
      "Mommy Makeover",
      "Non-surgical Treatment",
      "Other / Not sure yet",
    ],
    countries: [
      "United Kingdom", "Germany", "Netherlands", "France", "Spain",
      "Ukraine", "Russia", "Poland", "Belgium", "Switzerland",
      "United States", "Canada", "Australia", "Other",
    ],
  },
  tr: {
    aria: "WhatsApp'tan yazın",
    tooltip: "Bize yazın",
    clinicName: "Dr. Gamze Eren Kliniği",
    replyTime: "Genellikle birkaç saat içinde yanıt veriyoruz",
    intro: "Birkaç bilgi paylaşın, WhatsApp üzerinden size ulaşalım.",
    nameLabel: "Adınız *",
    namePlaceholder: "örn. Ayşe",
    countryLabel: "Ülke *",
    countryPlaceholder: "Ülkenizi seçin",
    procedureLabel: "İlgilendiğiniz işlem *",
    procedurePlaceholder: "Bir işlem seçin",
    messageLabel: "Eklemek istedikleriniz? (isteğe bağlı)",
    messagePlaceholder: "Zaman planı, sorular, merak ettikleriniz...",
    consentPrefix:
      "WhatsApp üzerinden benimle iletişime geçilmesini ve başvurumun değerlendirilmesi için bilgilerimin işlenmesini kabul ediyorum. ",
    consentPrivacyLink: "Gizlilik Politikası",
    consentAnd: " ve ",
    consentTermsLink: "Şartlar ve Koşullar",
    consentSuffix: "'ı okudum ve onaylıyorum.",
    submit: "Gönder ve görüşmeyi başlat →",
    submitting: "Gönderiliyor…",
    closeAria: "Kapat",
    successTitle: "Teşekkürler!",
    successBody: "Bilgilerinizi aldık, en kısa sürede WhatsApp üzerinden size ulaşacağız.",
    successCta: "WhatsApp'ı şimdi aç",
    successClose: "Kapat",
    waPrefill: "Merhaba, Dr. Gamze Eren ile konsültasyon hakkında bilgi almak istiyorum.",
    procedures: [
      "Burun Estetiği (Rinoplasti)",
      "Meme Büyütme",
      "Meme Dikleştirme / Küçültme",
      "Karın Germe",
      "Liposuction / Vücut Şekillendirme",
      "Göz Kapağı Estetiği (Blefaroplasti)",
      "Kaş Kaldırma",
      "Annelik Estetiği (Mommy Makeover)",
      "Cerrahi Olmayan İşlem",
      "Diğer / Henüz emin değilim",
    ],
    countries: [
      "Birleşik Krallık", "Almanya", "Hollanda", "Fransa", "İspanya",
      "Ukrayna", "Rusya", "Polonya", "Belçika", "İsviçre",
      "Amerika Birleşik Devletleri", "Kanada", "Avustralya", "Diğer",
    ],
  },
  ru: {
    aria: "Написать в WhatsApp",
    tooltip: "Напишите нам",
    clinicName: "Клиника Dr. Gamze Eren",
    replyTime: "Обычно отвечаем в течение нескольких часов",
    intro: "Оставьте немного информации, и мы свяжемся с вами в WhatsApp.",
    nameLabel: "Ваше имя *",
    namePlaceholder: "напр. Анна",
    countryLabel: "Страна *",
    countryPlaceholder: "Выберите страну",
    procedureLabel: "Интересующая процедура *",
    procedurePlaceholder: "Выберите процедуру",
    messageLabel: "Что-нибудь ещё? (необязательно)",
    messagePlaceholder: "Сроки, вопросы, пожелания...",
    consentPrefix:
      "Я согласен(а) на то, чтобы со мной связались через WhatsApp, и на обработку моих данных для рассмотрения обращения в соответствии с ",
    consentPrivacyLink: "Политикой конфиденциальности",
    consentAnd: " и ",
    consentTermsLink: "Условиями использования",
    consentSuffix: ".",
    submit: "Отправить и начать чат →",
    submitting: "Отправка…",
    closeAria: "Закрыть",
    successTitle: "Спасибо!",
    successBody: "Мы получили ваши данные и скоро свяжемся с вами в WhatsApp.",
    successCta: "Открыть WhatsApp",
    successClose: "Закрыть",
    waPrefill: "Здравствуйте, хочу узнать о консультации у доктора Гамзе Эрен.",
    procedures: [
      "Ринопластика",
      "Увеличение груди",
      "Подтяжка / уменьшение груди",
      "Абдоминопластика (подтяжка живота)",
      "Липосакция / коррекция контуров тела",
      "Блефаропластика (веки)",
      "Подтяжка бровей",
      "Mommy Makeover (восстановление после родов)",
      "Безоперационная процедура",
      "Другое / Пока не уверен(а)",
    ],
    countries: [
      "Великобритания", "Германия", "Нидерланды", "Франция", "Испания",
      "Украина", "Россия", "Польша", "Бельгия", "Швейцария",
      "США", "Канада", "Австралия", "Другое",
    ],
  },
};
