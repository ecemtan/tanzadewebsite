"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useCart } from "@/store/cart";
import type { Product } from "@/types";
import { EASE, DURATION } from "@/lib/animations";

/* ═══════════════════════════════════════════════════
   PRODUCT CARD — Luxury e-commerce product card
   ═══════════════════════════════════════════════════ */

interface ProductCardProps {
  product: Product;
  index?: number;
}

const categoryLabels: Record<string, string> = {
  "hand-body": "Hand & Body",
  "hair-care": "Hair Care",
  "skin-care": "Skin Care",
  "oral-care": "Oral Care",
  "perfume-fragrance": "Perfume & Fragrance",
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: DURATION.slow,
        delay: index * 0.06,
        ease: EASE.luxury,
      }}
    >
      {/* Image area */}
      <Link href={`/shop/${product.slug}`} className="block">
        <motion.div
          className="relative aspect-[3/4] bg-beige overflow-hidden mb-4"
          whileHover={{ scale: 0.98 }}
          transition={{ duration: DURATION.normal, ease: EASE.luxury }}
        >
          {/* Placeholder visual */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              className="w-16 h-16 rounded-full border border-stone/15 mb-3"
              whileHover={{ scale: 1.15, rotate: 90 }}
              transition={{ duration: 0.6 }}
            />
            <span className="label-luxury text-[8px] text-stone/40 tracking-[0.2em]">
              {product.brand.split(" ")[0]}
            </span>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.isNewArrival && (
              <span className="label-luxury text-[8px] bg-ink text-cream px-2 py-1">
                New
              </span>
            )}
            {product.isBestSeller && (
              <span className="label-luxury text-[8px] bg-gold text-ink px-2 py-1">
                Best Seller
              </span>
            )}
          </div>

          {/* Hover overlay with add-to-cart */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <motion.button
              className="label-luxury text-[10px] bg-cream/95 backdrop-blur-sm text-ink px-6 py-2.5 flex items-center gap-2 hover:bg-ink hover:text-cream transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Plus className="w-3 h-3" strokeWidth={1.5} />
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </Link>

      {/* Product info */}
      <div className="px-1">
        <p className="label-luxury text-[9px] text-gold mb-1 tracking-[0.2em]">
          {product.brand}
        </p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="text-sm font-light text-ink hover:text-charcoal transition-colors leading-snug mb-1">
            {product.name}
          </h3>
        </Link>
        <p className="label-luxury text-[9px] text-stone mb-2">
          {categoryLabels[product.category] || product.category}
        </p>
        <p className="text-sm text-ink">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
}
