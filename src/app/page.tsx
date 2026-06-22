"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button, Section, Container, Reveal, Divider, PageHero, SectionHeader, Grid } from "@/components/ui";
import { CATEGORIES, BRANDS, COMPANY } from "@/lib/constants";
import { DURATION } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <BrandPhilosophy />
      <FeaturedBrands />
      <PrivateLabelTeaser />
      <EditorialStatement />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#F7F3EE] flex items-center">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/tanzade-main.png"
          alt="Tanzade Kozmetik Luxury Background"
          className="h-full w-full object-cover"
        />
        {/* Soft luxury overlay to match brand aesthetic */}
        <div className="absolute inset-0 bg-[#F7F3EE]/10" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-2xl">
          <Reveal>
            <p className="label-luxury text-[11px] text-stone mb-6 tracking-[0.3em] uppercase">
              Est. Istanbul
            </p>
            <h1 className="heading-display text-ink text-5xl md:text-7xl mb-8 leading-[1.1]">
              Refining the <br />
              Art of Beauty
            </h1>
            <p className="body-refined text-stone-dark text-lg md:text-xl max-w-lg mb-12">
              Discover a curated collection of premium cosmetic brands, 
              crafted with the quiet confidence of Turkish quality.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <Button 
                variant="primary" 
                size="lg" 
                href="/shop"
                className="bg-ink text-white hover:bg-gold transition-all duration-500 min-w-[200px]"
              >
                Shop Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="/private-label"
                className="border-ink text-ink hover:bg-ink hover:text-white transition-all duration-500 min-w-[200px]"
              >
                Our Expertise
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: DURATION.slow }}
      >
        <motion.div
          className="w-px h-12 bg-stone/30"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}

