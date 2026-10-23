import type { Metadata } from 'next';
import { Gloria_Hallelujah, Host_Grotesk } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getDictionary } from 'shared/i18n/getDictionary';
import { HTML_LANG, isLocale, LOCALES } from 'shared/i18n/locales';
import '../../styles/global.css';

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-host-grotesk'
});

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gloria-hallelujah'
});

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const { metadata } = getDictionary(lang);

  return {
    metadataBase: new URL('https://nutrail.app'),
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(LOCALES.map((locale) => [HTML_LANG[locale], `/${locale}`]))
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `/${lang}`,
      siteName: 'Nutrail',
      locale: HTML_LANG[lang],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description
    }
  };
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <html className={`${hostGrotesk.variable} ${gloriaHallelujah.variable}`} lang={HTML_LANG[lang]}>
      <body className='bg-white font-sans text-lime-900 antialiased'>{children}</body>
    </html>
  );
}
