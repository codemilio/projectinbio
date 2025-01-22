import { Button } from "@/components/ui";

type DialogActionProps = {
  label: string 
}

export function DialogAction({ label }: DialogActionProps){
  return(
    <Button className="px-8">{label}</Button>
  )
}