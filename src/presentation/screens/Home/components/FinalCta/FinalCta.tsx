import { Container } from 'presentation/components/Container/Container';
import { LinkButton } from 'presentation/components/LinkButton/LinkButton';
import { SectionTitle } from 'presentation/components/SectionTitle/SectionTitle';
import { LINKS } from 'shared/constants/links';
import type { IFinalCtaProps } from './FinalCtaTypes';

export function FinalCta({ dictionary }: IFinalCtaProps) {
  return (
    <section className='bg-cta-fade py-24 md:py-32'>
      <Container className='flex flex-col items-center gap-6 text-center'>
        <SectionTitle
          accent={dictionary.titleAccent}
          className='max-w-[760px]'
          prefix={dictionary.titlePrefix}
          size='display'
        />
        <p className='text-lead max-w-[560px] text-gray-700'>{dictionary.description}</p>
        <LinkButton href={LINKS.product} size='lg' withArrow>
          {dictionary.action}
        </LinkButton>
      </Container>
    </section>
  );
}
