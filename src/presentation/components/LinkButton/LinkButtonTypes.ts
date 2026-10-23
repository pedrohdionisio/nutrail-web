import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import type { linkButtonVariants } from './linkButtonVariants';

export interface ILinkButtonProps extends VariantProps<typeof linkButtonVariants> {
  href: string;
  children: ReactNode;
  withArrow?: boolean;
  className?: string;
}
