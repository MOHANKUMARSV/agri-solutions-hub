import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Seo from "@/components/Seo";
import { PROJECT_CATEGORIES } from "@/lib/projects";

const Projects = () => {
  return (
    <>
      <Seo
        title="Projects Gallery — Polyhouse, Nursery, Solar Dryer & More"
        description="Real polyhouse, nursery, landscaping, solar dryer, vertical farming, rooftop garden and pondliner projects executed by Indian Agro Service across Tamil Nadu and South India."
        keywords={["polyhouse projects Tamil Nadu","nursery projects Erode","solar dryer projects India","vertical farming gallery","pondliner installation gallery"]}
      />
      <PageHeader
        eyebrow="Projects Gallery"
        title="Real projects. Real outcomes."
        subtitle="Actual installations executed by Indian Agro Service across Tamil Nadu and South India."
      />

      {PROJECT_CATEGORIES.map((cat) => (
        <section key={cat.key} className="container py-14">
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-3xl md:text-4xl text-primary">{cat.title}</h2>
            <p className="text-muted-foreground mt-3">{cat.description}</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {cat.photos.map((p, i) => (
              <figure
                key={p.id}
                className="mb-5 break-inside-avoid rounded-2xl overflow-hidden border shadow-soft hover:shadow-elegant transition-smooth group"
              >
                <img
                  src={p.image}
                  alt={`${p.caption} — ${cat.title} by Indian Agro Service`}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover group-hover:scale-105 transition-smooth duration-500 ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
                />
                <figcaption className="p-4 bg-card text-sm text-muted-foreground">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      <CTASection title="Want a similar project?" subtitle="Let's discuss your land, crop and budget. Free consultation." />
    </>
  );
};

export default Projects;
