import type { Dictionary } from 'shared/i18n/getDictionary';
import type { Locale } from 'shared/i18n/locales';

export interface ICalculatorProps {
  locale: Locale;
  dictionary: Dictionary['calculator'];
}

export interface IMeasureField {
  name: 'age' | 'height' | 'weight';
  label: string;
  unit: string;
  min: number;
  max: number;
}
