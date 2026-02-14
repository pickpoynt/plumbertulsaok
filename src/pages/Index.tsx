import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import TrenchlessSewerInfo from "@/components/landing/TrenchlessSewerInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Trenchless sewer repair Briarcliff Manor</title>
        <meta name="description" content="Trenchless sewer repair Briarcliff Manor. Expert no-dig sewer line replacement and pipe relining in Briarcliff Manor, NY. 50-year warranty. Call (877) 792-1410!" />
        <meta name="keywords" content="Trenchless sewer repair Briarcliff Manor, sewer line repair Briarcliff Manor NY, trenchless pipe lining Westchester, sewer camera inspection" />
        <link rel="canonical" href="https://briarcliff-manor-trenchless-sewer.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Briarcliff Manor Trenchless Sewer Pros",
            "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop",
            "telephone": "+1-877-792-1410",
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
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Briarcliff Manor, Westchester County, NY"
            },
            "priceRange": "$$$",
            "description": "Professional trenchless sewer repair in Briarcliff Manor, NY. We specialize in cured-in-place pipe lining (CIPP), pipe bursting, and drain cleaning."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Trenchless Sewer Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Briarcliff Manor Trenchless Sewer Pros",
              "telephone": "+1-877-792-1410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Briarcliff Manor, NY"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Sewer Repair Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cured-in-Place Pipe Lining"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pipe Bursting Replacement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sewer Camera Inspection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hydro Jetting Drain Cleaning"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Trenchless sewer repair Briarcliff Manor" />
        <meta property="og:description" content="Expert trenchless sewer repair in Briarcliff Manor. Save your lawn and driveway with our no-dig technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://briarcliff-manor-trenchless-sewer.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Trenchless sewer repair Briarcliff Manor
              <span className="block text-blue-400 mt-2 text-2xl md:text-3xl">Briarcliff Manor Trenchless Sewer Pros</span>
            </>
          }
          subtitle="Stop the dig. We fix sewer lines in Briarcliff Manor without destroying your yard. Stronger, faster, and guaranteed for 50 years."
          image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop"
          overlayImage="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <TrenchlessSewerInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
