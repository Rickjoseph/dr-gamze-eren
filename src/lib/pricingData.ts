// Auto-generated from clinic price list – Başkent (low) / Medicana (high)
export type Procedure = {
  id: string;
  category: string;
  name: string;
  low: number;   // Başkent
  high: number;  // Medicana
};

export const PROCEDURES: Procedure[] = [
  // Rhinoplasty
  { id: "rhino-primary",    category: "Rhinoplasty", name: "Primary Rhinoplasty",      low: 2721,  high: 3050 },
  { id: "rhino-septo",      category: "Rhinoplasty", name: "Septorhinoplasty",          low: 2956,  high: 3504 },
  { id: "rhino-secondary",  category: "Rhinoplasty", name: "Secondary Rhinoplasty",     low: 4369,  high: 4739 },

  // Face
  { id: "face-upper-bleph",   category: "Face", name: "Upper Eyelid Blepharoplasty",        low: 2104, high: 2161 },
  { id: "face-lower-bleph",   category: "Face", name: "Lower Eyelid Blepharoplasty",        low: 2104, high: 2161 },
  { id: "face-both-bleph",    category: "Face", name: "Upper + Lower Blepharoplasty",       low: 2956, high: 3085 },
  { id: "face-temporal-lift", category: "Face", name: "Temporal Lift (Lateral Brow Lift)",  low: 2839, high: 3140 },
  { id: "face-endo-forehead", category: "Face", name: "Endoscopic Forehead Lift",           low: 3309, high: 3438 },
  { id: "face-bichectomy",    category: "Face", name: "Bichectomy",                         low: 1692, high: 1785 },

  // Breast
  { id: "breast-reduction",     category: "Breast", name: "Breast Reduction",                          low: 3585, high: 4051 },
  { id: "breast-lift",          category: "Breast", name: "Breast Lifting (Mastopexy)",                low: 3232, high: 3671 },
  { id: "breast-aug-round",     category: "Breast", name: "Breast Augmentation – Round Implants",      low: 3502, high: 3858 },
  { id: "breast-aug-teardrop",  category: "Breast", name: "Breast Augmentation – Teardrop Implants",   low: 3691, high: 4047 },
  { id: "breast-lift-implants", category: "Breast", name: "Breast Lifting with Implants",              low: 4325, high: 4777 },
  { id: "breast-replacement",   category: "Breast", name: "Breast Implant Replacement",               low: 3499, high: 3856 },

  // Body
  { id: "body-lipo-360",       category: "Body", name: "Liposuction 360° (3 areas)",         low: 3175, high: 3389 },
  { id: "body-lipo-4-5",       category: "Body", name: "Liposuction 4–5 areas",              low: 3547, high: 3739 },
  { id: "body-tummy-classic",  category: "Body", name: "Tummy Tuck (Classic)",               low: 3434, high: 4437 },
  { id: "body-tummy-extended", category: "Body", name: "Extended Tummy Tuck (270°)",         low: 3612, high: 4437 },
  { id: "body-tummy-lipo",     category: "Body", name: "Tummy Tuck + 360° Lipo",            low: 4837, high: 5908 },
  { id: "body-inner-thigh",    category: "Body", name: "Inner Thigh Lift",                   low: 2847, high: 3518 },
  { id: "body-arm-lift",       category: "Body", name: "Arm Lift",                           low: 2847, high: 3422 },
  { id: "body-gynecomastia",   category: "Body", name: "Gynecomastia",                       low: 2729, high: 3304 },

  // Other
  { id: "other-labioplasty",   category: "Other", name: "Labioplasty",  low: 1794, high: 2370 },
  { id: "other-vaginoplasty",  category: "Other", name: "Vaginoplasty", low: 2029, high: 2605 },
];

// Combo discount logic (per clinic pricing rules):
// Procedure 1: 100%
// Procedure 2: 75%
// Procedure 3+: 75%
export function calcPackagePrice(procedures: Procedure[]): { low: number; high: number } {
  const sorted = [...procedures].sort((a, b) => b.high - a.high); // most expensive first
  let low = 0, high = 0;
  sorted.forEach((p, i) => {
    const factor = i === 0 ? 1 : 0.75;
    low  += Math.round(p.low  * factor);
    high += Math.round(p.high * factor);
  });
  return { low, high };
}
