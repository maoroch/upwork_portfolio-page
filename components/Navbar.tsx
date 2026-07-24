"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const rawLinks = [
  { href: "/", key: "home" as const },
  { href: "/portfolio", key: "portfolio" as const },
  { href: "/articles", key: "articles" as const },
  { href: "/about", key: "about" as const },
  { href: "/contacts", key: "contacts" as const },
];

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open]);

  const links = rawLinks.filter((link) => !(lang === "ru" && link.key === "articles"));

  const headerStyle = {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    borderBottom: scrolled || open ? "1px solid var(--border)" : "1px solid transparent",
    backgroundColor: scrolled || open ? "rgba(250, 247, 242, 0.98)" : "rgba(250, 247, 242, 0.82)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow: scrolled ? "0 4px 16px rgba(0, 0, 0, 0.06)" : "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <header style={headerStyle}>
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: isMobile ? 22 : 24,
              fontWeight: 600,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              transition: "all 0.3s ease",
            }}
          >
            Ilyas-<span style={{ color: "var(--accent)" }}>ones</span>
          </span>
        </Link>

        {/* Right side controls */}
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 32 }}>
          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: active ? "var(--accent)" : "var(--text-muted)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      paddingBottom: 4,
                    }}
                    onMouseEnter={(e) => {
                      const element = e.target as HTMLElement;
                      if (!active) {
                        element.style.color = "var(--text)";
                        element.style.transform = "translateY(-2px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      const element = e.target as HTMLElement;
                      if (!active) {
                        element.style.color = "var(--text-muted)";
                        element.style.transform = "translateY(0)";
                      }
                    }}
                  >
                    {t.nav[link.key]}
                    {active && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "2px",
                          background: "linear-gradient(90deg, var(--accent), transparent)",
                          borderRadius: "2px",
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Language Toggle Button */}
          <button
            onClick={toggleLang}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              height: isMobile ? 38 : 34,
              padding: isMobile ? "0 12px" : "0 12px",
              borderRadius: 4,
              border: "1px solid var(--border-light)",
              backgroundColor: "var(--bg-2)",
              color: "var(--text)",
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            title={lang === "en" ? "Switch to Russian" : "Переключить на английский"}
          >
            <Globe size={13} color="var(--accent)" />
            <span>{lang === "en" ? "EN" : "RU"}</span>
          </button>

          {/* Mobile hamburger menu toggle button */}
          {isMobile && (
            <button
              onClick={() => setOpen(!open)}
              style={{
                width: 38,
                height: 38,
                borderRadius: 4,
                border: "1px solid var(--border-light)",
                backgroundColor: open ? "var(--accent-bg)" : "var(--bg-2)",
                color: open ? "var(--accent)" : "var(--text)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobile && open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "rgba(250, 247, 242, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "16px 20px 24px",
            animation: "fadeInDown 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textDecoration: "none",
                    padding: "12px 16px",
                    fontSize: 13,
                    fontWeight: active ? 600 : 500,
                    color: active ? "var(--accent)" : "var(--text)",
                    borderRadius: 4,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    backgroundColor: active ? "var(--accent-bg)" : "transparent",
                    borderLeft: active ? "3px solid var(--accent)" : "3px solid transparent",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{t.nav[link.key]}</span>
                  {active && <ArrowRight size={14} color="var(--accent)" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}


