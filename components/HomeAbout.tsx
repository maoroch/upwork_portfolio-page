'use client'
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function HomeAbout() {
  const { lang, t } = useLanguage();

  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "80px 24px",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "64px",
        alignItems: "center",
      }}
      className="home-about-section"
    >
      {/* Photo — film camera style */}
      <div
        style={{
          flexShrink: 0,
          position: "relative",
        }}
      >
        {/* Outer film frame */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "14px 14px 40px 14px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)",
            transform: "rotate(-1.5deg)",
            position: "relative",
            width: 260,
          }}
        >
          {/* Photo itself */}
          <div
            style={{
              width: 232,
              height: 280,
              overflow: "hidden",
              position: "relative",
              backgroundColor: "var(--bg-3)",
            }}
          >
            <Image
              src="/images/ilyas.JPG"
              alt="Ilyas Salimov"
              fill
              sizes="232px"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                filter: "contrast(1.03) brightness(0.98)",
              }}
            />
            {/* Subtle film grain overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
                mixBlendMode: "overlay",
                opacity: 0.4,
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Film caption area */}
          <div
            style={{
              marginTop: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 9,
                letterSpacing: "0.12em",
                color: "#bbb",
                textTransform: "uppercase",
              }}
            >
              Almaty, KZ
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 9,
                letterSpacing: "0.08em",
                color: "#ccc",
              }}
            >
              '25
            </span>
          </div>
        </div>

        {/* Second frame peeking behind — depth effect */}
        <div
          style={{
            position: "absolute",
            top: 6,
            left: 6,
            width: 260,
            height: "calc(100% - 6px)",
            backgroundColor: "#fff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
            zIndex: -1,
            transform: "rotate(1deg)",
          }}
        />
      </div>

      {/* Right: bio */}
      <div>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-subtle)",
            marginBottom: 20,
          }}
        >
          {t.about.tag}
        </p>

        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(26px, 3.5vw, 38px)",
            color: "var(--text)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          Ilyas Salimov
        </h2>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: 15,
            lineHeight: 1.8,
            maxWidth: 420,
            marginBottom: 28,
          }}
        >
          {t.about.bio1}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginBottom: 32,
          }}
        >
          {[
            { label: lang === "ru" ? "Стек" : "Stack", value: "Next.js · Node.js · TypeScript · PostgreSQL" },
            { label: lang === "ru" ? "Фокус" : "Focus", value: "CRM · AI Integration · Performance" },
            { label: lang === "ru" ? "Статус" : "Status", value: t.hero.status },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{ display: "flex", gap: 16, alignItems: "baseline" }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-subtle)",
                  minWidth: 52,
                  flexShrink: 0,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 680px) {
          .home-about-section {
            grid-template-columns: 1fr !important;
            justify-items: center;
          }
        }
      `}</style>
    </section>
  );
}