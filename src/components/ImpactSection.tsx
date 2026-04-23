import { BookOpen, Users, Lightbulb, Trophy, CalendarCheck, Target, Check, AlertTriangle, Clock } from "lucide-react";

const ImpactSection = () => {
  const knowledgePoints = [
    <span key="1"><strong>Web3 Literacy:</strong> Practical mastery of the Ethereum ecosystem, from the technical setup of self-custodial wallets to the execution of secure on-chain transactions.</span>,
    <span key="2"><strong>DeFi Proficiency:</strong> Comprehensive understanding of decentralized financial protocols and stablecoins, contrasting their transparency and efficiency with traditional banking systems.</span>,
    <span key="3"><strong>AI-Driven Onboarding:</strong> Strategic adoption of AI tools to simplify technical complexities, enabling participants to build and learn within the blockchain space more effectively.</span>,
  ];

  const communityPoints = [
    <span key="1"><strong>University Alliance:</strong> Successful establishment of a formal bond with the university, bridging the gap between academic environments and the global Web3 ecosystem.</span>,
    <span key="2"><strong>Academic Community Onboarding:</strong> Integration of students and faculty into the Frutero network, fostering a local hub for continuous blockchain education and professional development.</span>,
  ];

  const goals = [
    {
      goal: "Execute according to calendar",
      target: "✓",
      achievement: "April 13, 2026",
      status: "complete",
    },
    {
      goal: "3-track curriculum",
      target: "✓",
      achievement: "All delivered",
      status: "complete",
    },
    {
      goal: "Live streaming",
      target: "✓",
      achievement: "2,245",
      status: "complete",
    },
    {
      goal: "Build community",
      target: "20-30",
      achievement: "71 + 2,245 remote",
      status: "complete",
    },
    {
      goal: "Satisfaction",
      target: "4/5",
      achievement: "80%",
      status: "complete",
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
    <section id="impacto" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center text-brand-yellow">
          <Target className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 text-brand-yellow" />
          <span>Impact</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Results Evaluation</p>

        {/* Immediate Outcomes */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-8">Immediate Outcomes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Knowledge */}
            <div className="card-frutal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-brand-red" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Knowledge Acquisition</h4>
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

            {/* Integration */}
            <div className="card-frutal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-dark-blue/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Institutional Integration</h4>
              </div>
              <ul className="space-y-4 pt-1">
                {communityPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-brand-dark-blue mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Results Benchmarking */}
          <div className="mt-20 mb-16">
            <h3 className="text-xl font-bold text-brand-dark-blue mb-3">Results Benchmarking</h3>
            <div className="card-frutal overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-brand-dark-blue text-white">
                      <th className="text-left py-4 px-6 font-semibold">Objective</th>
                      <th className="text-center py-4 px-4 font-semibold">Target</th>
                      <th className="text-center py-4 px-4 font-semibold">Achievement</th>
                      <th className="text-center py-4 px-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {goals.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-border last:border-0 ${getStatusBg(item.status)}`}
                      >
                        <td className="py-4 px-6 font-medium text-sm md:text-base">{item.goal}</td>
                        <td className="py-4 px-4 text-center text-muted-foreground text-sm">{item.target}</td>
                        <td className="py-4 px-4 text-center font-semibold text-sm md:text-base">{item.achievement}</td>
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
                <span className="text-sm text-muted-foreground">Completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Future Engagement */}
        <div>
          <h3 className="text-xl font-bold text-brand-dark-blue mb-8">Future Engagement</h3>
          <div className="grid gap-6">
            <div className="card-frutal bg-gradient-to-br from-brand-red/5 to-brand-red/10 border border-brand-red/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-brand-red">Academic Collaboration Roadmap</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Following the event's success, a strategic connection was established to develop and host future high-impact events within the university. This partnership aims to transform the campus into a recurring center for technical workshops and community-led innovation, ensuring a sustainable pipeline for talent development in the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
