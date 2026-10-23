import { DEFAULT_LOCALE, isLocale, type Locale } from './locales';

export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return DEFAULT_LOCALE;
  }

  const languages = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag = '', ...params] = part.trim().split(';');
      const quality = params.find((param) => param.trim().startsWith('q='));

      return {
        language: tag.toLowerCase().split('-')[0] ?? '',
        quality: quality ? Number(quality.trim().slice(2)) : 1
      };
    })
    .sort((first, second) => second.quality - first.quality);

  const match = languages.find(({ language }) => isLocale(language));

  return match && isLocale(match.language) ? match.language : DEFAULT_LOCALE;
}
