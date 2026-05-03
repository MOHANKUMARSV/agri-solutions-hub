import { Link, useParams } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { getService, SERVICES } from "@/lib/services";
import { SERVICE_PHOTOS } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";
import Seo from "@/components/Seo";
import { SERVICE_FAQS, buildFaqLd } from "@/lib/faqs";
import NotFound from "./NotFound";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getService(slug || "");
  if (!service) return <NotFound />;

  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const photos = SERVICE_PHOTOS[service.slug];
  const coverImage = photos?.cover || service.image;
  const faqs = SERVICE_FAQS[service.slug];

  return (
    <>
      <Seo
        title={`${service.title} in Tamil Nadu & India`}
        description={`${service.short} ${service.solution.slice(0, 90)}`}
        image={coverImage}
        type="service"
        keywords={[
          service.title,
          `${service.title} Tamil Nadu`,
          `${service.title} Coimbatore`,
          `${service.title} Erode`,
          `${service.title} cost India`,
          `${service.title} setup`,
          "Indian Agro Service",
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: service.title,
            provider: { "@type": "LocalBusiness", name: "Indian Agro Service" },
            areaServed: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh", "Telangana", "India"],
            description: service.solution,
          },
          ...(faqs ? [buildFaqLd(faqs)] : []),
        ]}
      />
      <section className="relative">
        <div className="absolute inset-0">
          <img src={coverImage} alt={`${service.title} project by Indian Agro Service in Tamil Nadu`} fetchPriority="high" decoding="async" className="w-full h-full object-cover" width={1280} height={800} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative container py-20 md:py-28 text-primary-foreground">
          <Link to="/services" className="inline-flex items-center gap-1 text-sm text-primary-foreground/80 hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <h1 className="mt-4 font-display text-4xl md:text-6xl max-w-3xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85 text-lg">{service.short}</p>
        </div>
      </section>

      <section className="container py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-primary">The Problem</h2>
            <p className="mt-3 text-foreground/80 text-lg">{service.problem}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-primary">Our Solution</h2>
            <p className="mt-3 text-foreground/80 text-lg">{service.solution}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-primary">Key Benefits</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3 bg-muted/50 rounded-xl p-4 border">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl gradient-sun p-6 shadow-gold">
            <div className="text-xs uppercase tracking-wider font-semibold text-accent-foreground/70">Indicative Investment & ROI</div>
            <div className="mt-2 font-display text-xl md:text-2xl text-accent-foreground">{service.roi}</div>
            <p className="text-xs text-accent-foreground/80 mt-2">* Final figures depend on site, scale, crop and material specs. Get a customised quote below.</p>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-card border rounded-3xl p-6 shadow-elegant">
            <h3 className="font-display text-xl text-primary">Get a quote for {service.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">Free site consultation. No obligation.</p>
            <div className="mt-5"><LeadForm compact defaultService={service.title} /></div>
          </div>
        </aside>
      </section>

      {photos?.gallery?.length ? (
        <section className="container pb-4">
          <div className="max-w-2xl mb-6">
            <div className="text-xs uppercase tracking-wider font-semibold text-secondary">Project Gallery</div>
            <h2 className="font-display text-2xl md:text-3xl text-primary mt-1">Real {service.title.toLowerCase()} we've executed</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {photos.gallery.map((p, i) => (
              <figure
                key={i}
                className="rounded-xl overflow-hidden border shadow-soft hover:shadow-elegant transition-smooth group"
              >
                <img
                  src={p.image}
                  alt={`${p.caption} — ${service.title} project by Indian Agro Service`}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-smooth duration-500"
                />
                <figcaption className="p-2 bg-card text-[11px] text-muted-foreground line-clamp-2">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="container pb-8 pt-12">
        <h2 className="font-display text-2xl md:text-3xl text-primary text-center">Other services you may like</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {others.map((o) => (
            <Link key={o.slug} to={`/services/${o.slug}`} className="group rounded-2xl overflow-hidden border bg-card shadow-soft hover:shadow-elegant transition-smooth">
              <img src={o.image} alt={`${o.title} — Indian Agro Service`} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-smooth" width={1280} height={800} />
              <div className="p-4">
                <div className="font-display text-lg text-primary">{o.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{o.short}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services"><Button variant="outline">View all services</Button></Link>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServiceDetail;
