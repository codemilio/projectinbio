import { LandingPage } from "@/components/LandingPage";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col relative">
      <Navbar />
      <LandingPage />      
    </div>
  );
}
