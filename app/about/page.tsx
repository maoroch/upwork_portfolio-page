"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./about.module.css";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const techStack = [
  {
    category: "Core Stack",
    items: [
      "Next.js, React, TypeScript, Tailwind CSS",
      "Node.js, Express",
      "PostgreSQL, Redis",
      "Supabase"
    ]
  },
  {
    category: "Secondary",
    items: [
      "Framer Motion, Three.js",
      "FastAPI, Flask",
      "Docker, Nginx, Vercel, Fly.io, Railway, GitHub Actions",
      "MongoDB, MySQL",
    ]
  },
  {
    category: "AI / Experimental",
    items: [
      "OpenAI API, LangChain",
      "Vercel AI SDK",
      "Structured outputs (JSON schema, tool calling)"
    ]
  }
];

export default function AboutPage() {
  const { lang, t } = useLanguage();

  const isRu = lang === "ru";

  return (
    <div style={{ paddingTop: 60 }}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div>
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
            {t.about.tag}
          </p>
          <h1 className={styles.heroTitle}>
            {isRu ? "Создаю надежные fullstack-системы" : "I build reliable fullstack systems"}
            <br />
            <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
              {isRu ? "для реальных продуктов." : "for real products."}
            </span>
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            {isRu
              ? "Я Full Stack разработчик с 4+ годами опыта создания веб-продуктов — от небольших сервисов до enterprise CRM-систем. Фокусируюсь на стыке продуктового мышления и инженерного мастерства."
              : t.about.bio1}
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            {isRu
              ? "Я уделяю особое внимание производительности, чистым моделям данных, продуманным API и очевидным пользовательским интерфейсам. Проектирую системы целиком, чтобы продукты легко масштабировались."
              : t.about.bio2}
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            {isRu
              ? "В настоящее время активно внедряю LLM в реальные сервисы — создаю умных ассистентов, пайплайны обработки данных и автоматизированные процессы."
              : "Currently working on integrating LLMs into real products — focusing on automation, structured outputs, and reducing user friction."}
          </p>
        </div>

        {/* Right column: current focus */}
        <div className={styles.sideboxesContainer}>
          <div className={styles.sidebox}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 16,
              }}
            >
              {isRu ? "Текущий фокус" : "Current Focus"}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {(isRu ? [
                "Архитектура продуктов и систем для стартапов",
                "CRM-системы и автоматизация процессов",
                "Внедрение LLM в продуктовый продакшен",
                "Инженерия производительности фронтенда",
                "Обмен знаниями и технический консалтинг",
              ] : [
                "Product & system architecture for early-stage startups",
                "CRM & automation systems",
                "LLM integration in production products",
                "Frontend performance engineering",
                "Technical writing & knowledge sharing",
              ]).map((item) => (
                <li key={item} className={styles.sideboxItem}>
                  <span className={styles.sideboxIcon}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebox}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 16,
              }}
            >
              {isRu ? "Долгосрочные цели" : "Long-term Goals"}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {(isRu ? [
                "Создание и масштабирование собственного SaaS-продукта",
                "Проектирование архитектуры высоконагруженных систем",
                "Разработка продуктов для тысяч активных пользователей",
                "Углубление экспертизы в проектировании гибких систем",
              ] : [
                "Build and scale a SaaS product end-to-end",
                "Lead architecture on complex, high-impact systems",
                "Work on products used by thousands+ users",
                "Deepen expertise in product thinking and scalable system design",
              ]).map((item) => (
                <li key={item} className={styles.sideboxItem}>
                  <span className={styles.sideboxIcon}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={styles.techStackSection}>
        <p className={styles.techStackLabel}>
          {t.about.skillsTag}
        </p>
        <div className={styles.techStackGrid}>
          {techStack.map(({ category, items }) => (
            <div key={category} className={styles.techStackItem}>
              <p className={styles.techStackItemLabel}>
                {category}
              </p>
              <div className={styles.techStackItemTech}>
                {items.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <p className={styles.ctaText}>
          {t.about.ctaDesc}
        </p>
        <Link
          href="mailto:contact@ilyas-ones.com"
          className={styles.ctaButton}
        >
          {t.hero.getInTouch} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

