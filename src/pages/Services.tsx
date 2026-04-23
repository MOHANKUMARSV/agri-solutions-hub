import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";

const Services = () => (
  <>
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
