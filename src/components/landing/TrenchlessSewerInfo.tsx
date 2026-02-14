import { Wrench, Shield, CheckCircle2, Clock } from "lucide-react";

const briarcliffFactors = [
    {
        icon: Wrench,
        title: "Westchester Soil & Terrain",
        description: "Briarcliff Manor's unique rocky and clay-heavy terrain often causes shifts that stress traditional sewer lines. Our trenchless solutions are designed to withstand these specific geological challenges without excavation."
    },
    {
        icon: Shield,
        title: "Historic Infrastructure Protection",
        description: "Many Briarcliff Manor properties feature beautiful, established landscapes and historic architecture. Trenchless repair preserves your driveway, gardens, and localized hardscaping while restoring pipe function."
    },
    {
        icon: CheckCircle2,
        title: "Tree Root Defense",
        description: "The lush canopy of Briarcliff Manor means aggressive tree roots often invade sewer lines. Our epoxy lining creates a seamless barrier that roots cannot penetrate, preventing future blockages."
    },
    {
        icon: Clock,
        title: "Rapid Restoration",
        description: "We understand that Briarcliff Manor homeowners value efficiency. Our trenchless methods often complete repairs in a single day, minimizing disruption to your daily routine and neighborhood."
    }
];

const repairBenefits = [
    {
        title: "Zero Landscape Damage",
        description: "We access your sewer line through existing cleanouts, preserving your lawn, pavers, and landscaping."
    },
    {
        title: "Structural Integrity",
        description: "The cured-in-place pipe (CIPP) we install is structuraly stronger than PVC and lasts for decades."
    },
    {
        title: "Cost Effective",
        description: "Avoid the massive costs of excavation, landscape restoration, and driveway repaving."
    },
    {
        title: "Eco-Friendly",
        description: "Less equipment, less waste, and no disruption to the local ecosystem makes this a greener choice."
    }
];

const TrenchlessSewerInfo = () => {
    return (
        <section id="trenchless-info" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b9?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-4 backdrop-blur-sm">
                        Briarcliff Manor Sewer Specialists
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Advanced Trenchless Sewer Repair in Briarcliff Manor
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Forget the excavator. We use state-of-the-art trenchless technology to repair sewer lines in Briarcliff Manor, NY.
                        Save your landscaping and get a permanent solution that is stronger than the original pipe.
                    </p>
                </div>

                {/* Factors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {briarcliffFactors.map((factor, index) => {
                        const IconComponent = factor.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{factor.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{factor.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                                Why Briarcliff Manor Homeowners Choose Trenchless
                            </h3>
                            <p className="text-slate-300 mb-8 text-lg">
                                Traditional sewer repair involves digging up your yard, destroying expensive landscaping, and taking days to complete.
                                Our trenchless method is surgically precise, faster, and provides a superior result.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {repairBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">{benefit.title}</h4>
                                            <p className="text-slate-400 text-xs mt-1">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
                                alt="Trenchless Sewer Repair Technology"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-white font-bold text-lg">State-of-the-Art Epoxy Lining</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Areas - Optional/Simplified */}
                <div className="mt-20 text-center">
                    <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">
                        Serving Briarcliff Manor & Westchester County
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TrenchlessSewerInfo;
