import type { ComponentProps } from 'react'
import { cn } from '@/utils/cn';

type InputProps = ComponentProps<'input'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Input({ ...props }: InputProps) {
  return (
    <input 
      {...props} 
      className={cn("w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary", props.className)} 
    />
  );
}