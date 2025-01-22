'use client'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import type { ComponentProps, DialogHTMLAttributes, ReactNode } from "react"
import { createPortal } from 'react-dom'

// Outra forma de fazer isso 
// type DialogRootProps = ComponentProps<'dialog'> & {
//   children: ReactNode
// }

type DialogRootProps = DialogHTMLAttributes<HTMLDialogElement> & {
  children: ReactNode
}


export function DialogRoot({ children, className, ...props }: DialogRootProps) {
  const [isOpen, setIsOpen] = useState(props.open)

  return (
    <>
      {isOpen &&
        createPortal(<div className="w-full h-screen absolute z-100 bg-[#242424]/30 backdrop-blur-sm flex justify-center items-center">
          <dialog
            className={cn('bg-black rounded-3xl w-[40rem] h-1/2 p-8 relative', className)}
            {...props}
          >
            {children}
          </dialog>
        </div>, document.getElementById('dialog-root') as HTMLElement)
      }
    </>
  )
}