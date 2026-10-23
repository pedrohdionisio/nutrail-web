import type { Dictionary } from 'shared/i18n/getDictionary';
import type { Locale } from 'shared/i18n/locales';

export interface IHeroProps {
  locale: Locale;
  dictionary: Pick<Dictionary, 'hero' | 'nav' | 'language'>;
}
