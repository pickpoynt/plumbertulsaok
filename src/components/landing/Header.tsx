import { useState, useEffect } from "react";
import { Menu, X, Hammer, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sewer Repair", href: "#services" },
    { name: "Trenchless Info", href: "#trenchless-info" },
    { name: "Why Us", href: "#why-us" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/95 backdrop-blur-md py-4 shadow-lg border-b border-blue-50"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${isScrolled ? "bg-blue-600 rotate-0" : "bg-white/10 backdrop-blur-md border border-white/20 rotate-[-10deg] group-hover:rotate-0"}`}>
              <Hammer className={`w-7 h-7 ${isScrolled ? "text-white" : "text-blue-500"}`} />
            </div>
            <div>
              <span className={`font-heading font-bold text-xl md:text-2xl block leading-none tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>
                BRIARCLIFF MANOR
              </span>
              <span className={`text-sm font-bold uppercase tracking-[0.2em] ${isScrolled ? "text-blue-600" : "text-blue-400"}`}>
                SEWER <span className="text-[10px] opacity-70">PROS</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 ${isScrolled ? "text-slate-600 hover:text-blue-600" : "text-white/90 hover:text-white"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex flex-col items-end ${isScrolled ? "text-slate-900" : "text-white"}`}>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">24/7 EMERGENCY LINE</span>
              <a href="tel:8777921410" className="text-xl font-bold hover:text-blue-500 transition-colors tracking-tighter">
                (877) 792-1410
              </a>
            </div>
            <Button className={`${isScrolled ? "bg-blue-600 hover:bg-blue-700 shadow-blue-900/20" : "bg-white text-slate-900 hover:bg-blue-50"} h-12 px-8 rounded-xl font-bold shadow-xl transition-all hover:-translate-y-0.5`} asChild>
              <a href="#contact">Free Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-8 h-8 ${isScrolled ? "text-slate-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-8 h-8 ${isScrolled ? "text-slate-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 text-white p-6 absolute top-full left-0 right-0 border-t border-slate-800 animate-in fade-in slide-in-from-top-4 duration-300 h-screen">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold tracking-wide hover:text-blue-400 transition-colors py-2 border-b border-slate-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
              <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest font-bold">24/7 EMERGENCY LINE</p>
              <a href="tel:8777921410" className="text-3xl font-bold text-blue-500 block mb-6">
                (877) 792-1410
              </a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-bold rounded-xl" asChild>
                <a href="#contact">Get Free Quote</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
