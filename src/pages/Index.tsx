import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HeroMinimal from "@/components/HeroMinimal";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import MinimalModal from "@/components/MinimalModal";
import { Button } from "@/components/ui/button";
import { LayoutTemplate } from "lucide-react";

const Index = () => {
  const [isMinimal, setIsMinimal] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleMinimalNavigate = (sectionId: string) => {
    // Extract the section name from #id (e.g., #about -> about)
    const section = sectionId.substring(1);
    setActiveModal(section);
  };

  const closeModal = () => setActiveModal(null);

  const toggleMinimal = () => {
    setIsMinimal(!isMinimal);
    setActiveModal(null);
  };

  // Helper to render content inside modal based on active section
  const renderModalContent = () => {
    switch (activeModal) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "experience": // Although not explicitly in bento, good to handle
        return <Experience />;
      case "skills":
        return <Skills />;
      case "education": // Although not explicitly in bento
        return <Education />;
      case "testimonials":
        return <Testimonials />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  // Helper to get modal title
  const getModalTitle = () => {
    if (!activeModal) return "";
    return activeModal.charAt(0).toUpperCase() + activeModal.slice(1);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <MouseFollower />

      {/* Show Navigation only in Modern Mode */}
      {!isMinimal && <Navigation />}

      {isMinimal ? (
        <HeroMinimal onNavigate={handleMinimalNavigate} />
      ) : (
        <Hero />
      )}

      {/* Modern Mode Content Flow */}
      {!isMinimal && (
        <main className="animate-fade-in">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Testimonials />
          <Contact />
        </main>
      )}

      {/* Minimal Mode Modal */}
      <MinimalModal
        isOpen={!!activeModal}
        onClose={closeModal}
        title={getModalTitle()}
      >
        {renderModalContent()}
      </MinimalModal>

      {!isMinimal && <Footer />}

      {/* Hero Style Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleMinimal}
          className="rounded-full shadow-2xl hover:scale-110 transition-transform"
          size="lg"
        >
          <LayoutTemplate className="mr-2 h-4 w-4" />
          {isMinimal ? "Modern View" : "Minimal View"}
        </Button>
      </div>
    </div>
  );
};

export default Index;
