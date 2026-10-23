import { Plus } from 'lucide-react';
import { Container } from 'presentation/components/Container/Container';
import { LinkButton } from 'presentation/components/LinkButton/LinkButton';
import { LINKS } from 'shared/constants/links';
import type { IFaqProps } from './FaqTypes';

const QUESTIONS = ['STORES', 'COST', 'AI', 'LANGUAGE', 'ACCURACY', 'CODE'] as const;

export function Faq({ dictionary }: IFaqProps) {
  return (
    <section className='scroll-mt-6 py-24 md:py-28' id='faq'>
      <Container className='grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,700px)] lg:justify-between'>
        <div className='flex flex-col items-start gap-4'>
          <h2 className='md:text-heading text-[32px] leading-[1.15] font-bold tracking-[-0.05em] text-balance text-lime-900'>
            {dictionary.title}
          </h2>
          <p className='text-lead text-gray-700'>{dictionary.description}</p>
          <LinkButton className='mt-2' href={LINKS.product} withArrow>
            {dictionary.action}
          </LinkButton>
        </div>

        <div className='flex flex-col gap-3'>
          {QUESTIONS.map((question) => (
            <details className='group shadow-line rounded-2xl bg-white' key={question}>
              <summary className='text-body md:text-subheading flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 font-semibold tracking-[-0.03em] text-lime-900 md:px-8 md:py-6 [&::-webkit-details-marker]:hidden'>
                {dictionary.items[question].question}
                <Plus
                  className='ease-out-soft mt-0.5 size-5 shrink-0 text-gray-600 transition-transform duration-200 group-open:rotate-45'
                  strokeWidth={2.5}
                />
              </summary>
              <p className='text-body -mt-2 px-5 pb-5 text-gray-700 md:px-8 md:pb-6'>
                {dictionary.items[question].answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
