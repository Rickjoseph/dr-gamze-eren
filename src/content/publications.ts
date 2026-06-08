import type { Locale } from "@/i18n/dict";

// Academic publications & presentations, transcribed and tidied from the
// clinic's hakkımda page. Citation strings are language-neutral (kept as
// published); only the surrounding labels are localized below.
// NOTE: please have Dr. Gamze verify the exact citation details before launch.

export const JOURNAL_ARTICLES: string[] = [
  "Ünal Ç, Eren GG, et al. Sacral reconstruction with pedicled omentum after total sacrectomy. Indian J Plast Surg. doi:10.4103/0970-0358.96617",
  "Ağır H, Eren Özcan GG. Rosen Knife: a practical instrument in cleft palate surgery. J Craniofac Surg. 2015;26:990.",
  "Hasdemir M, Ağır H, Eren GG, et al. Adipose-derived stem cells enhance survival of random-pattern cutaneous flaps. J Craniofac Surg. 2015;26:1450–1455.",
  "Ağır H, Eren GG, Yaşar EK. Acellular dermal matrix in cleft palate and palatal fistula repair. J Craniofac Surg. 2015;26:1517–1522.",
  "İzmirli HH, Alagöz MS, Gerçek H, Eren GG, et al. Adipose-derived mesenchymal stem cells to accelerate neovascularization. J Craniofac Surg. 2016;27:264–271.",
  "Yücel E, Alagöz MS, Eren GG, et al. Adipose-derived mesenchymal stem cells and the viability of composite grafts. J Craniofac Surg. 2016;27:1354–1360.",
];

export const INTERNATIONAL_PRESENTATIONS: string[] = [
  "Ünal C, Hasdemir M, Eren G, Özdemir J. Hand trauma treated with a distal ulnar artery perforator-based venous flap. WSRM 6th Congress, Helsinki, 2011.",
  "Ünal C, Eren G, Gerçek, Alponat A, Şarlak A. Wide sacral defect reconstruction using a pedicled omentum flap. WSRM, Helsinki, 2011.",
  "Eren GG, Ağır H. Early experience with acellular dermal matrix in cleft palate surgery. 12th International Congress on Cleft Lip/Palate, Orlando, USA, 2013 (poster).",
  "Ağır H, Eren GG, Çakan DG. Analysis of 150 consecutive primary cleft lip/palate cases. 8th Asia-Pacific Cleft Congress, Penang, Malaysia, 2015.",
  "Ağır H, et al. Review of 250 consecutive cleft cases. Cleft Lip/Palate Congress, Chennai, India, 2017.",
];

export type PublicationsLabels = {
  eyebrow: string;
  title: string;
  showLabel: string;
  hideLabel: string;
  journalLabel: string;
  internationalLabel: string;
  nationalLabel: string;
  nationalSummary: string;
};

export const publicationsLabels: Record<Locale, PublicationsLabels> = {
  en: {
    eyebrow: "Academic",
    title: "Publications & research",
    showLabel: "Show publications",
    hideLabel: "Hide publications",
    journalLabel: "Peer-reviewed journal articles",
    internationalLabel: "International presentations",
    nationalLabel: "National presentations",
    nationalSummary:
      "10 oral and poster presentations at Turkish Society of Plastic, Reconstructive & Aesthetic Surgery national congresses (2011–2016).",
  },
  tr: {
    eyebrow: "Akademik",
    title: "Yayınlar ve araştırmalar",
    showLabel: "Yayınları göster",
    hideLabel: "Yayınları gizle",
    journalLabel: "Hakemli dergi makaleleri",
    internationalLabel: "Uluslararası sunumlar",
    nationalLabel: "Ulusal sunumlar",
    nationalSummary:
      "Türk Plastik, Rekonstrüktif ve Estetik Cerrahi Derneği ulusal kongrelerinde 10 sözlü ve poster sunumu (2011–2016).",
  },
  ru: {
    eyebrow: "Наука",
    title: "Публикации и исследования",
    showLabel: "Показать публикации",
    hideLabel: "Скрыть публикации",
    journalLabel: "Статьи в рецензируемых журналах",
    internationalLabel: "Международные доклады",
    nationalLabel: "Национальные доклады",
    nationalSummary:
      "10 устных и постерных докладов на национальных конгрессах Турецкого общества пластической, реконструктивной и эстетической хирургии (2011–2016).",
  },
};
