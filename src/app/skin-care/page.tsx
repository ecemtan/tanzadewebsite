import CategoryPageClient from "@/components/product/CategoryPageClient";
import { CATEGORIES } from "@/lib/constants";

export const metadata = {
  title: "Skin Care Rituals",
};

export default function SkinCarePage() {
  const category = CATEGORIES.find(c => c.id === "skin-care")!;
  return <CategoryPageClient category={category} />;
}
