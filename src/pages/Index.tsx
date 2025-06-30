import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorksSection from "@/components/WorksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <Footer />
    </div>
  );
};

export default Index;
