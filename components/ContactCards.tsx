"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { useState } from "react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TelegramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="var(--accent)">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.22 10.45c-.16.76-.62.94-1.25.59l-3.43-2.53-1.65 1.59c-.18.18-.34.34-.69.34l.24-3.48 6.34-5.72c.28-.24-.06-.38-.43-.13l-7.83 4.93-3.38-1.06c-.73-.23-.74-.73.15-1.08l13.23-5.1c.61-.22 1.15.15.92.98z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contacts = [
  { icon: TelegramIcon, label: "Telegram", value: "@Ilyas_ones", href: "https://t.me/Ilyas_ones", desc: "Best for quick messages. Usually respond within a few hours." },
  { icon: LinkedinIcon, label: "LinkedIn", value: "salimovilyass", href: "https://www.linkedin.com/in/salimovilyass", desc: "Professional background, work history, and recommendations." },
  { icon: GithubIcon, label: "GitHub", value: "maoroch", href: "https://github.com/maoroch", desc: "Open source projects, contributions, and code style." },
  { icon: Mail, label: "Email", value: "contact@ilyas-ones.com", href: "mailto:contact@ilyas-ones.com", desc: "For detailed proposals, NDA discussions, and formal inquiries." },
];

function ContactCard({ icon: Icon, label, value, href, desc }: (typeof contacts)[0]) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered ? "var(--bg-3)" : "var(--bg-2)",
          padding: "28px 24px",
          height: "100%",
          transition: "background-color 0.2s",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 2, backgroundColor: "var(--accent-bg)", border: "1px solid var(--accent-dim)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon size={16} color="var(--accent)" />
          </div>
          <ArrowUpRight size={14} color={hovered ? "var(--accent)" : "var(--text-subtle)"} style={{ transition: "color 0.2s" }} />
        </div>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 4 }}>{label}</p>
        <p style={{ color: "var(--accent)", fontSize: 14, fontFamily: "'DM Mono', monospace", marginBottom: 12 }}>{value}</p>
        <p style={{ color: "var(--text-muted)", fontSize: 12, lineHeight: 1.6 }}>{desc}</p>
      </div>
    </a>
  );
}

export default function ContactCards() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 2, backgroundColor: "var(--border)", border: "1px solid var(--border)" }}>
      {contacts.map((c) => <ContactCard key={c.label} {...c} />)}
    </div>
  );
}
