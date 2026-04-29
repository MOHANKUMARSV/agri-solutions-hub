export const SITE = {
  name: "Indian Agro Service",
  short: "IAS",
  tagline: "The Farmer's Choice",
  phone: "+91 90950 22272",
  phoneRaw: "+919095022272",
  whatsapp: "919095022272",
  email: "service.indianagro@gmail.com",
  address: "68/36 Thiru Gnana Sambandar St, Perundurai, 638051, TN, IN",
  coverage: "Pan-India",
};

export const waLink = (msg = "Hello IAS, I'd like a free consultation.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
