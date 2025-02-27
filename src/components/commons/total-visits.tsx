import { TrendingUp } from "lucide-react";

export function TotalVists() {
  return (
    <div
      className="w-full whitespace-nowrap flex items-center gap-5 bg-background-secondary border border-border-primary px-8 py-3 rounded-xl shadow-lg"
    >
      <span className="font-bold text-white"> Total de visitas </span>
      <div className="flex items-center gap-2 text-accent-green">
        <span className="text-3xl font-bold"> 2301 </span>
        <TrendingUp />
      </div>
      {/* <div className="flex items-center gap-2">
        <button type="button"> Portal </button>
        <button type="button"> Sair </button>
      </div> */}
    </div>
  )
}