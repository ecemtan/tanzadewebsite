import type { Metadata } from "next";
import CheckoutPageClient from "./CheckoutPageClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure checkout for Tanzade Kozmetik premium products.",
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
