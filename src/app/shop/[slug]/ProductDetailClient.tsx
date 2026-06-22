"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, Check } from "lucide-react";
import { Container, Button, Reveal, Divider, Section, Grid } from "@/components/ui";
import { useCart } from "@/store/cart";
import { getProductBySlug, getProductsByBrand } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

/* ═══════════════════════════════════════════════════
   PRODUCT DETAIL PAGE
   ═══════════════════════════════════════════════════ */

const categoryLabels: Record<string, string> = {
  "hand-body": "Hand & Body",
  "hair-care": "Hair Care",
  "skin-care": "Skin Care",
  "oral-care": "Oral Care",
  "perfume-fragrance": "Perfume & Fragrance",
};

export default function ProductDetailClient() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <Section background="cream">
        <Container>
          <div className="text-center py-24">
            <h1 className="heading-editorial text-3xl text-ink mb-6">Product not found</h1>
            <p className="body-refined text-stone mb-10">The product you are looking for does not exist.</p>
            <Button variant="outline" href="/shop">Return to Shop</Button>
          </div>
        </Container>
      </Section>
    );
  }

  const relatedProducts = getProductsByBrand(product.brand)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      {/* Breadcrumb / Back */}
      <div className="bg-cream border-b border-sand py-4">
        <Container>
          <Link href="/shop" className="group inline-flex items-center gap-2 text-stone hover:text-ink transition-colors">
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            <span className="label-luxury text-[9px] tracking-[0.2em]">Back to Shop</span>
          </Link>
        </Container>
      </div>

      <Section background="warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Product Image */}
            <Reveal direction="left">
              <div className="aspect-square bg-beige flex items-center justify-center border border-sand">
                <div className="text-center p-12">
                  <motion.div 
                    className="w-48 h-48 rounded-full border border-gold/10 mx-auto mb-8"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="label-luxury text-stone tracking-[0.3em]">{product.brand}</span>
                </div>
              </div>
            </Reveal>

            {/* Product Info */}
            <Reveal direction="up" delay={0.1}>
              <div className="space-y-10">
                <div>
                  <p className="label-luxury text-[11px] text-gold mb-4 tracking-[0.2em]">
                    {categoryLabels[product.category]}
                  </p>
                  <h1 className="heading-editorial text-4xl md:text-5xl text-ink mb-4">
                    {product.name}
                  </h1>
                  <p className="heading-editorial text-2xl text-stone-dark">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="body-refined text-base text-stone-dark leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-col gap-4 text-sm text-stone">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold" />
                      <span>Free shipping on orders over $150</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold" />
                      <span>Responsibly sourced ingredients</span>
                    </div>
                  </div>
                </div>

                <Divider />

                {/* Purchase Actions */}
                <div className="space-y-8">
                  <div className="flex items-center gap-10">
                    <div className="flex flex-col gap-3">
                      <span className="label-luxury text-[10px] text-stone">Quantity</span>
                      <div className="flex items-center border border-sand">
                        <button 
                          className="px-4 py-3 hover:bg-beige transition-colors"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                        <button 
                          className="px-4 py-3 hover:bg-beige transition-colors"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant={added ? "secondary" : "primary"}
                    size="lg" 
                    className="w-full py-6 flex items-center justify-center gap-2"
                    onClick={handleAddToCart}
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4" /> Added to Cart
                      </>
                    ) : (
                      "Add to Cart"
                    )}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section background="cream">
          <Container>
            <div className="mb-12 flex justify-between items-end">
              <div>
                <p className="label-luxury text-[10px] text-gold mb-3 tracking-[0.2em]">More from {product.brand}</p>
                <h2 className="heading-editorial text-3xl text-ink">Related Products</h2>
              </div>
              <Link href="/shop" className="label-luxury text-xs text-stone hover:text-ink transition-colors pb-1 border-b border-stone/20">
                View All
              </Link>
            </div>

            <Grid cols={3} gap="md">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </Grid>
          </Container>
        </Section>
      )}
    </>
  );
}
