import { LandingPage } from "@/components/LandingPage";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="pb-12 flex flex-col">
      <div className="w-[calc(100%-1rem)] h-screen bg-[radial-gradient(circle_at_50%_55%,#4c2dbbbc,transparent_55%)] absolute -top-1/4 -z-50" />
      <LandingPage />
    </div>
  );
}
