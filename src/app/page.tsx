import Cta from "@/components /cta";
import FeatureHighlights from "@/components /featureHighlights";
import Footer from "@/components /footer";
import HeroSection from "@/components /heroSection";
import HowItWorks from "@/components /howItWorks";
import Navbar from "@/components /nav";
import Project from "@/components /project";
import ProjectVideo from "@/components /projectVideo";
import ViewIn3D from "@/components /viewIn3d";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <Navbar />
      <HeroSection />
      <FeatureHighlights />
      <Project />
      <ViewIn3D />
      <ProjectVideo />
      <HowItWorks />
      <Cta />
      <Footer />
    </div>
  );
}
