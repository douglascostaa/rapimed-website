import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExcellenceSection } from "@/components/ExcellenceSection";
import { StatsSection } from "@/components/StatsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { CareersSection } from "@/components/CareersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ExcellenceSection />
        <StatsSection />
        <WhyChooseSection />
        <CareersSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
