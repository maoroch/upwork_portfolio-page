import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const siteUrl = "https://ilyas-ones.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ilyas Salimov — Full Stack Developer (CRM, AI, Next.js)",
    template: "%s | Ilyas Salimov",
  },
  description: "Full Stack Developer specializing in CRM systems, AI products, Next.js, and scalable web architecture. Open for freelance & consulting.",
  keywords: [
    "Full Stack Developer",
    "CRM Developer",
    "AI Integration",
    "Next.js Developer",
    "React Engineer",
    "Node.js",
    "TypeScript",
    "Разработчик CRM",
    "Fullstack разработчик",
  ],
  authors: [{ name: "Ilyas Salimov", url: siteUrl }],
  creator: "Ilyas Salimov",
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "ru": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU"],
    url: siteUrl,
    title: "Ilyas Salimov — Full Stack Developer",
    description: "Full Stack Developer specializing in CRM systems, AI products, Next.js, and scalable web architecture.",
    siteName: "Ilyas Salimov Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

