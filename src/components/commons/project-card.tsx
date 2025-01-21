
export function ProjectCard() {
  return (
    <div className="w-full h-1[32px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0"> 
        <img 
          alt="" 
          src="https://github.com/codemilio.png" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-accent-green"> 10 cliques </span>
        <div className="flex flex-col">
          <span className="text-white font-bold"> Projeto 01 </span>
          <span className="text-content-body text-sm"> Descrição do projeto muito interessante em, anota ai. </span>
        </div>
      </div>
    </div>
  )
}