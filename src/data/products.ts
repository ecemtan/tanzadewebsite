/* ═══════════════════════════════════════════════════
   TANZADE KOZMETIK — DEMO PRODUCT DATA
   ═══════════════════════════════════════════════════ */

import type { Product } from "@/types";

export const products: Product[] = [
  // ─── Produkt by Tanzade ───
  {
    id: "prd-001",
    name: "Revitalising Hand Wash",
    slug: "revitalising-hand-wash",
    brand: "Produkt by Tanzade",
    category: "hand-body",
    description:
      "A gentle yet effective hand wash formulated with botanical extracts of rosemary and bergamot. Cleanses without stripping moisture, leaving hands feeling refreshed and subtly scented.",
    price: 28.0,
    currency: "USD",
    stock: 45,
    images: [],
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: "prd-002",
    name: "Nourishing Body Balm",
    slug: "nourishing-body-balm",
    brand: "Produkt by Tanzade",
    category: "hand-body",
    description:
      "Rich, deeply hydrating body balm with shea butter and vitamin E. Absorbs quickly to restore dry skin's natural barrier. Unscented for sensitive skin.",
    price: 42.0,
    currency: "USD",
    stock: 32,
    images: [],
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: "prd-003",
    name: "Purifying Facial Cleanser",
    slug: "purifying-facial-cleanser",
    brand: "Produkt by Tanzade",
    category: "skin-care",
    description:
      "A considered cleansing gel that removes impurities while maintaining the skin's natural pH balance. Infused with green tea extract and chamomile.",
    price: 36.0,
    currency: "USD",
    stock: 60,
    images: [],
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: "prd-004",
    name: "Restorative Night Serum",
    slug: "restorative-night-serum",
    brand: "Produkt by Tanzade",
    category: "skin-care",
    description:
      "A concentrated night serum with retinol, hyaluronic acid, and squalane. Works through the night to reduce fine lines and restore skin's luminosity.",
    price: 68.0,
    currency: "USD",
    stock: 25,
    images: [],
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: "prd-005",
    name: "Volumising Shampoo",
    slug: "volumising-shampoo",
    brand: "Produkt by Tanzade",
    category: "hair-care",
    description:
      "Lightweight shampoo that cleanses and lifts from root to tip. Formulated with biotin and panthenol for visible volume without residue.",
    price: 32.0,
    currency: "USD",
    stock: 40,
    images: [],
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: false,
  },

  // ─── MEEW ───
  {
    id: "mew-001",
    name: "Botanical Hair Oil",
    slug: "botanical-hair-oil",
    brand: "MEEW",
    category: "hair-care",
    description:
      "A luxurious blend of argan, jojoba, and camellia oils that nourishes and adds a refined sheen to all hair types. Lightweight and non-greasy.",
    price: 48.0,
    currency: "USD",
    stock: 35,
    images: [],
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: "mew-002",
    name: "Hydrating Conditioner",
    slug: "hydrating-conditioner",
    brand: "MEEW",
    category: "hair-care",
    description:
      "Intensive moisture conditioner with avocado butter and silk proteins. Detangles, softens, and protects against environmental stress.",
    price: 34.0,
    currency: "USD",
    stock: 50,
    images: [],
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: false,
  },
  {
    id: "mew-003",
    name: "Citrus Body Wash",
    slug: "citrus-body-wash",
    brand: "MEEW",
    category: "hand-body",
    description:
      "An invigorating body wash with cold-pressed citrus oils and aloe vera. Gently foams to cleanse and uplift the senses.",
    price: 26.0,
    currency: "USD",
    stock: 55,
    images: [],
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: "mew-004",
    name: "Rose Petal Body Lotion",
    slug: "rose-petal-body-lotion",
    brand: "MEEW",
    category: "hand-body",
    description:
      "Delicate body lotion with Damascus rose water and macadamia oil. Hydrates and leaves a whisper of floral scent on the skin.",
    price: 38.0,
    currency: "USD",
    stock: 42,
    images: [],
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },

  // ─── Dentalume ───
  {
    id: "dnt-001",
    name: "Whitening Toothpaste",
    slug: "whitening-toothpaste",
    brand: "Dentalume",
    category: "oral-care",
    description:
      "Premium whitening toothpaste with activated charcoal and peppermint. Gently removes surface stains while strengthening enamel.",
    price: 18.0,
    currency: "USD",
    stock: 80,
    images: [],
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: "dnt-002",
    name: "Sensitive Care Toothpaste",
    slug: "sensitive-care-toothpaste",
    brand: "Dentalume",
    category: "oral-care",
    description:
      "Formulated for sensitive teeth and gums with potassium nitrate and fluoride. Provides relief while delivering thorough cleaning.",
    price: 16.0,
    currency: "USD",
    stock: 70,
    images: [],
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: "dnt-003",
    name: "Herbal Mouthwash",
    slug: "herbal-mouthwash",
    brand: "Dentalume",
    category: "oral-care",
    description:
      "Alcohol-free mouthwash with sage, eucalyptus, and tea tree oil. Freshens breath and supports gum health with every rinse.",
    price: 22.0,
    currency: "USD",
    stock: 60,
    images: [],
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: false,
  },

  // ─── misWhite ───
  {
    id: "msw-001",
    name: "Eau de Lumière",
    slug: "eau-de-lumiere",
    brand: "misWhite",
    category: "perfume-fragrance",
    description:
      "A luminous fragrance that opens with white tea and bergamot, unfolds into jasmine and iris, and rests on a base of sandalwood and musk.",
    price: 120.0,
    currency: "USD",
    stock: 15,
    images: [],
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: "msw-002",
    name: "Velvet Noir Eau de Parfum",
    slug: "velvet-noir-edp",
    brand: "misWhite",
    category: "perfume-fragrance",
    description:
      "A deep, enveloping fragrance with notes of black amber, vanilla orchid, and vetiver. An evening scent of quiet intensity.",
    price: 135.0,
    currency: "USD",
    stock: 12,
    images: [],
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: "msw-003",
    name: "Luminance Face Cream",
    slug: "luminance-face-cream",
    brand: "misWhite",
    category: "skin-care",
    description:
      "A radiance-boosting moisturiser with pearl extract, niacinamide, and vitamin C. Evens skin tone and imparts a natural, dewy glow.",
    price: 72.0,
    currency: "USD",
    stock: 28,
    images: [],
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: "msw-004",
    name: "Crystal Eye Serum",
    slug: "crystal-eye-serum",
    brand: "misWhite",
    category: "skin-care",
    description:
      "A lightweight eye serum with caffeine and peptides that reduces puffiness and dark circles. Instantly brightens the under-eye area.",
    price: 58.0,
    currency: "USD",
    stock: 30,
    images: [],
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
  },
];

/** Get all unique brands */
export function getBrands(): string[] {
  return [...new Set(products.map((p) => p.brand))];
}

/** Get all unique categories */
export function getCategorySlugs(): string[] {
  return [...new Set(products.map((p) => p.category))];
}

/** Find a product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Get products filtered by category */
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

/** Get products filtered by brand */
export function getProductsByBrand(brand: string): Product[] {
  return products.filter((p) => p.brand === brand);
}

/** Get featured products */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

/** Get new arrivals */
export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNewArrival);
}

/** Get best sellers */
export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller);
}
