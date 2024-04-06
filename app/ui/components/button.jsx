import { tv } from 'tailwind-variants';

const button = tv({
  base: 'font-medium rounded-lg px-5 py-2.5 focus:ring-4 cursor-pointer flex items-center',
  variants: {
    color: {
      primary: 'text-white bg-zinc-800 hover:bg-red-800 focus:ring-zinc-500 dark:bg-zinc-800 dark:hover:bg-red-700 dark:focus:ring-zinc-500 dark:border-zinc-700',
      secondary: 'text-white bg-transparent border border-solid border-zinc-800 hover:bg-red-800 hover:border-red-800 focus:ring-zinc-500 focus:outline-none hover:text-white dark:border-zinc-600 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-600 dark:focus:ring-zinc-500'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
    }
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1'
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
});
 
const Button = ({children}) => (
  <button className={button({ size: 'sm', color: 'secondary' })}>
    {children}
  </button>
);

export default Button;