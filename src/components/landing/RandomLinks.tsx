import { ExternalLink } from "lucide-react";

const links = [
  {
    name: "Pipe Lining Technology",
    url: "https://smokeodorremovalfromupholsterywhite.vercel.app/"
  },
  {
    name: "Sewer Repair Standards",
    url: "https://firedamagecleanupforlogcabinswhitef.vercel.app/"
  },
  {
    name: "Trenchless Solutions",
    url: "https://odorremovalafterwaterdamageiowacolo.vercel.app/"
  },
  {
    name: "Drainage Systems",
    url: "https://sootremovalfromwallsinspartawiscons.vercel.app/"
  },
];

const RandomLinks = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-100 italic">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <span className="text-slate-400 font-bold text-[10px] lg:mr-4 uppercase tracking-[0.3em] text-center w-full lg:w-auto mb-4 lg:mb-0">
            INDUSTRY PARTNERS
          </span>

          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="group flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <span className="font-bold text-xs tracking-[0.1em] uppercase">{link.name}</span>
              <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
