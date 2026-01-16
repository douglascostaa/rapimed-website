import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CareerCTA } from "@/components/CareerCTA";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <ServicesSection />
        <CareerCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
