import FeatureHighlights from "@/components/featureHighlights";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/nav";

export default function Home() {
  return (
    <div className="flex justify-center flex-1">
      <div className="flex flex-col flex-1 max-w-[1920px] mt-4 mx-2">
        <Navbar />
        <FeatureHighlights/>
        <HeroSection/>
      </div>
    </div>
  );
}


