
type DialogActionsProps = {
  children: React.ReactNode
}

export function DialogActions({ children }: DialogActionsProps) {
  return(
    <div className="absolute bottom-8 right-8 flex space-x-4">
      {children}
    </div>
  )
}