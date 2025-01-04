import type { ComponentProps, ReactNode } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button type='button' className='py-4 px-16 bg-accent-purple rounded-md'>
      { children }
    </button>
  );
}