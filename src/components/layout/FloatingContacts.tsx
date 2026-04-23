import { Phone, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

const FloatingContacts = () => (
  <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-elegant hover:scale-110 transition-smooth"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
    <a
      href={`tel:${SITE.phoneRaw}`}
      aria-label="Call us"
      className="h-14 w-14 rounded-full gradient-leaf text-primary-foreground grid place-items-center shadow-elegant hover:scale-110 transition-smooth md:hidden"
    >
      <Phone className="h-6 w-6" />
    </a>
  </div>
);

export default FloatingContacts;
