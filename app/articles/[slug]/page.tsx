import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getArticleBySlug, getArticles } from "@/lib/data";

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/articles/${slug}`,
      languages: {
        "en": `/articles/${slug}`,
        "x-default": `/articles/${slug}`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      tags: article.tags,
    },
  };
}

function renderMarkdown(content: string): string {
  return content
    // Code blocks
    .replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
      const escaped = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return `<pre style="background:var(--bg-2);border:1px solid var(--border);padding:20px 24px;border-radius:2px;overflow-x:auto;margin:24px 0;"><code style="font-family:'DM Mono',monospace;font-size:12px;line-height:1.7;color:var(--text);">${escaped}</code></pre>`;
    })
    // Inline code
    .replace(/`([^`]+)`/g, `<code style="font-family:'DM Mono',monospace;font-size:12px;background:var(--bg-3);border:1px solid var(--border);padding:2px 6px;border-radius:2px;color:var(--accent);">$1</code>`)
    // H1
    .replace(/^# (.+)$/gm, `<h1 style="font-family:'DM Serif Display',serif;font-size:36px;color:var(--text);letter-spacing:-0.02em;margin:48px 0 24px;line-height:1.2;">$1</h1>`)
    // H2
    .replace(/^## (.+)$/gm, `<h2 style="font-family:'DM Serif Display',serif;font-size:26px;color:var(--text);letter-spacing:-0.01em;margin:40px 0 16px;line-height:1.3;padding-top:8px;border-top:1px solid var(--border);">$1</h2>`)
    // H3
    .replace(/^### (.+)$/gm, `<h3 style="font-family:'DM Serif Display',serif;font-size:20px;color:var(--text);margin:32px 0 12px;line-height:1.3;">$1</h3>`)
    // Bold
    .replace(/\*\*(.+?)\*\*/g, `<strong style="color:var(--text);font-weight:500;">$1</strong>`)
    // Paragraphs (non-empty lines not starting with <)
    .replace(/^(?!<)(.+)$/gm, `<p style="color:var(--text-muted);font-size:15px;line-height:1.85;margin:16px 0;">$1</p>`)
    // Empty lines
    .replace(/^\s*$/gm, "");
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const html = renderMarkdown(article.content);

  return (
    <div style={{ paddingTop: 60 }}>
      {/* Header */}
      <section
        style={{
          borderBottom: "1px solid var(--border)",
          backgroundColor: "var(--bg-2)",
          padding: "64px 24px 48px",
        }}
      >
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 40,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/articles"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: 12,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              <ArrowLeft size={13} /> All Articles
            </Link>

            <span
              style={{
                display: "inline-block",
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                border: "1px solid var(--accent-dim)",
                backgroundColor: "var(--accent-bg)",
                padding: "3px 10px",
                borderRadius: 2,
              }}
            >
              {article.category}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            {article.excerpt}
          </p>

          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "var(--text-muted)",
                fontSize: 12,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              <Calendar size={12} /> {date}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "var(--text-muted)",
                fontSize: 12,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              <Clock size={12} /> {article.readingTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section style={{ maxWidth: 740, margin: "0 auto", padding: "56px 24px 80px" }}>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ maxWidth: "100%" }}
        />

        {/* Tags */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--text-subtle)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginRight: 8,
            }}
          >
            Tags:
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--accent)",
                border: "1px solid var(--accent-dim)",
                backgroundColor: "var(--accent-bg)",
                padding: "3px 10px",
                borderRadius: 2,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Back */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <Link
          href="/articles"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: 12,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          <ArrowLeft size={13} /> All Articles
        </Link>
      </div>
    </div>
  );
}
