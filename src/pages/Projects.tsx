import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/services";

const Projects = () => {
  // build a small gallery from service images, repeated/varied for visual richness
  const gallery = [
    ...SERVICES,
    ...SERVICES.slice(0, 4),
  ].map((s, i) => ({ ...s, id: `${s.slug}-${i}` }));

  return (
    <>
      <PageHeader
        eyebrow="Projects Gallery"
        title="Real projects. Real outcomes."
        subtitle="A snapshot of installations and sites we've built across India. Real client photos coming soon."
      />

      <section className="container py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {gallery.map((g, i) => (
            <figure
              key={g.id}
              className="mb-5 break-inside-avoid rounded-2xl overflow-hidden border shadow-soft hover:shadow-elegant transition-smooth group"
            >
              <img
                src={g.image}
                alt={g.title}
                loading="lazy"
                width={1280}
                height={800}
                className={`w-full object-cover group-hover:scale-105 transition-smooth duration-500 ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
              />
              <figcaption className="p-4 bg-card">
                <div className="font-display text-primary">{g.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{g.short}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTASection title="Want a similar project?" subtitle="Let's discuss your land, crop and budget. Free consultation." />
    </>
  );
};

export default Projects;
