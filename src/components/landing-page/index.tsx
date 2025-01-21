import { FAQ } from "./FAQ"
import { Header } from "./Header"
import { Princing } from "./Princing"
import { VideoExplain } from "./VideoExplain"

export function LandingPage() {
  return (
    <div className="flex flex-col gap-y-16 ">
      <Header />
      <VideoExplain />
      <Princing />
      <FAQ />
    </div>
  )
}