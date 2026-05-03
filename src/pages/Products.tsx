import { Link } from "react-router-dom";
import { ArrowRight, Phone, Leaf } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { PRODUCT_CATEGORIES } from "@/lib/products";
import { SITE, waLink } from "@/lib/site";
import { PRODUCTS_FAQS, buildFaqLd } from "@/lib/faqs";

const Products = () => {
  return (
    <>
      <Seo
        title="Greenhouse, Hydroponics & Farm Materials — Products"
        description="Greenhouse film, shade nets, drip & fertigation, hydroponic systems, pondliner geomembrane and farm infrastructure materials supplied by Indian Agro Service across India."
        keywords={["greenhouse film supplier India","shade net Tamil Nadu","drip irrigation","HDPE pondliner","hydroponic system supplier India","grow bags Coimbatore"]}
        jsonLd={buildFaqLd(PRODUCTS_FAQS)}
      />
      <PageHeader
        eyebrow="What we supply"
        title="Our Products"
        subtitle="Greenhouse, hydroponics and farm infrastructure materials — engineered for Indian conditions and backed by site support."
      />

      <section className="container py-10">
        <div className="grid sm:grid-cols-3 gap-4">
          {PRODUCT_CATEGORIES.map((c) => (
            <a
              key={c.key}
              href={`#${c.key}`}
              className="rounded-2xl border bg-card p-5 hover:shadow-elegant transition-smooth flex items-start gap-3"
            >
              <span className="h-10 w-10 rounded-full bg-secondary/15 text-secondary grid place-items-center shrink-0">
                <Leaf className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-lg text-primary">{c.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.products.length} products</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {PRODUCT_CATEGORIES.map((cat, idx) => (
        <section
          key={cat.key}
          id={cat.key}
          className={idx % 2 === 0 ? "bg-muted/30" : ""}
        >
          <div className="container py-16 md:py-20">
            <div className="max-w-3xl text-center mx-auto">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary">
                Category
              </div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl text-primary">
                {cat.title}
              </h2>
              <p className="mt-3 text-foreground/75">{cat.description}</p>
              <div className="mt-4 flex justify-center">
                <span className="h-1 w-16 rounded-full bg-accent" />
              </div>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.products.map((p) => (
                <article
                  key={p.slug}
                  className="group rounded-2xl overflow-hidden border bg-card shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth flex flex-col"
                >
                  <div className="relative bg-gradient-to-br from-secondary/10 to-accent/10">
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider bg-primary text-primary-foreground font-semibold">
                        {cat.title.replace(" Products", "")}
                      </span>
                    </div>
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="font-display text-lg text-primary leading-tight">{p.name}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{p.short}</p>
                    <div className="pt-2 flex gap-2">
                      <a
                        href={waLink(`Hi, I want a quote for ${p.name}.`)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                          Enquire <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </a>
                      <a href={`tel:${SITE.phoneRaw}`} aria-label="Call us">
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="container py-16">
        <div className="rounded-3xl border bg-card p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-6 items-center shadow-elegant">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-primary">
              Need a custom BOM for your project?
            </h3>
            <p className="mt-2 text-foreground/75 max-w-2xl">
              Share your site size, crop and budget — we'll send a detailed material list with prices, delivery
              timeline and installation support.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90">Request quote</Button>
            </Link>
            <a href={waLink("Hi, I'd like a custom material quote.")} target="_blank" rel="noreferrer">
              <Button variant="outline">WhatsApp us</Button>
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Products;
