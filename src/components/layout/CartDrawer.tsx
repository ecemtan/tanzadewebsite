"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui";
import { EASE, DURATION } from "@/lib/animations";

/* ═══════════════════════════════════════════════════
   CART DRAWER — Slide-out cart panel
   ═══════════════════════════════════════════════════ */

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.normal }}
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-[70] w-full sm:max-w-md bg-cream shadow-elevated flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: DURATION.slow, ease: EASE.smooth }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-sand">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-ink" strokeWidth={1.5} />
                <h2 className="heading-editorial text-base sm:text-lg text-ink">
                  Your Cart
                </h2>
                <span className="label-luxury text-[9px] sm:text-[10px] text-stone">
                  ({totalItems} {totalItems === 1 ? "item" : "items"})
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-stone hover:text-ink transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag
                    className="w-12 h-12 text-sand mb-4"
                    strokeWidth={1}
                  />
                  <p className="heading-editorial text-lg text-stone-dark mb-2">
                    Your cart is empty
                  </p>
                  <p className="body-refined text-sm text-stone mb-8">
                    Explore our collections and find something you love.
                  </p>
                  <Button variant="outline" size="sm" onClick={closeCart} href="/shop">
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.li
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="flex gap-4 py-4 border-b border-sand/50"
                    >
                      {/* Product image placeholder */}
                      <div className="w-20 h-20 bg-beige flex-shrink-0 flex items-center justify-center">
                        <span className="label-luxury text-[8px] text-stone">
                          {item.product.brand.split(" ")[0]}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <p className="label-luxury text-[9px] text-gold mb-1">
                          {item.product.brand}
                        </p>
                        <h3 className="text-sm font-light text-ink truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-stone-dark mt-1">
                          ${item.product.price.toFixed(2)}
                        </p>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-7 h-7 border border-sand flex items-center justify-center text-stone hover:text-ink hover:border-ink transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" strokeWidth={1.5} />
                          </button>
                          <span className="text-sm text-ink w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-7 h-7 border border-sand flex items-center justify-center text-stone hover:text-ink hover:border-ink transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" strokeWidth={1.5} />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="ml-auto p-1 text-stone hover:text-red-600 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-sand px-6 py-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="label-luxury text-[11px] text-stone">Subtotal</span>
                  <span className="heading-editorial text-lg text-ink">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <p className="body-refined text-[11px] text-stone mb-4">
                  Shipping and taxes calculated at checkout.
                </p>
                <Link href="/checkout" onClick={closeCart}>
                  <Button variant="primary" size="lg" className="w-full">
                    Checkout
                  </Button>
                </Link>
                <div className="mt-4 text-center">
                  <Link 
                    href="/cart" 
                    onClick={closeCart}
                    className="label-luxury text-[10px] text-stone hover:text-ink transition-colors underline underline-offset-4 uppercase tracking-widest"
                  >
                    View Detailed Cart
                  </Link>
                </div>
                <button
                  onClick={closeCart}
                  className="w-full mt-6 py-2 text-center label-luxury text-[11px] text-stone hover:text-ink transition-colors uppercase tracking-widest"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
