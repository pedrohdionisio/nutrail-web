import Image from 'next/image';
import { LinkButton } from 'presentation/components/LinkButton/LinkButton';
import { LINKS } from 'shared/constants/links';
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch';
import type { INavbarProps } from './NavbarTypes';

export function Navbar({ locale, dictionary }: INavbarProps) {
  const sections = [
    { href: '#how-it-works', label: dictionary.nav.howItWorks },
    { href: '#calculator', label: dictionary.nav.calculator },
    { href: '#engineering', label: dictionary.nav.engineering },
    { href: '#faq', label: dictionary.nav.faq }
  ];

  return (
    <div className='relative z-20 mx-auto flex h-16 max-w-[1018px] items-center justify-between gap-4 rounded-full bg-white/50 pr-2 pl-5 backdrop-blur-[18px] md:h-[72px] md:pr-3 md:pl-6'>
      <a aria-label='Nutrail' href={`/${locale}`}>
        <Image alt='' height={30} priority src='/logo-dark.svg' width={104} />
      </a>

      <nav aria-label={dictionary.nav.label} className='hidden lg:block'>
        <ul className='flex gap-8'>
          {sections.map((section) => (
            <li key={section.href}>
              <a
                className='text-body-sm text-gray-700 transition-colors hover:text-lime-900'
                href={section.href}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex items-center gap-2 md:gap-3'>
        <LanguageSwitch dictionary={dictionary.language} locale={locale} />

        <LinkButton className='hidden sm:inline-flex' href={LINKS.product} size='sm' withArrow>
          {dictionary.nav.github}
        </LinkButton>
      </div>
    </div>
  );
}
