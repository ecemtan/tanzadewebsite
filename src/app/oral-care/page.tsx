import CategoryPageClient from "@/components/product/CategoryPageClient";
import { CATEGORIES } from "@/lib/constants";

export const metadata = {
  title: "Oral Care Rituals",
};

export default function OralCarePage() {
  const category = CATEGORIES.find(c => c.id === "oral-care")!;
  return <CategoryPageClient category={category} />;
}
