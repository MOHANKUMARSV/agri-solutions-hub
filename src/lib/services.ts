import polyhouse from "@/assets/projects/polyhouse/cover-polyhouse.jpg";
import hydroponic from "@/assets/service-hydroponic.jpg";
import rooftop from "@/assets/service-rooftop.jpg";
import vertical from "@/assets/service-vertical.jpg";
import nursery from "@/assets/projects/nursery/cover-nursery.jpg";
import landscaping from "@/assets/projects/landscaping/cover-landscaping.jpg";
import solar from "@/assets/projects/solar-dryer/cover-solar-dryer.jpg";
import pondliner from "@/assets/service-pondliner.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  problem: string;
  solution: string;
  benefits: string[];
  roi: string;
};

export const SERVICES: Service[] = [
  {
    slug: "polyhouse",
    title: "Polyhouse Projects",
    short: "Climate-controlled greenhouses for year-round, high-yield farming.",
    image: polyhouse,
    problem: "Open-field farming is at the mercy of erratic weather, pests, and seasonal cycles — limiting income and predictability.",
    solution: "We design and build turnkey polyhouses (NVPH & climate-controlled) tailored to your crop, climate zone and budget — including drip, fogger, shade-net and fertigation systems.",
    benefits: [
      "Year-round cultivation, independent of season",
      "3–5× yield vs open field for crops like capsicum, gerbera, tomato",
      "Up to 90% water savings with drip + fertigation",
      "Eligible for NHB / state horticulture subsidies",
    ],
    roi: "Typical setup: ₹900–1,400 / sqm. Payback: 3–4 years for high-value crops.",
  },
  {
    slug: "hydroponic",
    title: "Hydroponic Projects",
    short: "Soilless farming with 90% less water and faster growth cycles.",
    image: hydroponic,
    problem: "Land scarcity, soil degradation and water shortage are pushing growers to look beyond traditional farming.",
    solution: "End-to-end hydroponic systems — NFT, DWC, Dutch Bucket — for leafy greens, exotic vegetables and strawberries. Includes nutrient dosing, pH control and grow-lights where needed.",
    benefits: [
      "Up to 90% water saving vs soil farming",
      "30–50% faster growth cycle",
      "No soil-borne diseases, minimal pesticides",
      "Premium pricing for clean, traceable produce",
    ],
    roi: "Setup: ₹1,800–2,800 / sqm. Returns: ₹400–800 / sqm / month for leafy greens.",
  },
  {
    slug: "rooftop-gardening",
    title: "Rooftop Gardening",
    short: "Turn unused rooftops into productive, beautiful kitchen gardens.",
    image: rooftop,
    problem: "Urban families want safe, chemical-free vegetables but lack land — and rooftops sit unused while heating up the building.",
    solution: "Custom rooftop kitchen gardens with raised beds, grow-bags, drip irrigation and waterproof leak-proof setup. Ongoing maintenance plans available.",
    benefits: [
      "Fresh, pesticide-free vegetables daily",
      "Reduces rooftop temperature by 4–6 °C",
      "Beautiful green space + family wellbeing",
      "Low maintenance with our service plans",
    ],
    roi: "Starter setup: ₹15,000–60,000 depending on rooftop size and design.",
  },
  {
    slug: "vertical-farming",
    title: "Vertical Farming",
    short: "Maximum yield from minimum footprint — perfect for cities & warehouses.",
    image: vertical,
    problem: "Land near demand centres is scarce and expensive. Traditional farming can't scale inside cities.",
    solution: "Modular vertical farms — NFT towers, A-frame and rack systems — with LED grow lighting, climate control and IoT monitoring.",
    benefits: [
      "10× more yield per sq.ft of floor area",
      "Year-round production close to your customers",
      "Predictable output and quality",
      "Ideal for restaurants, retailers and exporters",
    ],
    roi: "Setup: ₹3,500–6,000 / sqft. Payback: 4–5 years.",
  },
  {
    slug: "nursery",
    title: "Nursery Projects",
    short: "Healthy, disease-free seedlings — the foundation of every great harvest.",
    image: nursery,
    problem: "Poor-quality seedlings cause weak crops, low germination and uneven yields.",
    solution: "We set up commercial nurseries with shade-net houses, pro-trays, coco-peat media, mist irrigation and hardening areas — ready to produce lakhs of saplings per cycle.",
    benefits: [
      "95%+ germination with controlled conditions",
      "Uniform, vigorous seedlings",
      "Strong B2B demand from farmers & FPOs",
      "Recurring revenue through cycles",
    ],
    roi: "Setup: ₹400–700 / sqm. Margin: ₹1.5–4 per sapling depending on crop.",
  },
  {
    slug: "landscaping",
    title: "Landscaping & Gardening",
    short: "Designed outdoor spaces for homes, resorts, offices and institutions.",
    image: landscaping,
    problem: "Beautiful outdoor spaces need design, healthy plants and ongoing care — most providers do only one.",
    solution: "End-to-end landscape design + execution + maintenance: lawns, flower beds, ornamental trees, irrigation, lighting and hardscape.",
    benefits: [
      "Visible property value uplift",
      "Healthy, low-maintenance plant choices",
      "Single-window design + execution + AMC",
      "Suitable for villas, resorts, factories, schools",
    ],
    roi: "Custom quote based on area and design complexity.",
  },
  {
    slug: "solar-dryer",
    title: "Solar Dryer Projects",
    short: "Dry produce hygienically with the sun — and earn more per kilo.",
    image: solar,
    problem: "Open-sun drying causes contamination, color loss and 20–40% post-harvest loss.",
    solution: "Solar dryer domes and tunnels for turmeric, chillies, fruits, herbs and fish — hygienic, faster, and pest-free.",
    benefits: [
      "Higher quality, premium price for produce",
      "60–80% faster drying than open sun",
      "Zero electricity, low operating cost",
      "Subsidies available under MoFPI / state schemes",
    ],
    roi: "Setup: ₹1.2–4 lakh depending on size. Payback: 1–2 seasons.",
  },
  {
    slug: "pondliner",
    title: "Pondliner Projects",
    short: "Stop seepage. Store every drop. Scale your fish, prawn or irrigation pond.",
    image: pondliner,
    problem: "Earth ponds lose 30–60% water through seepage and need constant refilling.",
    solution: "Supply and installation of HDPE / LDPE / Geomembrane pondliners (250–1000 GSM) for farm ponds, aquaculture, biofloc and effluent storage.",
    benefits: [
      "Zero seepage, more usable water",
      "10+ year liner life with UV protection",
      "Cleaner water = healthier aquaculture",
      "Supports drip irrigation reservoirs",
    ],
    roi: "₹35–95 / sqm depending on GSM and material.",
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
