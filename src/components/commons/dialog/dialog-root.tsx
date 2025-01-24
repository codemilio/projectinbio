'use client'

import { cn } from '@/utils/cn'
import { createPortal } from 'react-dom'
import type { ComponentProps, ReactNode } from "react"
import { createContext, useState, useContext } from "react"

type DialogContextProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

type DialogRootProps = ComponentProps<'dialog'> & {
  children: ReactNode
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined)

export function DialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = (open: boolean) => setIsOpen(open)
  console.log(isOpen)
  
  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen: handleOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

export function useDialogContext() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialogContext must be used within a DialogRoot');
  }
  return context;
}

export function DialogRoot({ children, className, ...props }: DialogRootProps) {
  const { isOpen } = useDialogContext()

  return (
    <>
      {isOpen &&
        createPortal(
          <div className="w-full h-screen absolute z-100 bg-[#242424]/30 backdrop-blur-sm flex justify-center items-center top-0">
            <dialog
              open={isOpen}
              className={cn('bg-black rounded-3xl w-[40rem] h-1/2 p-8', className)}
              {...props}
            >
              {children}
            </dialog>
          </div>, document.body)
      }
    </>
  )
}