import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import PathSection from "@/components/sections/PathSection";
import StatsSection from "@/components/sections/StatsSection";
import CertificateSection from "@/components/sections/CertificateSection";
import ModulesSection from "@/components/sections/ModulesSection";
import DiscoverSection from "@/components/sections/DiscoverSection";
import CommunitySection from "@/components/sections/CommunitySection";
import AIChatbot from "@/components/chat/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="bg-background">
          <WhySection />
        </div>
        <div className="bg-muted/30">
          <PathSection />
        </div>
        <div className="bg-background">
          <StatsSection />
        </div>
        <div className="bg-muted/30">
          <ModulesSection />
        </div>
        <div className="bg-background">
          <DiscoverSection />
        </div>
        <div className="bg-muted/30">
          <CertificateSection />
        </div>
        <div className="bg-background">
          <CommunitySection />
        </div>
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
