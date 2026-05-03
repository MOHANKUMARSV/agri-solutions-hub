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

import ns1 from "@/assets/projects/nursery/ns-1.jpg";
import ns2 from "@/assets/projects/nursery/ns-2.jpg";
import ns3 from "@/assets/projects/nursery/ns-3.jpg";
import ns4 from "@/assets/projects/nursery/ns-4.jpg";
import ns5 from "@/assets/projects/nursery/ns-5.jpg";
import ns6 from "@/assets/projects/nursery/ns-6.jpg";
import ns7 from "@/assets/projects/nursery/ns-7.jpg";

import sd01 from "@/assets/projects/solar-dryer/sd-01.jpg";
import sd02 from "@/assets/projects/solar-dryer/sd-02.jpg";
import sd03 from "@/assets/projects/solar-dryer/sd-03.jpg";
import sd04 from "@/assets/projects/solar-dryer/sd-04.jpg";
import sd05 from "@/assets/projects/solar-dryer/sd-05.jpg";
import sdCover from "@/assets/projects/solar-dryer/cover-solar-dryer.jpg";

import vf01 from "@/assets/projects/vertical-farming/vf-01.jpg";
import vf02 from "@/assets/projects/vertical-farming/vf-02.jpg";
import vf03 from "@/assets/projects/vertical-farming/vf-03.jpg";
import vf04 from "@/assets/projects/vertical-farming/vf-04.jpg";
import vf05 from "@/assets/projects/vertical-farming/vf-05.jpg";
import vf06 from "@/assets/projects/vertical-farming/vf-06.jpg";
import vfCover from "@/assets/projects/vertical-farming/cover-vertical-farming.jpg";

import rg01 from "@/assets/projects/rooftop-gardening/rg-01.jpg";
import rg02 from "@/assets/projects/rooftop-gardening/rg-02.jpg";
import rg03 from "@/assets/projects/rooftop-gardening/rg-03.jpg";
import rgCover from "@/assets/projects/rooftop-gardening/cover-rooftop-gardening.jpg";

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
    key: "nursery",
    title: "Nursery Projects",
    description:
      "Commercial seedling nurseries with shade-net & poly-cover structures, mist irrigation, pro-trays and coco-peat media — producing lakhs of healthy, uniform saplings per cycle.",
    photos: [
      { id: "ns-3", image: ns3, caption: "Naturally ventilated nursery — long bay layout" },
      { id: "ns-4", image: ns4, caption: "Tomato & chilli seedlings on raised beds" },
      { id: "ns-5", image: ns5, caption: "Mist irrigation under poly + shade-net cover" },
      { id: "ns-1", image: ns1, caption: "Shade-net nursery with pro-tray seedlings" },
      { id: "ns-2", image: ns2, caption: "Bulk pro-tray production for FPO supply" },
      { id: "ns-7", image: ns7, caption: "Tomato seedlings ready for transplanting" },
      { id: "ns-6", image: ns6, caption: "Hardening area — poly-cover nursery" },
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
  {
    key: "solar-dryer",
    title: "Solar Dryer Projects",
    description:
      "Tunnel-type solar dryer domes built with GI hoop frames and UV-stabilised polyethylene film — engineered for hygienic, faster drying of turmeric, chillies, fruits and herbs.",
    photos: [
      { id: "sd-02", image: sd02, caption: "Tunnel solar dryer under installation — exhaust fan & door fitted" },
      { id: "sd-01", image: sd01, caption: "GI hoop frame with UV-stabilised poly cover" },
      { id: "sd-03", image: sd03, caption: "Interior view — full arch span with side ventilation" },
      { id: "sd-04", image: sd04, caption: "Long-bay tunnel — uniform light diffusion" },
      { id: "sd-05", image: sd05, caption: "End-wall with exhaust fan & access door" },
    ],
  },
  {
    key: "rooftop-gardening",
    title: "Rooftop Gardening",
    description:
      "Rooftop kitchen gardens with steel-frame shade-net canopy, potted vegetables, herbs and flowering plants — turning unused terraces into productive, cool, green spaces.",
    photos: [
      { id: "rg-02", image: rg02, caption: "Steel-frame shade-net canopy over rooftop kitchen garden" },
      { id: "rg-01", image: rg01, caption: "Potted vegetables & herbs under green shade-net" },
      { id: "rg-03", image: rg03, caption: "Mature rooftop garden with mixed vegetable & ornamental pots" },
    ],
  },
  {
    key: "vertical-farming",
    title: "Vertical Farming",
    description:
      "Vertical PVC-tower and stacked-rack strawberry systems inside climate-controlled polyhouses — maximizing yield per sq.ft with drip-fed soilless media and shade-net cover.",
    photos: [
      { id: "vf-02", image: vf02, caption: "Multi-tier vertical PVC towers — strawberry corridor" },
      { id: "vf-01", image: vf01, caption: "A-frame vertical towers with fruiting strawberry plants" },
      { id: "vf-03", image: vf03, caption: "Stacked grow-bag beds under polyhouse cover" },
      { id: "vf-06", image: vf06, caption: "Drip-fed PVC tower system — close-up" },
      { id: "vf-04", image: vf04, caption: "High-density strawberry beds — full canopy stage" },
      { id: "vf-05", image: vf05, caption: "Mulched raised beds inside controlled polyhouse" },
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
    cover: ph08,
    gallery: [
      { image: ph08, caption: "Multi-span polyhouse — Madurai" },
      { image: ph07, caption: "Side ventilation & gutter" },
      { image: ph01, caption: "200µ UV film, arch structure" },
      { image: ph05, caption: "Centre ridge ventilator" },
      { image: ph06, caption: "Wide-span with shade net" },
      { image: ph09, caption: "NHB-approved project" },
    ],
  },
  nursery: {
    gallery: [
      { image: ns3, caption: "Naturally ventilated nursery" },
      { image: ns4, caption: "Seedlings on raised beds" },
      { image: ns5, caption: "Mist irrigation system" },
      { image: ns1, caption: "Shade-net pro-tray nursery" },
      { image: ns2, caption: "Bulk pro-tray production" },
      { image: ns7, caption: "Hardened tomato seedlings" },
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
  "solar-dryer": {
    cover: sdCover,
    gallery: [
      { image: sd02, caption: "Tunnel dryer — installation stage" },
      { image: sd01, caption: "GI hoop frame with UV poly cover" },
      { image: sd03, caption: "Interior arch — full span" },
      { image: sd04, caption: "Long-bay tunnel interior" },
      { image: sd05, caption: "End-wall with exhaust fan" },
    ],
  },
  "rooftop-gardening": {
    cover: rgCover,
    gallery: [
      { image: rg02, caption: "Shade-net canopy over rooftop garden" },
      { image: rg01, caption: "Potted vegetables & herbs" },
      { image: rg03, caption: "Mature mixed rooftop garden" },
    ],
  },
  "vertical-farming": {
    cover: vfCover,
    gallery: [
      { image: vf02, caption: "Multi-tier PVC tower corridor" },
      { image: vf01, caption: "A-frame strawberry towers" },
      { image: vf03, caption: "Stacked grow-bag beds" },
      { image: vf06, caption: "Drip-fed PVC tower — close-up" },
      { image: vf04, caption: "High-density strawberry beds" },
      { image: vf05, caption: "Mulched raised beds in polyhouse" },
    ],
  },
};
