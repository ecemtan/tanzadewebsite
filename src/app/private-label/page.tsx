"use client";

import React from "react";
import { Factory, FlaskConical, Package, Globe2, Sparkles, CheckCircle2 } from "lucide-react";
import { Container, Button, Reveal, Divider, Section, PageHero, SectionHeader, Grid } from "@/components/ui";

export default function PrivateLabelPage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Capabilities />
      <InquiryForm />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[calc(150vh-80px)] min-h-[calc(100vh-80px)] w-full overflow-hidden bg-black">
      {/* Cinematic Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/private-label-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35 z-10" />

      {/* Hero Content - Centered vertically and horizontally */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <Container className="text-center">
          <Reveal>
            <p className="label-luxury text-[11px] text-gold tracking-[0.4em] mb-6 uppercase">
              PRIVATE LABEL MANUFACTURING
            </p>
            <h1 className="heading-editorial text-4xl md:text-6xl text-white mb-8 max-w-4xl mx-auto leading-tight">
              Crafting Premium Cosmetic Brands
            </h1>
            <p className="body-refined text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-12">
              From formulation to full-scale luxury production.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="primary" size="lg" href="#inquiry" className="min-w-[200px]">
                Request a Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="#capabilities" 
                className="min-w-[200px] border-white text-white hover:bg-white hover:text-black transition-all duration-500"
              >
                Explore Capabilities
              </Button>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <FlaskConical className="w-6 h-6" strokeWidth={1.2} />,
      title: "Product Development",
      description: "Our laboratory experts create bespoke formulations tailored to your brand's unique identity and target market."
    },
    {
      icon: <Factory className="w-6 h-6" strokeWidth={1.2} />,
      title: "Advanced Manufacturing",
      description: "State-of-the-art production facilities equipped to handle complex formulations with meticulous quality control."
    },
    {
      icon: <Package className="w-6 h-6" strokeWidth={1.2} />,
      title: "Packaging Solutions",
      description: "Comprehensive packaging sourcing and design services to ensure your product stands out on any shelf."
    },
    {
      icon: <Globe2 className="w-6 h-6" strokeWidth={1.2} />,
      title: "Export & Logistics",
      description: "Seamless global distribution support with full documentation for international compliance and registration."
    }
  ];

  return (
    <Section background="cream">
      <Container>
        <SectionHeader 
          title="Comprehensive Services" 
        />

        <Grid cols={4} gap="lg">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group">
                <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {service.icon}
                </div>
                <h3 className="heading-editorial text-2xl text-ink mb-4">{service.title}</h3>
                <p className="body-refined text-sm text-stone-dark leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

function Process() {
  const steps = [
    { number: "01", title: "Consultation", desc: "Defining vision and technical requirements." },
    { number: "02", title: "Formulation", desc: "Bespoke lab development and sampling." },
    { number: "03", title: "Testing", desc: "Rigorous stability and safety evaluations." },
    { number: "04", title: "Production", desc: "Precision manufacturing and filling." },
    { number: "05", title: "Dispatch", desc: "Global logistics and quality clearance." }
  ];

  return (
    <Section background="ink">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          <div className="lg:col-span-1">
            <SectionHeader
              centered={false}
              light
              subtitle="The Journey"
              title="Our Production Philosophy"
              description="We treat every private label partnership as an artistic collaboration, ensuring the final product reflects the highest standards of Turkish manufacturing excellence."
            />
            <Reveal delay={0.2}>
              <Divider className="bg-cream/10 mb-10" />
            </Reveal>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <Reveal key={index} direction="right" delay={index * 0.1}>
                  <div className="flex gap-8 group">
                    <span className="heading-display text-4xl text-gold/20 group-hover:text-gold transition-colors duration-500">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="heading-editorial text-2xl text-cream mb-2">{step.title}</h3>
                      <p className="body-refined text-sm text-cream/40">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Capabilities() {
  const features = [
    "GMP & ISO Certified Facilities",
    "Minimum Order Quantity (MOQ) Flexibility",
    "Eco-Friendly Packaging Options",
    "Dermatologically Tested Formulations",
    "Full Compliance Support (EU/Global)",
    "Bespoke Fragrance Development"
  ];

  return (
    <Section background="beige" id="capabilities">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          <Reveal className="h-full">
            <div className="relative h-full min-h-[500px] lg:min-h-[700px] overflow-hidden group border border-sand">
              {/* Cinematic Looping Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[4s] group-hover:scale-[1.05]"
              >
                <source src="/videos/private-label-hero.mp4" type="video/mp4" />
              </video>

              {/* Luxury Mood Overlay */}
              <div className="absolute inset-0 bg-black/20 z-10" />

              <div className="absolute bottom-10 left-10 z-20">
                <p className="label-luxury text-[10px] tracking-[0.3em] text-white/90 uppercase">
                  Precision Manufacturing
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center py-12 lg:py-0">
            <SectionHeader
              centered={false}
              title="Manufacturing Capabilities"
            />
            <ul className="grid grid-cols-1 gap-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-5 h-5 rounded-full border border-gold flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="body-refined text-sm text-stone-dark group-hover:text-ink transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function InquiryForm() {
  return (
    <section id="inquiry" className="relative w-full min-h-screen overflow-hidden py-28 lg:py-36">
      <img
        src="/images/partnership-bg.png"
        alt="Tanzade luxury skincare products"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/5" />

      <Container className="relative z-10">
        <div className="w-full max-w-[760px] mx-auto">
          <SectionHeader
            centered
            title="Start Your Partnership"
            description="Tell us about your project requirements and our team will get in touch."
            className="mb-12 text-ink"
          />

          <Reveal delay={0.2}>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
              <InputGroup label="Company Name" type="text" placeholder="Your brand name" />
              <InputGroup label="Contact Person" type="text" placeholder="Full name" />
              <InputGroup label="Email Address" type="email" placeholder="email@company.com" />
              <InputGroup label="Phone Number" type="tel" placeholder="+00 000 000 0000" />

              <div className="md:col-span-2">
                <label className="label-luxury text-[10px] text-ink mb-2 block uppercase tracking-[0.3em]">
                  Product Category
                </label>
                <div className="relative">
                  <select className="w-full bg-transparent border border-black/25 px-5 py-3.5 text-sm text-ink focus:outline-none focus:border-black transition-all duration-500 appearance-none cursor-pointer">
                    <option>Skincare</option>
                    <option>Haircare</option>
                    <option>Bodycare</option>
                    <option>Oral Care</option>
                    <option>Fragrance</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-ink/60">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="label-luxury text-[10px] text-ink mb-2 block uppercase tracking-[0.3em]">
                  Tell us more
                </label>
                <textarea
                  className="w-full bg-transparent border border-black/25 px-5 py-4 text-sm text-ink focus:outline-none focus:border-black transition-all duration-500 min-h-[155px] placeholder:text-ink/45 resize-none"
                  placeholder="Estimated quantities, specific formulation needs, or packaging ideas..."
                />
              </div>

              <div className="md:col-span-2 flex justify-center mt-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="min-w-[260px] py-5 text-[11px] uppercase tracking-[0.3em] font-medium bg-ink text-white hover:bg-gold hover:text-ink transition-all duration-700 shadow-xl border-none"
                >
                  Send Inquiry
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function InputGroup({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div className="w-full">
      <label className="label-luxury text-[10px] text-ink mb-2 block uppercase tracking-[0.3em]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border border-black/25 px-5 py-3.5 text-sm text-ink focus:outline-none focus:border-black transition-all duration-500 placeholder:text-ink/45"
      />
    </div>
  );
}
