import HeroSection from "@/components/heroSection";
import Navbar from "@/components/nav";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
    </div>
  );
}
