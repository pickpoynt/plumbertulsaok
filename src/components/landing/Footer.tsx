import { Phone, Facebook, Twitter, Instagram, Linkedin, Hammer, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none tracking-tight">BRIARCLIFF MANOR</span>
                <span className="text-sm font-medium text-blue-500 uppercase tracking-widest text-[10px]">SEWER PROS</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Westchester County's trusted trenchless sewer repair specialists.
              Restoring pipes without destroying landscapes.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors group">
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors group">
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors group">
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 font-medium uppercase text-xs tracking-widest"> Trenchless Pipe Lining</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 font-medium uppercase text-xs tracking-widest"> Pipe Bursting</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 font-medium uppercase text-xs tracking-widest"> Sewer Camera Inspection</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 font-medium uppercase text-xs tracking-widest"> Hydro Jetting</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 font-medium uppercase text-xs tracking-widest"> Emergency Repair</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Company</h4>
            <ul className="space-y-4">
              <li><a href="#why-us" className="text-slate-400 hover:text-blue-500 transition-colors font-medium uppercase text-xs tracking-widest">Why Trenchless?</a></li>
              <li><a href="#trenchless-info" className="text-slate-400 hover:text-blue-500 transition-colors font-medium uppercase text-xs tracking-widest">How It Works</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-blue-500 transition-colors font-medium uppercase text-xs tracking-widest">Repair FAQ</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-500 transition-colors font-medium uppercase text-xs tracking-widest">Get A Quote</a></li>
              <li><p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Privacy Policy</p></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-bold mb-8 font-heading text-white uppercase tracking-widest">24/7 EMERGENCY</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1 font-heading">Call Us Now</p>
                  <a href="tel:8777921410" className="text-lg font-bold text-white hover:text-blue-500 transition-colors">
                    (877) 792-1410
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1 font-heading">Service Region</p>
                  <p className="text-white font-bold">
                    Briarcliff Manor & Westchester
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} BRIARCLIFF MANOR SEWER PROS.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-[10px] items-center font-bold uppercase tracking-widest">
            <Hammer className="w-4 h-4 text-blue-500" />
            <span>Licensed & Insured Sewer Contractors</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Briarcliff Manor Trenchless Sewer Pros",
          "telephone": "+18777921410",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Briarcliff Manor",
            "addressRegion": "NY",
            "postalCode": "10510",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.1465",
            "longitude": "-73.8443"
          },
          "openingHours": "Mo-Su 00:00-23:59"
        })}
      </script>
    </footer>
  );
};

export default Footer;
