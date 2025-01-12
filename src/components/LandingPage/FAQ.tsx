
export function FAQ() {

  const items = [
    {
      title: "Como funciona a criação de portfólio e links com Project in Bio",
      description: "Com Project in Bio, você pode criar um portfólio profissional e uma página de links em poucos minutos. Nossa plataforma oferece templates personalizáveis e uma interface fácil de usar para que você possa mostrar seu trabalho e organizar seus links de maneira eficiente."
    },
    {
      title: "Posso personalizar o design do meu portfólio?",
      description: "Você terá acesso a todos os recursos do plano premium por 7 dias. Após esse período, você poderá escolher o plano que melhor se encaixa com suas necessidades."
    },
    {
      title: "O que acontece se eu cancelar minha assinatura?",
      description: "Você pode cancelar sua assinatura a qualquer momento. Seu portfólio e página de links ficarão disponíveis até o final do período pago, mas após isso, as funcionalidades premium serão desativadas."
    },
    {
      title: "Há um período de teste gratuito?",
      description: "Sim! Oferecemos um teste gratuito de 7 dias, sem compromisso. Isso permite que você explore todas as funcionalidades da nossa plataforma antes de decidir por uma assinatura."
    },
    {
      title: "Preciso de habilidades técnicas para usar a plataforma?",
      description: "Não! Nossa plataforma foi desenvolvida para ser simples e intuitiva, então não é necessário conhecimento técnico. Você pode criar e personalizar seu portfólio e links sem complicações."
    },
    {
      title: "Posso compartilhar meu portfólio em redes sociais?",
      description: "Sim! Você pode facilmente compartilhar seu portfólio e página de links em suas redes sociais através de um link personalizado."
    },
  ]


  return (
    <div className="columns-1 sm:columns-2 gap-4 max-w-screen-md mx-auto">
      {items.map(({ title, description }) => (
        <div key={title} className="break-inside-avoid rounded-xl border-border-primary border-[1px] p-4 space-y-2 mb-4">
          <h3 className="text-xl font-bold text-content-heading"> {title} </h3>
          <p className=""> {description} </p>
        </div>
      ))}
    </div >
  )
}