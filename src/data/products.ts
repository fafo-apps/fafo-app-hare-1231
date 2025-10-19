export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceCents: number;
  currency: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "silk-blazer",
    name: "Silk Blazer",
    description: "Hand-finished silk blazer with subtle sheen and tailored silhouette.",
    priceCents: 129900,
    currency: "USD",
    badge: "Signature",
  },
  {
    id: "p2",
    slug: "cashmere-crewneck",
    name: "Cashmere Crewneck",
    description: "Pure cashmere knit, featherlight feel with enduring warmth.",
    priceCents: 49900,
    currency: "USD",
  },
  {
    id: "p3",
    slug: "pleated-trouser",
    name: "Pleated Trouser",
    description: "Fluid drape and precise pleats for an elongated line.",
    priceCents: 38900,
    currency: "USD",
  },
  {
    id: "p4",
    slug: "silk-midi-skirt",
    name: "Silk Midi Skirt",
    description: "Bias-cut silk that moves with you, finished with a clean waistband.",
    priceCents: 42900,
    currency: "USD",
  },
  {
    id: "p5",
    slug: "tailored-coat",
    name: "Tailored Coat",
    description: "Double-faced wool-cashmere with hand-stitched detailing.",
    priceCents: 139900,
    currency: "USD",
    badge: "Limited",
  },
  {
    id: "p6",
    slug: "silk-shirt",
    name: "Silk Shirt",
    description: "Washed silk with relaxed fit and mother-of-pearl buttons.",
    priceCents: 34900,
    currency: "USD",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
