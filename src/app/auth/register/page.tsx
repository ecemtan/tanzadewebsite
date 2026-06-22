import type { Metadata } from "next";
import AuthPageClient from "../AuthPageClient";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Join Tanzade Kozmetik for a refined luxury cosmetic experience.",
};

export default function RegisterPage() {
  return <AuthPageClient mode="register" />;
}
