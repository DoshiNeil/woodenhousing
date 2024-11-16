import FeatureHighlights from "@/components/featureHighlights";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/nav";
import Project from "@/components/project";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <FeatureHighlights />
      <Project />
    </div>
  );
}
