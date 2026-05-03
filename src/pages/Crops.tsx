import { Link } from "react-router-dom";
import { CheckCircle2, Sprout, TrendingUp, Droplets, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { CROPS, type Crop } from "@/lib/crops";

const CropCard = ({ crop }: { crop: Crop }) => (
  <article className="group rounded-3xl overflow-hidden border bg-card shadow-soft hover:shadow-elegant transition-smooth flex flex-col">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={crop.image}
        alt={`${crop.name} grown under ${crop.system} by Indian Agro Service`}
        loading="lazy"
        decoding="async"
        width={1280}
        height={896}
        className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
      />
      <span
        className={
          "absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider " +
          (crop.tier === "primary"
            ? "bg-secondary text-secondary-foreground"
            : "bg-accent text-accent-foreground")
        }
      >
        {crop.tier === "primary" ? "Primary Crop" : "Also We Grow"}
      </span>
    </div>
    <div className="p-6 flex flex-col gap-4 flex-1">
      <div>
        <h3 className="font-display text-2xl text-primary leading-tight">{crop.name}</h3>
        {crop.tamil && (
          <div className="text-xs text-muted-foreground mt-0.5">{crop.tamil}</div>
        )}
      </div>
      <p className="text-sm text-foreground/75">{crop.description}</p>

      <dl className="grid grid-cols-2 gap-3 text-xs">
        <div className="rounded-lg bg-muted/60 p-3">
          <dt className="text-muted-foreground uppercase tracking-wider text-[10px]">Cycle</dt>
          <dd className="mt-0.5 font-medium text-foreground">{crop.cycle}</dd>
        </div>
        <div className="rounded-lg bg-muted/60 p-3">
          <dt className="text-muted-foreground uppercase tracking-wider text-[10px]">Yield</dt>
          <dd className="mt-0.5 font-medium text-foreground">{crop.yield}</dd>
        </div>
        <div className="rounded-lg bg-muted/60 p-3 col-span-2">
          <dt className="text-muted-foreground uppercase tracking-wider text-[10px]">System</dt>
          <dd className="mt-0.5 font-medium text-foreground">{crop.system}</dd>
        </div>
        <div className="rounded-lg bg-muted/60 p-3 col-span-2">
          <dt className="text-muted-foreground uppercase tracking-wider text-[10px]">Market</dt>
          <dd className="mt-0.5 font-medium text-foreground">{crop.market}</dd>
        </div>
      </dl>

      <ul className="space-y-1.5 mt-1">
        {crop.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
            <span className="text-foreground/80">{h}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

const Crops = () => {
  const primary = CROPS.filter((c) => c.tier === "primary");
  const secondary = CROPS.filter((c) => c.tier === "secondary");

  return (
    <>
      <Seo
        title="Crops We Help You Grow — Cucumber, Capsicum, Strawberry & More"
        description="Polyhouse, hydroponic and shade-net cultivation of cucumber, capsicum, strawberry, tomato, lettuce, chilli, gerbera and muskmelon — best-suited high-value crops for South Indian climate."
        keywords={["polyhouse cucumber Tamil Nadu","capsicum farming India","strawberry hydroponic","gerbera flower polyhouse","tomato polyhouse Erode","lettuce hydroponic Coimbatore"]}
      />
      <PageHeader
        eyebrow="What We Grow"
        title="Crops we help you grow"
        subtitle="From seedling to harvest — we plan, build and support cultivation of high-value crops best suited for South Indian climate, under polyhouse, hydroponic and shade-net systems."
      />

      <section className="container py-12 md:py-16">
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="rounded-2xl border bg-card p-5 flex items-start gap-3 shadow-soft">
            <Sprout className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
            <div>
              <div className="font-display text-lg text-primary">Crop selection</div>
              <p className="text-sm text-muted-foreground mt-1">Matched to your soil, water and market.</p>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-5 flex items-start gap-3 shadow-soft">
            <Droplets className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
            <div>
              <div className="font-display text-lg text-primary">Setup & inputs</div>
              <p className="text-sm text-muted-foreground mt-1">Polyhouse, drip, fertigation, seedlings.</p>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-5 flex items-start gap-3 shadow-soft">
            <TrendingUp className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
            <div>
              <div className="font-display text-lg text-primary">Agronomy support</div>
              <p className="text-sm text-muted-foreground mt-1">Crop calendar, pest control, harvest plan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-secondary">Primary Crops</div>
          <h2 className="font-display text-3xl md:text-4xl text-primary mt-1">
            Our 3 flagship high-value crops
          </h2>
          <p className="text-foreground/70 mt-3">
            These are the crops we recommend most often — strong demand, premium prices and proven results in
            South Indian conditions.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primary.map((c) => (
            <CropCard key={c.slug} crop={c} />
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-accent-foreground/80">
            Also We Grow
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-primary mt-1">
            Other crops well-suited for South India
          </h2>
          <p className="text-foreground/70 mt-3">
            Based on local climate, water availability and buyer demand — these crops also perform exceptionally
            well in our protected cultivation systems.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondary.map((c) => (
            <CropCard key={c.slug} crop={c} />
          ))}
        </div>
      </section>

      <section className="container pb-16">
        <div className="rounded-3xl gradient-leaf p-8 md:p-12 text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-6 shadow-elegant">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl md:text-3xl">Not sure which crop fits your land?</h3>
            <p className="mt-2 text-primary-foreground/85">
              Tell us about your location, water source and budget — we'll recommend the most profitable crop
              and the right cultivation system.
            </p>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              Get free crop advice <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Crops;
