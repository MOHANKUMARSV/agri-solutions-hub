import cucumber from "@/assets/crops/cucumber.jpg";
import capsicum from "@/assets/crops/capsicum.jpg";
import strawberry from "@/assets/crops/strawberry.jpg";
import tomato from "@/assets/crops/tomato.jpg";
import lettuce from "@/assets/crops/lettuce.jpg";
import chilli from "@/assets/crops/chilli.jpg";
import gerbera from "@/assets/crops/gerbera.jpg";
import muskmelon from "@/assets/crops/muskmelon.jpg";

export type Crop = {
  slug: string;
  name: string;
  tamil?: string;
  image: string;
  tier: "primary" | "secondary";
  cycle: string;
  yield: string;
  system: string;
  market: string;
  description: string;
  highlights: string[];
};

export const CROPS: Crop[] = [
  {
    slug: "cucumber",
    name: "Cucumber",
    tamil: "Vellarikkai",
    image: cucumber,
    tier: "primary",
    cycle: "70–90 days · 3 cycles / year",
    yield: "80–120 tonnes / acre / year",
    system: "Polyhouse with vertical trellis & drip fertigation",
    market: "Retail chains, hotels, exporters",
    description:
      "Parthenocarpic (seedless) Dutch cucumber varieties grown vertically inside polyhouses — clean, straight, premium-grade fruit harvested almost year-round.",
    highlights: [
      "3× yield vs open field",
      "Premium price for blemish-free fruit",
      "Low pesticide load — exporter friendly",
      "Steady weekly cash flow",
    ],
  },
  {
    slug: "capsicum",
    name: "Coloured Capsicum",
    tamil: "Kudai Milagai",
    image: capsicum,
    tier: "primary",
    cycle: "9–10 month crop · 1 cycle / year",
    yield: "40–60 tonnes / acre",
    system: "Climate-controlled polyhouse, drip + fertigation",
    market: "Star hotels, modern retail, export",
    description:
      "Red, yellow and orange bell pepper hybrids cultivated under polyhouse for thick wall, glossy colour and uniform size — the highest-margin vegetable crop in protected cultivation.",
    highlights: [
      "₹80–180 / kg farm-gate price",
      "5–7× yield vs open field",
      "Long harvest window (6–7 months)",
      "Strong B2B demand year-round",
    ],
  },
  {
    slug: "strawberry",
    name: "Strawberry",
    tamil: "Strawberry",
    image: strawberry,
    tier: "primary",
    cycle: "5–6 month crop · winter season",
    yield: "8–12 tonnes / acre",
    system: "Polyhouse, raised beds or hydroponic A-frame",
    market: "Supermarkets, cafés, dessert brands, jam units",
    description:
      "California / Winter Dawn / Sweet Charlie varieties grown under controlled climate with mulch and drip — ideal for hill-station-style cultivation in plains using polyhouse cooling.",
    highlights: [
      "₹250–500 / kg farm-gate in season",
      "Premium niche with limited supply",
      "Excellent value-add (jam, pulp, frozen)",
      "Agri-tourism & u-pick potential",
    ],
  },
  {
    slug: "tomato",
    name: "Hybrid Tomato",
    tamil: "Thakkali",
    image: tomato,
    tier: "secondary",
    cycle: "8–9 month indeterminate crop",
    yield: "60–100 tonnes / acre",
    system: "Polyhouse with vertical trellis",
    market: "Retail, processing, export",
    description:
      "Indeterminate beef and cherry tomato hybrids grown vertically under polyhouse — disease-free, uniform fruit harvested for 6+ months continuously.",
    highlights: [
      "4–5× open-field yield",
      "Year-round harvest",
      "Lower pest pressure",
    ],
  },
  {
    slug: "lettuce",
    name: "Exotic Lettuce & Greens",
    tamil: "Lettuce",
    image: lettuce,
    tier: "secondary",
    cycle: "30–40 days · 9–10 cycles / year",
    yield: "Continuous weekly harvest",
    system: "Hydroponic NFT / DWC",
    market: "QSR chains, hotels, online grocers",
    description:
      "Lollo Rossa, Romaine, Butterhead, Iceberg and Asian greens grown soillessly with 90% less water — fast-cycle, high-margin, perfect for urban and peri-urban farms.",
    highlights: [
      "90% water saving",
      "30–50% faster growth",
      "₹200–400 / kg premium",
    ],
  },
  {
    slug: "chilli",
    name: "Hybrid Chilli",
    tamil: "Milagai",
    image: chilli,
    tier: "secondary",
    cycle: "6–8 month crop",
    yield: "12–18 tonnes / acre (green)",
    system: "Polyhouse or shade-net + drip",
    market: "Wholesale mandi, dehydration units, export",
    description:
      "South Indian hybrid chillies (Sankeshwar, Byadgi-style) grown under shade-net for higher yields, better colour and protection from thrips & viral diseases.",
    highlights: [
      "Reduced viral incidence",
      "Better colour & pungency",
      "Good for solar drying & powder units",
    ],
  },
  {
    slug: "gerbera",
    name: "Gerbera (Cut Flower)",
    tamil: "Gerbera Poo",
    image: gerbera,
    tier: "secondary",
    cycle: "Plant once, harvest 3 years",
    yield: "200–250 stems / sqm / year",
    system: "Polyhouse with raised beds, drip fertigation",
    market: "Florists, weddings, wholesale flower mandis",
    description:
      "High-margin cut-flower crop for the wedding and event market. One planting yields premium-quality stems for 3 years with minimal cycle gaps.",
    highlights: [
      "Steady daily cash flow",
      "₹4–8 per stem wholesale",
      "Long crop life (3 years)",
    ],
  },
  {
    slug: "muskmelon",
    name: "Muskmelon",
    tamil: "Mulampazham",
    image: muskmelon,
    tier: "secondary",
    cycle: "70–80 days · 2–3 cycles / year",
    yield: "15–25 tonnes / acre / cycle",
    system: "Polyhouse vertical or open-field with mulch + drip",
    market: "Modern retail, juice brands, export",
    description:
      "Honeydew and netted muskmelon hybrids grown vertically inside polyhouses — uniform sugar (TSS 13–15° Brix) and premium netted skin for retail packaging.",
    highlights: [
      "High Brix, retail-grade fruit",
      "Vertical growing saves space",
      "Excellent summer demand",
    ],
  },
];

export const getCrop = (slug: string) => CROPS.find((c) => c.slug === slug);
