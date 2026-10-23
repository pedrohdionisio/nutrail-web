import { Calculator } from './components/Calculator/Calculator';
import { Engineering } from './components/Engineering/Engineering';
import { Faq } from './components/Faq/Faq';
import { FinalCta } from './components/FinalCta/FinalCta';
import { Footer } from './components/Footer/Footer';
import { Gestures } from './components/Gestures/Gestures';
import { Hero } from './components/Hero/Hero';
import { RunIt } from './components/RunIt/RunIt';
import type { IHomeProps } from './HomeTypes';

export function Home({ locale, dictionary }: IHomeProps) {
  return (
    <>
      <Hero dictionary={dictionary} locale={locale} />

      <main>
        <Gestures dictionary={dictionary.gestures} />
        <RunIt dictionary={dictionary.runIt} />
        <Calculator dictionary={dictionary.calculator} locale={locale} />
        <Engineering dictionary={dictionary.engineering} />
        <Faq dictionary={dictionary.faq} />
        <FinalCta dictionary={dictionary.finalCta} />
      </main>

      <Footer dictionary={dictionary} locale={locale} />
    </>
  );
}
