import { Youtube, Twitter, Award, Megaphone, ExternalLink } from "lucide-react";

const GallerySection = () => {
  const mediaLinks = [
    {
      title: "Grabación YouTube",
      icon: <Youtube className="w-8 h-8" />,
      link: "https://www.youtube.com/live/Ak0iPq8LjP8",
      bgColor: "bg-brand-red",
    },
    {
      title: "Grabación X/Twitter",
      icon: <Twitter className="w-8 h-8" />,
      link: "https://x.com/i/broadcasts/1kvJpMvLnboxE",
      bgColor: "bg-brand-dark-blue",
    },
    {
      title: "Colección POAP",
      icon: <Award className="w-8 h-8" />,
      link: "https://collectors.poap.xyz/mint-website/across-build-case",
      bgColor: "bg-brand-light-blue",
    },
    {
      title: "Anuncio Oficial",
      icon: <Megaphone className="w-8 h-8" />,
      link: "https://x.com/fruteroclub/status/2016986018449084779",
      bgColor: "bg-brand-yellow",
    },
  ];

  const socialMentions = [
    { handle: "@EmaCr1pto", platform: "X/Twitter" },
    { handle: "@EstefhanyMV", platform: "X/Twitter" },
    { handle: "@waralotito", platform: "X/Twitter" },
    { handle: "@obag7", platform: "X/Twitter" },
    { handle: "@fruteroclub", platform: "X/Twitter (Oficial)" },
  ];

  return (
    <section id="galeria" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">
          <span className="mr-3">📸</span>
          <span className="text-brand-red">Galería</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Media y Enlaces</p>

        {/* Content Archive */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Archivo de Contenido</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mediaLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-frutal ${item.bgColor} ${item.bgColor === 'bg-brand-light-blue' || item.bgColor === 'bg-brand-yellow' ? 'text-foreground' : 'text-white'} group transition-transform hover:scale-105`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
                  <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social Mentions */}
        <div>
          <h3 className="text-xl font-bold text-brand-dark-blue mb-6">Menciones en Redes Sociales</h3>
          <div className="card-frutal">
            <div className="flex flex-wrap gap-3">
              {socialMentions.map((mention, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium flex items-center gap-2"
                >
                  <Twitter className="w-4 h-4 text-brand-dark-blue" />
                  {mention.handle}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Participantes y colaboradores compartieron su experiencia en redes sociales, 
              amplificando el alcance del evento y construyendo momentum para futuros meetups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
