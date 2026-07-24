import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Icon, Link2 } from "lucide-react";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Full Stack Developer focused on CRM systems, AI products, and performance.",
};

const timeline = [
  { year: "2021", event: "Started working with JavaScript and PHP. Began focusing on frontend development." },
  { year: "2022", event: "Started freelancing — built frontend projects, small business systems and automation tools (Discord / Telegram bots)." },
  { year: "2023", event: "Focused on frontend performance: SSR/ISR, caching strategies, Core Web Vitals. First hackathon win." },
  { year: "2024", event: "Dug deep into Node.js, PostgreSQL, and API architecture. Built CRM and e-commerce platforms." },
  { year: "2025", event: "Integrated LLMs into production products. Built AI content pipelines, structured output systems, and agentic workflows." },
  { year: "Now", event: "Focused on product architecture: systems that scale, teams that ship, products that last. Working with clients on CRM systems, automation tools, and AI integrations." },
  { year: "Future", event: "Continuing to build scalable products and deepen expertise in AI-driven systems." },
];

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
            About
          </p>
          <h1 className={styles.heroTitle}>
            I build reliable fullstack systems
            <br />
            <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>for real products.</span>
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            I&apos;m a Full Stack Developer with 4+ years of experience building web products — from small tools to enterprise CRM systems. My focus is on the intersection of product thinking and engineering craft.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            I care about performance, clean data models, thoughtful API design, and user interfaces that feel obvious. I focus on building systems — not just isolated features — so products scale without turning into chaos.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Currently working on integrating LLMs into real products — focusing on automation, structured outputs, and reducing user friction.
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
              Current Focus
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Product & system architecture for early-stage startups",
                "CRM & automation systems",
                "LLM integration in production products",
                "Frontend performance engineering",
                "Technical writing & knowledge sharing",
              ].map((item) => (
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
              Long-term Goals
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Build and scale a SaaS product end-to-end",
                "Lead architecture on complex, high-impact systems",
                "Work on products used by thousands+ users",
                "Deepen expertise in product thinking and scalable system design",
              ].map((item) => (
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
          Tech Stack
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
          Have a project in mind or want to discuss an idea?
        </p>
        <Link
          href="mailto:contact@ilyas-ones.com"
          className={styles.ctaButton}
        >
          Get in Touch <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
