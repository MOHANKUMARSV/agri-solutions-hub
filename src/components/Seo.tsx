import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE } from "@/lib/site";

const SITE_URL = "https://indianagroservice.in";
const DEFAULT_OG = `${SITE_URL}/og-cover.jpg`;

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article" | "service";
  keywords?: string[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const Seo = ({ title, description, image, type = "website", keywords, jsonLd }: SeoProps) => {
  const { pathname } = useLocation();
  const url = `${SITE_URL}${pathname}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_OG;
  const fullTitle = title.includes(SITE.short) || title.includes(SITE.name)
    ? title
    : `${title} | ${SITE.name}`;

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    image: ogImage,
    url: SITE_URL,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "68/36 Thiru Gnana Sambandar St",
      addressLocality: "Perundurai",
      addressRegion: "Tamil Nadu",
      postalCode: "638051",
      addressCountry: "IN",
    },
    areaServed: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh", "Telangana", "India"],
    slogan: SITE.tagline,
  };

  // Auto-generated BreadcrumbList from the current pathname
  const segments = pathname.split("/").filter(Boolean);
  const prettify = (seg: string) =>
    decodeURIComponent(seg)
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL + "/",
    },
    ...segments.map((seg, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: prettify(seg),
      item: `${SITE_URL}/${segments.slice(0, i + 1).join("/")}`,
    })),
  ];
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  const extraLd = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const allLd = [orgLd, breadcrumbLd, ...extraLd];

  return (
    <Helmet>
      <title>{fullTitle.slice(0, 65)}</title>
      <meta name="description" content={description.slice(0, 158)} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description.slice(0, 158)} />
      <meta property="og:type" content={type === "service" ? "website" : type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description.slice(0, 158)} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">{JSON.stringify(allLd)}</script>
    </Helmet>
  );
};

export default Seo;
