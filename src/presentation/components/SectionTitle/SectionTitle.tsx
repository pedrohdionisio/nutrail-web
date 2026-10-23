import { cn } from 'shared/utils/cn';
import type { ISectionTitleProps } from './SectionTitleTypes';

export function SectionTitle({
  accent,
  prefix,
  suffix,
  tone = 'light',
  size = 'heading',
  className
}: ISectionTitleProps) {
  return (
    <h2
      className={cn(
        'text-[32px] leading-[1.15] font-bold tracking-[-0.05em] text-balance',
        size === 'display' ? 'md:text-display' : 'md:text-heading',
        tone === 'light' ? 'text-lime-900' : 'text-white',
        className
      )}
    >
      {prefix && `${prefix} `}
      <span className={tone === 'light' ? 'text-lime-700' : 'text-lime-500'}>{accent}</span>
      {suffix && ` ${suffix}`}
    </h2>
  );
}
