import { Button } from "../Button";

export function Princing() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center text-center gap-y-2 max-w-4xl">
        <h3 className="text-4xl font-bold text-white"> Um valor acessíve para todos </h3>
        <span className="text-xl">
          Junte-se à comunidade de criadores e profissionais que já estão elevando sua prsença online. Teste gratuitamente por <strong>7 dias</strong>, sem compromisso!
        </span>
      </div>

      <div className="flex gap-8">
        <div className="flex flex-row">
          <div className="flex flex-col justify-between size-80 border border-white border-opacity-10 rounded-xl p-8">
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

        <div className="flex flex-row">
          <div className="flex flex-col justify-between size-80 border border-white border-opacity-10 rounded-xl p-8">
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