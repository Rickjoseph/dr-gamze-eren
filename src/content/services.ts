export type Service = {
  slug: string;
  group: "Facial" | "Body" | "Breast" | "Non-surgical";
  title: string;
  short: string;
  description: string;
  procedures: string[];
};

export const services: Service[] = [
  {
    slug: "facial",
    group: "Facial",
    title: "Facial Aesthetics",
    short:
      "A graceful refinement that respects your features — never overdone.",
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
  {
    slug: "body",
    group: "Body",
    title: "Body Contouring",
    short:
      "Sculpt the silhouette you recognise as your own — balanced, natural.",
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
  {
    slug: "breast",
    group: "Breast",
    title: "Breast Aesthetics",
    short: "Restore volume, harmony, and a profile that feels truly yours.",
    description:
      "Breast surgery centred on shape, symmetry and a natural feel. Implant choices include FDA-approved silk-surface options.",
    procedures: ["Breast lift", "Augmentation", "Reduction", "Revision surgery"],
  },
  {
    slug: "non-surgical",
    group: "Non-surgical",
    title: "Non-surgical Treatments",
    short:
      "Subtle refinements that brighten the skin without changing who you are.",
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
];
