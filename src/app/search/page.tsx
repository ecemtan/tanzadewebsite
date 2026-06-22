"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search as SearchIcon, X, ArrowRight } from "lucide-react";
import { Container, Section, Reveal } from "@/components/ui";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

/* ═══════════════════════════════════════════════════
   SEARCH PAGE — Fullscreen editorial search
   ═══════════════════════════════════════════════════ */

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof products>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Auto-focus input on mount
  useEffect(() => {
    const input = document.getElementById("search-input");
    if (input) input.focus();
  }, []);

  // Handle search with artificial delay for "feel"
  useEffect(() => {
    if (!query.trim()) {
      const timer = setTimeout(() => {
        setResults([]);
        setIsSearching(false);
      }, 0);
      return () => clearTimeout(timer);
    }

    const startTimer = setTimeout(() => setIsSearching(true), 0);
    const resultsTimer = setTimeout(() => {
      const q = query.toLowerCase();
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
      setResults(filtered);
      setIsSearching(false);
    }, 300);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(resultsTimer);
    };
  }, [query]);

  const suggestions = [
    "Skincare", "Oral Care", "Perfume", "Hand Wash", "Serums", "Produkt"
  ];

  return (
    <Section background="warm-white" className="min-h-screen pt-32 md:pt-40" spacing="xl">
      <Container>
        {/* Search Input Area */}
        <div className="max-w-4xl mx-auto mb-20">
          <Reveal>
            <div className="relative group">
              <SearchIcon className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-gold group-focus-within:scale-110 transition-transform duration-500" strokeWidth={1} />
              <input 
                id="search-input"
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products, brands, or rituals..."
                className="w-full bg-transparent border-b border-sand pb-6 pt-2 pl-12 text-3xl md:text-5xl font-light text-ink placeholder:text-stone/20 focus:outline-none focus:border-gold transition-colors"
              />
              {query && (
                <button 
                  onClick={() => setQuery("")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-stone hover:text-ink transition-colors"
                >
                  <X className="w-6 h-6" strokeWidth={1} />
                </button>
              )}
            </div>
          </Reveal>

          {/* Suggestions */}
          {!query && (
            <Reveal delay={0.2}>
              <div className="mt-12">
                <p className="label-luxury text-[10px] text-stone mb-6 tracking-[0.2em]">Suggested Searches</p>
                <div className="flex flex-wrap gap-3">
                  {suggestions.map((s, i) => (
                    <button 
                      key={i}
                      onClick={() => setQuery(s)}
                      className="label-luxury text-[11px] text-stone-dark px-5 py-2.5 border border-sand hover:border-ink hover:text-ink transition-all duration-300"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>

        {/* Results Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {query.trim() && !isSearching ? (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-16"
              >
                {results.length > 0 ? (
                  <div>
                    <div className="flex items-center justify-between mb-12 border-b border-sand pb-4">
                      <p className="label-luxury text-[11px] text-stone">
                        Found {results.length} {results.length === 1 ? "Result" : "Results"}
                      </p>
                      <Link href="/shop" className="label-luxury text-[10px] text-ink hover:text-gold transition-colors flex items-center gap-2">
                        View All Products <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      {results.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="heading-editorial text-2xl text-stone-dark mb-4">No results for &ldquo;{query}&rdquo;</p>
                    <p className="body-refined text-stone">Try a different term or browse our collections.</p>
                  </div>
                )}
              </motion.div>
            ) : query.trim() && isSearching ? (
              <motion.div 
                key="loading"
                className="flex justify-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full border border-gold border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
