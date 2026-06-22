"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, Package, Settings, LogOut, ChevronRight, Heart } from "lucide-react";
import { Container, Button, Reveal, Section, Divider } from "@/components/ui";
import { useAuth } from "@/store/auth";

/* ═══════════════════════════════════════════════════
   ACCOUNT PAGE — User Profile & Dashboard
   ═══════════════════════════════════════════════════ */

export default function AccountPageClient() {
  const router = useRouter();
  const { user, logout, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="bg-cream min-h-screen pb-20">
      <Section background="beige" spacing="md" className="border-b border-sand">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="label-luxury text-[10px] text-gold mb-2 tracking-[0.2em] uppercase">My Account</p>
                <h1 className="heading-display text-4xl text-ink">Welcome, {user.fullName.split(' ')[0]}</h1>
                <p className="body-refined text-sm text-stone mt-2">{user.email}</p>
              </div>
              <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Container className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-2">
            <AccountNavLink icon={<User className="w-4 h-4" />} label="Personal Information" active />
            <AccountNavLink icon={<Package className="w-4 h-4" />} label="Order History" />
            <AccountNavLink icon={<Heart className="w-4 h-4" />} label="My Rituals (Wishlist)" />
            <AccountNavLink icon={<Settings className="w-4 h-4" />} label="Account Settings" />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="bg-white border border-sand/30 p-8 md:p-10 shadow-soft">
                <h2 className="heading-editorial text-2xl text-ink mb-6">Recent Activity</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-sand/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center">
                        <Package className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="body-refined text-sm text-ink font-medium">Order #TZ-88421</p>
                        <p className="label-luxury text-[9px] text-stone">Processing • Oct 12, 2023</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone/40" />
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-sand/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="body-refined text-sm text-ink font-medium">Added 'Botanical Hand Wash' to Rituals</p>
                        <p className="label-luxury text-[9px] text-stone">Oct 10, 2023</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone/40" />
                  </div>
                </div>

                <Divider className="my-10" />

                <h2 className="heading-editorial text-2xl text-ink mb-6">Personal Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="label-luxury text-[10px] text-stone block mb-1">Full Name</label>
                    <p className="body-refined text-base text-ink">{user.fullName}</p>
                  </div>
                  <div>
                    <label className="label-luxury text-[10px] text-stone block mb-1">Email</label>
                    <p className="body-refined text-base text-ink">{user.email}</p>
                  </div>
                  <div>
                    <label className="label-luxury text-[10px] text-stone block mb-1">Shipping Address</label>
                    <p className="body-refined text-sm text-stone italic">No address provided yet.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}

function AccountNavLink({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={cn(
      "w-full flex items-center justify-between p-4 transition-all duration-300",
      active ? "bg-ink text-cream" : "bg-transparent text-charcoal hover:bg-beige"
    )}>
      <div className="flex items-center gap-3">
        {icon}
        <span className="label-luxury text-[11px] uppercase tracking-wider">{label}</span>
      </div>
      <ChevronRight className={cn("w-3 h-3", active ? "text-gold" : "text-stone/40")} />
    </button>
  );
}

import { cn } from "@/lib/utils";
