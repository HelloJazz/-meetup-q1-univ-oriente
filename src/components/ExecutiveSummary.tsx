import fresa from "@/assets/fresa.png";
import naranja from "@/assets/naranja.png";
import pina from "@/assets/pina.png";

const ExecutiveSummary = () => {
  return (
    <section id="summary" className="section-container">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title text-brand-dark-blue">Resumen Ejecutivo</h2>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          El evento inaugural de Meetups Frutales Q1 en Ciudad de México lanzó exitosamente una 
          iniciativa educativa de un año, estableciendo una base sólida para la educación trimestral 
          de Ethereum en todo México. El evento ejecutó todos los tracks de currículo planificados, 
          logró un engagement significativo tanto presencial como remoto, y creó conexiones comunitarias 
          auténticas que llevaron a compromisos de participación continua y formación de equipos para 
          hackathons.
        </p>

        {/* Fruit Separator */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="h-px bg-gradient-to-r from-transparent via-brand-light-blue to-transparent flex-1 max-w-32" />
          <img src={fresa} alt="" className="w-8 h-8" />
          <img src={pina} alt="" className="w-10 h-10" />
          <img src={naranja} alt="" className="w-8 h-8" />
          <div className="h-px bg-gradient-to-l from-transparent via-brand-light-blue to-transparent flex-1 max-w-32" />
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
