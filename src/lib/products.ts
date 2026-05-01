import polyethylene from "@/assets/products/polyethylene-sheet.jpg";
import zigzag from "@/assets/products/zig-zag-wire.jpg";
import insectNet from "@/assets/products/insect-net.jpg";
import shadeNet from "@/assets/products/shade-net.jpg";
import gutter from "@/assets/products/gutter.jpg";
import aluProfile from "@/assets/products/aluminium-profile.jpg";
import nft from "@/assets/products/nft-channel.jpg";
import teflon from "@/assets/products/teflon-tape.jpg";
import upvc from "@/assets/products/upvc-solvent.jpg";
import cropNet from "@/assets/products/crop-net.jpg";
import twine from "@/assets/products/twine-rope.jpg";
import fasteners from "@/assets/products/fasteners.jpg";

export type Product = {
  slug: string;
  name: string;
  image: string;
  short: string;
};

export type ProductCategory = {
  key: string;
  title: string;
  description: string;
  products: Product[];
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    key: "polyhouse",
    title: "Polyhouse Products",
    description:
      "Premium materials and fittings for naturally ventilated and climate-controlled polyhouses — sourced for durability in Indian conditions.",
    products: [
      { slug: "polyethylene-sheet", name: "Polyethylene Sheet", image: polyethylene, short: "200 micron, UV-stabilised, 5-year warranty greenhouse film." },
      { slug: "zig-zag-wire", name: "Zig Zag Wires", image: zigzag, short: "Galvanised spring wires for tight, slip-free film locking." },
      { slug: "insect-net", name: "Insect Net", image: insectNet, short: "40 / 50 mesh insect-proof net for side ventilation." },
      { slug: "shade-net", name: "Shade Net", image: shadeNet, short: "35% / 50% / 75% green or white HDPE shade net rolls." },
      { slug: "gutter", name: "Gutter", image: gutter, short: "GI rain gutter channels for multi-span polyhouses." },
      { slug: "aluminium-profile", name: "Aluminium Profile", image: aluProfile, short: "Aluminium film locking profile with spring wire system." },
      { slug: "fasteners", name: "Nuts, Bolts & Screws", image: fasteners, short: "GI/SS fasteners, clamps and structural hardware." },
    ],
  },
  {
    key: "hydroponic",
    title: "Hydroponic Products",
    description:
      "Food-grade NFT channels, plumbing and trellising essentials for commercial hydroponic and soilless farms.",
    products: [
      { slug: "nft-channel", name: 'NFT Channel 2" / 3"', image: nft, short: "Food-grade UV-stabilised NFT channels in multiple sizes." },
      { slug: "teflon-tape", name: "Teflon Thread Tape 12mm", image: teflon, short: "Leak-proof PTFE thread sealing tape for fittings." },
      { slug: "upvc-solvent", name: "UPVC Solvent 473ML", image: upvc, short: "High-strength solvent cement for UPVC pipe joints." },
      { slug: "crop-net", name: "Crop Support Net", image: cropNet, short: "Trellis net for tomato, cucumber and capsicum vines." },
      { slug: "twine-rope", name: "Twine Rope", image: twine, short: "High-tensile poly twine for plant training and tying." },
    ],
  },
];
