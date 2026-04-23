import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

type Props = {
  defaultService?: string;
  compact?: boolean;
};

const LeadForm = ({ defaultService, compact }: Props) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    service: defaultService || "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please share your name and phone number.");
      return;
    }
    setLoading(true);
    const text =
      `New enquiry — ${SITE.name}\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Location: ${form.location || "—"}\n` +
      `Service: ${form.service || "—"}\n` +
      `Message: ${form.message || "—"}`;
    setTimeout(() => {
      window.open(waLink(text), "_blank");
      toast.success("Thanks! Opening WhatsApp to confirm your enquiry.");
      setLoading(false);
    }, 400);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={compact ? "" : "grid md:grid-cols-2 gap-4"}>
        <div className="space-y-1.5">
          <Label htmlFor="name">Your Name *</Label>
          <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ravi Kumar" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone / WhatsApp *</Label>
          <Input id="phone" required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="98xxxxxxxx" />
        </div>
      </div>
      <div className={compact ? "" : "grid md:grid-cols-2 gap-4"}>
        <div className="space-y-1.5">
          <Label htmlFor="location">Location (City / State)</Label>
          <Input id="location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Coimbatore, TN" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="service">Interested Service</Label>
          <Input id="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} placeholder="e.g. Polyhouse" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Tell us briefly about your project</Label>
        <Textarea id="message" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Land size, crop, timeline…" />
      </div>
      <Button type="submit" disabled={loading} size="lg" className="w-full gap-2 bg-primary hover:bg-primary/90">
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        Get Free Consultation
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        We'll respond on WhatsApp within working hours. No spam.
      </p>
    </form>
  );
};

export default LeadForm;
