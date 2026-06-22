"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/lib/animations";

/* ═══════════════════════════════════════════════════
   SECTION — Animated page section wrapper
   ═══════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════
   CONTAINER — Max-width content container
   ═══════════════════════════════════════════════════ */

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const containerSizes = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-[1440px]",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  size = "xl",
}: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-8 lg:px-12 xl:px-16", containerSizes[size], className)}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION — Animated page section wrapper
   ═══════════════════════════════════════════════════ */

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "cream" | "beige" | "sand" | "ink" | "warm-white";
  spacing?: "sm" | "md" | "lg" | "xl" | "none";
  animate?: boolean;
}

const bgStyles = {
  cream: "bg-[#F8F7F5]",
  beige: "bg-[#F1EFE9]",
  sand: "bg-[#E8E2D9]",
  ink: "bg-[#1A1A1A] text-[#F8F7F5]",
  "warm-white": "bg-[#FFFFFF]",
};

const spacingStyles = {
  none: "py-0",
  sm: "py-8 md:py-12",
  md: "py-14 md:py-18",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32", // mobile: 80px, desktop: 128px - adjusted for user's 56/72/96 request
};

// Precise user request: mobile: 56px, tablet: 72px, desktop: 96px
const preciseSpacing = "py-[56px] md:py-[72px] lg:py-[96px]";

export function Section({
  children,
  className,
  id,
  background = "cream",
  spacing = "lg",
  animate = true,
}: SectionProps) {
  const Wrapper = animate ? motion.section : "section";
  const animationProps = animate
    ? {
        variants: staggerContainer,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
      }
    : {};

  return (
    <Wrapper
      id={id}
      className={cn(
        "w-full",
        bgStyles[background], 
        spacing === "none" ? "py-0" : preciseSpacing, 
        className
      )}
      {...animationProps}
    >
      {children}
    </Wrapper>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE HERO — Header section for pages
   ═══════════════════════════════════════════════════ */

interface PageHeroProps {
  children: React.ReactNode;
  background?: "cream" | "beige" | "sand" | "ink";
  className?: string;
  isHome?: boolean;
}

export function PageHero({ 
  children, 
  background = "beige", 
  className,
  isHome = false 
}: PageHeroProps) {
  return (
    <section 
      className={cn(
        "w-full",
        bgStyles[background],
        isHome ? "min-h-[calc(80vh-80px)]" : "py-24 md:py-32",
        "flex items-center justify-center relative overflow-hidden",
        className
      )}
    >
      <Container className="relative z-10">
        {children}
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION HEADER — Consistent title/subtitle combo
   ═══════════════════════════════════════════════════ */

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
  subtitleClassName,
  titleClassName,
  descriptionClassName,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-16",
      centered ? "text-center mx-auto max-w-3xl" : "text-left",
      className
    )}>
      <Reveal>
        {subtitle && (
          <p className={cn(
            "label-luxury mb-4 tracking-[0.25em]",
            light ? "text-gold-light" : "text-gold",
            subtitleClassName
          )}>
            {subtitle}
          </p>
        )}
        <h2 className={cn(
          "heading-editorial mb-6",
          light ? "text-cream" : "text-ink",
          titleClassName
        )}>
          {title}
        </h2>
        {description && (
          <p className={cn(
            "body-refined text-base opacity-80",
            light ? "text-cream/70" : "text-stone-dark",
            descriptionClassName
          )}>
            {description}
          </p>
        )}
      </Reveal>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   GRID — Reusable responsive grid
   ═══════════════════════════════════════════════════ */

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

const gaps = {
  sm: "gap-4",
  md: "gap-8",
  lg: "gap-12 md:gap-16",
};

const colStyles = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
};

export function Grid({ children, cols = 3, gap = "md", className }: GridProps) {
  return (
    <div className={cn("grid", colStyles[cols], gaps[gap], className)}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   REVEAL — Scroll-triggered reveal animation
   ═══════════════════════════════════════════════════ */

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const directionMap = {
    up: { y: 30, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    none: { y: 0, x: 0 },
  };

  const offset = directionMap[direction];

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.7,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   DIVIDER — Decorative section divider
   ═══════════════════════════════════════════════════ */

interface DividerProps {
  variant?: "gold" | "subtle";
  className?: string;
}

export function Divider({ variant = "subtle", className }: DividerProps) {
  return (
    <hr
      className={cn(
        variant === "gold" ? "divider-gold" : "divider-subtle",
        "w-full",
        className
      )}
    />
  );
}

