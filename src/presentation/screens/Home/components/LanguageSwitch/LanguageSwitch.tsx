import { HTML_LANG, LOCALES } from 'shared/i18n/locales';
import { cn } from 'shared/utils/cn';
import type { ILanguageSwitchProps } from './LanguageSwitchTypes';

export function LanguageSwitch({ locale, dictionary, tone = 'light' }: ILanguageSwitchProps) {
  return (
    <nav
      aria-label={dictionary.label}
      className={cn(
        'flex items-center rounded-full p-1',
        tone === 'light' ? 'shadow-line bg-white/70' : 'shadow-line-light bg-white/10'
      )}
    >
      {LOCALES.map((option) => (
        <a
          aria-current={option === locale ? 'page' : undefined}
          className={cn(
            'text-body-xs rounded-full px-3 py-1 font-semibold uppercase transition-colors',
            option === locale
              ? tone === 'light'
                ? 'bg-lime-900 text-white'
                : 'bg-white text-lime-900'
              : tone === 'light'
                ? 'text-gray-700 hover:text-lime-900'
                : 'text-white/70 hover:text-white'
          )}
          href={`/${option}`}
          hrefLang={HTML_LANG[option]}
          key={option}
          lang={HTML_LANG[option]}
          title={dictionary[option]}
        >
          {option}
        </a>
      ))}
    </nav>
  );
}
