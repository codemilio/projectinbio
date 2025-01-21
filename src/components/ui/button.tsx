import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/utils/cn';

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button 
      {...props} 
      className={cn('rounded-xl p-2 text-white font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70',
        variant === 'primary' && 'bg-accent-purple',
        variant === 'secondary' && 'bg-background-tertiary',
        variant === 'ghost' && 'border-border-primary',
        props.className
      )}
    >
      {children}
    </button>
  );
}