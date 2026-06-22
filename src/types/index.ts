/* ═══════════════════════════════════════════════════
   TANZADE KOZMETIK — TYPE DEFINITIONS
   ═══════════════════════════════════════════════════ */

/** UI Theme Types */
export type ColorVariant = "cream" | "beige" | "sand" | "ink" | "warm-white" | "gold" | "gold-light" | "charcoal";
export type SpacingSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type ComponentSize = "sm" | "md" | "lg" | "xl" | "full";

/** Navigation link item */
export interface NavLink {
  label: string;
  href: string;
  isAction?: boolean; 
}

/** Product category */
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
}

/** Brand */
export interface Brand {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  logo?: string;
  heroImage?: string;
}

/** Product */
export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  currency: string;
  stock: number;
  images: string[];
  isFeatured?: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

/** Cart item */
export interface CartItem {
  product: Product;
  quantity: number;
}

/** Generic Component Props */
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

/** Animation Direction */
export type AnimationDirection = "up" | "down" | "left" | "right" | "none";

/** UI Component Props */
export interface SectionProps extends BaseProps {
  background?: ColorVariant;
  spacing?: SpacingSize;
  animate?: boolean;
}

export interface ContainerProps extends BaseProps {
  size?: ComponentSize;
}

export interface RevealProps extends BaseProps {
  delay?: number;
  direction?: AnimationDirection;
  duration?: number;
}

