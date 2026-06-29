import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
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
      <div className="mx-auto max-w-3xl pt-8 pb-24">

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

        {/* Hero image */}
        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/60 shadow-[0_24px_60px_-20px_rgba(26,20,16,0.28)]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 92vw, 768px"
            className="object-cover"
          />
        </div>

        {/* Body — narrower than the hero so long-form reads comfortably */}
        <article className="mx-auto mt-10 max-w-2xl text-base">
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

        {/* Related posts */}
        {(() => {
          const { locale } = post as any;
          const related = posts
            .filter((p) =>
              p.slug !== post.slug &&
              p.category === post.category &&
              (!p.locale || !locale || p.locale === locale)
            )
            .slice(0, 3);
          const fill = related.length < 3
            ? posts
                .filter((p) =>
                  p.slug !== post.slug &&
                  p.category !== post.category &&
                  (!p.locale || !locale || p.locale === locale) &&
                  !related.find((r) => r.slug === p.slug)
                )
                .slice(0, 3 - related.length)
            : [];
          const shown = [...related, ...fill];
          if (!shown.length) return null;
          return (
            <div className="mt-16">
              <p className="text-xs uppercase tracking-widest text-[var(--color-taupe)]">Continue reading</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {shown.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/30 shadow-[0_4px_16px_-4px_rgba(26,20,16,0.10)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(26,20,16,0.18)]"
                  >
                    <div className="relative aspect-[3/2] w-full overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.imageAlt}
                        fill
                        sizes="(max-width: 640px) 90vw, 240px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] uppercase tracking-widest text-[var(--color-taupe)]">{r.category}</p>
                      <p className="mt-1 text-sm font-medium leading-snug text-[var(--color-ink)] group-hover:text-[var(--color-rosegold)] transition-colors line-clamp-2">{r.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

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
