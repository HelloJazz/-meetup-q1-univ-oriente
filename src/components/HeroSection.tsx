import { ChevronDown, Calendar, MapPin, Clock } from "lucide-react";
import logoFrutero from "@/assets/logo-frutero.png";
import localismLogo from "@/assets/localism-fund-logo.png";
import ethCincoLogo from "@/assets/eth-cinco-de-mayo-logo.png";
import pina from "@/assets/pina.png";
import fresa from "@/assets/fresa.png";
import naranja from "@/assets/naranja.png";
import uva from "@/assets/uva.png";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const navButtons = [
    { id: "metricas", label: "Métricas", icon: "📊", colorClass: "nav-button-red" },
    { id: "experiencia", label: "Experiencia", icon: "📖", colorClass: "nav-button-dark-blue" },
    { id: "impacto", label: "Impacto", icon: "🎯", colorClass: "nav-button-light-blue" },
    { id: "resultados", label: "Resultados", icon: "🏆", colorClass: "nav-button-yellow" },
    { id: "galeria", label: "Galería", icon: "📸", colorClass: "nav-button-red" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Colorful Grid Background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/4 bg-brand-red" />
        <div className="w-1/4 bg-brand-dark-blue" />
        <div className="w-1/4 bg-brand-light-blue" />
        <div className="w-1/4 bg-brand-yellow" />
      </div>
      
      {/* Overlay for text readability */}
      <div className="hero-overlay" />

      {/* Floating Fruit Decorations */}
      <img 
        src={pina} 
        alt="Pineapple decoration" 
        className="fruit-decoration top-20 left-8 md:left-16 z-10" 
        style={{ animationDelay: "0s" }}
      />
      <img 
        src={uva} 
        alt="Grape decoration" 
        className="fruit-decoration top-16 left-1/3 z-10 w-12 md:w-20" 
        style={{ animationDelay: "1s" }}
      />
      <img 
        src={naranja} 
        alt="Orange decoration" 
        className="fruit-decoration top-24 right-8 md:right-16 z-10" 
        style={{ animationDelay: "2s" }}
      />
      <img 
        src={fresa} 
        alt="Strawberry decoration" 
        className="fruit-decoration bottom-48 left-1/2 transform -translate-x-1/2 z-10 w-14 md:w-20" 
        style={{ animationDelay: "1.5s" }}
      />

      {/* Top Section - Logos */}
      <div className="relative z-20 pt-8 md:pt-12 px-4">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={logoFrutero} 
            alt="Frutero Logo" 
            className="h-12 md:h-16 brightness-0 invert"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <img 
              src={localismLogo} 
              alt="Localism Fund" 
              className="h-10 md:h-14 object-contain"
            />
            <img 
              src={ethCincoLogo} 
              alt="ETH Cinco de Mayo" 
              className="h-12 md:h-16 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content - Center */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-2">
            Meetups Frutales Q1 2026
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-4">
            ¡Bienvenidos a Ethereum!
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            CDMX
          </h3>
        </div>

        {/* Event Info Card */}
        <div className="mt-8 bg-brand-dark-blue/85 backdrop-blur-sm rounded-xl px-6 md:px-10 py-5 md:py-6 shadow-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-base md:text-lg font-medium">28 de enero, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-base md:text-lg font-medium">Casa Frutero, Mexico City</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-base md:text-lg font-medium">3 horas + networking</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-6 text-brand-yellow text-lg md:text-xl font-semibold text-center italic animate-slide-up" style={{ animationDelay: "0.4s" }}>
          "El primero de 12 meetups en México durante 2026"
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="relative z-20 pb-8 md:pb-12 px-4">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.6s" }}>
          {navButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => onNavigate(button.id)}
              className={button.colorClass}
            >
              <span className="mr-2">{button.icon}</span>
              {button.label}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => onNavigate("summary")}
        className="relative z-20 flex flex-col items-center pb-6 text-white/80 hover:text-white transition-colors cursor-pointer animate-bounce-gentle"
      >
        <ChevronDown className="w-8 h-8" />
        <span className="text-sm font-medium">Explorar</span>
      </button>
    </section>
  );
};

export default HeroSection;
