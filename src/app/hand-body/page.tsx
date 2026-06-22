import CategoryPageClient from "@/components/product/CategoryPageClient";
import { CATEGORIES } from "@/lib/constants";

export const metadata = {
  title: "Hand & Body Rituals",
};

export default function HandBodyPage() {
  const category = CATEGORIES.find(c => c.id === "hand-body")!;
  return <CategoryPageClient category={category} />;
}
