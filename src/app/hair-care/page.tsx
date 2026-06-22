import CategoryPageClient from "@/components/product/CategoryPageClient";
import { CATEGORIES } from "@/lib/constants";

export const metadata = {
  title: "Hair Care Rituals",
};

export default function HairCarePage() {
  const category = CATEGORIES.find(c => c.id === "hair-care")!;
  return <CategoryPageClient category={category} />;
}
