import { getArticles } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "Technical articles on frontend architecture, backend design, CRM systems, AI integration, and product thinking.",
  alternates: {
    canonical: "/articles",
    languages: {
      "en": "/articles",
      "x-default": "/articles",
    },
  },
};

export default function ArticlesPage() {
  const articles = getArticles();
  const categories = Array.from(new Set(articles.map((a) => a.category)));

  return (
    <div style={{ paddingTop: 60 }}>
      {/* Hero header — не меняем */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 64px" }}>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: 16,
          }}
        >
          Writing
        </p>
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            color: "var(--text)",
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          Articles
        </h1>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: 16,
            maxWidth: 520,
            lineHeight: 1.7,
          }}
        >
          Technical writing on frontend architecture, backend design, CRM systems, AI integration, and product thinking.
        </p>
      </section>

      {/* Articles by category */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 100px" }}>
        {categories.map((category, i) => {
          const categoryArticles = articles.filter((a) => a.category === category);
          return (
            <div key={category} style={{ marginBottom: 72 }}>
              {/* Category label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    border: "1px solid var(--accent-dim)",
                    backgroundColor: "var(--accent-bg)",
                    padding: "4px 12px",
                    borderRadius: 2,
                  }}
                >
                  {category}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: "var(--border)",
                  }}
                />
              </div>

              {/* Article list */}
              <div>
                {categoryArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}