"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, EyeOff, Lock, Mail, User, CheckCircle2 } from "lucide-react";
import { Container, Button, Reveal, Section } from "@/components/ui";
import { useAuth } from "@/store/auth";

/* ═══════════════════════════════════════════════════
   AUTHENTICATION PAGES (Shared Client Component)
   ═══════════════════════════════════════════════════ */

interface AuthPageProps {
  mode: "login" | "register";
}

export default function AuthPageClient({ mode }: AuthPageProps) {
  const router = useRouter();
  const { login, register } = useAuth();
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const isLogin = mode === "login";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (isLogin) {
      login({ 
        fullName: formData.fullName || "User", 
        email: formData.email 
      });
    } else {
      register({ 
        fullName: formData.fullName, 
        email: formData.email 
      });
    }
    
    setIsSuccess(true);
    setIsLoading(false);
    
    setTimeout(() => {
      router.push("/account");
    }, 2000);
  };

  if (isSuccess) {
    return (
      <Section background="beige">
        <Container size="sm" className="text-center py-24">
          <Reveal>
            <div className="bg-warm-white border border-sand p-12 md:p-16 shadow-soft flex flex-col items-center">
              <CheckCircle2 className="w-16 h-16 text-gold mb-8" strokeWidth={1} />
              <h2 className="heading-editorial text-3xl text-ink mb-4">
                {isLogin ? "Welcome Back" : "Account Created"}
              </h2>
              <p className="body-refined text-stone-dark">
                {isLogin 
                  ? "Redirecting you to your personal ritual sanctuary..." 
                  : "Welcome to the world of Tanzade. Redirecting to your account..."}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
    );
  }

  return (
    <Section background="beige">
      <Container size="sm">
        <Reveal>
          <div className="bg-warm-white border border-sand p-10 md:p-16 shadow-soft">
            {/* Header */}
            <div className="text-center mb-12">
              <Link href="/" className="inline-block mb-10">
                <span className="heading-editorial text-2xl text-ink">Tanzade</span>
                <span className="block label-luxury text-[9px] text-stone tracking-[0.3em] uppercase mt-1">Kozmetik</span>
              </Link>
              <h1 className="heading-editorial text-3xl text-ink mb-4">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="body-refined text-sm text-stone-dark max-w-xs mx-auto">
                {isLogin 
                  ? "Enter your details to access your account." 
                  : "Join our community for a refined shopping experience."}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-8" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="space-y-3">
                  <label className="label-luxury text-[10px] text-stone tracking-widest block uppercase">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone/50" strokeWidth={1.5} />
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-transparent border border-sand px-12 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <label className="label-luxury text-[10px] text-stone tracking-widest block uppercase">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone/50" strokeWidth={1.5} />
                  <input 
                    required
                    type="email" 
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-sand px-12 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="label-luxury text-[10px] text-stone tracking-widest uppercase">Password</label>
                  {isLogin && (
                    <Link href="#" className="text-[10px] label-luxury text-stone hover:text-ink transition-colors uppercase">
                      Forgot?
                    </Link>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone/50" strokeWidth={1.5} />
                  <input 
                    required
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-transparent border border-sand px-12 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone/50 hover:text-ink transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button 
                variant="primary" 
                className="w-full py-5 mt-4" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : (isLogin ? "Sign In" : "Create Account")}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-12 text-center border-t border-sand pt-10">
              <p className="body-refined text-sm text-stone-dark mb-4">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
              </p>
              <Link 
                href={isLogin ? "/auth/register" : "/auth/login"}
                className="label-luxury text-xs text-ink hover:text-gold transition-colors underline underline-offset-[12px] uppercase tracking-widest"
              >
                {isLogin ? "Create Account" : "Sign In"}
              </Link>
            </div>

            {/* Back button */}
            <div className="mt-10 text-center">
              <Link href="/" className="label-luxury text-[9px] text-stone/40 hover:text-ink transition-colors flex items-center justify-center gap-2 uppercase tracking-[0.2em]">
                <ArrowLeft className="w-3 h-3" strokeWidth={1.5} />
                Back to Tanzade
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

