import { tv } from 'tailwind-variants';

export const type = {
  primary: 'text-white bg-zinc-800 hover:bg-red-800 focus:ring-zinc-500 dark:bg-zinc-800 dark:hover:bg-red-700 dark:focus:ring-zinc-500 dark:border-zinc-700',
  secondary: 'text-black bg-zinc-100 hover:bg-red-800 focus:ring-zinc-500 hover:text-white dark:border-zinc-600 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-600 dark:focus:ring-zinc-500',
  teritary: 'text-white bg-transparent border border-solid border-zinc-800 hover:bg-red-800 hover:border-red-800 focus:ring-zinc-500 focus:outline-none hover:text-white dark:border-zinc-600 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-600 dark:focus:ring-zinc-500'
}

export const size = {
  sm: 'text-sm px-6 py-1',
  md: 'text-base px-6 py-3', 
}

const button = tv({
  base: 'font-medium rounded-full px-5 py-2.5 focus:ring-4 cursor-pointer flex items-center justify-center',
  variants: {
    type: type,
    size: size,
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',    
  }
});

export const Button = ({children, type, size, className, ...props}) => {
  return (
    <button {...props} className={button({type: type, size: size, className})}>
      {children}
    </button>
  )
}