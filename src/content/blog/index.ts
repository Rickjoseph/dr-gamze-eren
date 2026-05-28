// Central registry of all blog posts.
// To add a new post: create a new file in this folder and add it here.

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  body: string;
}

import { post as post1 } from "./rhinoplasty-recovery-what-to-expect";
import { post as post2 } from "./istanbul-guide-aesthetic-surgery-patients";
import { post as post3 } from "./breast-augmentation-implants-guide";

export const posts: Post[] = [post1, post2, post3].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
