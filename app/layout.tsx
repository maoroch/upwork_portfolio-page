import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ilyas-ones — Full Stack Developer",
    template: "%s | Ilyas-ones",
  },
  description: "Full Stack Developer focused on performance, CRM systems, AI-powered products, and product architecture.",
  keywords: ["Full Stack Developer", "Next.js", "React", "CRM", "AI", "Node.js"],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
