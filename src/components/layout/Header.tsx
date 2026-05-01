import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/ias-full-logo.png";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/investment", label: "Joint Venture" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-smooth",
        scrolled ? "bg-background/95 backdrop-blur shadow-soft" : "bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2" aria-label={SITE.name}>
          <img src={logo} alt={`${SITE.name} logo`} className="h-12 md:h-16 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-smooth",
                  isActive
                    ? "text-primary bg-muted"
                    : "text-foreground/75 hover:text-primary hover:bg-muted/60",
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={`tel:${SITE.phoneRaw}`}>
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </Button>
          </a>
          <Link to="/contact">
            <Button size="sm" className="bg-primary hover:bg-primary/90">Free Consultation</Button>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md hover:bg-muted"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="container py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    isActive ? "text-primary bg-muted" : "text-foreground/80",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a href={`tel:${SITE.phoneRaw}`} className="mt-2">
              <Button variant="outline" className="w-full gap-2">
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
