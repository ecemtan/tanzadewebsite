import type { Metadata } from "next";
import CartPageClient from "./CartPageClient";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your selected Tanzade Kozmetik products before checkout.",
};

export default function CartPage() {
  return <CartPageClient />;
}
