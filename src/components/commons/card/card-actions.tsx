type CardActionsProps = {
  children: React.ReactNode
}

export function CardActions ({ children }: CardActionsProps) {
  return(
    <div className="w-full flex flex-col items-center gap-4">
      {children}
    </div>
  )
}