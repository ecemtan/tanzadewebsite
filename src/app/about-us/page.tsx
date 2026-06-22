"use client";

import React from "react";
import dynamic from "next/dynamic";
import { 
  Section, 
  Container, 
  Reveal, 
  Divider, 
  SectionHeader,
  PageHero
} from "@/components/ui";
import { StorySection } from "@/components/story/StorySection";
import { OrganicObject, MineralObject } from "@/components/story/Objects";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const StoryScene = dynamic(() => import("@/components/story/StoryScene"), { ssr: false });

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero background="beige">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeInUp} className="label-luxury text-[11px] text-gold mb-8 tracking-[0.3em] uppercase">
            Est. Istanbul
          </motion.p>
          <motion.h1 variants={fadeInUp} className="heading-display text-ink mb-10">
            About Tanzade
          </motion.h1>
          <motion.p variants={fadeInUp} className="body-refined text-lg md:text-xl text-stone-dark leading-relaxed max-w-2xl mx-auto">
            A distinguished cosmetic manufacturer and brand house, 
            crafting premium beauty products with an unwavering commitment 
            to quality, sustainability, and sensorial excellence.
          </motion.p>
        </motion.div>
      </PageHero>

      {/* About Tanzade Kozmetik Section */}
      <Section background="cream" spacing="xl">
        <Container size="md">
          <div className="grid w-full grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <p className="label-luxury text-gold tracking-[0.2em] uppercase">The House</p>
            </div>
            <div className="md:col-span-8">
              <h2 className="heading-editorial text-3xl md:text-4xl text-ink mb-8 leading-tight">
                Crafting the future of cosmetic excellence through intentional production.
              </h2>
              <div className="space-y-6 body-refined text-stone-dark leading-relaxed">
                <p>
                  Tanzade Kozmetik stands at the intersection of traditional artistry and modern science. 
                  As a premium cosmetic manufacturing specialist, we serve as a comprehensive partner for 
                  brands seeking to define their identity through superior product formulations.
                </p>
                <p>
                  From our state-of-the-art facilities in Istanbul, we oversee the entire lifecycle of 
                  cosmetic creation — from initial chemical development to the final export-ready product. 
                  Our approach is rooted in the belief that every brand we house or manufacture for 
                  deserves a unique sensorial signature.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission Section */}
      <Section background="beige" spacing="xl">
        <Container>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-20">
            <Reveal>
              <div className="p-12 bg-white/40 border border-gold/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gold/20 group-hover:bg-gold transition-colors duration-700" />
                <h3 className="label-luxury text-gold mb-6 tracking-[0.3em] uppercase">Our Vision</h3>
                <p className="heading-editorial text-2xl text-ink mb-6">Global Partnership</p>
                <p className="body-refined text-stone-dark leading-relaxed">
                  Tanzade Kozmetik aims to become a trusted global cosmetic production partner 
                  by combining formulation expertise, premium packaging, quality production, 
                  and export-oriented brand development.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-12 bg-white/40 border border-gold/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gold/20 group-hover:bg-gold transition-colors duration-700" />
                <h3 className="label-luxury text-gold mb-6 tracking-[0.3em] uppercase">Our Mission</h3>
                <p className="heading-editorial text-2xl text-ink mb-6">Scalable Quality</p>
                <p className="body-refined text-stone-dark leading-relaxed">
                  To provide reliable, high-quality, scalable cosmetic manufacturing solutions 
                  for brands through formulation development, filling, labeling, packaging, 
                  regulatory support, and global distribution.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Production Philosophy (Integrated Legacy Content) */}
      <Section background="cream" spacing="xl">
        <Container>
          <SectionHeader 
            subtitle="The Philosophy"
            title="Production Philosophy"
            description="Our manufacturing process is guided by a commitment to the poetry of science."
            className="mb-24"
          />
          
          <StorySection
            subtitle="The Source"
            title="Botanical Precision"
            content="We source our ingredients from regions where the soil speaks of history. Every extract is obtained through methods that preserve the molecular integrity of the plant, ensuring that nature's potency remains untouched."
            visual={<OrganicObject color="#D2B48C" speed={0.8} distort={0.5} />}
          />

          <StorySection
            reversed
            subtitle="The Craft"
            title="Formulated with Intention"
            content="Our laboratories in Istanbul are spaces of quiet contemplation. Here, we strip away the unnecessary, focusing only on ingredients that serve a purpose. The result is a formulation that is as effective as it is elegant."
            visual={<OrganicObject color="#A9A9A9" speed={0.5} distort={0.3} radius={0.8} />}
            className="bg-beige/30"
          />

          <StorySection
            subtitle="The Future"
            title="Built for Longevity"
            content="We reject the transient nature of modern beauty. Our products are designed to be part of your daily life for years, housed in packaging that respects the environment and celebrates the aesthetic of the everyday."
            visual={<MineralObject color="#4A4A4A" />}
          />
        </Container>
      </Section>

      {/* Distributors & Export Section */}
      <Section background="beige" spacing="xl">
        <Container size="md">
          <div className="text-center mb-20">
            <Reveal>
              <h2 className="heading-editorial text-4xl text-ink mb-8">Our Distributors & Global Reach</h2>
              <p className="body-refined text-lg text-stone-dark max-w-2xl mx-auto leading-relaxed">
                Tanzade Kozmetik works with local and international distributors to bring premium 
                cosmetic products to different markets across the globe.
              </p>
            </Reveal>
          </div>

          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Wholesale", desc: "Volume production for established distribution networks." },
              { title: "Private Label", desc: "Exclusive manufacturing for boutique and enterprise brands." },
              { title: "Export", desc: "Regulatory and logistical support for international markets." }
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="bg-cream p-8 border border-gold/5 text-center">
                  <h4 className="label-luxury text-gold mb-4 text-xs tracking-widest uppercase">{item.title}</h4>
                  <p className="body-refined text-sm text-stone-dark">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Responsible Manager Services Section */}
      <Section background="cream" spacing="xl">
        <Container size="md">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="aspect-square bg-beige relative overflow-hidden flex items-center justify-center">
                <StoryScene>
                  <MineralObject color="#C0C0C0" />
                </StoryScene>
              </div>
            </Reveal>
            
            <Reveal direction="right">
              <h3 className="label-luxury text-gold mb-6 tracking-[0.3em] uppercase">Compliance & Oversight</h3>
              <h2 className="heading-editorial text-3xl text-ink mb-6">Responsible Manager Services</h2>
              <div className="space-y-4 body-refined text-stone-dark leading-relaxed">
                <p>
                  We provide comprehensive Responsible Manager (Mesul Müdürlük) support to ensure 
                  every step of your production meets rigorous documentation and product compliance standards.
                </p>
                <ul className="space-y-3 pt-4">
                  {["Documentation Support", "Product Compliance", "Quality Control", "Production Tracking", "Regulatory Requirements"].map((list) => (
                    <li key={list} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="text-sm">{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section background="ink" spacing="xl">
        <Container size="md" className="text-center">
          <Reveal>
            <Divider variant="gold" className="max-w-16 mx-auto mb-12" />
            <h2 className="heading-editorial text-4xl md:text-5xl text-cream mb-8 leading-tight">
              Build Your Cosmetic <br /> Brand With Tanzade
            </h2>
            <p className="body-refined text-lg text-cream/60 mb-12 max-w-xl mx-auto">
              Partner with Istanbul's premium manufacturing house to transform your vision 
              into a global brand.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button variant="primary" size="lg" href="/private-label" className="min-w-[220px]">
                Explore Private Label
              </Button>
              <Button variant="outline" size="lg" href="/contact" className="min-w-[220px] border-cream/20 text-cream hover:bg-cream/10">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
