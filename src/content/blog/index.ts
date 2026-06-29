// Central registry of all blog posts.
// To add a new post: create a new file in this folder and add it here.

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  /** Path under /public — used for card thumbnail and post-detail hero */
  image: string;
  /** Short alt text describing the image (a11y) */
  imageAlt: string;
  body: string;
  /** Optional locale tag — if set, only shown to matching locale visitors */
  locale?: "en" | "tr" | "ru" | "de";
}

import { post as post1 } from "./rhinoplasty-recovery-what-to-expect";
import { post as post2 } from "./istanbul-guide-aesthetic-surgery-patients";
import { post as post3 } from "./breast-augmentation-implants-guide";
import { post as post4 } from "./liposuction-body-contouring-guide";
import { post as post5 } from "./facelift-facial-rejuvenation-age-gracefully";
import { post as post6 } from "./poland-syndrome-understanding-and-reconstruction";
import { post as post7 } from "./mommy-makeover-restoring-confidence-after-children";
import { post as post8 } from "./silksurface-breast-implants-natural-feel";
import { post as post9 } from "./rhinoplasty-3d-planning-kratos-simulation";
import { post as post10 } from "./brazilian-butt-lift-bbl-istanbul-guide";
import { post as post11 } from "./brezilya-poposu-bbl-istanbul-rehberi";
import { post as post12 } from "./brasilianischer-po-lift-bbl-istanbul-ratgeber";

import { post as post13 } from "./rinoplasti-iyilesme-sureci-hafta-hafta";
import { post as post14 } from "./istanbul-uluslararasi-hastalar-rehberi";
import { post as post15 } from "./gogus-buyutme-implant-secimi-rehberi";
import { post as post16 } from "./liposuction-vucut-sekillendirme-kilo-vermekten-fazlasi";
import { post as post17 } from "./yuzyuzu-genclik-estigi-ile-dogal-yaslanma";
import { post as post18 } from "./poland-sendromu-anlama-ve-rekonstruksiyon";
import { post as post19 } from "./mommy-makeover-cocuk-sonrasi-bedenini-yeniden-kesfet";
import { post as post20 } from "./silksurface-meme-implantlari-dogal-his-maksimum-konfor";
import { post as post21 } from "./3d-rinoplasti-planlama-kratos-simulasyon";

export const posts: Post[] = [
  post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11, post12,
  post13, post14, post15, post16, post17, post18, post19, post20, post21,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
