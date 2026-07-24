'use client'
import Link from "next/link";
import { Mail } from "lucide-react";
import { useState, useEffect } from "react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TelegramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.22 10.45c-.16.76-.62.94-1.25.59l-3.43-2.53-1.65 1.59c-.18.18-.34.34-.69.34l.24-3.48 6.34-5.72c.28-.24-.06-.38-.43-.13l-7.83 4.93-3.38-1.06c-.73-.23-.74-.73.15-1.08l13.23-5.1c.61-.22 1.15.15.92.98z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/maoroch" },
  { icon: TelegramIcon, label: "Telegram", href: "https://t.me/Ilyas_ones" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/salimovilyass" },
  { icon: Mail, label: "Email", href: "mailto:contact@ilyas-ones.com" },
];

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contacts", href: "/contacts" },
];

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: isMobile ? "40px 16px" : "48px 24px",
        marginTop: isMobile ? 60 : 80,
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: isMobile ? "flex-start" : "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 32 : 24,
        }}
      >
        {/* Brand Section */}
        <div style={{ flex: isMobile ? "1 1 100%" : "0 0 auto" }}>
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: isMobile ? 16 : 18,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              fontWeight: 600,
              transition: "all 0.3s ease",
            }}
          >
            Ilyas<span style={{ color: "var(--accent)" }}>.</span>dev
          </span>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: isMobile ? 11 : 12,
              marginTop: 8,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Full Stack Developer · {new Date().getFullYear()}
          </p>
        </div>

        {/* Navigation Links - hidden on mobile, shown on desktop */}
        {!isMobile && (
          <nav style={{ display: "flex", gap: 24, alignItems: "center", flex: "1 1 auto", justifyContent: "center" }}>
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: 11,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  fontWeight: 500,
                  position: "relative",
                  paddingBottom: 2,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}

        {/* Social Links */}
        <div style={{ display: "flex", gap: isMobile ? 16 : 20, alignItems: "center" }}>
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              style={{
                color: "var(--text-muted)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: 6,
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.backgroundColor = "rgba(255, 141, 120, 0.1)";
                (e.currentTarget).style.color = "var(--accent)";
                (e.currentTarget).style.transform = "scale(1.1) translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.backgroundColor = "transparent";
                (e.currentTarget).style.color = "var(--text-muted)";
                (e.currentTarget).style.transform = "scale(1) translateY(0)";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation - shown only on mobile */}
      {isMobile && (
        <nav style={{
          display: "flex",
          gap: 16,
          marginTop: 32,
          paddingTop: 32,
          borderTop: "1px solid var(--border)",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}>
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: 4,
                backgroundColor: "var(--bg-2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.backgroundColor = "var(--bg-3)";
                (e.currentTarget).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.backgroundColor = "var(--bg-2)";
                (e.currentTarget).style.color = "var(--text-muted)";
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}

    </footer>
  );
}
