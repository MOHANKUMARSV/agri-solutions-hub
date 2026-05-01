import ph01 from "@/assets/projects/polyhouse/ph-01.jpg";
import ph02 from "@/assets/projects/polyhouse/ph-02.jpg";
import ph03 from "@/assets/projects/polyhouse/ph-03.jpg";
import ph04 from "@/assets/projects/polyhouse/ph-04.jpg";
import ph05 from "@/assets/projects/polyhouse/ph-05.jpg";
import ph06 from "@/assets/projects/polyhouse/ph-06.jpg";
import ph07 from "@/assets/projects/polyhouse/ph-07.jpg";
import ph08 from "@/assets/projects/polyhouse/ph-08.jpg";
import ph09 from "@/assets/projects/polyhouse/ph-09.jpg";

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
];
