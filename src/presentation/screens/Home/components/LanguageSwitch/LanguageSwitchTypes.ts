import type { Dictionary } from 'shared/i18n/getDictionary';
import type { Locale } from 'shared/i18n/locales';

export interface ILanguageSwitchProps {
  locale: Locale;
  dictionary: Dictionary['language'];
  tone?: 'light' | 'dark';
}
