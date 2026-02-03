import { Mail } from "lucide-react";
import logoFrutero from "@/assets/logo-frutero.png";
import localismLogo from "@/assets/localism-fund-logo.png";
import ethCincoLogo from "@/assets/eth-cinco-de-mayo-logo.png";
import ethereumLogo from "@/assets/ethereum-logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-dark-blue text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Report Info */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold mb-4">Reporte de Evento</h3>
          <div className="space-y-1 text-white/80">
            <p>Fecha de envío: 03/02/2026</p>
            <p>Preparado por: Frutero Team - CDMX Regional Coordinators</p>
            <p>Programa: Meetups Frutales - ETHCDM</p>
            <p>Grant: Localism Fund Round 02</p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mb-12">
          <h4 className="font-semibold mb-3">Contacto</h4>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Mail className="w-4 h-4" />
            <span>Jazmín Orozco - Community Lead</span>
          </div>
          <a 
            href="mailto:jazz@frutero.club" 
            className="text-brand-yellow hover:underline"
          >
            jazz@frutero.club
          </a>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          <img src={logoFrutero} alt="Frutero" className="h-10 brightness-0 invert" />
          <img src={localismLogo} alt="Localism Fund" className="h-12 object-contain" />
          <img src={ethCincoLogo} alt="ETH Cinco de Mayo" className="h-14 object-contain" />
          <img src={ethereumLogo} alt="Ethereum" className="h-10 brightness-0 invert opacity-70" />
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p>© 2026 Frutero Club. Todos los derechos reservados.</p>
          <p className="mt-1">Construyendo la comunidad Ethereum en México 🇲🇽</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
