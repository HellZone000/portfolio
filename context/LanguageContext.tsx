'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'EN' | 'IT';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('EN');

  // Opzionale: Salva la lingua nel browser così se aggiorni la pagina rimane
  useEffect(() => {
    const saved = localStorage.getItem('site-lang');
    if (saved === 'EN' || saved === 'IT') setLang(saved);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('site-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}