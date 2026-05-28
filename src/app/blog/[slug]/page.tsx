import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, posts } from "@/content/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Very simple Markdown-to-JSX renderer (handles ## headings and paragraphs)
function renderBody(body: string) {
  const blocks = body.split(/\n\n+/);
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="font-display text-2xl mt-10 mb-4 text-[var(--color-ink)]">
          {block.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={i} className="leading-relaxed text-[var(--color-cocoa)] mt-5">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <section className="relative px-4 sm:px-8">
      <div className="mx-auto max-w-2xl pt-8 pb-24">

        {/* Back */}
        <Link href="/blog" className="text-sm text-[var(--color-taupe)] hover:text-[var(--color-cocoa)] transition">
          ← Back to Journal
        </Link>

        {/* Meta */}
        <div className="mt-8 flex items-center gap-3 text-xs text-[var(--color-taupe)]">
          <span className="uppercase tracking-widest">{post.category}</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-tight mt-4 text-[var(--color-ink)]">
          {post.title}
        </h1>

        {/* Divider */}
        <div className="mt-8 h-px bg-[var(--color-line)]" />

        {/* Body */}
        <article className="mt-8 text-base">
          {renderBody(post.body)}
        </article>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-white/40 border border-white/60 p-8 text-center shadow-[0_8px_32px_-8px_rgba(26,20,16,0.12)]">
          <p className="font-display text-2xl text-[var(--color-ink)]">
            Ready to <span className="italic text-[var(--color-rosegold)]">begin?</span>
          </p>
          <p className="mt-3 text-sm text-[var(--color-cocoa)]">
            Book a private consultation with Dr. Gamze Eren — online or in clinic.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-2xl px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ background: "linear-gradient(135deg, var(--color-rosegold), var(--color-rose))" }}
          >
            Book consultation
          </Link>
        </div>

        {/* Back */}
        <div className="mt-10 text-center">
          <Link href="/blog" className="text-sm text-[var(--color-taupe)] hover:text-[var(--color-cocoa)] transition">
            ← Back to Journal
          </Link>
        </div>
      </div>
    </section>
  );
}
