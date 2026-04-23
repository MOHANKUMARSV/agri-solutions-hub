import { Award, HandshakeIcon, Leaf, Target, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import logo from "@/assets/logo-stacked.jpg";

const values = [
  { icon: Leaf, title: "Farmer-first", desc: "Every project is judged by one question — does it make the farmer more profitable?" },
  { icon: Target, title: "Outcome-focused", desc: "We design for yield and ROI, not just structure and size." },
  { icon: HandshakeIcon, title: "Transparent", desc: "Honest pricing, clear timelines and no hidden charges. Ever." },
  { icon: Users, title: "Pan-India team", desc: "Trained crews and partners across India for fast, on-site execution." },
];

const About = () => (
  <>
    <PageHeader eyebrow="About Us" title="Building India's next-generation agri infrastructure" subtitle="We are a team of agronomists, engineers and farmers helping growers, urban gardeners and investors build profitable agri projects." />

    <section className="container py-20 grid lg:grid-cols-2 gap-12 items-center">
      <div className="rounded-3xl bg-muted/40 p-10 grid place-items-center border">
        <img src={logo} alt="Indian Agro Service" className="max-h-72 w-auto" />
      </div>
      <div>
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
        <h2 className="font-display text-3xl md:text-4xl mt-3 text-primary">A mission rooted in soil, scaled across India</h2>
        <p className="mt-5 text-foreground/80">
          Indian Agro Service was founded with one belief — that Indian farmers and growers deserve the same modern infrastructure, agronomy support, and financial outcomes as the best farms in the world.
        </p>
        <p className="mt-3 text-foreground/80">
          Today, we deliver turnkey polyhouse, hydroponic, vertical farming, rooftop garden, nursery, solar dryer and pondliner projects across India — backed by joint-venture models for investors who want to participate in the agri economy.
        </p>
        <p className="mt-3 text-foreground/80">
          Our work is simple to describe and hard to do: we make agriculture more productive, more profitable, and more predictable.
        </p>
      </div>
    </section>

    <section className="gradient-soft py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Values</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 text-primary">What we believe</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-2xl p-6 border shadow-soft">
              <div className="h-12 w-12 rounded-xl gradient-leaf grid place-items-center text-primary-foreground"><v.icon className="h-6 w-6" /></div>
              <h3 className="font-display text-xl mt-5 text-primary">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container py-20">
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {[
          ["500+", "Projects delivered"],
          ["25+", "Crops we work with"],
          ["12+", "Years in the field"],
        ].map(([v, l]) => (
          <div key={l} className="rounded-2xl border bg-card p-8 shadow-soft">
            <div className="font-display text-5xl text-primary">{v}</div>
            <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{l}</div>
          </div>
        ))}
      </div>
    </section>

    <CTASection title="Want to work with us?" subtitle="Whether you're a farmer, urban gardener or investor — we'd love to hear about your goals." />
  </>
);

export default About;
