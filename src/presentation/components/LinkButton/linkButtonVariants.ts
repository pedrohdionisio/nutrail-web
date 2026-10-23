import { cva } from 'class-variance-authority';

export const linkButtonVariants = cva(
  'group ease-out-soft inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[background-color,box-shadow] duration-200',
  {
    variants: {
      variant: {
        primary: 'bg-lime-500 text-lime-900 hover:bg-lime-600',
        secondary: 'shadow-line bg-white text-lime-900 hover:bg-gray-200',
        inverse: 'shadow-line-light bg-white/10 text-white hover:bg-white/15'
      },
      size: {
        sm: 'text-body-sm h-10 px-4',
        md: 'text-body h-12 px-4',
        lg: 'text-body md:text-subheading h-12 px-5 md:h-14'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);
