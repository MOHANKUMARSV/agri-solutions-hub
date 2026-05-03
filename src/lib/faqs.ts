// Centralised FAQs for FAQPage JSON-LD (rich-result eligible) and on-page use.

export type FAQ = { q: string; a: string };

export const buildFaqLd = (faqs: FAQ[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

// ---------- Service-specific FAQs ----------
export const SERVICE_FAQS: Record<string, FAQ[]> = {
  polyhouse: [
    { q: "How much does it cost to build a polyhouse in Tamil Nadu?", a: "A naturally-ventilated polyhouse typically costs ₹900–1,400 per sqm in Tamil Nadu, depending on structure (GI tubular), film grade, and accessories like fogger, drip and shade-net. Climate-controlled fan-pad polyhouses cost more." },
    { q: "Which crops give the best ROI in a polyhouse?", a: "Coloured capsicum, gerbera, tomato, cucumber and exotic leafy greens are the highest-ROI polyhouse crops in South India, with payback typically in 3–4 years." },
    { q: "Are subsidies available for polyhouse construction in India?", a: "Yes. NHB and state horticulture departments offer 50%+ subsidy on polyhouse projects for eligible farmers. We help with documentation and DPR." },
    { q: "How long does polyhouse construction take?", a: "A 1-acre polyhouse usually takes 45–75 days from site survey to handover, depending on weather and material availability." },
  ],
  hydroponic: [
    { q: "Is hydroponic farming profitable in India?", a: "Yes. Leafy greens grown hydroponically earn ₹400–800 per sqm per month in metros and tier-1 cities. Strawberries and exotic herbs earn more with the right buyers." },
    { q: "How much water does a hydroponic farm save?", a: "Hydroponic systems use up to 90% less water than soil farming because nutrient solution is recirculated." },
    { q: "What is the setup cost for a hydroponic farm?", a: "Commercial NFT/Dutch-bucket hydroponic setups in India cost ₹1,800–2,800 per sqm including structure, plumbing, dosing and grow systems." },
    { q: "Do I need a polyhouse for hydroponics?", a: "For commercial hydroponics in India, a polyhouse or shade-net cover is strongly recommended to control temperature, humidity and pests." },
  ],
  "rooftop-gardening": [
    { q: "Will a rooftop garden damage my roof?", a: "No, when installed properly. We use waterproof liners, raised beds and grow-bags to ensure zero seepage and full roof protection." },
    { q: "How much does a rooftop garden cost in Coimbatore or Erode?", a: "A starter rooftop kitchen garden costs ₹15,000–60,000 depending on rooftop area, raised beds, drip irrigation and plant choices." },
    { q: "Do you provide maintenance for rooftop gardens?", a: "Yes, we offer monthly and quarterly maintenance plans covering pruning, fertigation, pest control and replanting." },
  ],
  "vertical-farming": [
    { q: "How much yield can a vertical farm produce?", a: "Vertical farms typically produce 8–10× more yield per sq.ft of floor area compared to open-field farming, with year-round consistency." },
    { q: "What does a vertical farm setup cost in India?", a: "Indoor vertical farms cost ₹3,500–6,000 per sqft including racks, LED grow lights, climate control and plumbing. Payback is typically 4–5 years." },
    { q: "Are vertical farms suitable for cities?", a: "Yes. Vertical farms work inside warehouses, basements and rooftops in cities like Bengaluru, Chennai and Hyderabad — close to retail and restaurant demand." },
  ],
  nursery: [
    { q: "What does it cost to set up a commercial nursery?", a: "A commercial pro-tray nursery with shade-net, mist irrigation and hardening area costs around ₹400–700 per sqm in India." },
    { q: "Which seedlings are most in demand?", a: "Tomato, chilli, capsicum, brinjal, papaya and forestry saplings see strong recurring demand from farmers and FPOs in Tamil Nadu and Karnataka." },
    { q: "What germination rate can I expect?", a: "With pro-trays, coco-peat and controlled mist irrigation, germination rates of 95%+ are achievable for most vegetable seeds." },
  ],
  landscaping: [
    { q: "Do you provide design and execution both?", a: "Yes. Indian Agro Service offers end-to-end landscaping — design, execution, irrigation, lighting and AMC — under one accountable team." },
    { q: "What types of properties do you landscape?", a: "We landscape villas, resorts, factories, schools, hospitals and corporate campuses across Tamil Nadu and South India." },
    { q: "Do you offer annual maintenance contracts?", a: "Yes, we offer monthly and annual maintenance contracts covering lawn care, pruning, fertigation and replanting." },
  ],
  "solar-dryer": [
    { q: "What can be dried in a solar dryer?", a: "Turmeric, chilli, ginger, fruits, herbs, fish and flowers are commonly dried in solar dryers — with better colour retention and zero contamination vs open sun." },
    { q: "How much does a solar dryer cost?", a: "Solar dryer domes and tunnels cost ₹1.2–4 lakh depending on size and capacity. Payback is typically 1–2 drying seasons." },
    { q: "Are subsidies available for solar dryers?", a: "Yes. MoFPI and several state schemes offer subsidies for solar dryers under food processing and post-harvest categories." },
  ],
  pondliner: [
    { q: "What pondliner thickness should I use?", a: "For farm ponds and irrigation reservoirs, 250–500 GSM HDPE liners are standard. For aquaculture and biofloc tanks, 500–1000 GSM is recommended." },
    { q: "How long does a pondliner last?", a: "UV-stabilised HDPE pondliners typically last 10+ years in Indian conditions when installed correctly." },
    { q: "How much does pondliner installation cost?", a: "Pondliner supply and installation costs ₹35–95 per sqm in India, depending on GSM, material and site conditions." },
  ],
};

// ---------- Landing / page-level FAQs ----------
export const HOME_FAQS: FAQ[] = [
  { q: "What services does Indian Agro Service provide?", a: "We design and build polyhouses, hydroponics, vertical farms, nurseries, rooftop gardens, landscaping, solar dryers and pondliner projects across India — turnkey, with crop and AMC support." },
  { q: "Where is Indian Agro Service located and which areas do you serve?", a: "We are based in Perundurai, Tamil Nadu and execute projects across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana and the rest of India." },
  { q: "Do you help with subsidies and joint ventures?", a: "Yes. We assist with NHB / state horticulture subsidy documentation and offer joint-venture (JV) models for investors who want operated farms." },
  { q: "How do I get a quote?", a: "Fill the consultation form or message us on WhatsApp. We respond within 24 hours and offer a free site consultation." },
];

export const ABOUT_FAQS: FAQ[] = [
  { q: "How long has Indian Agro Service been in business?", a: "Indian Agro Service has 12+ years of experience delivering 500+ agri-infrastructure projects across India." },
  { q: "What makes IAS different from other agri companies?", a: "We are turnkey, ROI-focused and offer lifetime crop and agronomy support — not just installation. One accountable team handles design, execution and handover." },
  { q: "Do you work with first-time farmers?", a: "Yes. We regularly help first-time growers, NRIs and corporate investors plan and execute their first protected-cultivation project." },
];

export const SERVICES_FAQS: FAQ[] = [
  { q: "Which is the best agri project for a 1-acre land in Tamil Nadu?", a: "For a 1-acre site, polyhouse cultivation of capsicum/gerbera or hydroponic leafy greens typically deliver the strongest ROI in Tamil Nadu." },
  { q: "Can you handle the full project end-to-end?", a: "Yes. We provide design, structure, irrigation, fertigation, planting and post-harvest support as a single turnkey contract." },
  { q: "Do you offer EPC and AMC together?", a: "Yes — EPC (engineering, procurement, construction) plus AMC (annual maintenance contract) is our most common engagement model." },
];

export const PROJECTS_FAQS: FAQ[] = [
  { q: "Where can I see Indian Agro Service's past projects?", a: "Our Projects page features executed polyhouse, nursery, hydroponic, vertical farm, rooftop garden, landscaping, solar dryer and pondliner projects across South India." },
  { q: "Can I visit a live project site?", a: "Yes. On request we arrange site visits to recently completed projects in Tamil Nadu and Karnataka." },
];

export const PRODUCTS_FAQS: FAQ[] = [
  { q: "Do you supply only materials, or also installation?", a: "We supply structures, films, drip, fertigation, pondliners and accessories — and also offer full installation across India." },
  { q: "Can I buy a polyhouse film or pondliner directly?", a: "Yes, contact us for material-only quotes including delivery to your site." },
];

export const CROPS_FAQS: FAQ[] = [
  { q: "Which crops are best for protected cultivation in India?", a: "Capsicum, tomato, cucumber, gerbera, lettuce, strawberry, muskmelon and chilli are the most successful crops under polyhouse and hydroponic systems in India." },
  { q: "Do you provide crop and agronomy support?", a: "Yes. After handover we provide ongoing crop guidance, nutrient schedules and pest-management support." },
];

export const INVESTMENT_FAQS: FAQ[] = [
  { q: "Do you offer joint-venture (JV) farming models?", a: "Yes. Indian Agro Service partners with land-owners and investors on JV polyhouse, hydroponic and vertical farms with transparent profit-sharing." },
  { q: "What is the typical payback period for an agri investment?", a: "Polyhouse projects typically pay back in 3–4 years and hydroponic projects in 3–5 years, depending on crop and market access." },
  { q: "What is the minimum investment to start?", a: "Meaningful commercial projects start around ₹15–25 lakh for a small polyhouse or hydroponic unit; larger JV farms can run into crores." },
];

export const CONTACT_FAQS: FAQ[] = [
  { q: "How quickly does Indian Agro Service respond?", a: "We respond to every enquiry within 24 hours, usually on WhatsApp or phone." },
  { q: "Do you offer free site visits?", a: "Yes — we offer a free initial consultation. On-site surveys for serious projects are also free within Tamil Nadu." },
  { q: "Where is your office?", a: "Our office is at 68/36 Thiru Gnana Sambandar Street, Perundurai, Tamil Nadu 638051." },
];
