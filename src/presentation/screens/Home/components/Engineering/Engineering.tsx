import { Bot, Cloud, FlaskConical, Layers, RefreshCcw, Rocket } from 'lucide-react';
import { Container } from 'presentation/components/Container/Container';
import { LinkButton } from 'presentation/components/LinkButton/LinkButton';
import { SectionTitle } from 'presentation/components/SectionTitle/SectionTitle';
import { LINKS } from 'shared/constants/links';
import type { IEngineeringProps } from './EngineeringTypes';

const ITEMS = [
  { id: 'SERVERLESS', Icon: Cloud },
  { id: 'ARCHITECTURE', Icon: Layers },
  { id: 'PIPELINE', Icon: RefreshCcw },
  { id: 'AI', Icon: Bot },
  { id: 'DELIVERY', Icon: Rocket },
  { id: 'TESTS', Icon: FlaskConical }
] as const;

export function Engineering({ dictionary }: IEngineeringProps) {
  return (
    <section className='scroll-mt-6 py-24 md:py-32' id='engineering'>
      <Container className='flex flex-col gap-12 md:gap-16'>
        <div className='flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end'>
          <div className='flex max-w-[640px] flex-col gap-4'>
            <SectionTitle accent={dictionary.titleAccent} prefix={dictionary.titlePrefix} />
            <p className='text-lead text-gray-700'>{dictionary.description}</p>
          </div>

          <LinkButton href={LINKS.architecture} variant='secondary' withArrow>
            {dictionary.action}
          </LinkButton>
        </div>

        <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
          {ITEMS.map(({ id, Icon }) => (
            <li
              className='rounded-card shadow-line ease-out-soft hover:shadow-lift flex flex-col gap-4 bg-white p-6 transition-shadow duration-300 md:p-8'
              key={id}
            >
              <span className='flex size-12 items-center justify-center rounded-2xl bg-lime-100 text-lime-700'>
                <Icon className='size-6' strokeWidth={2.25} />
              </span>
              <h3 className='text-subheading font-semibold text-lime-900'>
                {dictionary.items[id].title}
              </h3>
              <p className='text-body-sm md:text-body text-gray-700'>
                {dictionary.items[id].description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
