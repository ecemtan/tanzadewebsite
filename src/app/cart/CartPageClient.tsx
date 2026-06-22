"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Container, Button, Reveal, Divider, Section, PageHero } from "@/components/ui";
import { useCart } from "@/store/cart";

/* ═══════════════════════════════════════════════════
   CART PAGE — Detailed cart review experience
   ═══════════════════════════════════════════════════ */

export default function CartPageClient() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <Section background="cream" className="min-h-[70vh] flex items-center">
        <Container className="text-center">
          <Reveal>
            <ShoppingBag className="w-16 h-16 text-sand mx-auto mb-8" strokeWidth={1} />
            <h1 className="heading-editorial text-4xl text-ink mb-6">Your cart is empty</h1>
            <p className="body-refined text-stone-dark mb-10 max-w-md mx-auto">
              It seems you haven&apos;t added any rituals to your collection yet.
            </p>
            <Button variant="primary" size="lg" href="/shop">
              Explore Collection
            </Button>
          </Reveal>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <PageHero background="beige">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Link href="/shop" className="label-luxury text-[10px] text-stone hover:text-ink transition-colors flex items-center gap-2 mb-6 uppercase tracking-widest">
                <ArrowLeft className="w-3 h-3" />
                Back to Shop
              </Link>
              <h1 className="heading-hero-inner text-ink">Your Collection</h1>
            </div>
            <p className="label-luxury text-sm text-stone uppercase tracking-widest pb-1 border-b border-sand">
              {totalItems} {totalItems === 1 ? "item" : "items"} selected
            </p>
          </div>
        </Reveal>
      </PageHero>

      <Section background="warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Cart Items List */}
            <div className="lg:col-span-8">
              <div className="space-y-1">
                <div className="hidden md:grid grid-cols-12 gap-4 pb-6 border-b border-sand label-luxury text-[10px] text-stone tracking-widest uppercase">
                  <div className="col-span-6">PRODUCT</div>
                  <div className="col-span-3 text-center">QUANTITY</div>
                  <div className="col-span-3 text-right">TOTAL</div>
                </div>

                <div className="divide-y divide-sand/50">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div 
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                      >
                        {/* Product Info */}
                        <div className="md:col-span-6 flex gap-8 items-center">
                          <div className="w-24 h-32 bg-cream flex-shrink-0 flex items-center justify-center border border-sand/30">
                            <span className="label-luxury text-[9px] text-stone uppercase">{item.product.brand.split(" ")[0]}</span>
                          </div>
                          <div>
                            <p className="label-luxury text-[10px] text-gold mb-2 uppercase tracking-widest">{item.product.brand}</p>
                            <h3 className="heading-editorial text-2xl text-ink mb-2">{item.product.name}</h3>
                            <p className="body-refined text-sm text-stone-dark">${item.product.price.toFixed(2)}</p>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="md:col-span-3 flex justify-center">
                          <div className="flex items-center border border-sand bg-warm-white">
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center text-stone hover:text-ink transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-10 text-center text-sm text-ink font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center text-stone hover:text-ink transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* Item Total & Remove */}
                        <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between md:justify-center gap-4">
                          <p className="heading-editorial text-xl text-ink">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                          <button 
                            onClick={() => removeItem(item.product.id)}
                            className="flex items-center gap-2 label-luxury text-[9px] text-stone hover:text-red-600 transition-colors uppercase tracking-widest"
                          >
                            <Trash2 className="w-3 h-3" />
                            Remove
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <Reveal delay={0.2}>
                  <div className="bg-cream p-10 md:p-12 border border-sand shadow-soft">
                    <h2 className="heading-editorial text-2xl text-ink mb-10">Order Summary</h2>
                    
                    <div className="space-y-5 mb-10">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-stone-dark">Subtotal</span>
                        <span className="text-ink font-medium">${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-stone-dark">Shipping</span>
                        <span className="text-gold italic">Complimentary</span>
                      </div>
                    </div>

                    <Divider className="mb-10" />

                    <div className="flex justify-between items-end mb-12">
                      <span className="label-luxury text-sm text-ink uppercase tracking-widest">Total</span>
                      <span className="heading-editorial text-3xl text-ink">${totalPrice.toFixed(2)}</span>
                    </div>

                    <Button variant="primary" size="lg" className="w-full py-5 flex items-center justify-center gap-3" href="/checkout">
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                    <div className="mt-10 text-center">
                      <p className="body-refined text-[10px] text-stone leading-relaxed uppercase tracking-widest">
                        Complimentary shipping and taxes calculated at next step.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
