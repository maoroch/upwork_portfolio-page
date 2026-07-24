"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "/contacts", label: "Contacts" },
];

export default function Navbar() {
  const pathname = usePathname();
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

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close menu when window is resized to desktop
  useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open]);

  const headerStyle = {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    backgroundColor: scrolled ? "rgba(250, 247, 242, 0.98)" : "rgba(250, 247, 242, 0.80)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow: scrolled ? "0 4px 12px rgba(0, 0, 0, 0.08)" : "none",
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
              fontSize: 24,
              fontWeight: 600,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1.05)";
              (e.target as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1)";
              (e.target as HTMLElement).style.color = "var(--text)";
            }}
          >
            Ilyas-<span style={{ color: "var(--accent)" }}>ones</span>
          </span>
        </Link>

        {/* Desktop links - видны только на больших экранах (1024px+) */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: 40,
              alignItems: "center",
            }}
          >
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
                    background: active
                      ? "linear-gradient(to right, var(--accent), transparent)"
                      : "none",
                    WebkitBackgroundClip: active ? "text" : "unset",
                    WebkitTextFillColor: active ? "transparent" : "unset",
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
                  {link.label}
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

        {/* Mobile toggle - видна только на мобильных и планшетных (< 1024px) */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              color: open ? "var(--accent)" : "var(--text-muted)",
              cursor: "pointer",
              padding: "8px",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "6px",
              backgroundColor: open ? "rgba(255, 141, 120, 0.1)" : "transparent",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "rgba(255, 141, 120, 0.1)";
              (e.target as HTMLElement).style.color = "var(--accent)";
              (e.target as HTMLElement).style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = open ? "rgba(255, 141, 120, 0.1)" : "transparent";
              (e.target as HTMLElement).style.color = open ? "var(--accent)" : "var(--text-muted)";
              (e.target as HTMLElement).style.transform = "scale(1)";
            }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
          </button>
        )}
      </nav>

      {/* Mobile menu - видна только на мобильных и планшетных, когда меню открыто */}
      {isMobile && open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--bg)",
            padding: "16px 24px 24px",
            animation: "slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            maxHeight: "calc(100vh - 70px)",
            overflowY: "auto",
          }}
        >
          {links.map((link, index) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  textDecoration: "none",
                  padding: "14px 12px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: active ? "var(--accent)" : "var(--text-muted)",
                  borderRadius: "6px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  marginBottom: index < links.length - 1 ? "4px" : "0",
                  backgroundColor: active ? "rgba(255, 141, 120, 0.1)" : "transparent",
                  animation: `slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s both`,
                }}
                onMouseEnter={(e) => {
                  const element = e.target as HTMLElement;
                  if (!active) {
                    element.style.backgroundColor = "rgba(255, 141, 120, 0.05)";
                    element.style.color = "var(--text)";
                    element.style.paddingLeft = "16px";
                  }
                }}
                onMouseLeave={(e) => {
                  const element = e.target as HTMLElement;
                  if (!active) {
                    element.style.backgroundColor = "transparent";
                    element.style.color = "var(--text-muted)";
                    element.style.paddingLeft = "12px";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
