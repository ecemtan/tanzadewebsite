import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import { CartProvider } from "@/store/cart";
import { AuthProvider } from "@/store/auth";

/* ── Typography ── */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
});

/* ── Metadata ── */
export const metadata: Metadata = {
  title: {
    default: "Tanzade Kozmetik — Private Label & Premium Cosmetics",
    template: "%s | Tanzade Kozmetik",
  },
  description:
    "Tanzade Kozmetik is a distinguished cosmetic manufacturer and brand house, crafting premium beauty products with an unwavering commitment to quality, sustainability, and sensorial excellence.",
  keywords: [
    "Tanzade",
    "Kozmetik",
    "cosmetics",
    "private label",
    "premium skincare",
    "luxury beauty",
    "hair care",
    "oral care",
    "fragrance",
    "Turkey",
  ],
  openGraph: {
    title: "Tanzade Kozmetik — Private Label & Premium Cosmetics",
    description:
      "Crafting premium beauty products with an unwavering commitment to quality, sustainability, and sensorial excellence.",
    type: "website",
    locale: "en_US",
  },
};

/* ── Root Layout ── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <CartDrawer />
            <main className="flex-1 pt-[92px]">{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
