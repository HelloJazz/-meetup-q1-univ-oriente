import { useState, useEffect } from "react";
import logoFrutero from "@/assets/logo-frutero.png";

interface StickyNavProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

const StickyNav = ({ onNavigate, activeSection }: StickyNavProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "metricas", label: "Métricas", icon: "📊", bgColor: "bg-brand-red" },
    { id: "experiencia", label: "Experiencia", icon: "📖", bgColor: "bg-brand-dark-blue" },
    { id: "impacto", label: "Impacto", icon: "🎯", bgColor: "bg-brand-light-blue" },
    { id: "resultados", label: "Resultados", icon: "🏆", bgColor: "bg-brand-yellow" },
    { id: "galeria", label: "Galería", icon: "📸", bgColor: "bg-brand-red" },
  ];

  if (!isVisible) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => onNavigate("hero")} className="flex items-center">
          <img src={logoFrutero} alt="Frutero" className="h-8 md:h-10" />
        </button>
        
        <div className="flex items-center gap-2 md:gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold
                transition-all duration-200 
                ${activeSection === item.id 
                  ? `${item.bgColor} text-white shadow-md scale-105` 
                  : "bg-muted text-foreground hover:bg-muted/80"
                }
              `}
            >
              <span className="hidden md:inline mr-1">{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sm:hidden">{item.icon}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
