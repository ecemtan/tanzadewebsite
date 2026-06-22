"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Container, Reveal } from "@/components/ui";
import { cn } from "@/lib/utils";

const StoryScene = dynamic(() => import("./StoryScene"), { ssr: false });

/* ═══════════════════════════════════════════════════
   STORY SECTION — Immersive storytelling layout
   ═══════════════════════════════════════════════════ */

interface StorySectionProps {
  title: string;
  subtitle?: string;
  content: string;
  visual: React.ReactNode;
  reversed?: boolean;
  className?: string;
}

export function StorySection({ 
  title, 
  subtitle, 
  content, 
  visual, 
  reversed = false,
  className
}: StorySectionProps) {
  return (
    <section className={cn("relative w-full min-h-screen flex items-center overflow-hidden py-24", className)}>
      {/* Background WebGL Scene */}
      <StoryScene>
        {visual}
      </StoryScene>

      {/* Content Overlay */}
      <Container className="relative z-10 px-6 md:px-8">
        <div className={cn(
          "max-w-xl w-full",
          reversed ? "md:ml-auto md:text-right" : "md:mr-auto text-left"
        )}>
          <Reveal direction={reversed ? "right" : "left"}>
            {subtitle && (
              <p className="label-luxury text-[10px] md:text-[11px] text-gold mb-4 md:mb-6 tracking-[0.3em] md:tracking-[0.4em] uppercase">
                {subtitle}
              </p>
            )}
            <h2 className="heading-display text-4xl md:text-6xl text-ink mb-6 md:mb-10 leading-[1.15] md:leading-[1.1]">
              {title}
            </h2>
            <p className="body-refined text-base md:text-xl text-stone-dark leading-relaxed">
              {content}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
