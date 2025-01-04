import { Facebook, Instagram, Twitter, Plus, Github, Linkedin } from "lucide-react"
import { Button } from "../Button"

export function UserCard() {
  const icons = [
    Github,
    Facebook,
    Instagram,
    // Twitter,
    Linkedin,
    Plus,
  ]

  return (
    <div className="w-[348px] flex flex-col items-center gap-5 p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img
          alt=""
          className="rounded-full object-cover w-full h-full"
          src="https://github.com/codemilio.png"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            Codemilio
          </h3>
        </div>
        <p className="opacity-40"> "Eu faço produtos para a internet" </p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium"> Links </span>
        <div className="flex gap-3">
          {
            icons.map((Icon, index) => (
              <button
                key={`${Icon}-${index.toString()}`}
                type="button"
                className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
                <Icon />
              </button>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          <Button className="w-full"> Template SaaS - Compre agora </Button>
          <button type="button" className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
            <Plus />
          </button>
        </div>
      </div>
    </div>
  )
}