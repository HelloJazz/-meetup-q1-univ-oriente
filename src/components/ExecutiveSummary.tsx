const ExecutiveSummary = () => {
  return (
    <section id="summary" className="section-container">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title text-brand-dark-blue">Executive Summary</h2>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
          The third Meetups Frutales Q1 event in Universidad de Oriente, Puebla, successfully continued the year-long educational initiative, expanding the regional foundation for quarterly Ethereum education. With 63 attendees, the event featured three technical demos that provided hands-on experience in Web3 wallet creation, transaction execution, and the strategic use of stablecoins. By covering advanced topics like DeFi lending and the integration of AI tools for Web3 onboarding, the session fostered the practical skills and community connections essential for long-term ecosystem growth.
        </p>

        <img
          src="/5.jpeg"
          alt="Foto final del evento Meetups Frutales Q1 Puebla"
          className="w-full rounded-2xl shadow-xl animate-fade-in"
        />
      </div>
    </section>
  );
};

export default ExecutiveSummary;
