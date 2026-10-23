import { Bookmark, Camera, Keyboard, Mic } from 'lucide-react';
import { Container } from 'presentation/components/Container/Container';
import { SectionTitle } from 'presentation/components/SectionTitle/SectionTitle';
import type { IGesturesProps } from './GesturesTypes';

const GESTURES = [
  { id: 'PICTURE', Icon: Camera },
  { id: 'VOICE', Icon: Mic },
  { id: 'TEXT', Icon: Keyboard },
  { id: 'SAVED', Icon: Bookmark }
] as const;

export function Gestures({ dictionary }: IGesturesProps) {
  return (
    <section className='scroll-mt-6 py-24 md:py-40' id='how-it-works'>
      <Container className='flex flex-col items-center gap-6 text-center'>
        <SectionTitle
          accent={dictionary.titleAccent}
          className='max-w-[820px]'
          prefix={dictionary.titlePrefix}
          size='display'
        />

        <p className='text-lead max-w-[640px] text-gray-700'>{dictionary.description}</p>

        <ul className='mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 md:gap-8 lg:grid-cols-4'>
          {GESTURES.map(({ id, Icon }) => (
            <li
              className='group rounded-card shadow-line ease-out-soft hover:shadow-lift flex flex-col items-center gap-6 bg-white px-6 py-10 transition-shadow duration-300 md:py-12'
              key={id}
            >
              <span className='ease-out-soft flex size-20 items-center justify-center rounded-3xl bg-lime-100 text-lime-700 transition-transform duration-300 group-hover:scale-[1.06] group-hover:-rotate-3'>
                <Icon className='size-9' strokeWidth={2} />
              </span>

              <div className='flex flex-col gap-2'>
                <h3 className='text-subheading font-semibold text-lime-900'>
                  {dictionary.items[id].title}
                </h3>
                <p className='text-body-sm text-gray-700'>{dictionary.items[id].description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
