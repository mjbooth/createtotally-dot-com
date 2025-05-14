import { cva } from 'class-variance-authority';

export const ghostBoldButton = cva({
  base: {
    background: 'transparent',
    fontWeight: '500',
    transition: 'font-weight 0.2s',
    _hover: {
      fontWeight: '800',
    },
  },
  variants: {
    size: {
      sm: { fontSize: 'sm', px: '3', py: '1' },
      md: { fontSize: 'md', px: '4', py: '2' },
      lg: { fontSize: 'lg', px: '5', py: '3' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});