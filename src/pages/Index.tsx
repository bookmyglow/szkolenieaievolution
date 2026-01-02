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
import AboutAIEvolutionSection from "@/components/sections/AboutAIEvolutionSection";
import MasterclassSection from "@/components/sections/MasterclassSection";
import AIChatbot from "@/components/chat/AIChatbot";
import SEO from "@/components/seo/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Evolution Polska | Nauka sztucznej inteligencji"
        description="Platforma AI Evolution Polska to ścieżka nauki AI z lekcjami, quizami i certyfikatem. Ucz się w swoim tempie i śledź postępy."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "AI Evolution Polska - ścieżka nauki AI",
          description:
            "Program edukacyjny obejmujący moduły, lekcje i quizy pomagające zrozumieć sztuczną inteligencję w praktyce.",
          provider: {
            "@type": "Organization",
            name: "AI Evolution Polska",
          },
        }}
      />
      <Header />
      <main id="main-content">
        <HeroSection />
        <div className="bg-background">
          <WhySection />
        </div>
        <div className="bg-muted/30">
          <AboutAIEvolutionSection />
        </div>
        <MasterclassSection />
        <div className="bg-background">
          <PathSection />
        </div>
        <div className="bg-muted/20">
          <StatsSection />
        </div>
        <div className="bg-background">
          <ModulesSection />
        </div>
        <div className="bg-muted/20">
          <DiscoverSection />
        </div>
        <div className="bg-background">
          <CertificateSection />
        </div>
        <div className="bg-muted/20">
          <CommunitySection />
        </div>
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
