"use client";

import ContactCards from "@/components/ContactCards";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactPage() {
  const { lang, t } = useLanguage();
  const isRu = lang === "ru";

  const services = isRu
    ? [
        { title: "CRM-разработка", desc: "Создание кастомных CRM под ваши процессы — пайплайны, автоматизации, интеграции." },
        { title: "Full Stack Проекты", desc: "Разработка веб-приложений от архитектуры до деплоя. React, Next.js, Node.js." },
        { title: "Аудит производительности", desc: "Анализ в Lighthouse, оптимизация Core Web Vitals, стратегия SSR/ISR." },
        { title: "AI-интеграции", desc: "Внедрение LLM-функций, пайплайны обработки контента, агентные цепочки." },
        { title: "Консалтинг по архитектуре", desc: "Аудит дизайна систем, моделей данных, API-контрактов и выбора стека." },
        { title: "Ревью кода", desc: "Глубокий анализ существующих кодовых баз — паттерны, производительность, масштабируемость." },
      ]
    : [
        { title: "CRM Development", desc: "Custom CRM platforms built around your workflow — pipelines, automations, integrations." },
        { title: "Full Stack Projects", desc: "End-to-end web applications from architecture to deployment. React, Next.js, Node.js." },
        { title: "Performance Audit", desc: "Lighthouse analysis, Core Web Vitals optimization, SSR/ISR strategy, bundle analysis." },
        { title: "AI Integration", desc: "LLM-powered features, content pipelines, structured outputs, agentic workflows." },
        { title: "Architecture Consulting", desc: "System design review, data model audit, API contracts, tech stack decisions." },
        { title: "Code Review", desc: "Deep dive into existing codebase — patterns, performance, scalability concerns." },
      ];

  return (
    <div style={{ paddingTop: 60 }}>
      {/* Header */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 64px" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
          {t.contacts.tag}
        </p>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(36px, 5vw, 60px)", color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 20 }}>
          {isRu ? "Давайте создадим" : "Let's build"}<br />
          <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
            {isRu ? "что-то выдающееся." : "something great."}
          </span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 16, maxWidth: 480, lineHeight: 1.7 }}>
          {t.contacts.desc}
        </p>
      </section>

      {/* Contact cards */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-2)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 32 }}>
            {isRu ? "Способы связи" : "Reach Out"}
          </p>
          <ContactCards />
        </div>
      </section>

      {/* Services */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 48 }}>
          {isRu ? "Чем я могу помочь" : "What I Can Help With"}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2, backgroundColor: "var(--border)", border: "1px solid var(--border)" }}>
          {services.map(({ title, desc }) => (
            <div key={title} style={{ backgroundColor: "var(--bg)", padding: "28px 24px" }}>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: "var(--text)", marginBottom: 10 }}>{title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Availability notice */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ border: "1px solid #1a3a24", backgroundColor: "var(--green-bg)", padding: "20px 24px", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--green)", flexShrink: 0, boxShadow: "0 0 8px var(--green)" }} />
          <p style={{ color: "var(--text-muted)", fontSize: 13 }}>
            {t.contacts.availableBadge}
          </p>
        </div>
      </div>
    </div>
  );
}

