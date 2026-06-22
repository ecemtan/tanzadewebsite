import type { Metadata } from "next";
import AuthPageClient from "../AuthPageClient";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Access your Tanzade Kozmetik account.",
};

export default function LoginPage() {
  return <AuthPageClient mode="login" />;
}
