/* ═══════════════════════════════════════════════════
   TANZADE KOZMETIK — SITE CONSTANTS
   ═══════════════════════════════════════════════════ */

import type { NavLink, Category, Brand } from "@/types";

/** Primary navigation links */
export const NAV_LINKS: NavLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Private Label", href: "/private-label" },
  { label: "Our Brands", href: "/brands" },
  { label: "Hand & Body", href: "/hand-body" },
  { label: "Hair Care", href: "/hair-care" },
  { label: "Skin Care", href: "/skin-care" },
  { label: "Oral Care", href: "/oral-care" },
  // { label: "Perfumes", href: "/shop?category=perfumes" },
  { label: "Men Editions", href: "/shop?category=men-edition" },
  { label: "Contact", href: "/contact" },
];

/** Action navigation items (icons) */
export const NAV_ACTIONS: NavLink[] = [
  { label: "Search", href: "/search", isAction: true },
  { label: "Create Account", href: "/auth/register", isAction: true },
  { label: "Cart", href: "/cart", isAction: true },
  { label: "Shop", href: "/shop", isAction: true },
];

/** Product categories */
export const CATEGORIES: Category[] = [
  {
    id: "hand-body",
    name: "Hand & Body",
    slug: "hand-body",
    description: "Nourishing formulations for skin that speaks of care and intention.",
  },
  {
    id: "hair-care",
    name: "Hair Care",
    slug: "hair-care",
    description: "Botanical blends that restore and elevate from root to tip.",
  },
  {
    id: "skin-care",
    name: "Skin Care",
    slug: "skin-care",
    description: "Considered preparations for the ritual of daily renewal.",
  },
  {
    id: "oral-care",
    name: "Oral Care",
    slug: "oral-care",
    description: "Refined oral care that transforms routine into ritual.",
  },
  {
    id: "perfumes",
    name: "Perfumes",
    slug: "perfumes",
    description: "Evocative scents composed with artistry and restraint.",
  },
  {
    id: "men-edition",
    name: "Men Editions",
    slug: "men-edition",
    description: "Sophisticated grooming essentials designed for the modern man.",
  },
  {
    id: "private-label",
    name: "Private Label",
    slug: "private-label",
    description: "Bespoke manufacturing for brands that demand distinction.",
  },
];

/** Brand definitions */
export const BRANDS: Brand[] = [
  {
    id: "produkt",
    name: "Produkt by Tanzade",
    slug: "produkt",
    tagline: "Engineered Simplicity",
    description:
      "A curated line of essential skincare and body care, rooted in functional elegance. Every formulation is stripped to its most effective components.",
  },
  {
    id: "meew",
    name: "MEEW",
    slug: "meew",
    tagline: "Nature Refined",
    description:
      "Where botanical science meets sensorial luxury. MEEW crafts hair and body care that honours nature's complexity through considered simplicity.",
  },
  {
    id: "dentalume",
    name: "Dentalume",
    slug: "dentalume",
    tagline: "Oral Sophistication",
    description:
      "Reimagining oral care through the lens of modern luxury. Dentalume elevates the everyday into an act of intentional self-care.",
  },
  {
    id: "miswhite",
    name: "misWhite",
    slug: "miswhite",
    tagline: "Pure Luminance",
    description:
      "A fragrance and skincare house dedicated to the poetry of light. Each creation captures moments of clarity and quiet radiance.",
  },
];

/** Company information */
export const COMPANY = {
  name: "Tanzade Kozmetik",
  tagline: "Private Label Manufacturing & Premium Cosmetic Brands",
  description:
    "Tanzade Kozmetik is a distinguished cosmetic manufacturer and brand house, crafting premium beauty products with an unwavering commitment to quality, sustainability, and sensorial excellence.",
  email: "info@tanzade.com",
  phone: "+90 530 389 14 64",
  address: "Istanbul, Turkey",
  social: {
    instagram: "https://instagram.com/tanzadekozmetik",
    linkedin: "https://linkedin.com/company/tanzade",
    facebook: "https://www.facebook.com/tan.zade.2025/",
  },
};

