import type { ComponentProps } from 'react'
import { cn } from '@/utils/cn';

type TextAreaProps = ComponentProps<'textarea'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Textarea({ ...props }: TextAreaProps) {
  return (
    <textarea 
      className={cn("w-full p-3 to-background-secondary text-white placeholder:text-content-placeholder rounded-xl border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary", props.className)} 
    />
  );
}