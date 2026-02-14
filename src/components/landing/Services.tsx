import { ArrowRight, Drill, Zap, Camera, Waves } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-indigo-600">Sewer Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Briarcliff Manor homeowners trust us for advanced sewer diagnostics and repair. We use technology to solve problems where others use shovels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Zap,
              title: "Cured-in-Place (CIPP)",
              description: "We create a new, seamless pipe inside your existing damaged one. It's stronger than PVC, joint-free, and resistant to future root intrusion.",
              link: "#trenchless-info"
            },
            {
              icon: Drill, // Using Drill as a proxy for bursting/force
              title: "Pipe Bursting",
              description: "For severely collapsed lines, we pull a new pipe through the old one, fracturing the damaged pipe outward while simultaneously laying the new line.",
              link: "#trenchless-info"
            },
            {
              icon: Camera,
              title: "HD Video Inspection",
              description: "Don't guess. Our high-definition sewer cameras travel through your lines to pinpoint the exact location and nature of the blockage or break.",
              link: "#trenchless-info"
            },
            {
              icon: Waves,
              title: "Hydro Jetting",
              description: "We use high-pressure water streams to obliterate tree roots, grease buildup, and scale, restoring your pipe's original flow capacity.",
              link: "#trenchless-info"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
