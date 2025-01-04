import { FAQ } from "./FAQ"
import { Header } from "./Header"

export function LandingPage() {
  return (
    <div className="flex flex-col space-y-8">
      <Header />
      <FAQ />
    </div>
  )
}