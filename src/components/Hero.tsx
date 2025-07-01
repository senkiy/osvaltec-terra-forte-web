
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/eae31167-5a34-4771-8646-3cd5cae7662c.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            OSVALTEC
          </h1>
          <p className="text-xl md:text-2xl text-warm-beige font-medium tracking-wide">
            Segurança – Qualidade – Produção – Manutenção e Serviços
          </p>
        </div>
        
        <Button 
          size="lg" 
          className="bg-rust-orange hover:bg-terracotta text-white px-8 py-4 text-lg font-semibold rounded-none transition-all duration-300 transform hover:scale-105"
          onClick={scrollToContact}
        >
          Solicite um Orçamento
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
