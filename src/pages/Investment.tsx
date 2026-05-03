import { CheckCircle2, ShieldCheck, TrendingUp, Wallet } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";
import Seo from "@/components/Seo";
import jvImg from "@/assets/jv-partnership.jpg";

const steps = [
  ["You bring capital", "Investors fund the project setup — polyhouse, hydroponic farm, nursery, etc."],
  ["We bring expertise", "IAS handles design, execution, agronomy, operations and sales."],
  ["Profits are shared", "Net returns are shared per agreement, with full transparency and reporting."],
];

const tiers = [
  { name: "Starter", invest: "₹10–25 L", project: "Small polyhouse / nursery", returns: "18–24% IRR target", lockin: "5 years" },
  { name: "Growth", invest: "₹25 L – 1 Cr", project: "Mid-scale polyhouse / hydroponics", returns: "20–28% IRR target", lockin: "5–7 years" },
  { name: "Enterprise", invest: "₹1 Cr+", project: "Multi-acre integrated farm", returns: "Custom structure", lockin: "Negotiable" },
];

const Investment = () => (
  <>
    <Seo
      title="Agri Joint Venture & Farm Investment Projects in India"
      description="Invest in Indian agriculture the modern way. IAS designs, builds and operates polyhouse, hydroponic and integrated farm JV projects across Tamil Nadu and India with transparent profit sharing."
      keywords={["agri investment India","polyhouse joint venture","hydroponic farm investment","farm IRR Tamil Nadu","agritech JV"]}
    />
    <PageHeader
      eyebrow="Joint Venture Projects"
      title="Invest in Indian agriculture, the modern way"
      subtitle="Partner with IAS to build and operate profitable agri projects — without the operational headache."
    />

    <section className="container py-16 grid lg:grid-cols-2 gap-12 items-center">
      <img src={jvImg} alt="Joint venture partnership" loading="lazy" className="rounded-3xl shadow-elegant w-full" width={1280} height={800} />
      <div>
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">How it works</span>
        <h2 className="font-display text-3xl md:text-4xl mt-3 text-primary">A simple, transparent partnership</h2>
        <ul className="mt-6 space-y-5">
          {steps.map(([t, d], i) => (
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
    </section>

    <section className="gradient-soft py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Investment tiers</span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 text-primary">Choose a tier that fits your goals</h2>
          <p className="mt-3 text-muted-foreground text-sm">Indicative ranges. Final structure agreed in writing per project.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-7 border shadow-soft">
              <div className="font-display text-2xl text-primary">{t.name}</div>
              <div className="mt-1 text-3xl font-bold text-secondary">{t.invest}</div>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" /> {t.project}</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" /> {t.returns}</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" /> Lock-in: {t.lockin}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container py-20 grid lg:grid-cols-2 gap-10">
      <div>
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Risk & Trust</span>
        <h2 className="font-display text-3xl md:text-4xl mt-3 text-primary">Honest about risk. Built to manage it.</h2>
        <ul className="mt-6 space-y-4">
          {[
            { icon: ShieldCheck, t: "Legal agreement", d: "Every JV is governed by a written, registered agreement covering returns, exit and disputes." },
            { icon: TrendingUp, t: "Quarterly reporting", d: "Receive transparent quarterly P&L, yield reports and bank statements." },
            { icon: Wallet, t: "Insurance & contingency", d: "Crop insurance and contingency reserves are built into every project budget." },
          ].map((r) => (
            <li key={r.t} className="flex gap-4 bg-muted/40 rounded-xl border p-4">
              <r.icon className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-primary">{r.t}</div>
                <div className="text-sm text-muted-foreground">{r.d}</div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          Agriculture carries weather, market and operational risks. We do not promise guaranteed returns — but we structure every JV to maximise the chance of strong, repeatable outcomes.
        </p>
      </div>
      <div className="bg-card border rounded-3xl p-8 shadow-elegant">
        <h3 className="font-display text-2xl text-primary">Request the JV brochure</h3>
        <p className="text-sm text-muted-foreground mt-1">We'll share a detailed pitch deck and call you back.</p>
        <div className="mt-6"><LeadForm defaultService="Joint Venture Project" /></div>
      </div>
    </section>

    <CTASection title="Ready to explore a JV?" subtitle="Talk to our investment team. Confidential, no-pressure conversation." />
  </>
);

export default Investment;
