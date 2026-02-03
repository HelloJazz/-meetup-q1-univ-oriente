import { Check, AlertTriangle, Clock } from "lucide-react";

const ResultsSection = () => {
  const goals = [
    {
      goal: "Ejecutar según calendario",
      target: "✓",
      achievement: "28 enero, 2026",
      status: "complete",
    },
    {
      goal: "Currículo de 3 tracks",
      target: "✓",
      achievement: "Todos entregados",
      status: "complete",
    },
    {
      goal: "Streaming en vivo",
      target: "✓",
      achievement: "469 vistas",
      status: "complete",
    },
    {
      goal: "Distribución POAP",
      target: "70%+",
      achievement: "46%",
      status: "warning",
    },
    {
      goal: "Construir comunidad",
      target: "20-30",
      achievement: "18+469 remoto",
      status: "complete",
    },
    {
      goal: "Satisfacción",
      target: ">3.5/5",
      achievement: "Pendiente",
      status: "progress",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <Check className="w-5 h-5 text-emerald-600" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case "progress":
        return <Clock className="w-5 h-5 text-brand-light-blue" />;
      default:
        return null;
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "complete":
        return "bg-emerald-50";
      case "warning":
        return "bg-amber-50";
      case "progress":
        return "bg-secondary/30";
      default:
        return "";
    }
  };

  return (
    <section id="resultados" className="section-container bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">
          <span className="mr-3">🏆</span>
          <span className="text-brand-yellow">Resultados</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Benchmarking contra Objetivos de Red
        </p>

        <div className="card-frutal overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-brand-dark-blue text-white">
                  <th className="text-left py-4 px-6 font-semibold">Objetivo</th>
                  <th className="text-center py-4 px-4 font-semibold">Meta</th>
                  <th className="text-center py-4 px-4 font-semibold">Logro</th>
                  <th className="text-center py-4 px-4 font-semibold">Estado</th>
                </tr>
              </thead>
              <tbody>
                {goals.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border last:border-0 ${getStatusBg(item.status)}`}
                  >
                    <td className="py-4 px-6 font-medium">{item.goal}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{item.target}</td>
                    <td className="py-4 px-4 text-center font-semibold">{item.achievement}</td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center">{getStatusIcon(item.status)}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-emerald-100 rounded flex items-center justify-center">
              <Check className="w-3 h-3 text-emerald-600" />
            </div>
            <span className="text-sm text-muted-foreground">Completado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-amber-100 rounded flex items-center justify-center">
              <AlertTriangle className="w-3 h-3 text-amber-500" />
            </div>
            <span className="text-sm text-muted-foreground">Por debajo de meta</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-secondary rounded flex items-center justify-center">
              <Clock className="w-3 h-3 text-brand-light-blue" />
            </div>
            <span className="text-sm text-muted-foreground">En progreso</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
