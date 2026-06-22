"use client";

import React from "react";
import { Container, Button, Reveal, Section, PageHero, Grid } from "@/components/ui";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { CATEGORIES, BRANDS } from "@/lib/constants";

/* ═══════════════════════════════════════════════════
   SHOP PAGE — Complete e-commerce product grid
   ═══════════════════════════════════════════════════ */

export default function ShopPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") || "all";
  const activeBrand = searchParams.get("brand") || "all";

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const brandMatch = activeBrand === "all" || product.brand === activeBrand;
    return categoryMatch && brandMatch;
  });

  const handleCategoryChange = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") params.delete("category");
    else params.set("category", slug);
    router.push(`/shop?${params.toString()}`, { scroll: false });
  };

  const handleBrandChange = (brand: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (brand === "all") params.delete("brand");
    else params.set("brand", brand);
    router.push(`/shop?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <PageHero background="cream">
        <Reveal>
          <p className="label-luxury text-[11px] text-gold mb-4 tracking-[0.2em]">The Shop</p>
          <h1 className="heading-hero-inner text-ink">Curated Beauty</h1>
        </Reveal>
      </PageHero>

      <Section background="warm-white">
        <Container>
          <div className="flex w-full flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
              <Reveal>
                <div className="space-y-8">
                  <div>
                    <h3 className="label-luxury text-[10px] text-stone mb-6 border-b border-sand pb-2 uppercase tracking-widest">Categories</h3>
                    <div className="flex flex-wrap lg:flex-col gap-2">
                      <FilterButton 
                        label="All Products" 
                        active={activeCategory === "all"} 
                        onClick={() => handleCategoryChange("all")} 
                      />
                      {CATEGORIES.filter(c => c.id !== 'private-label').map((cat) => (
                        <FilterButton
                          key={cat.id}
                          label={cat.name}
                          active={activeCategory === cat.slug}
                          onClick={() => handleCategoryChange(cat.slug)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="label-luxury text-[10px] text-stone mb-6 border-b border-sand pb-2 uppercase tracking-widest">Brands</h3>
                    <div className="flex flex-wrap lg:flex-col gap-2">
                      <FilterButton 
                        label="All Brands" 
                        active={activeBrand === "all"} 
                        onClick={() => handleBrandChange("all")} 
                      />
                      {BRANDS.map((brand) => (
                        <FilterButton
                          key={brand.id}
                          label={brand.name}
                          active={activeBrand === brand.name}
                          onClick={() => handleBrandChange(brand.name)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <Reveal delay={0.1}>
                <div className="flex justify-between items-center mb-10 pb-4 border-b border-sand">
                  <p className="body-refined text-sm text-stone">
                    Showing {filteredProducts.length} results
                  </p>
                </div>
              </Reveal>

              {filteredProducts.length > 0 ? (
                <Grid cols={3} gap="md">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </Grid>
              ) : (
                <div className="py-24 text-center">
                  <p className="body-refined text-stone">No products found matching your criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-8"
                    onClick={() => {
                      router.push("/shop");
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function FilterButton({ 
  label, 
  active, 
  onClick 
}: { 
  label: string; 
  active: boolean; 
  onClick: () => void; 
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left py-2 px-3 text-xs tracking-wider transition-all duration-300",
        active 
          ? "bg-ink text-cream" 
          : "text-stone-dark hover:text-ink hover:pl-4"
      )}
    >
      {label}
    </button>
  );
}
