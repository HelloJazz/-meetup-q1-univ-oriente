import { DoorOpen, GraduationCap, Coins, Bot, Pizza, Globe, Wrench } from "lucide-react";

const ExperienceSection = () => {
  const timeline = [
    {
      title: "Pre-Evento",
      icon: <DoorOpen className="w-5 h-5" />,
      content: "Los asistentes comenzaron a llegar con entusiasmo, integrándose rápidamente al ambiente acogedor de Casa Frutero. El registro fluyó sin problemas mientras los participantes se conocían y compartían expectativas sobre el evento.",
    },
    {
      title: "Track 1 - Onboarding & Fundamentals",
      icon: <GraduationCap className="w-5 h-5" />,
      content: "Una introducción integral al ecosistema Ethereum, cubriendo conceptos básicos de blockchain, wallets, y las diferencias entre Layer 1 y Layer 2. Los participantes configuraron sus primeras wallets y realizaron transacciones de prueba.",
    },
    {
      title: "Track 2 - DeFi",
      icon: <Coins className="w-5 h-5" />,
      content: "Exploración práctica del ecosistema DeFi, incluyendo swaps, pools de liquidez y farming. Los asistentes interactuaron con protocolos en vivo y entendieron los conceptos de rendimiento y riesgo en finanzas descentralizadas.",
    },
    {
      title: "Track 3 - AI Tools",
      icon: <Bot className="w-5 h-5" />,
      content: "Demostración de cómo utilizar herramientas de IA como asistente de aprendizaje en Web3. Se presentaron bots de trading y asistentes conversacionales, aunque surgieron desafíos técnicos que se convirtieron en oportunidades de aprendizaje.",
    },
    {
      title: "Networking Session",
      icon: <Pizza className="w-5 h-5" />,
      content: "Sesión de networking orgánico donde los participantes discutieron proyectos, formaron conexiones y exploraron oportunidades de colaboración. Surgieron ideas para equipos de hackathon y compromisos de participación en futuros eventos.",
    },
  ];

  return (
    <section id="experiencia" className="section-container bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">
          <span className="mr-3">📖</span>
          <span className="text-brand-dark-blue">Experiencia</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Análisis Cualitativo</p>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-8">Narrativa del Evento</h3>
          <div className="relative">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" />
                <div className="card-frutal ml-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-brand-light-blue/20 rounded-lg flex items-center justify-center text-brand-dark-blue">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-brand-dark-blue">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Moments */}
        <div>
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Momentos Destacados</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-frutal border-l-4 border-brand-light-blue">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-light-blue/20 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Éxito de Engagement Híbrido</h4>
              </div>
              <p className="text-muted-foreground">
                La audiencia remota participó activamente a través del chat en vivo, haciendo preguntas 
                en tiempo real y contribuyendo a las discusiones. El formato híbrido demostró ser efectivo 
                para ampliar el alcance sin sacrificar la calidad de la interacción.
              </p>
            </div>

            <div className="card-frutal border-l-4 border-brand-yellow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Desafío Técnico Auténtico</h4>
              </div>
              <p className="text-muted-foreground">
                Durante la demostración del bot de AI, surgieron problemas técnicos inesperados. 
                Esto se convirtió en un momento de aprendizaje valioso, mostrando la realidad del 
                desarrollo en Web3 y la importancia de la resiliencia ante fallos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
