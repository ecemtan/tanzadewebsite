"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  Store,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE, DURATION } from "@/lib/animations";
import { useCart } from "@/store/cart";

const navItems = [
  { label: "About Us", href: "/about-us" },
  { label: "Private Label", href: "/private-label" },
  { label: "Our Brands", href: "/brands" },
  { label: "Hand & Body", href: "/hand-body" },
  { label: "Hair Care", href: "/hair-care" },
  { label: "Skin Care", href: "/skin-care" },
  { label: "Oral Care", href: "/oral-care" },
  { label: "Perfumes", href: "/perfumes" },
  { label: "Men Editions", href: "/men-edition" },
  { label: "Contact", href: "/contact" },
];

/* ═══════════════════════════════════════════════════
   NAVBAR — Premium editorial navigation
   ═══════════════════════════════════════════════════ */

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[92px] bg-[#F7F3EE]/40 backdrop-blur-[10px] border-b border-transparent transition-all duration-300 hover:bg-[#F7F3EE]/96 hover:border-black/10",
          isScrolled && "bg-[#F7F3EE]/96 border-black/10"
        )}
      >
        <div className="mx-auto grid w-full h-full max-w-[1440px] grid-cols-[130px_1fr_130px] items-center px-6 lg:px-10 xl:px-12">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center justify-start"
          >
            <img
              src="/images/tanzade-Photoroom.png"
              alt="Tanzade Kozmetik"
              className="h-[100px] w-auto object-contain"
            />
          </Link>

          {/* CENTER NAVIGATION */}
          <nav className="hidden lg:flex items-center justify-center">
            <ul className="flex items-center gap-[42px]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      whitespace-nowrap
                      uppercase
                      tracking-[0.23em]
                      text-[12px]
                      text-black/85
                      transition-colors
                      duration-300
                      hover:text-black
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center justify-end">

            {/* divider */}
            <div className=" lg:block h-9 w-px bg-black/10 mr-8" />

            {/* icon group */}
            <div className="flex items-center gap-5">

              <button
                aria-label="Search"
                className="transition-opacity hover:opacity-60"
              >
                <Search className="h-[24px] w-[24px]" strokeWidth={1.4} />
              </button>

              <Link
                href="/account"
                aria-label="Account"
                className="hidden md:block transition-opacity hover:opacity-60"
              >
                <User className="h-[24px] w-[24px]" strokeWidth={1.4} />
              </Link>

              <Link
                href="/shop"
                aria-label="Shop"
                className="hidden md:block transition-opacity hover:opacity-60"
              >
                <Store className="h-[24px] w-[24px]" strokeWidth={1.4} />
              </Link>

              <button
                onClick={openCart}
                aria-label="Bag"
                className="relative transition-opacity hover:opacity-60"
              >
                <ShoppingBag
                  className="h-[24px] w-[24px]"
                  strokeWidth={1.4}
                />

                {totalItems > 0 && (
                  <span
                    className="
                      absolute
                      -left-2
                      -top-2
                      flex
                      h-4
                      w-4
                      items-center
                      justify-center
                      rounded-full
                      bg-[#B69B6B]
                      text-[9px]
                      text-black
                    "
                  >
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                className="lg:hidden ml-2 p-2 text-black transition-colors"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? (
                  <X className="w-6 h-6" strokeWidth={1.4} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1.4} />
                )}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#F7F3EE]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.normal }}
          >
            <div className="pt-28 px-8 pb-8 h-full overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {navItems.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: DURATION.normal,
                      ease: EASE.smooth,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block py-4 text-xl font-light text-black/80 hover:text-black transition-colors border-b border-black/5"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className="mt-8 pt-8 flex flex-col gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: DURATION.normal }}
                >
                  <Link
                    href="/shop"
                    className="text-[11px] uppercase tracking-[0.2em] text-black/60 hover:text-black transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Explore Shop
                  </Link>
                  <Link
                    href="/account"
                    className="text-[11px] uppercase tracking-[0.2em] text-black/60 hover:text-black transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    My Account
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
