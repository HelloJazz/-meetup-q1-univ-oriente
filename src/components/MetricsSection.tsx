import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { Youtube, Twitter, Users, Award } from "lucide-react";

const MetricsSection = () => {
  const registrationData = [
    { name: "Registrados", value: 41, fill: "hsl(215, 65%, 35%)" },
    { name: "Asistentes IRL", value: 18, fill: "hsl(355, 77%, 50%)" },
  ];

  const poapData = [
    { name: "Presencial", value: 18, fill: "hsl(355, 77%, 50%)" },
    { name: "Remoto", value: 5, fill: "hsl(199, 79%, 66%)" },
    { name: "Sin reclamar", value: 27, fill: "hsl(215, 20%, 85%)" },
  ];

  const audienceData = [
    { name: "Principiante", value: 55, fill: "hsl(41, 100%, 66%)" },
    { name: "Intermedio", value: 35, fill: "hsl(199, 79%, 66%)" },
    { name: "Avanzado", value: 10, fill: "hsl(215, 65%, 35%)" },
  ];

  const newVsReturning = [
    { name: "Primera vez", value: 44.44, fill: "hsl(355, 77%, 50%)" },
    { name: "Regresando", value: 55.56, fill: "hsl(215, 65%, 35%)" },
  ];

  return (
    <section id="metricas" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">
          <span className="mr-3">📊</span>
          <span className="text-brand-red">Métricas</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Análisis Cuantitativo</p>

        {/* Registration & Attendance */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Registro & Asistencia</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-frutal">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={registrationData} layout="vertical">
                  <XAxis type="number" domain={[0, 50]} />
                  <YAxis type="category" dataKey="name" width={120} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center">
              <div className="stat-card">
                <div className="stat-number text-brand-red">44%</div>
                <div className="stat-label">Tasa de Conversión</div>
                <p className="text-sm text-muted-foreground mt-2">18 de 41 registrados asistieron</p>
              </div>
            </div>
          </div>
        </div>

        {/* Streaming Stats */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Alcance de Streaming</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat-card bg-brand-red text-white">
              <Youtube className="w-10 h-10 mx-auto mb-3" />
              <div className="stat-number">125</div>
              <div className="stat-label text-white/80">Vistas en YouTube</div>
            </div>
            <div className="stat-card bg-brand-dark-blue text-white">
              <Twitter className="w-10 h-10 mx-auto mb-3" />
              <div className="stat-number">344</div>
              <div className="stat-label text-white/80">Vistas en X/Twitter</div>
            </div>
            <div className="stat-card bg-brand-light-blue">
              <Users className="w-10 h-10 mx-auto mb-3 text-brand-dark-blue" />
              <div className="stat-number text-brand-dark-blue">469</div>
              <div className="stat-label">Alcance Remoto Total</div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* POAP Distribution */}
          <div className="card-frutal">
            <h3 className="text-lg font-bold text-brand-dark-blue mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-yellow" />
              Distribución POAP
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={poapData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {poapData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {poapData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                  <span>{item.name}: {item.value}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3">
              <span className="font-medium">Meta: 70%</span> | Logrado: 46%
            </p>
          </div>

          {/* Audience Composition */}
          <div className="card-frutal">
            <h3 className="text-lg font-bold text-brand-dark-blue mb-4">Composición de Audiencia</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={audienceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, value }) => `${value}%`}
                >
                  {audienceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {audienceData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                  <span>{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* New vs Returning */}
          <div className="card-frutal">
            <h3 className="text-lg font-bold text-brand-dark-blue mb-4">Nuevos vs Retornando</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={newVsReturning}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, value }) => `${value.toFixed(1)}%`}
                >
                  {newVsReturning.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {newVsReturning.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                  <span>{item.name}: {item.value.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Stats */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Engagement en Redes Sociales</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="stat-card">
              <div className="stat-number text-brand-red">17</div>
              <div className="stat-label">Publicaciones Totales</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-brand-dark-blue">344</div>
              <div className="stat-label">Vistas X/Twitter</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-brand-light-blue">125</div>
              <div className="stat-label">Vistas YouTube</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-brand-yellow">469</div>
              <div className="stat-label">Alcance Digital</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
