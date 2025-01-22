
type CardHeaderProps = {
  title: string 
  subtitle: string
}

export function CardHeader({ title, subtitle }: CardHeaderProps) {
  return (
    <hgroup className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-2">
        <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
          {title}
        </h3>
      </div>
      <h6 className="text-content-placeholder"> {subtitle} </h6>
    </hgroup>
  )
}