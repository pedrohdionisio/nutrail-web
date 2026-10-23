import type { Dictionary } from 'shared/i18n/getDictionary';
import type { Locale } from 'shared/i18n/locales';

export interface IHomeProps {
  locale: Locale;
  dictionary: Dictionary;
}
