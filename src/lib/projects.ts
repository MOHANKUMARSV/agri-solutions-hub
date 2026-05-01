import ph01 from "@/assets/projects/polyhouse/ph-01.jpg";
import ph02 from "@/assets/projects/polyhouse/ph-02.jpg";
import ph03 from "@/assets/projects/polyhouse/ph-03.jpg";
import ph04 from "@/assets/projects/polyhouse/ph-04.jpg";
import ph05 from "@/assets/projects/polyhouse/ph-05.jpg";
import ph06 from "@/assets/projects/polyhouse/ph-06.jpg";
import ph07 from "@/assets/projects/polyhouse/ph-07.jpg";
import ph08 from "@/assets/projects/polyhouse/ph-08.jpg";
import ph09 from "@/assets/projects/polyhouse/ph-09.jpg";

import ls01 from "@/assets/projects/landscaping/ls-01.jpg";
import ls02 from "@/assets/projects/landscaping/ls-02.jpg";
import ls03 from "@/assets/projects/landscaping/ls-03.jpg";
import ls04 from "@/assets/projects/landscaping/ls-04.jpg";
import ls05 from "@/assets/projects/landscaping/ls-05.jpg";

export type ProjectPhoto = {
  id: string;
  image: string;
  caption: string;
};

export type ProjectCategory = {
  key: string;
  title: string;
  description: string;
  photos: ProjectPhoto[];
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    key: "polyhouse",
    title: "Polyhouse Projects",
    description:
      "Naturally ventilated and fan-pad polyhouses built across Tamil Nadu — from single-span tunnels to multi-span gutter-connected structures with NHB / MIDH subsidy compliance.",
    photos: [
      { id: "ph-08", image: ph08, caption: "Multi-span polyhouse — Vadipatti, Madurai (2,000 sq.m.)" },
      { id: "ph-07", image: ph07, caption: "Side ventilation & gutter system — Madurai" },
      { id: "ph-09", image: ph09, caption: "Government-approved NHB project board" },
      { id: "ph-01", image: ph01, caption: "Internal arch structure with 200µ UV film" },
      { id: "ph-05", image: ph05, caption: "Centre ridge ventilator — gutter-connected span" },
      { id: "ph-03", image: ph03, caption: "Long-bay multi-span — interior view" },
      { id: "ph-06", image: ph06, caption: "Wide-span hoop structure with shade net" },
      { id: "ph-02", image: ph02, caption: "Side wall insect net & curtain rollup" },
      { id: "ph-04", image: ph04, caption: "Top ridge ventilation detail" },
    ],
  },
  {
    key: "landscaping",
    title: "Landscaping & Gardening",
    description:
      "Designed green spaces, ornamental cultivation and managed plantings — from grow-bag layouts to dense canopy installations executed for client sites across Tamil Nadu.",
    photos: [
      { id: "ls-04", image: ls04, caption: "Lush turmeric canopy under managed shade structure" },
      { id: "ls-01", image: ls01, caption: "Precision row layout with drip irrigation & ground cover" },
      { id: "ls-05", image: ls05, caption: "Dense ornamental greenery — mature growth stage" },
      { id: "ls-02", image: ls02, caption: "Large-format plot with weed-mat and trellis system" },
      { id: "ls-03", image: ls03, caption: "Mixed-bed planting with leafy ornamentals" },
    ],
  },
];

// Per-service photo map: cover image + small gallery (uses processed real project photos
// where available, falls back to the service's own image otherwise).
export type ServicePhotos = {
  cover?: string;
  gallery: { image: string; caption: string }[];
};

export const SERVICE_PHOTOS: Record<string, ServicePhotos> = {
  polyhouse: {
    gallery: [
      { image: ph08, caption: "Multi-span polyhouse — Madurai" },
      { image: ph07, caption: "Side ventilation & gutter" },
      { image: ph01, caption: "200µ UV film, arch structure" },
      { image: ph05, caption: "Centre ridge ventilator" },
      { image: ph06, caption: "Wide-span with shade net" },
      { image: ph09, caption: "NHB-approved project" },
    ],
  },
  landscaping: {
    gallery: [
      { image: ls04, caption: "Lush canopy — managed shade" },
      { image: ls01, caption: "Precision row layout" },
      { image: ls05, caption: "Dense ornamental greenery" },
      { image: ls02, caption: "Large-format planting" },
      { image: ls03, caption: "Mixed-bed leafy ornamentals" },
    ],
  },
};
