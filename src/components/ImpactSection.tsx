import { BookOpen, Users, Lightbulb, Trophy, CalendarCheck } from "lucide-react";

const ImpactSection = () => {
  const knowledgePoints = [
    "Comprensión básica de wallets y transacciones on-chain",
    "Familiaridad con conceptos de DeFi y protocolos principales",
    "Exposición a herramientas de AI para Web3",
    "Entendimiento del ecosistema Ethereum en México",
  ];

  const communityPoints = [
    "Nuevas conexiones entre desarrolladores y entusiastas",
    "Formación de equipos para hackathons",
    "Compromiso de participación en eventos futuros",
  ];

  const projectPoints = [
    "Ideas de DApps para el mercado mexicano",
    "Propuestas de herramientas educativas",
    "Conceptos para integración de AI en Web3",
    "Proyectos de impacto social con blockchain",
  ];

  return (
    <section id="impacto" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">
          <span className="mr-3">🎯</span>
          <span className="text-brand-light-blue">Impacto</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Evaluación de Resultados</p>

        {/* Immediate Outcomes */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-8">Resultados Inmediatos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Knowledge */}
            <div className="card-frutal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-brand-red" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Adquisición de Conocimiento</h4>
              </div>
              <ul className="space-y-2">
                {knowledgePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-brand-red mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div className="card-frutal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-dark-blue/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Construcción de Comunidad</h4>
              </div>
              <ul className="space-y-2">
                {communityPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-brand-dark-blue mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="card-frutal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-brand-yellow" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Ideación de Proyectos</h4>
              </div>
              <ul className="space-y-2">
                {projectPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-brand-yellow mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Future Engagement */}
        <div>
          <h3 className="text-xl font-bold text-brand-dark-blue mb-8">Compromiso Futuro</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-frutal bg-gradient-to-br from-brand-red/5 to-brand-red/10 border border-brand-red/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-brand-red">Participación en Hackathon</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Varios participantes expresaron interés y compromiso en formar equipos para HackMoney 
                y otros hackathons del ecosistema. Se identificaron perfiles complementarios entre 
                desarrolladores, diseñadores y product managers.
              </p>
            </div>

            <div className="card-frutal bg-gradient-to-br from-brand-dark-blue/5 to-brand-dark-blue/10 border border-brand-dark-blue/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-brand-dark-blue rounded-xl flex items-center justify-center">
                  <CalendarCheck className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-brand-dark-blue">Compromiso para Q2</h4>
              </div>
              <div className="text-center py-4 mb-4">
                <div className="text-5xl font-bold text-brand-dark-blue">100%</div>
                <p className="text-muted-foreground mt-2">Intención de retorno</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Todos los asistentes presenciales expresaron entusiasmo por asistir al próximo 
                Meetup Frutal en Q2, destacando el valor del contenido y las conexiones formadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
