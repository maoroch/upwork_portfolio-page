"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, dictionaries } from "./dictionaries";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: typeof dictionaries.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("app_lang") as Language;
    if (saved === "en" || saved === "ru") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("app_lang", newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "ru" : "en");
  };

  const t = dictionaries[lang] || dictionaries.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
