'use client';

import { MACROS, MEAL_EXAMPLES, MEAL_METHODS } from 'shared/constants/mealExamples';
import { HTML_LANG } from 'shared/i18n/locales';
import { PillSelect } from '../PillSelect/PillSelect';
import type { IHeroSentenceProps } from './HeroSentenceTypes';
import { useHeroSentenceController } from './useHeroSentenceController';

export function HeroSentence({ locale, dictionary }: IHeroSentenceProps) {
  const { method, dishId, calories, macros, handleChangeMethod, handleChangeDish } =
    useHeroSentenceController();
  const formatNumber = new Intl.NumberFormat(HTML_LANG[locale]);

  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='md:text-hero max-w-[1080px] text-[34px] leading-[1.3] font-bold tracking-[-0.04em] text-balance text-lime-900'>
        {dictionary.sentenceStart}{' '}
        <PillSelect
          className='bg-support-teal/15 text-support-teal'
          label={dictionary.methodLabel}
          onChange={handleChangeMethod}
          options={MEAL_METHODS.map((value) => ({ value, label: dictionary.methods[value] }))}
          value={method}
        />{' '}
        <PillSelect
          className='bg-support-yellow/35 text-lime-900'
          label={dictionary.dishLabel}
          onChange={handleChangeDish}
          options={MEAL_EXAMPLES.map(({ id }) => ({ value: id, label: dictionary.dishes[id] }))}
          value={dishId}
        />
        <br />
        {dictionary.resultPrefix}{' '}
        <span aria-live='polite' className='text-lime-700 tabular-nums'>
          {formatNumber.format(calories)} kcal
        </span>
      </h1>

      <ul className='flex flex-wrap justify-center gap-2'>
        {MACROS.map((macro) => (
          <li
            className='text-body-sm shadow-line rounded-full bg-white/70 px-3 py-1 font-medium text-lime-900 tabular-nums'
            key={macro}
          >
            {formatNumber.format(macros[macro])} g {dictionary.macros[macro]}
          </li>
        ))}
      </ul>
    </div>
  );
}
