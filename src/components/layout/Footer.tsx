import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/team-ias-logo.png";
import { SITE, waLink } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-24">
    <div className="container py-14 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-1">
        <div className="bg-background rounded-xl p-3 inline-block">
          <img src={logo} alt={SITE.name} className="h-44 md:h-52 w-auto" />
        </div>
        <p className="mt-4 text-sm text-primary-foreground/80">
          {SITE.tagline}. End-to-end agri solutions across India — built for yield, profit and longevity.
        </p>
      </div>

      <div>
        <h4 className="font-display text-lg mb-4">Services</h4>
        <ul className="space-y-2 text-sm">
          {SERVICES.slice(0, 6).map((s) => (
            <li key={s.slug}>
              <Link to={`/services/${s.slug}`} className="text-primary-foreground/75 hover:text-accent transition-smooth">
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg mb-4">Company</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/about" className="text-primary-foreground/75 hover:text-accent transition-smooth">About Us</Link></li>
          <li><Link to="/projects" className="text-primary-foreground/75 hover:text-accent transition-smooth">Projects Gallery</Link></li>
          <li><Link to="/investment" className="text-primary-foreground/75 hover:text-accent transition-smooth">Joint Venture</Link></li>
          <li><Link to="/contact" className="text-primary-foreground/75 hover:text-accent transition-smooth">Contact</Link></li>
          <li><a href={waLink()} target="_blank" rel="noreferrer" className="text-primary-foreground/75 hover:text-accent transition-smooth">WhatsApp Chat</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg mb-4">Get in Touch</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" /><a href={`tel:${SITE.phoneRaw}`} className="hover:text-accent">{SITE.phone}</a></li>
          <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" /><a href={`mailto:${SITE.email}`} className="hover:text-accent break-all">{SITE.email}</a></li>
          <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" /><span className="text-primary-foreground/80">{SITE.address}</span></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/15">
      <div className="container py-5 text-xs text-primary-foreground/60 flex flex-col md:flex-row gap-2 justify-between">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p>Pan-India service · {SITE.tagline}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
