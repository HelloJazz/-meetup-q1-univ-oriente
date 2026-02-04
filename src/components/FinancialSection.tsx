import { Wallet, CheckCircle2 } from "lucide-react";

const FinancialSection = () => {
    const budgetItems = [
        { name: "Venue", description: "Casa Frutero" },
        { name: "Refreshments", description: "Pizza and beverages for ~20 people" },
        { name: "Materials", description: "Digital materials, POAP design" },
        { name: "Documentation", description: "Photo/video coverage" },
        { name: "Streaming", description: "Equipment and platform usage" },
    ];

    return (
        <section id="finanzas" className="section-container" style={{ backgroundColor: 'hsla(210, 4.7%, 83.1%, 0.3)' }}>
            <div className="max-w-4xl mx-auto">
                <h2 className="section-title text-center">
                    <Wallet className="w-8 h-8 md:w-10 md:h-10 inline-block mr-3 text-brand-dark-blue" />
                    <span className="text-brand-dark-blue">Financial Transparency</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 text-lg">
                    Budget Utilization Overview
                </p>

                <div className="card-frutal overflow-hidden">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-4">
                            {budgetItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 rounded-lg bg-background border border-border hover:border-brand-dark-blue/30 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-brand-dark-blue/10 rounded-full flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-brand-dark-blue" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-dark-blue">{item.name}</h4>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialSection;
