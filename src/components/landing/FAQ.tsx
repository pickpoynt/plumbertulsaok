import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does trenchless sewer repair work?",
    answer: "We insert a resin-saturated liner into your existing damaged pipe. Once in place, the liner is cured (hardened), creating a seamless, structural new pipe within the old one. No digging required."
  },
  {
    question: "Is trenchless repair as durable as traditional replacement?",
    answer: "Yes, often more so. The Cured-in-Place Pipe (CIPP) we install has a 50-year design life, is joint-free (preventing root intrusion), and has better flow characteristics than clay or concrete pipes."
  },
  {
    question: "Will you need to dig up my Briarcliff Manor lawn?",
    answer: "In 95% of cases, no. We access the sewer line through existing cleanouts or a small access point. Your driveway, landscaping, and hardscaping remain untouched."
  },
  {
    question: "How long does the process take?",
    answer: "Most residential trenchless repairs in Briarcliff Manor are completed in less than 24 hours. You'll have your water and sewer service back the same day."
  },
  {
    question: "Do you service older homes in Briarcliff Manor?",
    answer: "Absolutely. We specialize in rehabilitating aging cast iron, clay, and Orangeburg pipes common in Briarcliff Manor's historic properties."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6">
            Sewer Repair <span className="text-blue-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to your questions about trenchless technology and sewer line restoration in Westchester County.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-blue-600 text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
