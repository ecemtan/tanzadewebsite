import type { Metadata } from "next";
import { Suspense } from "react";
import ShopPageClient from "./ShopPageClient";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Explore the complete Tanzade Kozmetik collection — premium skincare, hair care, oral care, and fragrances from our distinguished brand houses.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoading />}>
      <ShopPageClient />
    </Suspense>
  );
}

function ShopLoading() {
  return (
    <div className="pt-36 pb-20 flex items-center justify-center">
      <p className="label-luxury text-[11px] text-stone tracking-[0.2em]">Loading...</p>
    </div>
  );
}
