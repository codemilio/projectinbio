import { Button } from "../ui/button";

export function Princing() {
  return (
    <div className="flex flex-col items-center gap-16 mx-auto">
      <div className="flex flex-col items-center text-center gap-y-2 max-w-4xl">
        <h3 className="text-4xl font-bold text-white"> Um valor acessíve para todos </h3>
        <span className="text-xl max-w-2xl">
          Junte-se à comunidade de criadores e profissionais que já estão elevando sua prsença online. Teste gratuitamente por <strong className="text-accent-pink">7 dias</strong>, sem compromisso!
        </span>
      </div>

      <div className="columns-1 w-full space-y-4 sm:columns-2">
        <div className="flex flex-col justify-between border border-white border-opacity-10 rounded-xl p-8 gap-y-8 self-end">
          <div>
            <h4 className="text-content-heading text-2xl font-bold"> Mensal </h4>
            <span> Apenas </span>
          </div>
          <div className="flex items-center">
            <span className="text-4xl text-content-heading font-bold"> R$ 00,00 </span>
            <span className="text-xl">&nbsp;/mês</span>
          </div>
          <Button className="w-fit px-4 bg-background-tertiary"> Assinar </Button>
        </div>

        <div className="break-inside-avoid w-full rounded-2xl bg-[linear-gradient(90deg,#4B2DBB,#B54468_100%)] p-[2px]">
          <div className="flex items-center justify-center h-12 font-bold text-xs uppercase">
            Recomendado
          </div>
          <div className="flex flex-col w-full justify-between bg-background-secondary p-8 gap-y-8 rounded-b-2xl">
            <div>
              <h4 className="text-content-heading text-2xl font-bold"> Mensal </h4>
              <span> Apenas </span>
            </div>

            <div className="flex items-center">
              <span className="text-4xl text-content-heading font-bold"> R$ 00,00 </span>
              <span className="text-xl">&nbsp;/mês</span>
            </div>
            <Button className="w-fit px-4"> Assinar </Button>
          </div>
        </div>
      </div>
    </div>
  )
}