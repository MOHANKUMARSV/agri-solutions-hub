import { Link } from "react-router-dom";
import { Service } from "@/lib/services";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service }: { service: Service }) => (
  <Link
    to={`/services/${service.slug}`}
    className="group rounded-2xl overflow-hidden bg-card border shadow-soft hover:shadow-elegant transition-smooth flex flex-col"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        width={1280}
        height={800}
        className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
    </div>
    <div className="p-5 flex-1 flex flex-col">
      <h3 className="font-display text-xl text-primary">{service.title}</h3>
      <p className="text-sm text-muted-foreground mt-2 flex-1">{service.short}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-smooth">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  </Link>
);

export default ServiceCard;
