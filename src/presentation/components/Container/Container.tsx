import { cn } from 'shared/utils/cn';
import type { IContainerProps } from './ContainerTypes';

export function Container({ children, className }: IContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[1264px] px-5 md:px-6', className)}>{children}</div>
  );
}
