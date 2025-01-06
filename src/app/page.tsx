import { LandingPage } from "@/components/LandingPage";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex space-y-8 flex-col">
      <Navbar/>
      <LandingPage/>      
    </div>
  );
}
