import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

const CTASection = ({
  title = "Ready to start your agri project?",
  subtitle = "Get a free consultation with our experts. No obligation.",
}: { title?: string; subtitle?: string }) => (
  <section className="container my-20">
    <div className="rounded-3xl gradient-leaf p-10 md:p-14 text-primary-foreground text-center shadow-elegant relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary-glow/20 blur-3xl" />
      <div className="relative">
        <h2 className="font-display text-3xl md:text-5xl">{title}</h2>
        <p className="mt-4 text-primary-foreground/85 max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a href={waLink()} target="_blank" rel="noreferrer">
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
