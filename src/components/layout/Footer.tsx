"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Lock,
} from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { COMPANY } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#070707] text-[#F7F3EE]">
      {/* Premium Background implementation - Replaces static image */}
      <div className="absolute inset-0 z-0">
        {/* Base dark layer */}
        <div className="absolute inset-0 bg-[#070707]" />
        
        {/* Soft spotlight following the mouse (or static for now) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(182,155,107,0.12)_0%,_transparent_70%)]" />
        
        {/* Monogram Watermark Pattern - Very subtle */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' font-family='serif' font-size='24' fill='%23B69B6B' text-anchor='middle' dominant-baseline='middle'%3ET%3C/text%3E%3C/svg%3E")`,
               backgroundSize: '120px 120px'
             }}>
        </div>

        {/* Subtle noise/grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Ffilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Vertical decorative lines - very subtle */}
        <div className="absolute inset-0 flex justify-around opacity-[0.03]">
          <div className="w-px h-full bg-[#B69B6B]" />
          <div className="w-px h-full bg-[#B69B6B]" />
          <div className="w-px h-full bg-[#B69B6B]" />
          <div className="w-px h-full bg-[#B69B6B]" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section - Compact luxury area */}
        <section className="relative w-full min-h-[320px] flex items-center border-b border-[#B69B6B]/25">
          <Container>
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <Reveal>
                <div className="max-w-md">
                  <h3 className="font-serif text-5xl md:text-7xl leading-[0.95]">
                    Stay
                    <br />
                    <span className="italic text-[#B69B6B]">informed.</span>
                  </h3>

                  <div className="mt-8 h-px w-20 bg-[#B69B6B]" />

                  <p className="mt-8 text-base leading-8 text-[#F7F3EE]/80">
                    Receive exclusive updates on new product launches, brand
                    stories, and private label opportunities.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="max-w-3xl w-full">
                  <div className="flex w-full overflow-hidden rounded-sm border border-[#B69B6B]/40 bg-white/[0.03] backdrop-blur-sm shadow-2xl">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="min-h-[72px] flex-1 bg-transparent px-8 text-sm text-[#F7F3EE] placeholder:text-[#F7F3EE]/40 focus:outline-none"
                    />
                    <button className="min-w-[220px] bg-[#B69B6B] px-8 text-[11px] uppercase tracking-[0.3em] text-black transition-all duration-500 hover:bg-[#F7F3EE]">
                      Subscribe
                      <ArrowRight className="ml-4 inline h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-sm text-[#F7F3EE]/60">
                    <Lock className="h-4 w-4 text-[#B69B6B]" />
                    <span>We respect your privacy. Unsubscribe anytime.</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* Seam Monogram - Placed between newsletter and black footer */}
        <div className="absolute left-1/2 top-[320px] -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#B69B6B]/50 bg-black/80 text-[#B69B6B] shadow-[0_0_30px_rgba(182,155,107,0.3)]">
            <span className="font-serif text-3xl">T</span>
          </div>
        </div>

        <section className="relative w-full">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12 xl:px-16">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1.1fr_1.2fr] gap-12 items-start pt-24 lg:pt-32 pb-16 lg:pb-20 border-b border-[#B69B6B]/20">
              {/* Brand Column */}
              <Reveal>
                <div className="mt-6">
                  <Link href="/" className="inline-block mb-6">
                    <span className="block font-serif text-4xl tracking-[0.12em] text-[#B69B6B]">
                      TANZADE
                    </span>
                    <span className="block mt-3 text-[11px] uppercase tracking-[0.45em] text-[#F7F3EE]/70">
                      Kozmetik
                    </span>
                  </Link>

                  <div className="mb-8 h-px w-16 bg-[#B69B6B]" />

                  <p className="max-w-xs text-sm leading-8 text-[#F7F3EE]/70">
                    Tanzade Kozmetik is a distinguished cosmetic manufacturer and
                    brand house, crafting premium beauty products with an
                    unwavering commitment to quality.
                  </p>

                  <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#B69B6B]/30 bg-black/40 text-[#B69B6B] lg:hidden">
                    <span className="font-serif text-3xl">T</span>
                  </div>
                </div>
              </Reveal>

              {/* Explore Column */}
              <FooterColumn title="Explore" className="mt-6">
                <FooterLink href="/about-us">About Us</FooterLink>
                <FooterLink href="/private-label">Private Label</FooterLink>
                <FooterLink href="/brands">Our Brands</FooterLink>
                <FooterLink href="/hand-body">Hand & Body</FooterLink>
                <FooterLink href="/hair-care">Hair Care</FooterLink>
                <FooterLink href="/shop">Shop All</FooterLink>
              </FooterColumn>

              {/* Our Brands Column */}
              <FooterColumn title="Our Brands" className="mt-6">
                <FooterLink href="/brands/produkt">Produkt by Tanzade</FooterLink>
                <FooterLink href="/brands/meew">MEEW</FooterLink>
                <FooterLink href="/brands/dentalume">Dentalume</FooterLink>
                <FooterLink href="/brands/miswhite">misWhite</FooterLink>
              </FooterColumn>

              {/* Contact Column */}
              <FooterColumn title="Contact" className="mt-6">
                <ContactItem icon={<Mail className="h-4 w-4" />}>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </ContactItem>
                <ContactItem icon={<Phone className="h-4 w-4" />}>
                  <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
                </ContactItem>
                <ContactItem icon={<MapPin className="h-4 w-4" />}>
                  Istanbul, Turkey
                </ContactItem>

                <Link
                  href="/private-label"
                  className="mt-6 inline-flex items-center text-sm text-[#B69B6B] hover:text-[#F7F3EE] transition-colors"
                >
                  Private Label Inquiry
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </FooterColumn>

              {/* Get in Touch Column */}
              <FooterColumn title="Get in Touch" className="mt-6">
                <div className="flex flex-col gap-4">
                  <TouchCard
                    label="Whatsapp"
                    value="+90 530 389 14 64"
                    href="https://wa.me/905303891464"
                  />
                  <TouchCard
                    label="Instagram"
                    value="@tanzadekozmetik"
                    href={COMPANY.social?.instagram || "#"}
                  />
                  <TouchCard
                    label="Facebook"
                    value="@tanzadekozmetik"
                    href={COMPANY.social?.facebook || "#"}
                  />
                </div>
              </FooterColumn>
            </div>
          </div>
        </section>

        {/* Bottom Bar - py-6 */}
        <section className="relative w-full">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#F7F3EE]/50">
                © {currentYear} Tanzade Kozmetik. All rights reserved.
              </p>

              <div className="hidden md:flex items-center gap-8 text-[#B69B6B]">
                <div className="h-px w-32 bg-[#B69B6B]/35" />
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B69B6B]/40 bg-black/50 shadow-lg">
                  <span className="font-serif text-2xl">T</span>
                </div>
                <div className="h-px w-32 bg-[#B69B6B]/35" />
              </div>

              <div className="flex items-center gap-8">
                <FooterMiniLink href="/privacy">Privacy</FooterMiniLink>
                <FooterMiniLink href="/terms">Terms</FooterMiniLink>
                <FooterMiniLink href="/cookies">Cookies</FooterMiniLink>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal>
      <div className={className}>
        <h4 className="mb-4 text-[12px] uppercase tracking-[0.35em] text-[#B69B6B]">
          {title}
        </h4>
        <div className="mb-6 h-px w-14 bg-[#B69B6B]/70" />
        <div className="flex flex-col gap-3">{children}</div>
      </div>
    </Reveal>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-between gap-4 text-sm text-[#F7F3EE]/70 transition-colors duration-300 hover:text-[#B69B6B]"
    >
      <span>{children}</span>
      <ArrowRight className="h-3.5 w-3.5 opacity-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
    </Link>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 text-sm text-[#F7F3EE]/70">
      <span className="text-[#B69B6B]">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

function TouchCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block rounded-sm border border-[#B69B6B]/35 bg-black/35 px-6 py-5 transition-all duration-300 hover:border-[#B69B6B] hover:bg-[#B69B6B]/10"
      whileHover={{ y: -2 }}
    >
      <span className="block text-[10px] uppercase tracking-[0.28em] text-[#B69B6B]">
        {label}
      </span>
      <span className="mt-2 block text-sm text-[#F7F3EE]/80">{value}</span>
    </motion.a>
  );
}

function FooterMiniLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[10px] uppercase tracking-[0.22em] text-[#B69B6B] hover:text-[#F7F3EE]"
    >
      {children}
    </Link>
  );
}