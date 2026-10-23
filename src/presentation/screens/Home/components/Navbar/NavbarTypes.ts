import type { Dictionary } from 'shared/i18n/getDictionary';
import type { Locale } from 'shared/i18n/locales';

export interface INavbarProps {
  locale: Locale;
  dictionary: Pick<Dictionary, 'nav' | 'language'>;
}
