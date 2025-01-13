import { LandingPage } from "@/components/LandingPage";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-12 flex flex-col relative">
      <div className="w-[calc(100%-1rem)] h-screen bg-[radial-gradient(circle_at_50%_55%,#4c2dbbbc,transparent_55%)] absolute -top-1/4">
      <div className="w-full h-full bg-custom-dotted-lines bg-dotted-lines bg-no-repeat bg-black"/>
      </div>
      <Navbar />

      <LandingPage />
    </div>
  );
}
