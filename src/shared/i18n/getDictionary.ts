import { enUS } from './dictionaries/enUS';
import { ptBR } from './dictionaries/ptBR';
import type { Locale } from './locales';

const DICTIONARIES = {
  en: enUS,
  pt: ptBR
} satisfies Record<Locale, typeof ptBR>;

export type Dictionary = typeof ptBR;

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
