import { DoorOpen, GraduationCap, Coins, Bot, Pizza, Globe, Wrench, BookOpen, Award } from "lucide-react";

const ExperienceSection = () => {
  const timeline = [
    {
      title: "Pre-Event",
      icon: <DoorOpen className="w-5 h-5" />,
      content: "The event began with high energy as students and faculty from Universidad de Oriente gathered for the regional kickoff. Registration was managed efficiently, allowing participants to network and align their expectations for the upcoming technical tracks.",
    },
    {
      title: "Track 1 - Onboarding & Fundamentals",
      icon: <GraduationCap className="w-5 h-5" />,
      content: "A practical introduction to the blockchain ecosystem, focused on the successful creation of a first Web3 wallet. This session provided hands-on guidance for executing initial transactions, emphasizing security protocols and self-custody as the starting point for decentralized interaction.",
    },
    {
      title: "Track 2 - Introduction to DeFi",
      icon: <Coins className="w-5 h-5" />,
      content: "An accessible exploration of the decentralized finance landscape, stripping away complexity to focus on practical utility. The track covered the strategic use of stablecoins and lending protocols, highlighting the transparent advantages of DeFi systems for managing digital assets.",
    },
    {
      title: "Track 3 - AI as Learning Assistant",
      icon: <Bot className="w-5 h-5" />,
      content: "A forward-looking demonstration of how artificial intelligence serves as a bridge to Web3 literacy. The session focused on utilizing AI tools to accelerate the learning curve, providing participants with a personalized roadmap for navigating and understanding technical blockchain concepts.",
    },
    {
      title: "Networking Session",
      icon: <Pizza className="w-5 h-5" />,
      content: "An interactive session where attendees applied their new skills through wallet setup and live USDC transfers. These practical activities sparked organic conversations about future collaborations, allowing participants to experience the immediate utility of the technology in a community-driven environment.",
    },
  ];

  return (
    <section id="experiencia" className="section-container" style={{ backgroundColor: 'hsla(210, 4.7%, 83.1%, 0.3)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center text-brand-red">
          <Award className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 text-brand-red" />
          <span>Event Narrative</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Qualitative Analysis</p>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-8">Event Narrative</h3>
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
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Notable Moments</h3>
          <div className="grid gap-6">
            <div className="card-frutal border-l-4 border-brand-light-blue">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-light-blue/20 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-brand-dark-blue" />
                </div>
                <h4 className="font-bold text-brand-dark-blue">Institutional & Student Empowerment</h4>
              </div>
              <p className="text-muted-foreground">
                A standout highlight featured the Rector of Universidad de Oriente actively participating by creating her own Web3 wallet and distributing tokens to students. This set a powerful example for the academic community as students explored the fundamentals of decentralized savings and financial services, gaining a deep understanding of how to leverage AI as a specialized learning mentor for these new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
