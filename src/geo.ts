/**
 * IP-based country lookup used to pick the site language on a first visit.
 * The site is served as a static bundle, so the lookup happens in the browser
 * against a public geo-IP endpoint and the result is cached in localStorage.
 */

import { Lang } from './data/content';

const COUNTRY_CACHE_KEY = 'wt-geo-country';
/** Re-check the visitor's country at most once a month. */
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const REQUEST_TIMEOUT_MS = 2500;

/**
 * Countries that get the German copy. Everything else falls back to Dutch,
 * which is the site's primary market.
 */
const GERMAN_COUNTRIES = new Set(['DE', 'AT', 'CH', 'LI', 'LU']);

/** ISO 3166-1 alpha-2 country code -> site language. */
export const langFromCountry = (country: string | null): Lang | null => {
  if (!country) return null;
  return GERMAN_COUNTRIES.has(country.toUpperCase()) ? 'de' : 'nl';
};

interface CachedCountry {
  country: string;
  at: number;
}

export const readCachedCountry = (): string | null => {
  try {
    const raw = window.localStorage.getItem(COUNTRY_CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw) as CachedCountry;
    if (!cached?.country || Date.now() - cached.at > CACHE_TTL_MS) return null;
    return cached.country;
  } catch {
    return null;
  }
};

const writeCachedCountry = (country: string) => {
  try {
    const payload: CachedCountry = { country, at: Date.now() };
    window.localStorage.setItem(COUNTRY_CACHE_KEY, JSON.stringify(payload));
  } catch {
    // Private mode / storage full: detection still works, just uncached.
  }
};

/**
 * Free, key-less endpoints that all send permissive CORS headers. They are
 * tried in order so a single provider being down or rate-limiting a visitor
 * does not break detection.
 */
const PROVIDERS: { url: string; parse: (body: string) => string | null }[] = [
  {
    url: 'https://get.geojs.io/v1/ip/country.json',
    parse: (body) => JSON.parse(body)?.country ?? null,
  },
  {
    url: 'https://ipapi.co/json/',
    parse: (body) => JSON.parse(body)?.country_code ?? null,
  },
  {
    url: 'https://ipwho.is/?fields=country_code',
    parse: (body) => JSON.parse(body)?.country_code ?? null,
  },
];

const fetchCountry = async (url: string, parse: (body: string) => string | null) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: controller.signal, cache: 'no-store' });
    if (!res.ok) return null;
    const country = parse(await res.text());
    // Guard against providers answering with an empty/unknown value.
    return typeof country === 'string' && /^[A-Za-z]{2}$/.test(country)
      ? country.toUpperCase()
      : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
};

/** Resolves the visitor's country code, or null when every provider fails. */
export const detectCountry = async (): Promise<string | null> => {
  const cached = readCachedCountry();
  if (cached) return cached;

  for (const provider of PROVIDERS) {
    const country = await fetchCountry(provider.url, provider.parse);
    if (country) {
      writeCachedCountry(country);
      return country;
    }
  }
  return null;
};
