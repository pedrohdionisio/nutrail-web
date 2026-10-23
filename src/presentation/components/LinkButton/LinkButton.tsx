import { ArrowRight } from 'lucide-react';
import { cn } from 'shared/utils/cn';
import type { ILinkButtonProps } from './LinkButtonTypes';
import { linkButtonVariants } from './linkButtonVariants';

export function LinkButton({
  href,
  children,
  variant,
  size,
  withArrow = false,
  className
}: ILinkButtonProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      className={cn(linkButtonVariants({ variant, size }), className)}
      href={href}
      {...(isExternal && { rel: 'noopener noreferrer', target: '_blank' })}
    >
      {children}

      {withArrow && (
        <ArrowRight
          className='ease-out-soft size-4 transition-transform duration-200 group-hover:translate-x-1'
          strokeWidth={2.5}
        />
      )}
    </a>
  );
}
