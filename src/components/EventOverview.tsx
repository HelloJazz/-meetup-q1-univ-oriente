import { Calendar, MapPin, Clock, Users, Wallet, TrendingUp, Bot, Coffee } from "lucide-react";

const EventOverview = () => {
  const tracks = [
    {
      name: "Track 1: Onboarding & Fundamentals",
      duration: "45 min",
      icon: <Wallet className="w-6 h-6" />,
      bgColor: "bg-brand-red",
    },
    {
      name: "Track 2: Introduction to DeFi",
      duration: "45 min",
      icon: <TrendingUp className="w-6 h-6" />,
      bgColor: "bg-brand-dark-blue",
    },
    {
      name: "Track 3: AI as Learning Assistant",
      duration: "45 min",
      icon: <Bot className="w-6 h-6" />,
      bgColor: "bg-brand-light-blue",
    },
    {
      name: "Networking: Community Building",
      duration: "45 min",
      icon: <Coffee className="w-6 h-6" />,
      bgColor: "bg-brand-yellow",
    },
  ];

  return (
    <section className="section-container bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center text-brand-dark-blue mb-12">
          Descripción del Evento
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Event Details */}
          <div className="card-frutal">
            <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Detalles del Evento</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Fecha</p>
                  <p className="font-semibold">28 de enero, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-dark-blue/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-semibold">Casa Frutero, CDMX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-light-blue/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-light-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duración</p>
                  <p className="font-semibold">3 horas + networking</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Formato</p>
                  <p className="font-semibold">Presencial + Streaming</p>
                </div>
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <div className="card-frutal">
            <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Currículo</h3>
            <div className="space-y-3">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  className={`track-card ${track.bgColor} flex items-center justify-between ${track.bgColor === 'bg-brand-light-blue' || track.bgColor === 'bg-brand-yellow' ? 'text-foreground' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    {track.icon}
                    <span className="font-medium text-sm md:text-base">{track.name}</span>
                  </div>
                  <span className="text-sm opacity-90">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
