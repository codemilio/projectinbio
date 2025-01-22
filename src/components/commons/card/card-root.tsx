
type CardRootProps = {
  children: React.ReactNode
}

export function CardRoot({ children }: CardRootProps) {
  return(
    <div className="w-full flex flex-col items-center gap-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white p-4">
      {children}
    </div>
  )
}