"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Zap, Database, Bot, Layers } from "lucide-react";
import { getFeaturedArticles } from "@/lib/data";
import ArticleCardHome from "@/components/ArticleCard";
import HomeAbout from "@/components/HomeAbout";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function HomePage() {
  const { lang, t } = useLanguage();
  const articles = getFeaturedArticles();

  const skills = [
    { icon: Layers, title: t.focusAreas.arch.title, desc: t.focusAreas.arch.desc },
    { icon: Database, title: t.focusAreas.crm.title, desc: t.focusAreas.crm.desc },
    { icon: Bot, title: t.focusAreas.ai.title, desc: t.focusAreas.ai.desc },
    { icon: Zap, title: t.focusAreas.perf.title, desc: t.focusAreas.perf.desc },
  ];

  return (
    <div style={{ paddingTop: 60, position: "relative" }}>

      <div className="hero-grid-bg" />

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 24px 80px", position: "relative", zIndex: 1 }}>
        <div className="animate-fade-up delay-1">
          <span style={{ display: "inline-block", fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", border: "1px solid var(--accent-dim)", backgroundColor: "var(--accent-bg)", padding: "4px 12px", borderRadius: 2, marginBottom: 32 }}>
            {t.hero.status}
          </span>
        </div>
        <h1 className="animate-fade-up delay-2" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(42px, 7vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--text)", maxWidth: 780, marginBottom: 28 }}>
          {t.hero.titleLine1}<br />
          <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>{t.hero.titleLine2}</span>
        </h1>
        <p className="animate-fade-up delay-3" style={{ color: "var(--text-muted)", fontSize: 17, maxWidth: 520, lineHeight: 1.7, marginBottom: 48 }}>
          {t.hero.desc}
        </p>
        <div className="animate-fade-up delay-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/portfolio" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", backgroundColor: "var(--accent)", color: "var(--bg)", textDecoration: "none", fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", borderRadius: 2 }}>
            {t.hero.viewWork} <ArrowRight size={14} />
          </Link>
          <Link href="mailto:contact@ilyas-ones.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", border: "1px solid var(--border-light)", color: "var(--text-muted)", textDecoration: "none", fontSize: 13, letterSpacing: "0.04em", textTransform: "uppercase", borderRadius: 2 }}>
            {t.hero.getInTouch}
          </Link>
        </div>
        <div className="animate-fade-up delay-5" style={{ display: "flex", gap: 48, marginTop: 80, paddingTop: 40, borderTop: "1px solid var(--border)", flexWrap: "wrap" }}>
          {[{ value: "4+", label: t.hero.stats.years }, { value: "20+", label: t.hero.stats.shipped }].map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: "var(--text)", lineHeight: 1 }}>{value}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About — photo + bio */}
      <div className="flex justify-between" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-1)", padding: "80px 24px", position: "relative", zIndex: 1 }}>
        <HomeAbout />
      </div>

      {/* Skills */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-2)", padding: "80px 24px", zIndex: 1, position: "relative" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 48 }}>{t.focusAreas.tag}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, backgroundColor: "var(--border)", border: "1px solid var(--border)" }}>
            {skills.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ backgroundColor: "var(--bg-2)", padding: "32px 28px" }}>
                <div style={{ width: 36, height: 36, borderRadius: 2, backgroundColor: "var(--accent-bg)", border: "1px solid var(--accent-dim)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon size={16} color="var(--accent)" />
                </div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: "var(--text)", marginBottom: 10 }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>{t.featuredWork.tag}</p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px, 5vw, 36px)", color: "var(--text)" }}>{t.featuredWork.title}</h2>
          </div>
          <Link href="/portfolio" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--accent)", textDecoration: "none", fontSize: 13, letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 500 }}>
            {t.featuredWork.portfolioPage} <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3 Interactive Feature Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {/* Card 1: CRM & Enterprise Systems */}
          <a
            href="https://drive.google.com/drive/folders/1CBxmk25gXMsC4EiyScdOBU2blu70qXvi?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "var(--bg-2)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "32px 28px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div>
              <div style={{ width: 44, height: 44, borderRadius: 2, backgroundColor: "var(--accent-bg)", border: "1px solid var(--accent-dim)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <Database size={20} color="var(--accent)" />
              </div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.featuredWork.cat1.tag}</span>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "var(--text)", marginTop: 6, marginBottom: 12 }}>{t.featuredWork.cat1.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.65, marginBottom: 28 }}>
                {t.featuredWork.cat1.desc}
              </p>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--accent)", fontSize: 12, fontFamily: "'DM Mono', monospace", textTransform: "uppercase", fontWeight: 500 }}>
              <span>{t.featuredWork.viewDrive}</span>
              <ArrowUpRight size={15} />
            </div>
          </a>

          {/* Card 2: AI Products & Assistants */}
          <a
            href="https://drive.google.com/drive/folders/1CBxmk25gXMsC4EiyScdOBU2blu70qXvi?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "var(--bg-2)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "32px 28px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div>
              <div style={{ width: 44, height: 44, borderRadius: 2, backgroundColor: "var(--accent-bg)", border: "1px solid var(--accent-dim)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <Bot size={20} color="var(--accent)" />
              </div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.featuredWork.cat2.tag}</span>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "var(--text)", marginTop: 6, marginBottom: 12 }}>{t.featuredWork.cat2.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.65, marginBottom: 28 }}>
                {t.featuredWork.cat2.desc}
              </p>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--accent)", fontSize: 12, fontFamily: "'DM Mono', monospace", textTransform: "uppercase", fontWeight: 500 }}>
              <span>{t.featuredWork.viewDrive}</span>
              <ArrowUpRight size={15} />
            </div>
          </a>

          {/* Card 3: Full-Stack Architecture */}
          <a
            href="https://drive.google.com/drive/folders/1CBxmk25gXMsC4EiyScdOBU2blu70qXvi?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "var(--bg-2)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "32px 28px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div>
              <div style={{ width: 44, height: 44, borderRadius: 2, backgroundColor: "var(--accent-bg)", border: "1px solid var(--accent-dim)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <Layers size={20} color="var(--accent)" />
              </div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.featuredWork.cat3.tag}</span>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "var(--text)", marginTop: 6, marginBottom: 12 }}>{t.featuredWork.cat3.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.65, marginBottom: 28 }}>
                {t.featuredWork.cat3.desc}
              </p>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--accent)", fontSize: 12, fontFamily: "'DM Mono', monospace", textTransform: "uppercase", fontWeight: 500 }}>
              <span>{t.featuredWork.viewDrive}</span>
              <ArrowUpRight size={15} />
            </div>
          </a>
        </div>
      </section>

      {/* Articles - EXCLUDED in Russian mode */}
      {lang !== "ru" && (
        <section style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-2)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
              <div>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>{t.articlesHome.tag}</p>
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: "var(--text)" }}>{t.articlesHome.title}</h2>
              </div>
              <Link href="/articles" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--accent)", textDecoration: "none", fontSize: 13, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                {t.articlesHome.allArticles} <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
              {articles.map((article) => <ArticleCardHome key={article.id} article={article} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ border: "1px solid var(--border-light)", padding: "60px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,169,110,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>{t.cta.tag}</p>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px, 4vw, 48px)", color: "var(--text)", marginBottom: 16, letterSpacing: "-0.02em" }}>{t.cta.title}</h2>
          <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 400, margin: "0 auto 36px" }}>{t.cta.desc}</p>
          <Link href="mailto:contact@ilyas-ones.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", backgroundColor: "var(--accent)", color: "var(--bg)", textDecoration: "none", fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", borderRadius: 2 }}>
            {t.cta.button} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}