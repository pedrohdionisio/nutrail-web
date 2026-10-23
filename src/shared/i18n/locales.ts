export const LOCALES = ['en', 'pt'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  pt: 'pt-BR'
};

export function isLocale(value: string): value is Locale {
  return LOCALES.some((locale) => locale === value);
}
