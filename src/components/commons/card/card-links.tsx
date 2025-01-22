import { Facebook, Instagram, Twitter, Plus, Github, Linkedin } from "lucide-react"


export function CardLinks() {
  const icons = [
    Github,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Plus,
  ]

  return (
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
  )
}