function FeaturedCategories() {
  const displayCategories = CATEGORIES.filter((c) => c.id !== "private-label");

  return (
    <section className="w-full bg-[#F8F4EE] py-28 lg:py-36 overflow-hidden" id="categories">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-16 lg:mb-20 text-center">
          <SectionHeader 
            title="Explore by Category" 
            subtitle="Collections"
            subtitleClassName="text-[#C7A56A]"
            titleClassName="text-[48px] md:text-[72px] leading-tight"
            descriptionClassName="max-w-[600px] mx-auto"
          />
        </div>

        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-0">
          {displayCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: (typeof CATEGORIES)[number];
  index: number;
}) {

const categoryImages: Record<string,string> = {
    "hand-body": "/images/hand&body-category.png",
    "hair-care": "/images/haircare-category.png",
    "skin-care": "/images/skincare-category.png",
    "oral-care": "/images/oralcare-category.png",
    "perfumes": "/images/perfumes-category.png",
    "men-edition": "/images/meneditions-category.png",
};

const image =
categoryImages[category.id] ||
"/images/placeholder-category.png";

return (

<Link
href={`/shop?category=${category.slug}`}
className="group block"
>
<Reveal delay={index * 0.1}>

<div
className="
relative
w-full
rounded-[2px]
overflow-hidden
shadow-[0_25px_80px_rgba(0,0,0,0.08)]

aspect-[4/3]
min-h-[420px]
lg:min-h-[520px]

transition-all
duration-700
ease-in-out

group-hover:-translate-y-[6px]
"
>

{/* Background image */}

<div className="absolute inset-0">
<img
src={image}
alt={category.name}
className="
h-full
w-full
object-cover

transition-all
duration-[1200ms]

group-hover:scale-[1.08]
"
/>
</div>

{/* Overlay */}

<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/55
via-black/10
to-transparent
"
/>

{/* Content */}

<div
className="
absolute
bottom-0
left-0
w-full
p-6
lg:p-8
z-20
"
>

<h3
className="
text-white
font-editorial
text-[34px]
lg:text-[40px]
leading-none
"
>
{category.name}
</h3>

<p
className="
text-white/85
text-[15px]
leading-6
max-w-[260px]
mt-3
"
>
{category.description}
</p>

<div
className="
mt-5
flex
items-center
gap-2
text-[#D6B27C]
uppercase
tracking-[0.25em]
text-[11px]
"
>
<span>Discover</span>

<ArrowRight
className="
w-3
h-3
group-hover:translate-x-1
transition-transform
duration-300
"
strokeWidth={1.5}
/>

</div>

</div>
</div>

</Reveal>
</Link>
);
}

function BrandPhilosophy() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F4EE] py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 xl:px-16">
        <Link href="/about-us" className="group block">
          {/* TOP AREA */}
          <div className="grid w-full grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-20">
            {/* LEFT TEXT */}
            <div className="max-w-[680px]">
              <p className="uppercase tracking-[0.35em] text-[12px] text-[#B69B6B] mb-6">
                About Us
              </p>

              <div className="mb-8 flex items-center gap-4 text-[#B69B6B]">
                <span className="h-px w-16 bg-[#D8C7A3]" />
                <span>✦</span>
                <span className="h-px w-16 bg-[#D8C7A3]" />
              </div>

              <h2 className="font-editorial text-[#111] text-[54px] md:text-[72px] lg:text-[82px] leading-[0.95] tracking-[-0.04em] mb-10">
                Rooted in Purpose,<br />
                Crafted with Care.
              </h2>

              <p className="text-[#5F5A52] text-[18px] leading-[1.9] max-w-[620px] mb-8">
                Tanzade Kozmetik was born from a simple belief: beauty should honour both people and nature.
                Inspired by the richness of Turkish nature and elevated by modern science, we create timeless
                formulations that support your daily rituals.
              </p>

              <p className="text-[#5F5A52] text-[18px] leading-[1.9] max-w-[620px]">
                We partner with trusted brands and offer private label solutions that reflect our commitment
                to quality, transparency and elegance.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-[520px] lg:h-[560px] overflow-hidden">
              <img
                src="/images/about-us-main.png"
                alt="Tanzade About Us"
                className="h-full w-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-[1.03]"
              />

              {/* soft fade to left */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F8F4EE] to-transparent" />
            </div>
          </div>

          {/* ICON ROW */}
          <div className="mt-20 grid w-full grid-cols-1 md:grid-cols-4 border-t border-[#E5D8C8] pt-12">
            {[
              ["Inspired By Nature", "We draw from the purity and richness of natural ingredients."],
              ["Science-Backed", "Every formula is developed with precision and care."],
              ["Made With Integrity", "We believe in transparency, safety and ethical beauty."],
              ["Crafted In Türkiye", "Proudly produced in Türkiye with world-class standards."]
            ].map(([title, desc], index) => (
              <div
                key={title}
                className="relative px-8 text-center"
              >
                {index !== 0 && (
                  <div className="hidden md:block absolute left-0 top-4 h-24 w-px bg-[#E0CDB8]" />
                )}

                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#B69B6B] text-[#B69B6B]">
                  ✦
                </div>

                <h4 className="uppercase tracking-[0.22em] text-[12px] text-[#111] mb-3">
                  {title}
                </h4>

                <p className="text-[14px] leading-6 text-[#6C665F] max-w-[220px] mx-auto">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* PROMISE BOX */}
          <div className="relative mt-20 border border-[#D4B98C] px-10 py-12 lg:px-16 lg:py-14">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F8F4EE] px-6 text-[#B69B6B]">
              ✦
            </div>

            <div className="grid w-full grid-cols-1 lg:grid-cols-[1fr_1fr_180px] items-center gap-10">
              <div>
                <p className="uppercase tracking-[0.28em] text-[12px] text-[#B69B6B] mb-4">
                  Our Promise
                </p>

                <h3 className="font-editorial text-[38px] lg:text-[46px] leading-[1.05] text-[#111]">
                  Beauty that respects,<br />
                  care that lasts.
                </h3>
              </div>

              <p className="text-[#5F5A52] text-[17px] leading-8">
                We are more than a cosmetics company.
                We are a partner in your journey — to create, to grow,
                and to make beauty meaningful.
              </p>

              <div className="hidden lg:flex justify-center border-l border-[#D4B98C]">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#D4B98C] text-[#B69B6B] font-editorial text-5xl">
                  T
                </div>
              </div>
            </div>
          </div>

        </Link>
      </div>
    </section>
  );
}
function FeaturedBrands() {
  return (
    <Section id="brands" className="bg-[#F8F4EE] pt-[120px] pb-[140px]">
      <Container>
        <SectionHeader
          subtitle="The Houses"
          title="Our Brands"
          description="Discover Tanzade Kozmetik’s signature houses, each designed with its own identity, formulation language and premium visual world."
          className="mb-16"
        />

        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {BRANDS.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="text-center mt-20">
            <Button variant="outline" size="lg" href="/brands">
              Explore All Brands
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function BrandCard({ brand }: { brand: (typeof BRANDS)[number] }) {
  const brandImages: Record<string, string> = {
    "produkt": "/images/produkt-by-tanzade-main.png",
    "meew": "/images/meew-main.png",
    "dentalume": "/images/dentalume-main.png",
    "miswhite": "/images/miswhite-main.png",
  };

  const image = brandImages[brand.id] || "/images/placeholder-brand.png";

  return (
    <Link href={`/brands/${brand.slug}`} className="group block">
      <Reveal>
        <div className="relative w-full overflow-hidden min-h-[520px] rounded-[2px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] group transition-all duration-700 hover:-translate-y-2">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={image}
              alt={brand.name}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.05] transition-all duration-[1400ms]"
            />
          </div>

          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-10 lg:p-12 z-20">
            <p className="uppercase tracking-[0.28em] text-[#D6B27C] text-[11px] mb-4">
              {brand.tagline}
            </p>
            <h3 className="font-editorial text-white text-[48px] lg:text-[58px] leading-none">
              {brand.name}
            </h3>
            <p className="text-white/85 text-[16px] leading-7 max-w-[420px] mt-4">
              {brand.description}
            </p>
            <div className="mt-8 flex items-center gap-2 text-[#D6B27C] uppercase tracking-[0.25em] text-[11px]">
              <span>View Brand</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </Reveal>
    </Link>
  );
}

function PrivateLabelTeaser() {
  const steps = [
    ["Develop", "Innovative formulas tailored to your brand identity."],
    ["Manufacture", "Advanced facilities with strict quality control."],
    ["Package", "Premium packaging that reflects your brand value."],
    ["Deliver", "Global logistics and export support you can trust."],
  ];

  return (
    <Section spacing="none" background="warm-white" id="private-label">
      <div className="grid w-full min-h-[820px] grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative overflow-hidden bg-[#F7F1E7] px-8 py-24 md:px-16 lg:px-24 xl:px-32">
          <div className="absolute left-0 top-0 h-full w-full opacity-40">
            <div className="absolute -bottom-32 -left-32 h-[520px] w-[520px] rounded-full border border-[#C8A46D]/30" />
            <div className="absolute -bottom-44 -left-44 h-[680px] w-[680px] rounded-full border border-[#C8A46D]/20" />
          </div>

          <div className="relative z-10 max-w-[620px]">
            <div className="mb-12 flex items-center gap-6">
              <span className="h-28 w-px bg-[#B9945F]" />
              <p className="text-[12px] uppercase tracking-[0.32em] text-[#B9945F]">
                Private Label
              </p>
            </div>

            <h2 className="font-editorial text-[56px] leading-[0.96] tracking-[-0.04em] text-[#181818] md:text-[76px]">
              We build <br />
              the beauty <br />
              behind{" "}
              <span className="italic text-[#B9945F]">your brand.</span>
            </h2>

            <p className="mt-10 max-w-[520px] text-[18px] leading-8 text-[#5F5A52]">
              End-to-end cosmetic manufacturing solutions designed for brands
              that demand quality, flexibility and global standards.
            </p>

            <Reveal delay={0.25}>
              <Button
                variant="outline"
                size="lg"
                href="/private-label"
                className="mt-12 border-[#B9945F] text-[#B9945F] hover:bg-[#B9945F] hover:text-white"
              >
                Request a Quote →
              </Button>
            </Reveal>

            <div className="mt-16 grid w-full grid-cols-2 gap-8 md:grid-cols-4">
              {steps.map(([title, desc], index) => (
                <div
                  key={title}
                  className="border-l border-[#D8C7A3] pl-5 first:border-l-0 first:pl-0"
                >
                  <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[#181818]">
                    {title}
                  </p>
                  <p className="text-[13px] leading-6 text-[#6F675E]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Video */}
        <div className="relative min-h-[720px] overflow-hidden group lg:min-h-[820px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[4000ms] group-hover:scale-[1.03]"
          >
            <source
              src="/videos/tanzade-private-label-main.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          <div className="absolute bottom-20 left-16 max-w-[420px] text-white">
            <div className="mb-6 h-px w-16 bg-[#D8B47C]" />
            <p className="font-editorial text-[34px] leading-tight">
              From concept to shelf,
              <br />
              we turn your vision into{" "}
              <span className="italic text-[#D8B47C]">
                exceptional products.
              </span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
function EditorialStatement() {
  return (
    <Section
      background="cream"
      className="relative overflow-hidden py-32"
    >
      {/* Luxury Background Effects */}

      <div className="absolute inset-0">

        {/* soft light */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf9] via-white to-[#faf7f2]" />

        {/* top gold wave */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] opacity-40">
          <div className="w-full h-full rounded-full border border-[#D4AF37]/20 blur-sm" />
        </div>

        {/* bottom gold wave */}
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] opacity-50">
          <div className="w-full h-full rounded-full border border-[#D4AF37]/20 blur-sm" />
        </div>

        {/* subtle gold particles */}
        <div className="absolute left-0 top-0 w-full h-full opacity-20">
          <div className="absolute top-12 left-24 w-2 h-2 rounded-full bg-[#D4AF37]" />
          <div className="absolute bottom-20 right-32 w-2 h-2 rounded-full bg-[#D4AF37]" />
          <div className="absolute top-32 right-20 w-1 h-1 rounded-full bg-[#D4AF37]" />
        </div>
      </div>

      <Container size="xl">

        <Reveal>

          <div className="relative max-w-[1200px] mx-auto">

            {/* top decoration */}

            <div className="flex items-center justify-center gap-5 mb-16">

              <span className="h-px w-28 bg-[#D4AF37]/60" />

              <span className="text-[#D4AF37] text-4xl font-serif">
                T
              </span>

              <span className="h-px w-28 bg-[#D4AF37]/60" />

            </div>

            {/* Main Card */}

            <div className="relative border border-[#D4AF37]/30 rounded-[40px] px-12 md:px-24 py-20 bg-white/70 backdrop-blur-sm">

              <blockquote className="
              text-center
              font-serif
              italic
              text-[38px]
              md:text-[64px]
              leading-[1.2]
              tracking-[-0.03em]
              text-[#171717]
              ">

                <span className="text-[#D4AF37]">
                  “
                </span>

                True luxury is not in excess,
                but in the quiet confidence of

                <span className="text-[#D4AF37]">
                  {" "}quality
                </span>

                {" "}— in knowing that every
                detail has been considered.

                <span className="text-[#D4AF37]">
                  ”
                </span>

              </blockquote>

            </div>

            {/* bottom */}

            <div className="mt-14 flex items-center justify-center gap-5">

              <span className="h-px w-16 bg-[#D4AF37]/60" />

              <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />

              <span className="h-px w-16 bg-[#D4AF37]/60" />

            </div>

            <p className="
            text-center
            mt-8
            uppercase
            tracking-[0.4em]
            text-[#B9945F]
            text-sm
            ">
              TANZADE KOZMETİK
            </p>

          </div>

        </Reveal>

      </Container>
    </Section>
  );
}