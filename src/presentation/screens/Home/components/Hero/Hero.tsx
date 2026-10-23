import Image from 'next/image';
import { LinkButton } from 'presentation/components/LinkButton/LinkButton';
import { LINKS } from 'shared/constants/links';
import { HeroSentence } from '../HeroSentence/HeroSentence';
import { Navbar } from '../Navbar/Navbar';
import type { IHeroProps } from './HeroTypes';

export function Hero({ locale, dictionary }: IHeroProps) {
  return (
    <header className='p-2 md:p-4 lg:p-6'>
      <div className='bg-hero md:rounded-shell relative overflow-hidden rounded-[32px] px-2 pt-2 md:px-6 md:pt-4'>
        <Navbar dictionary={dictionary} locale={locale} />

        <div className='mx-auto flex max-w-[1080px] flex-col items-center px-3 pt-12 text-center md:pt-20'>
          <HeroSentence dictionary={dictionary.hero} locale={locale} />

          <p className='text-lead mt-6 max-w-[640px] text-gray-700'>
            {dictionary.hero.description}
          </p>

          <div className='mt-8 flex flex-col items-center gap-3 sm:flex-row'>
            <LinkButton href={LINKS.product} size='lg' withArrow>
              {dictionary.hero.primaryAction}
            </LinkButton>

            <LinkButton href={LINKS.runApi} size='lg' variant='secondary'>
              {dictionary.hero.secondaryAction}
            </LinkButton>
          </div>

          <p className='text-body-xs md:text-body-sm mt-4 text-gray-700'>
            {dictionary.hero.microcopy}
          </p>
        </div>

        <div className='relative mx-auto mt-12 w-full max-w-[320px] md:mt-16 md:max-w-[360px]'>
          <p
            aria-hidden='true'
            className='font-hand text-subheading absolute top-6 -right-44 hidden w-40 -rotate-[10deg] leading-snug tracking-normal text-lime-700 lg:block'
          >
            {dictionary.hero.annotation}
            <svg
              aria-hidden='true'
              className='mt-1 ml-2 h-14 w-20 text-lime-700'
              fill='none'
              viewBox='0 0 80 56'
            >
              <path
                d='M70 4C58 26 36 40 10 46'
                stroke='currentColor'
                strokeLinecap='round'
                strokeWidth='2.5'
              />
              <path
                d='M20 36 9 46l13 5'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2.5'
              />
            </svg>
          </p>

          <div className='shadow-pop h-[420px] overflow-hidden rounded-t-[44px] border-8 border-b-0 border-white bg-white md:h-[520px]'>
            <Image
              alt={dictionary.hero.screenshotAlt}
              className='rounded-t-[36px] object-cover object-top'
              height={2391}
              priority
              sizes='(min-width: 768px) 344px, 304px'
              src='/media/home.png'
              width={1170}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
