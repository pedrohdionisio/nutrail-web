import { notFound } from 'next/navigation';
import { Home } from 'presentation/screens/Home/Home';
import { getDictionary } from 'shared/i18n/getDictionary';
import { isLocale } from 'shared/i18n/locales';

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <Home dictionary={getDictionary(lang)} locale={lang} />;
}
