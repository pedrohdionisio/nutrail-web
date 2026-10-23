import { cn } from 'shared/utils/cn';
import type { ISegmentedControlProps } from './SegmentedControlTypes';

export function SegmentedControl<TValue extends string>({
  name,
  legend,
  value,
  options,
  onChange
}: ISegmentedControlProps<TValue>) {
  return (
    <fieldset className='flex flex-col gap-2'>
      <legend className='text-body-sm mb-2 text-white/70'>{legend}</legend>

      <div
        className='shadow-line-light grid gap-1 rounded-xl bg-white/10 p-1.5'
        style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
      >
        {options.map((option) => (
          <label className='relative' key={option.value}>
            <input
              checked={option.value === value}
              className='peer sr-only'
              name={name}
              onChange={() => onChange(option.value)}
              type='radio'
              value={option.value}
            />
            <span
              className={cn(
                'text-body-sm ease-out-soft md:text-body flex h-11 cursor-pointer items-center justify-center rounded-lg px-2 text-center font-semibold transition-colors duration-200 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-lime-500',
                option.value === value ? 'bg-white text-lime-900' : 'text-white/80 hover:text-white'
              )}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
