import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import LeadForm from "@/components/LeadForm";
import { SITE, waLink } from "@/lib/site";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <>
    <PageHeader eyebrow="Contact Us" title="Let's build your agri project" subtitle="Reach out via call, WhatsApp, email — or send us a message. We respond within working hours." />

    <section className="container py-16 grid lg:grid-cols-5 gap-10">
      <div className="lg:col-span-2 space-y-4">
        <a href={`tel:${SITE.phoneRaw}`} className="block bg-card border rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-smooth">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl gradient-leaf grid place-items-center text-primary-foreground"><Phone className="h-5 w-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Call us</div>
              <div className="font-display text-xl text-primary">{SITE.phone}</div>
            </div>
          </div>
        </a>
        <a href={waLink()} target="_blank" rel="noreferrer" className="block bg-card border rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-smooth">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-[#25D366] grid place-items-center text-white"><MessageCircle className="h-5 w-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
              <div className="font-display text-xl text-primary">{SITE.phone}</div>
            </div>
          </div>
        </a>
        <a href={`mailto:${SITE.email}`} className="block bg-card border rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-smooth">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl gradient-sun grid place-items-center text-accent-foreground"><Mail className="h-5 w-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
              <div className="font-display text-lg text-primary break-all">{SITE.email}</div>
            </div>
          </div>
        </a>
        <div className="bg-card border rounded-2xl p-6 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-muted grid place-items-center text-primary"><MapPin className="h-5 w-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Office</div>
              <div className="text-sm text-foreground/80 mt-1">{SITE.address}</div>
            </div>
          </div>
        </div>
        <a href={waLink()} target="_blank" rel="noreferrer">
          <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#1ebe5b] text-white gap-2 mt-2">
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </Button>
        </a>
      </div>

      <div className="lg:col-span-3 bg-card border rounded-3xl p-8 shadow-elegant">
        <h2 className="font-display text-2xl md:text-3xl text-primary">Send us a message</h2>
        <p className="text-sm text-muted-foreground mt-1">We'll respond on WhatsApp shortly.</p>
        <div className="mt-6"><LeadForm /></div>
      </div>
    </section>

    <section className="container pb-20">
      <div className="rounded-3xl overflow-hidden border shadow-soft">
        <iframe
          title="IAS Office Location"
          src="https://www.google.com/maps?q=Perundurai,+Tamil+Nadu+638051&output=embed"
          className="w-full h-[360px] border-0"
          loading="lazy"
        />
      </div>
    </section>
  </>
);

export default Contact;
