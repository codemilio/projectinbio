import { Button, Input } from "../../components/ui"
import { ProjectCard, TotalVists, UserCard } from "../../components/commons";


export default function Hero() {
  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[40vh]">
        <h1 className="text-5xl font-bold leading-[64px] text-content-heading">
          Seus projetos e redes sociais em um único link!
        </h1>
        <h2 className="text-xl leading-6">
          Crie sua própria página de projetos e compartilhe eles com o mundo!
          <br />
          Acompanhe o engajamento com Analythics de cliques e visitas.
        </h2>

        <div className="flex items-center w-full mt-[10vh] gap-2">
          <span className="text-white text-xl"> projectinbio.com/ </span>
          <Input placeholder="Seu link..." />
          <Button> Criar agora </Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4b2dbb,transparent_55%)]">
        <div>
          <UserCard />
          <div className="absolute -bottom-[7%] -right-[45%]">
            <TotalVists />
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            <ProjectCard />
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  )
}