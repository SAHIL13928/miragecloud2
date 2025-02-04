import Hero from "@/components/Hero";
import Featuresection from "@/components/Featuresection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" >
      <Hero />
      <Featuresection className="pt-20"/>
    </div>
  );
}
