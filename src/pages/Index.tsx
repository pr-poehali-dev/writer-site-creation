import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorksSection from "@/components/WorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import AudienceSection from "@/components/AudienceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <FeaturesSection />
      <AudienceSection />
      <Footer />
    </div>
  );
};

export default Index;
