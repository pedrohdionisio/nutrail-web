import { Container } from 'presentation/components/Container/Container';
import { LinkButton } from 'presentation/components/LinkButton/LinkButton';
import { LoopVideo } from 'presentation/components/LoopVideo/LoopVideo';
import { SectionTitle } from 'presentation/components/SectionTitle/SectionTitle';
import { CLONE_COMMAND, LINKS } from 'shared/constants/links';
import { CopyCommand } from '../CopyCommand/CopyCommand';
import type { IRunItProps } from './RunItTypes';

export function RunIt({ dictionary }: IRunItProps) {
  return (
    <section className='pb-24 md:pb-28'>
      <Container className='flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-24'>
        <figure className='flex w-full flex-col items-center gap-4 lg:w-1/2'>
          <div className='rounded-card flex w-full justify-center bg-gray-200 px-6 pt-10 md:px-12 md:pt-14'>
            <div className='shadow-pop w-full max-w-[300px] overflow-hidden rounded-t-[36px] border-8 border-b-0 border-white bg-white'>
              <LoopVideo
                className='block aspect-[720/1472] w-full rounded-t-[28px] object-cover'
                label={dictionary.videoLabel}
                poster='/media/meal-by-picture-poster.jpg'
                src='/media/meal-by-picture.mp4'
              />
            </div>
          </div>
          <figcaption className='text-body-sm text-gray-700'>{dictionary.caption}</figcaption>
        </figure>

        <div className='flex w-full flex-col gap-6 lg:w-1/2'>
          <SectionTitle accent={dictionary.titleAccent} suffix={dictionary.titleSuffix} />

          <p className='text-lead text-gray-700'>{dictionary.description}</p>

          <CopyCommand
            command={CLONE_COMMAND}
            copiedLabel={dictionary.copied}
            copyLabel={dictionary.copy}
          />

          <div className='flex flex-col gap-3 sm:flex-row'>
            <LinkButton href={LINKS.runApi} withArrow>
              {dictionary.primaryAction}
            </LinkButton>
            <LinkButton href={LINKS.architecture} variant='secondary' withArrow>
              {dictionary.secondaryAction}
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
