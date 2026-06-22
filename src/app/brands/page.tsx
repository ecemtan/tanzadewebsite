"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkle } from "lucide-react";
import { Container, Reveal, Divider, Section, PageHero, SectionHeader, Grid } from "@/components/ui";
import { BRANDS } from "@/lib/constants";
import type { Brand } from "@/types";

export default function BrandsPage() {
  return (
    <>
      <Hero />
      <BrandsList />
      <BrandPhilosophy />
    </>
  );
}

function Hero() {
  return (
    <PageHero background="cream">
      <div className="max-w-4xl">
        <Reveal>
          <p className="label-luxury text-[11px] text-gold mb-6 tracking-[0.3em]">The Collection</p>
          <h1 className="heading-hero-inner text-ink mb-8">
            A Portfolio of Distinction
          </h1>
          <p className="body-refined text-lg md:text-xl text-stone-dark max-w-2xl">
            From botanical science to oral sophistication, our brands represent the diverse landscape of modern luxury beauty, each with a unique purpose and philosophy.
          </p>
        </Reveal>
      </div>
    </PageHero>
  );
}

function BrandsList() {
  return (
    <Section background="warm-white">
      <Container>
        <div className="space-y-32 md:space-y-48">
          {BRANDS.map((brand, index) => (
            <BrandItem key={brand.id} brand={brand} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function BrandItem({ brand, index }: { brand: Brand, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`grid w-full grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center`}>
      {/* Visual Placeholder */}
      <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
        <Reveal direction={isEven ? "left" : "right"}>
          <div className="aspect-[16/10] bg-beige relative overflow-hidden group border border-sand">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div 
                  className="w-32 h-32 rounded-full border border-gold/10 mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  transition={{ duration: 1 }}
                />
                <span className="heading-editorial text-4xl text-ink opacity-10 uppercase tracking-widest select-none">
                  {brand.name}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Content */}
      <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
        <Reveal direction="up" delay={0.2}>
          <p className="label-luxury text-[11px] text-gold mb-4 tracking-[0.2em]">{brand.tagline}</p>
          <h2 className="heading-editorial text-4xl md:text-5xl text-ink mb-6">{brand.name}</h2>
          <p className="body-refined text-stone-dark leading-relaxed mb-10 text-lg">
            {brand.description}
          </p>
          
          <div className="space-y-6 mb-12">
            <h4 className="label-luxury text-[10px] text-stone tracking-[0.2em] border-b border-sand pb-3 uppercase">Core Pillars</h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <Pillar label="Ethical Sourcing" />
              <Pillar label="Pure Botanical" />
              <Pillar label="Clinical Efficacy" />
              <Pillar label="Sensorial Design" />
            </div>
          </div>

          <div className="flex items-center gap-10">
            <Link href={`/shop?brand=${brand.name}`} className="group flex items-center gap-2">
              <span className="label-luxury text-xs text-ink group-hover:text-gold transition-colors">Shop Collection</span>
              <ArrowRight className="w-4 h-4 text-ink group-hover:text-gold group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
            </Link>
            <Link href={`/brands/${brand.slug}`} className="group flex items-center gap-2">
              <span className="label-luxury text-xs text-ink group-hover:text-gold transition-colors">Our Story</span>
              <ArrowUpRight className="w-4 h-4 text-ink group-hover:text-gold transition-all" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Pillar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Sparkle className="w-3 h-3 text-gold" />
      <span className="text-[11px] label-luxury text-stone-dark whitespace-nowrap">{label}</span>
    </div>
  );
}

function BrandPhilosophy() {
  return (
    <Section background="beige">
      <Container size="md">
        <SectionHeader
          title="Ecosystem of Quality"
          description="While each brand speaks with its own voice, they are united by the Tanzade commitment to safety, sustainability, and the belief that everyday objects should be crafted with poetic intention."
        />
        <Reveal delay={0.2}>
          <Divider variant="gold" className="max-w-24 mx-auto mt-12" />
        </Reveal>
      </Container>
    </Section>
  );
}
