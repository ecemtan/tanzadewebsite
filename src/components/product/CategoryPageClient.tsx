"use client";

interface CategoryPageClientProps {
  category: {
    id: string;
    name: string;
    description: string;
  };
}

import { Container, Reveal, Section, PageHero, Grid } from "@/components/ui";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function CategoryPageClient({ category }: CategoryPageClientProps) {
  const filteredProducts = products.filter(p => p.category === category.id);

  return (
    <>
      <PageHero background="beige">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="label-luxury text-[11px] text-gold mb-6 tracking-[0.3em] uppercase">Collection</p>
            <h1 className="heading-hero-inner text-ink mb-6">{category.name}</h1>
            <p className="body-refined text-lg text-stone-dark leading-relaxed italic opacity-80">
              "{category.description}"
            </p>
          </Reveal>
        </div>
      </PageHero>

      <Section background="warm-white">
        <Container>
          {filteredProducts.length > 0 ? (
            <Grid cols={4} gap="md">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </Grid>
          ) : (
            <div className="text-center py-24">
              <p className="body-refined text-stone italic">New rituals coming soon to this collection.</p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
