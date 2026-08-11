import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CONTENT, Lang, SiteContent } from './data/content';
import { detectCountry, langFromCountry, readCachedCountry } from './geo';

const STORAGE_KEY = 'wt-lang';

interface LanguageValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Copy for the active language. */
  t: SiteContent;
}

const LanguageContext = createContext<LanguageValue | null>(null);

const isLang = (value: unknown): value is Lang => value === 'nl' || value === 'de';

/** `?lang=de` overrides everything else — handy for testing and for campaign links. */
const readLangFromUrl = (): Lang | null => {
  const param = new URLSearchParams(window.location.search).get('lang')?.toLowerCase();
  return isLang(param) ? param : null;
};

const readStoredLang = (): Lang | null => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLang(stored) ? stored : null;
  } catch {
    return null;
  }
};

/**
 * The language shown synchronously on first paint. Dutch is always the
 * starting point — German appears only for a visitor who explicitly asked for
 * it or whose IP was resolved to a German-speaking country. The browser's own
 * locale is deliberately ignored so a German-language browser in the
 * Netherlands still lands on the Dutch site.
 */
const readInitialLang = (): Lang => {
  if (typeof window === 'undefined') return 'nl';
  return (
    readLangFromUrl() ?? readStoredLang() ?? langFromCountry(readCachedCountry()) ?? 'nl'
  );
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(readInitialLang);
  // Set once the visitor picks a language themselves; geo detection must never
  // override that, including when the lookup resolves after their click.
  const chosenByUser = useRef(readStoredLang() !== null || readLangFromUrl() !== null);
  const t = CONTENT[lang];

  // Resolve the language from the visitor's IP on a first visit. The lookup is
  // async, so the site renders with the guess above and switches if it differs.
  useEffect(() => {
    if (chosenByUser.current) return;
    let cancelled = false;

    detectCountry().then((country) => {
      const detected = langFromCountry(country);
      if (cancelled || !detected || chosenByUser.current) return;
      setLangState(detected);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Keep the document in sync so the tab title, meta description and the
  // `lang` attribute all match the language on screen.
  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.metaTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.metaDescription);
  }, [t]);

  const setLang = (next: Lang) => {
    chosenByUser.current = true;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode): the choice still applies this visit.
    }
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = (): LanguageValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
};
