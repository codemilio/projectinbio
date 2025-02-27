'use client'
import { Plus } from "lucide-react" 
import { Button } from "../ui"
import { Card } from './card'
import { Dialog } from "./dialog"
import { useDialogContext } from "./dialog/dialog-root"

export function UserCard() {
  const { setIsOpen, isOpen } = useDialogContext()

  return (
    <div>
      <Dialog.Root>
        <Dialog.Header title="Adicionar link personalizado" />
        <Dialog.ActionsContainer>
          <Dialog.Action label="Cancelar" />
          <Dialog.Action label="Adicionar" />
        </Dialog.ActionsContainer>
      </Dialog.Root>
      <Card.Root>
        <Card.Avatar />
        <Card.Header title="Codemilio" subtitle="Frontend Developer" />
        <Card.Links />
        <Card.ActionsContainer>
          <Button className="w-full"> Template SaaS - Compre agora </Button>
          <Button onClick={() => setIsOpen(!isOpen)} className="w-full flex bg-[#1E1E1E] hover:bg-[#2E2E2E] justify-center gap-x-4 uppercase text-content-headline">
            <Plus />
            Adicionar link personalizado
          </Button>
        </Card.ActionsContainer>
      </Card.Root>
    </div>
  )
}

