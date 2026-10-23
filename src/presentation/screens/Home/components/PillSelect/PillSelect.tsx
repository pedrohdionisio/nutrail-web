'use client';

import { Check, ChevronDown } from 'lucide-react';
import { cn } from 'shared/utils/cn';
import type { IPillSelectProps } from './PillSelectTypes';
import { usePillSelectController } from './usePillSelectController';

export function PillSelect<TValue extends string>({
  label,
  value,
  options,
  onChange,
  className
}: IPillSelectProps<TValue>) {
  const { isOpen, containerRef, triggerRef, listId, handleToggle, handleSelect } =
    usePillSelectController(onChange);
  const selected = options.find((option) => option.value === value);

  return (
    <span className='relative inline-block' ref={containerRef}>
      <button
        aria-controls={listId}
        aria-expanded={isOpen}
        aria-label={`${label}: ${selected?.label ?? ''}`}
        className={cn(
          'ease-out-soft inline-flex cursor-pointer items-center gap-1 rounded-full px-3.5 align-baseline text-[0.92em] leading-[1.3] transition-[transform,box-shadow] duration-200 hover:-translate-y-px',
          isOpen && 'shadow-[0_0_0_3px_white,0_0_0_5px_currentColor]',
          className
        )}
        onClick={handleToggle}
        ref={triggerRef}
        type='button'
      >
        {selected?.label}
        <ChevronDown
          className={cn('size-[0.5em] transition-transform duration-200', isOpen && 'rotate-180')}
          strokeWidth={3}
        />
      </button>

      {isOpen && (
        <ul
          aria-label={label}
          className='text-body shadow-pop absolute top-full left-1/2 z-30 mt-3 w-max min-w-56 -translate-x-1/2 rounded-2xl bg-white p-2 text-left font-medium tracking-[-0.02em] text-lime-900'
          id={listId}
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                aria-current={option.value === value ? 'true' : undefined}
                className='flex w-full cursor-pointer items-center justify-between gap-6 rounded-xl px-3.5 py-2.5 text-left transition-colors hover:bg-gray-200'
                onClick={() => handleSelect(option.value)}
                type='button'
              >
                {option.label}
                {option.value === value && (
                  <Check className='size-4 text-lime-700' strokeWidth={3} />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </span>
  );
}
