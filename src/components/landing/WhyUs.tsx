import { ShieldCheck, Calendar, MapPin, DollarSign, Phone } from "lucide-react";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80')] mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase tracking-tight">
            Why Briarcliff Manor Trusts Our <span className="text-blue-400">Restoration</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium italic">
            Sewer problems are stressful. We make the repair process seamless, clean, and permanent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "50-Year Warranty",
              description: "Our epoxy pipe lining is engineered to last for over 50 years. We provide a transferable warranty on all full-line restorations."
            },
            {
              icon: MapPin,
              title: "Local Experts",
              description: "We work directly with Briarcliff Manor officials to ensure all permits and code requirements are met seamlessly."
            },
            {
              icon: Calendar,
              title: "Same-Day Service",
              description: "Most trenchless repairs are completed in less than 24 hours, meaning your water is back on and your life returns to normal faster."
            },
            {
              icon: DollarSign,
              title: "Cost Transparency",
              description: "No surprise excavation fees. We provide a precise, up-front quote for the entire project before we start."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-900/40 transform hover:scale-[1.02] transition-transform duration-500">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Emergency Sewer Problem?</h3>
            <p className="text-blue-50 text-lg font-medium opacity-90">
              Don't let a backup ruin your home. Our rapid response team in Briarcliff Manor is ready to diagnose and repair 24/7.
            </p>
          </div>
          <a
            href="tel:8777921410"
            className="px-10 py-5 bg-white text-blue-600 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/10 flex items-center gap-3 whitespace-nowrap animate-pulse"
          >
            <Phone className="w-6 h-6" />
            (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
