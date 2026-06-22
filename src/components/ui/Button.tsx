"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════
   BUTTON — Premium luxury button component
   ═══════════════════════════════════════════════════ */

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles = {
  primary:
    "bg-ink text-cream hover:bg-charcoal border border-ink",
  secondary:
    "bg-gold text-ink hover:bg-gold-dark border border-gold",
  outline:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream",
  ghost:
    "bg-transparent text-ink hover:text-gold-dark border border-transparent",
};

const sizeStyles = {
  sm: "px-5 py-2 text-xs",
  md: "px-8 py-3 text-sm",
  lg: "px-12 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    "label-luxury inline-flex items-center justify-center gap-2",
    "transition-all duration-[var(--duration-normal)] ease-[var(--ease-luxury)]",
    "cursor-pointer select-none",
    disabled && "opacity-50 cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={disabled ? undefined : { scale: 1.02 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
