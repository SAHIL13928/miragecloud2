import Hero from "@/components/Hero";
import Featuresection from "@/components/Featuresection";
import Githubsection from "@/components/Githubsection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" >
      <Hero />
      <Featuresection className="pt-20"/>
      <Githubsection/>
      
    </div>
  );
}
