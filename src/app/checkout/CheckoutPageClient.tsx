"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, CreditCard, Truck, ShieldCheck } from "lucide-react";
import { Container, Button, Reveal, Divider, Section, PageHero } from "@/components/ui";
import { useCart } from "@/store/cart";

/* ═══════════════════════════════════════════════════
   CHECKOUT PAGE
   ═══════════════════════════════════════════════════ */

export default function CheckoutPageClient() {
  const { items, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Turkey",
    cardNumber: "",
    expiryDate: "",
    cvc: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Generate a mock order ID
    const newOrderId = `TZ-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);

    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSubmitted(true);
      clearCart();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <Section background="warm-white" className="min-h-[80vh] flex items-center">
        <Container size="sm" className="text-center py-24">
          <Reveal>
            <div className="mb-12">
              <CheckCircle2 className="w-20 h-20 text-gold mx-auto mb-8" strokeWidth={1} />
              <p className="label-luxury text-gold tracking-[0.3em] mb-6 text-xs uppercase">Order Confirmed</p>
              <h1 className="heading-editorial text-4xl md:text-5xl text-ink mb-6">Gratitude for your trust.</h1>
              <p className="body-refined text-stone-dark mb-2">Order Reference: <span className="text-ink font-medium">{orderId}</span></p>
              <p className="body-refined text-sm text-stone-dark max-w-md mx-auto leading-relaxed">
                We&apos;ve sent a confirmation email to <span className="text-ink font-medium">{formData.email}</span> with your full order details and tracking link.
              </p>
            </div>
            
            <div className="bg-cream border border-sand p-10 mb-12 text-left max-w-md mx-auto shadow-soft">
              <h3 className="label-luxury text-[10px] text-stone tracking-widest border-b border-sand pb-4 mb-6 uppercase">Next Steps</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full border border-gold flex items-center justify-center flex-shrink-0 text-[10px] text-gold mt-1">1</div>
                  <p className="body-refined text-sm text-stone-dark leading-relaxed">Our artisans will begin preparing your selection with poetic intention.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full border border-gold flex items-center justify-center flex-shrink-0 text-[10px] text-gold mt-1">2</div>
                  <p className="body-refined text-sm text-stone-dark leading-relaxed">You will receive a dispatch notification within 24-48 hours.</p>
                </li>
              </ul>
            </div>

            <Button variant="primary" size="lg" href="/shop" className="px-12">
              Continue Exploration
            </Button>
          </Reveal>
        </Container>
      </Section>
    );
  }

  if (items.length === 0) {
    return (
      <Section background="cream" className="min-h-[70vh] flex items-center">
        <Container className="text-center">
          <Reveal>
            <h1 className="heading-editorial text-3xl text-ink mb-6">Your cart is empty</h1>
            <p className="body-refined text-stone mb-10">Add some products to your cart to proceed with checkout.</p>
            <Button variant="outline" size="lg" href="/shop">
              Browse Collection
            </Button>
          </Reveal>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <PageHero background="beige">
        <Reveal>
          <Link href="/cart" className="label-luxury text-[10px] text-stone hover:text-ink transition-colors flex items-center gap-2 mb-6 uppercase tracking-widest">
            <ArrowLeft className="w-3 h-3" strokeWidth={1.5} />
            Return to Cart
          </Link>
          <h1 className="heading-hero-inner text-ink">Checkout</h1>
        </Reveal>
      </PageHero>

      <Section background="warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Contact Info */}
                <Reveal delay={0.1}>
                  <div className="bg-cream p-10 border border-sand shadow-soft">
                    <h2 className="label-luxury text-[11px] text-gold mb-10 tracking-[0.2em] uppercase border-b border-sand pb-4">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <InputField label="Full Name" name="fullName" type="text" value={formData.fullName} onChange={handleInputChange} required />
                      <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                      <div className="md:col-span-2">
                        <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Shipping Address */}
                <Reveal delay={0.2}>
                  <div className="bg-cream p-10 border border-sand shadow-soft">
                    <h2 className="label-luxury text-[11px] text-gold mb-10 tracking-[0.2em] uppercase border-b border-sand pb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 gap-8">
                      <InputField label="Address" name="address" type="text" value={formData.address} onChange={handleInputChange} required />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <InputField label="City" name="city" type="text" value={formData.city} onChange={handleInputChange} required />
                        <InputField label="Postal Code" name="postalCode" type="text" value={formData.postalCode} onChange={handleInputChange} required />
                        <InputField label="Country" name="country" type="text" value={formData.country} onChange={handleInputChange} required />
                      </div>
                      <div className="mt-2">
                        <label className="label-luxury text-[10px] text-stone mb-3 block uppercase tracking-widest">Order Note (Optional)</label>
                        <textarea 
                          name="orderNote"
                          className="w-full bg-transparent border border-sand px-4 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-colors min-h-[120px] placeholder:text-stone/20"
                          placeholder="Special instructions for delivery..."
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Payment Info */}
                <Reveal delay={0.3}>
                  <div className="bg-cream p-10 border border-sand shadow-soft">
                    <h2 className="label-luxury text-[11px] text-gold mb-10 tracking-[0.2em] uppercase border-b border-sand pb-4">Payment Details</h2>
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 p-5 border border-sand bg-warm-white">
                        <CreditCard className="w-5 h-5 text-stone" strokeWidth={1.5} />
                        <span className="text-xs font-medium text-ink flex-1 uppercase tracking-widest">Credit Card</span>
                        <div className="flex gap-2">
                          <div className="w-8 h-5 bg-stone/5 rounded border border-sand/30" />
                          <div className="w-8 h-5 bg-stone/5 rounded border border-sand/30" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-8">
                        <InputField label="Card Number" name="cardNumber" type="text" placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleInputChange} required />
                        <div className="grid grid-cols-2 gap-8">
                          <InputField label="Expiry Date" name="expiryDate" type="text" placeholder="MM/YY" value={formData.expiryDate} onChange={handleInputChange} required />
                          <InputField label="CVC" name="cvc" type="text" placeholder="***" value={formData.cvc} onChange={handleInputChange} required />
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full py-6 mt-8" 
                    type="submit"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing Ritual..." : "Complete Purchase"}
                  </Button>
                </Reveal>
              </form>
            </div>

            {/* Summary */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <Reveal delay={0.2}>
                  <div className="bg-cream p-10 border border-sand shadow-soft">
                    <h2 className="label-luxury text-[11px] text-gold mb-10 tracking-[0.2em] uppercase border-b border-sand pb-4">Your Selection</h2>
                    
                    <div className="max-h-[400px] overflow-y-auto mb-10 pr-2 custom-scrollbar">
                      <ul className="divide-y divide-sand/30">
                        {items.map((item) => (
                          <li key={item.product.id} className="py-6 flex gap-8">
                            <div className="w-20 h-24 bg-beige flex-shrink-0 flex items-center justify-center border border-sand/20">
                              <span className="label-luxury text-[8px] text-stone uppercase">{item.product.brand.split(" ")[0]}</span>
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <p className="label-luxury text-[9px] text-gold mb-1 uppercase tracking-widest">{item.product.brand}</p>
                                <h3 className="text-sm font-medium text-ink leading-snug">{item.product.name}</h3>
                                <p className="label-luxury text-[9px] text-stone mt-2 uppercase tracking-widest">Qty: {item.quantity}</p>
                              </div>
                              <p className="text-sm text-ink mt-3 font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-5 mb-10">
                      <div className="flex justify-between text-sm">
                        <span className="text-stone-dark">Subtotal</span>
                        <span className="text-ink font-medium">${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-stone-dark">Shipping</span>
                        <span className="text-gold italic">Complimentary</span>
                      </div>
                      <Divider className="my-6" />
                      <div className="flex justify-between items-end">
                        <span className="label-luxury text-[11px] text-ink uppercase tracking-widest">Total</span>
                        <span className="heading-editorial text-3xl text-ink">${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-1 gap-5 pt-10 border-t border-sand">
                      <div className="flex items-center gap-4">
                        <Truck className="w-5 h-5 text-gold" strokeWidth={1} />
                        <span className="text-[10px] label-luxury text-stone uppercase tracking-[0.2em]">Insured Global Delivery</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <ShieldCheck className="w-5 h-5 text-gold" strokeWidth={1} />
                        <span className="text-[10px] label-luxury text-stone uppercase tracking-[0.2em]">Encrypted Data Protection</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function InputField({ 
  label, 
  name, 
  type, 
  required, 
  placeholder, 
  value, 
  onChange 
}: { 
  label: string; 
  name: string; 
  type: string; 
  required?: boolean; 
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full">
      <label className="label-luxury text-[10px] text-stone mb-3 block uppercase tracking-widest">{label}</label>
      <input 
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border border-sand px-4 py-4 text-sm text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-stone/20"
      />
    </div>
  );
}


