import {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import {Language, TranslationSchema, translations} from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRtl: boolean;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({children}: {children: ReactNode}) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('agz_user_lang');
      if (saved === 'en' || saved === 'ps' || saved === 'fa') {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'en'; // English is the strict default language
  });

  const isRtl = language === 'ps' || language === 'fa';
  const t = translations[language] || translations.en;

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('agz_user_lang', lang);
    } catch {
      // Ignore localStorage error
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    if (isRtl) {
      root.classList.add('rtl-mode');
    } else {
      root.classList.remove('rtl-mode');
    }
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{language, setLanguage, isRtl, t}}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
