import { FAQ } from "./FAQ"
import { Header } from "./Header"
import { Hero } from "./Hero"

export function LandingPage() {
  return (
    <div className="flex flex-col space-y-8">
      <Hero/>
      {/* <Header /> */}
      {/* <FAQ /> */}
    </div>
  )
}