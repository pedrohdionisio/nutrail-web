'use client';

import { SectionTitle } from 'presentation/components/SectionTitle/SectionTitle';
import { MACROS } from 'shared/constants/mealExamples';
import { ACTIVITY_LEVELS, GENDERS, GOALS } from 'shared/constants/profile';
import { HTML_LANG } from 'shared/i18n/locales';
import type { ICalculatorProps, IMeasureField } from './CalculatorTypes';
import { SegmentedControl } from './components/SegmentedControl/SegmentedControl';
import { useCalculatorController } from './useCalculatorController';

export function Calculator({ locale, dictionary }: ICalculatorProps) {
  const {
    goal,
    gender,
    activityLevel,
    measures,
    limits,
    hasResult,
    result,
    handleChangeGoal,
    handleChangeGender,
    handleChangeActivityLevel,
    handleChangeMeasure,
    handleSubmit
  } = useCalculatorController();
  const formatNumber = new Intl.NumberFormat(HTML_LANG[locale]);
  const fields: IMeasureField[] = [
    { name: 'age', label: dictionary.ageLabel, unit: dictionary.ageUnit, ...limits.age },
    { name: 'height', label: dictionary.heightLabel, unit: 'cm', ...limits.height },
    { name: 'weight', label: dictionary.weightLabel, unit: 'kg', ...limits.weight }
  ];

  return (
    <section className='scroll-mt-6 p-2 md:p-4 lg:p-6' id='calculator'>
      <div className='bg-calculator md:rounded-shell rounded-[32px] px-4 py-16 md:px-6 md:py-28'>
        <div className='mx-auto flex max-w-[656px] flex-col gap-10 md:gap-12'>
          <div className='flex flex-col gap-4 text-center'>
            <SectionTitle
              accent={dictionary.titleAccent}
              prefix={dictionary.titlePrefix}
              tone='dark'
            />
            <p className='text-lead text-white/70'>{dictionary.description}</p>
          </div>

          <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
            <SegmentedControl
              legend={dictionary.goalLabel}
              name='goal'
              onChange={handleChangeGoal}
              options={GOALS.map((value) => ({ value, label: dictionary.goals[value] }))}
              value={goal}
            />

            <SegmentedControl
              legend={dictionary.genderLabel}
              name='gender'
              onChange={handleChangeGender}
              options={GENDERS.map((value) => ({ value, label: dictionary.genders[value] }))}
              value={gender}
            />

            <div className='grid grid-cols-3 gap-2 md:gap-4'>
              {fields.map((field) => (
                <label
                  className='shadow-line-light flex flex-col gap-1 rounded-xl bg-white/10 px-3 py-3 transition-shadow focus-within:shadow-[inset_0_0_0_2px_var(--color-lime-500)] md:px-5 md:py-4'
                  key={field.name}
                >
                  <span className='text-body-xs md:text-body-sm text-white/70'>{field.label}</span>
                  <span className='flex items-baseline gap-1'>
                    <input
                      className='w-full min-w-0 bg-transparent text-[24px] font-bold text-white tabular-nums outline-none md:text-[32px]'
                      inputMode='numeric'
                      max={field.max}
                      min={field.min}
                      onChange={(event) =>
                        handleChangeMeasure({ name: field.name, value: event.target.value })
                      }
                      type='number'
                      value={measures[field.name]}
                    />
                    <span className='text-body-sm text-white/60'>{field.unit}</span>
                  </span>
                </label>
              ))}
            </div>

            <label className='flex flex-col gap-2'>
              <span className='text-body-sm text-white/70'>{dictionary.activityLabel}</span>
              <select
                className='text-body shadow-line-light h-14 cursor-pointer appearance-none rounded-xl bg-[length:16px] bg-white/10 bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%2024%2024%27%20fill%3D%27none%27%20stroke%3D%27white%27%20stroke-width%3D%273%27%3E%3Cpath%20d%3D%27m6%209%206%206%206-6%27/%3E%3C/svg%3E")] bg-[right_20px_center] bg-no-repeat px-5 font-semibold text-white outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--color-lime-500)]'
                onChange={(event) => handleChangeActivityLevel(event.target.value)}
                value={activityLevel}
              >
                {ACTIVITY_LEVELS.map((level) => (
                  <option className='text-lime-900' key={level} value={level}>
                    {dictionary.activityLevels[level]}
                  </option>
                ))}
              </select>
            </label>
          </form>

          <output
            aria-live='polite'
            className='shadow-line-light flex flex-col gap-6 rounded-xl bg-white/15 p-6 md:p-8'
          >
            <span className='flex flex-col gap-1'>
              <span className='text-body-sm text-white/70'>{dictionary.resultTitle}</span>
              <span className='flex items-baseline gap-2'>
                <span className='text-[48px] leading-none font-bold tracking-[-0.04em] text-lime-500 tabular-nums md:text-[64px]'>
                  {hasResult ? formatNumber.format(result.calories) : '—'}
                </span>
                <span className='text-body text-white/70'>{dictionary.caloriesUnit}</span>
              </span>
            </span>

            <span className='grid grid-cols-3 gap-2 border-t border-white/15 pt-6'>
              {MACROS.map((macro) => (
                <span className='flex flex-col gap-1' key={macro}>
                  <span className='text-body-xs md:text-body-sm text-white/70'>
                    {dictionary.macros[macro]}
                  </span>
                  <span className='text-subheading font-semibold text-white tabular-nums'>
                    {hasResult ? `${formatNumber.format(result[macro])} g` : '—'}
                  </span>
                </span>
              ))}
            </span>
          </output>

          <p className='text-body-xs text-center text-white/60'>{dictionary.footnote}</p>
        </div>
      </div>
    </section>
  );
}
