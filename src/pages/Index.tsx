import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Leaf, MapPin, ShieldCheck, Sprout, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-farm.jpg";
import { SERVICES } from "@/lib/services";
import { SITE, waLink } from "@/lib/site";
import ServiceCard from "@/components/ServiceCard";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";
import Seo from "@/components/Seo";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "12+", label: "Years of Experience" },
  { value: "Pan-India", label: "Coverage" },
  { value: "100%", label: "On-site Execution" },
];

const usps = [
  { icon: Sprout, title: "Turnkey Execution", desc: "Design, build, install and handover — one accountable team for the entire project." },
  { icon: TrendingUp, title: "ROI-Focused", desc: "Every plan is built around real numbers — yield, payback period and profitability." },
  { icon: ShieldCheck, title: "Quality Materials", desc: "GI structures, branded films, certified pondliners and BIS-grade components." },
  { icon: Users, title: "Lifetime Support", desc: "Crop guidance, agronomy support and AMC plans long after the handover." },
];

const testimonials = [
  { name: "Selvaraj M.", role: "Farmer · Erode, TN", text: "IAS built our 1-acre polyhouse in 60 days. Capsicum yield is 3× what we had in open field. Their team is honest and transparent." },
  { name: "Priya & Karthik", role: "Homeowners · Coimbatore", text: "Our terrace is now a beautiful kitchen garden. We get fresh vegetables daily and the kids love it." },
  { name: "GreenCorp Ventures", role: "Investor · Bengaluru", text: "We partnered on a JV hydroponic farm. Setup, operations and reporting — everything is professional and on time." },
];

const Index = () => {
  return (
    <>
      <Seo
        title="Polyhouse, Hydroponics & Agri Projects across India"
        description="Indian Agro Service builds turnkey polyhouse, hydroponics, vertical farms, rooftop gardens, nursery, solar dryer & pondliner projects across Tamil Nadu and India. Free site consultation."
        keywords={[
          "polyhouse construction Tamil Nadu",
          "hydroponics farm setup India",
          "vertical farming company",
          "rooftop garden setup Coimbatore",
          "nursery setup Erode",
          "solar dryer manufacturer Tamil Nadu",
          "pondliner installation South India",
          "agri joint venture India",
          "Indian Agro Service Perundurai",
        ]}
      />
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img src={hero} alt="Polyhouse interior with healthy capsicum and tomato crops in Tamil Nadu — Indian Agro Service" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover" width={1600} height={900} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container relative z-10 py-20 text-primary-foreground">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-semibold uppercase tracking-wider">
              <Leaf className="h-3.5 w-3.5" /> {SITE.tagline}
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
              Agri projects that <span className="text-accent">grow yield,</span> not just plants.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl">
              From polyhouses and hydroponics to rooftop gardens and joint-venture farms — Indian Agro Service delivers complete agri solutions across India.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-gold">
                  Get Free Consultation <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href={waLink()} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl md:text-4xl text-accent">{s.value}</div>
                  <div className="text-sm text-primary-foreground/75">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-20" id="services">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What we do</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 text-primary">Complete agri-project solutions</h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're a farmer, homeowner, corporate or investor — we build the right project for your land and goals.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" size="lg" className="gap-2">View all services <ArrowRight className="h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="gradient-soft py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why choose IAS</span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 text-primary">Built for outcomes, not just installations</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((u) => (
              <div key={u.title} className="bg-card rounded-2xl p-6 shadow-soft border">
                <div className="h-12 w-12 rounded-xl gradient-leaf grid place-items-center text-primary-foreground">
                  <u.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl mt-5 text-primary">{u.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">How it works</span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 text-primary">From idea to harvest in 4 steps</h2>
            <ul className="mt-8 space-y-5">
              {[
                ["Consultation", "Share your land, budget and goals. We respond within 24 hours."],
                ["Site survey & design", "Our team visits your site, surveys it, and designs an optimal project."],
                ["Execution", "Material supply and on-site construction by our trained crew."],
                ["Handover & support", "Crop guidance, agronomy support and ongoing maintenance plans."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-lg">{i + 1}</div>
                  <div>
                    <div className="font-semibold text-primary">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border rounded-3xl p-8 shadow-elegant">
            <h3 className="font-display text-2xl text-primary">Get a free consultation</h3>
            <p className="text-sm text-muted-foreground mt-1">Quick form. We reply on WhatsApp.</p>
            <div className="mt-6"><LeadForm compact /></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Client stories</span>
            <h2 className="font-display text-3xl md:text-5xl mt-3">Trusted by farmers, families and investors</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 backdrop-blur">
                <div className="flex gap-1 text-accent">{"★★★★★"}</div>
                <p className="mt-4 text-primary-foreground/90 italic">"{t.text}"</p>
                <div className="mt-5 pt-4 border-t border-primary-foreground/10">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-primary-foreground/70">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE STRIP */}
      <section className="container py-16">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between bg-card border rounded-3xl p-8 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full gradient-sun grid place-items-center text-accent-foreground"><MapPin className="h-7 w-7" /></div>
            <div>
              <div className="font-display text-2xl text-primary">Pan-India service</div>
              <div className="text-sm text-muted-foreground">From Tamil Nadu to Punjab — we execute across every state.</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            {["Tamil Nadu","Karnataka","Kerala","Andhra","Telangana","Maharashtra","Gujarat","MP","UP","Punjab"].map(s => (
              <span key={s} className="px-3 py-1.5 rounded-full bg-muted text-foreground/80 inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-secondary" /> {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Index;
