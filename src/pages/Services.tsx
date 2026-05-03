import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";
import Seo from "@/components/Seo";
import { SERVICES_FAQS, buildFaqLd } from "@/lib/faqs";

const Services = () => (
  <>
    <Seo
      title="Agri Project Services — Polyhouse, Hydroponics, Solar Dryer & More"
      description="Eight specialized agri-project services from Indian Agro Service: polyhouse, hydroponics, vertical farming, rooftop gardens, nursery, landscaping, solar dryer & pondliner — across Tamil Nadu and India."
      keywords={["polyhouse services","hydroponic farm builder","vertical farming India","rooftop gardening Coimbatore","nursery setup","solar dryer dome","pondliner HDPE","agri turnkey services Tamil Nadu"]}
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `https://indianagroservice.in/services/${s.slug}`,
          })),
        },
        buildFaqLd(SERVICES_FAQS),
      ]}
    />
    <PageHeader
      eyebrow="Our Services"
      title="End-to-end agri-project solutions"
      subtitle="Eight specialized services — one accountable team. Choose what fits your land, budget and goals."
    />
    <section className="container py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
      </div>
    </section>
    <CTASection />
  </>
);

export default Services;
