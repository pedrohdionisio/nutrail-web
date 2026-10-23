import Image from 'next/image';
import { Container } from 'presentation/components/Container/Container';
import { LINKS } from 'shared/constants/links';
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch';
import type { IFooterProps } from './FooterTypes';

export function Footer({ locale, dictionary }: IFooterProps) {
  const columns = [
    {
      title: dictionary.footer.product,
      links: [
        { href: '#how-it-works', label: dictionary.nav.howItWorks },
        { href: '#calculator', label: dictionary.nav.calculator },
        { href: '#engineering', label: dictionary.nav.engineering },
        { href: '#faq', label: dictionary.nav.faq }
      ]
    },
    {
      title: dictionary.footer.repositories,
      links: [
        { href: LINKS.product, label: 'nutrail' },
        { href: LINKS.api, label: 'nutrail-api' },
        { href: LINKS.app, label: 'nutrail-app' },
        { href: LINKS.web, label: 'nutrail-web' }
      ]
    },
    {
      title: dictionary.footer.author,
      links: [{ href: LINKS.linkedin, label: 'LinkedIn' }]
    }
  ];

  return (
    <footer className='md:rounded-t-shell rounded-t-[32px] bg-lime-900 py-14 text-white md:py-20'>
      <Container className='flex flex-col gap-14'>
        <div className='grid grid-cols-2 gap-10 md:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))]'>
          <div className='col-span-2 flex flex-col gap-4 md:col-span-1'>
            <Image alt='Nutrail' height={34} src='/logo.svg' width={118} />
            <p className='text-body max-w-[320px] text-white/70'>{dictionary.footer.tagline}</p>
          </div>

          {columns.map((column) => (
            <div className='flex flex-col gap-4' key={column.title}>
              <h2 className='text-body md:text-subheading font-bold'>{column.title}</h2>
              <ul className='flex flex-col gap-3'>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      className='text-body font-medium opacity-70 transition-opacity hover:opacity-100'
                      href={link.href}
                      {...(link.href.startsWith('http') && {
                        rel: 'noopener noreferrer',
                        target: '_blank'
                      })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex flex-col-reverse items-start justify-between gap-6 border-t border-white/15 pt-8 md:flex-row md:items-center'>
          <p className='text-body-sm text-white/60'>
            {dictionary.footer.madeBy} · {dictionary.footer.rights}
          </p>
          <LanguageSwitch dictionary={dictionary.language} locale={locale} tone='dark' />
        </div>
      </Container>
    </footer>
  );
}
