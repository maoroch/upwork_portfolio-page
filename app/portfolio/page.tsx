"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function GoogleDriveBackground() {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(90vw, 700px)",
        height: "min(90vw, 700px)",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.08,
        fill: "var(--accent)",
      }}
    >
      <path d="M21.4231,13.88785,15.33356,3.33792H8.66663l6.09,10.54993ZM8.08917,4.33835,2,14.88736l3.33356,5.77472,6.08911-10.54926Zm1.73273,10.549L6.48877,20.66208H18.66663L22,14.88736Z" />
    </svg>
  );
}

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const driveUrl =
    "https://drive.google.com/drive/folders/1CBxmk25gXMsC4EiyScdOBU2blu70qXvi?usp=sharing";

  return (
    <div
      style={{
        paddingTop: 70,
        minHeight: "calc(100vh - 140px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Google Drive SVG watermark */}
      <GoogleDriveBackground />

      <section
        style={{
          maxWidth: 720,
          width: "100%",
          margin: "0 auto",
          padding: isMobile ? "40px 20px 80px" : "60px 24px 100px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Subtle radial ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,141,120,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Badge */}
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent)",
            border: "1px solid var(--accent-dim)",
            backgroundColor: "var(--accent-bg)",
            padding: "5px 16px",
            borderRadius: 2,
            marginBottom: 24,
            position: "relative",
            zIndex: 1,
          }}
        >
          {t.portfolio.badge}
        </span>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: isMobile
              ? "clamp(34px, 8vw, 48px)"
              : "clamp(42px, 6vw, 58px)",
            color: "var(--text)",
            letterSpacing: "-0.02em",
            marginBottom: 18,
            lineHeight: 1.15,
            position: "relative",
            zIndex: 1,
          }}
        >
          {t.portfolio.title}
        </h1>

        {/* Description */}
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: isMobile ? 15 : 17,
            maxWidth: 520,
            lineHeight: 1.7,
            margin: "0 auto 40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {t.portfolio.desc}
        </p>

        {/* Button */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <a
            href={driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: isMobile ? "16px 32px" : "18px 44px",
              backgroundColor: "var(--accent)",
              color: "var(--bg)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderRadius: 2,
              boxShadow: "0 6px 20px rgba(255, 141, 120, 0.4)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <span>{t.portfolio.button}</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}