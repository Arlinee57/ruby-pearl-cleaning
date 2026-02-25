import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  Leaf,
  Building2,
  Home,
  ClipboardCheck,
  Clock,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * ✅ Edit these to your real info.
 * (I pulled what I could from your inspo image; double-check phone/email.)
 */
const BRAND = {
  name: "Ruby & Pearl Cleaning Services LLC",
  tagline: "Professional, reliable cleaning — with a boutique touch.",
  serviceArea: "Kansas City Metro (KCMO + surrounding)",
  phoneDisplay: "(816) 328-3250",
  phoneHref: "tel:+18163283250",
  email: "rubyandpearlcleaning@gmail.com",
  insuranceLine: "Fully insured & bonded for your peace of mind.",
};

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function RubyPearlLandingPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const palette = useMemo(
    () => ({
      bg: "#fbfaf7" /* warm ivory */,
      surface: "#ffffff",
      ink: "#1f1f22" /* soft charcoal */,
      muted: "#6b6b75",
      champagne: "#c8b48a" /* classy gold */,
      pearl: "#f2efe8" /* pearl */,
      sage: "#7a8b7a",
      blush: "#d7b4ad",
    }),
    []
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Hook this to your email/CRM later.
    // For now, it just shows a success state.
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: palette.bg,
        color: palette.ink,
      }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 400px at 15% 10%, rgba(200,180,138,0.18), transparent 60%), radial-gradient(700px 420px at 85% 15%, rgba(215,180,173,0.14), transparent 60%), radial-gradient(900px 520px at 55% 95%, rgba(122,139,122,0.12), transparent 60%)",
        }}
      />

      {/* Top bar */}
      <div className="w-full border-b border-black/5 bg-white/55 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div
              className="grid h-10 w-10 place-items-center rounded-2xl shadow-sm"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,180,138,0.35), rgba(242,239,232,0.95))",
                border: "1px solid rgba(31,31,34,0.08)",
              }}
            >
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">Ruby &amp; Pearl</div>
              <div className="text-xs" style={{ color: palette.muted }}>
                Cleaning Services
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm hover:opacity-80"
                style={{ color: palette.muted }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Badge
              className="hidden md:inline-flex"
              style={{
                background: "rgba(122,139,122,0.14)",
                color: palette.ink,
                border: "1px solid rgba(31,31,34,0.08)",
              }}
            >
              <ShieldCheck className="mr-1 h-3.5 w-3.5" /> Insured
            </Badge>
            <Badge
              className="hidden md:inline-flex"
              style={{
                background: "rgba(200,180,138,0.16)",
                color: palette.ink,
                border: "1px solid rgba(31,31,34,0.08)",
              }}
            >
              <BadgeCheck className="mr-1 h-3.5 w-3.5" /> Bonded
            </Badge>
            <Button asChild className="rounded-2xl">
              <a href="#contact">
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                style={{
                  background: "rgba(200,180,138,0.16)",
                  color: palette.ink,
                  border: "1px solid rgba(31,31,34,0.08)",
                }}
              >
                Boutique-level detail
              </Badge>
              <Badge
                style={{
                  background: "rgba(242,239,232,0.9)",
                  color: palette.ink,
                  border: "1px solid rgba(31,31,34,0.08)",
                }}
              >
                Eco-friendly options
              </Badge>
              <Badge
                style={{
                  background: "rgba(122,139,122,0.14)",
                  color: palette.ink,
                  border: "1px solid rgba(31,31,34,0.08)",
                }}
              >
                {"Insured & Bonded"}
              </Badge>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              {BRAND.name}
            </h1>
            <p className="mt-3 text-base md:text-lg" style={{ color: palette.muted }}>
              {BRAND.tagline}
            </p>

            <div
              className="mt-6 rounded-3xl p-5 shadow-sm"
              style={{
                background: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(31,31,34,0.08)",
              }}
            >
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="mt-0.5 h-5 w-5" />
                  <div>
                    <div className="text-sm font-medium">Quality you can trust</div>
                    <div className="text-sm" style={{ color: palette.muted }}>
                      Checklists, attention to detail, consistent results.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5" />
                  <div>
                    <div className="text-sm font-medium">Peace of mind</div>
                    <div className="text-sm" style={{ color: palette.muted }}>
                      {BRAND.insuranceLine}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5" />
                  <div>
                    <div className="text-sm font-medium">Flexible scheduling</div>
                    <div className="text-sm" style={{ color: palette.muted }}>
                      One-time, weekly, bi-weekly, or monthly.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="mt-0.5 h-5 w-5" />
                  <div>
                    <div className="text-sm font-medium">Eco-friendly options</div>
                    <div className="text-sm" style={{ color: palette.muted }}>
                      Gentle products available upon request.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl">
                  <a href="#contact">Request a Quote</a>
                </Button>
                <Button variant="outline" asChild className="rounded-2xl">
                  <a href="#services">View Services</a>
                </Button>
              </div>

              <div className="mt-4 text-xs" style={{ color: palette.muted }}>
                Serving: {BRAND.serviceArea}
              </div>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div
              className="overflow-hidden rounded-[2.25rem] shadow-sm"
              style={{
                border: "1px solid rgba(31,31,34,0.08)",
                background:
                  "linear-gradient(135deg, rgba(242,239,232,0.92), rgba(255,255,255,0.92))",
              }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Committed to Excellence</div>
                    <div className="text-xs" style={{ color: palette.muted }}>
                      Clean, calm, and polished.
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      style={{
                        background: "rgba(200,180,138,0.16)",
                        color: palette.ink,
                        border: "1px solid rgba(31,31,34,0.08)",
                      }}
                    >
                      Insured
                    </Badge>
                    <Badge
                      style={{
                        background: "rgba(122,139,122,0.14)",
                        color: palette.ink,
                        border: "1px solid rgba(31,31,34,0.08)",
                      }}
                    >
                      Bonded
                    </Badge>
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  {["Kitchen + appliances", "Bathrooms + glass", "Floors + baseboards"].map(
                    (t) => (
                      <div
                        key={t}
                        className="flex items-center justify-between rounded-2xl px-4 py-3"
                        style={{
                          background: "rgba(255,255,255,0.75)",
                          border: "1px solid rgba(31,31,34,0.08)",
                        }}
                      >
                        <div className="text-sm">{t}</div>
                        <div className="flex items-center gap-1 text-xs" style={{ color: palette.muted }}>
                          <Check className="h-4 w-4" /> Done
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div
                  className="mt-6 rounded-3xl p-5"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(200,180,138,0.18), rgba(215,180,173,0.12))",
                    border: "1px solid rgba(31,31,34,0.08)",
                  }}
                >
                  <div className="text-sm font-medium">Want a quote today?</div>
                  <div className="mt-1 text-sm" style={{ color: palette.muted }}>
                    Tell us your space + preferred schedule.
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button asChild className="rounded-2xl">
                      <a href={BRAND.phoneHref}>
                        Call <Phone className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="rounded-2xl">
                      <a href={`mailto:${BRAND.email}`}>
                        Email <Mail className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div
              aria-hidden
              className="absolute -bottom-6 -left-6 h-24 w-24 rounded-[2rem]"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(200,180,138,0.28), transparent 55%)",
              }}
            />
            <div
              aria-hidden
              className="absolute -top-6 -right-8 h-28 w-28 rounded-[2.25rem]"
              style={{
                background:
                  "radial-gradient(circle at 70% 40%, rgba(122,139,122,0.22), transparent 55%)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.22em]" style={{ color: palette.muted }}>
                Our services
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Cleaning that feels elevated</h2>
              <p className="mt-2 max-w-2xl text-sm md:text-base" style={{ color: palette.muted }}>
                Choose what you need now, and we’ll tailor the details to your space.
              </p>
            </div>
            <Button variant="outline" asChild className="hidden rounded-2xl md:inline-flex">
              <a href="#contact">Book a Walkthrough</a>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ServiceCard
              icon={<Home className="h-5 w-5" />}
              title="Residential"
              bullets={["Standard clean", "Deep clean", "Move-in / move-out", "Add-ons: oven, fridge, inside cabinets"]}
              palette={palette}
            />
            <ServiceCard
              icon={<Building2 className="h-5 w-5" />}
              title="Commercial"
              bullets={["Offices", "Restaurants (after-hours)", "Airbnb turnovers", "Restrooms, floors, trash, high-touch points"]}
              palette={palette}
              accent="champagne"
            />
            <ServiceCard
              icon={<Leaf className="h-5 w-5" />}
              title="Eco-Friendly Option"
              bullets={["Gentle, effective products", "Low-fragrance options", "Great for families + pets", "Ask us to customize"]}
              palette={palette}
              accent="sage"
            />
          </div>

          <div
            className="mt-6 rounded-3xl p-6"
            style={{
              background: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(31,31,34,0.08)",
            }}
          >
            <div className="grid gap-4 md:grid-cols-3">
              <MiniStat label="Insured" value="Yes" icon={<ShieldCheck className="h-4 w-4" />} palette={palette} />
              <MiniStat label="Bonded" value="Yes" icon={<BadgeCheck className="h-4 w-4" />} palette={palette} />
              <MiniStat label="Service Area" value="KC Metro" icon={<MapPin className="h-4 w-4" />} palette={palette} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why */}
      <section id="why" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.22em]" style={{ color: palette.muted }}>
                Why choose us
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">A calm, spotless finish — every time</h2>
              <p className="mt-3 text-sm md:text-base" style={{ color: palette.muted }}>
                We’re detail-forward, respectful of your space, and we communicate clearly. Expect a polished experience from
                first message to final walkthrough.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  { title: "Quality assurance", desc: "Checklists + consistent standards", icon: <ClipboardCheck className="h-5 w-5" /> },
                  { title: "Trained & professional", desc: "Respectful, on-time, and organized", icon: <BadgeCheck className="h-5 w-5" /> },
                  { title: "Eco-friendly available", desc: "Green solutions, safe ingredients", icon: <Leaf className="h-5 w-5" /> },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="flex gap-3 rounded-3xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.68)",
                      border: "1px solid rgba(31,31,34,0.08)",
                    }}
                  >
                    <div
                      className="grid h-10 w-10 place-items-center rounded-2xl"
                      style={{
                        background: "rgba(200,180,138,0.16)",
                        border: "1px solid rgba(31,31,34,0.08)",
                      }}
                    >
                      {x.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{x.title}</div>
                      <div className="text-sm" style={{ color: palette.muted }}>
                        {x.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="rounded-[2.25rem] shadow-sm" style={{ borderColor: "rgba(31,31,34,0.08)" }}>
              <CardHeader>
                <CardTitle className="text-lg">Perfect for</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Busy professionals who want a reset",
                  "Restaurant managers who need dependable after-hours cleaning",
                  "Airbnb hosts who want consistent turnovers",
                  "Families who prefer low-fragrance + gentle products",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <div
                      className="mt-1 grid h-5 w-5 place-items-center rounded-full"
                      style={{
                        background: "rgba(122,139,122,0.14)",
                        border: "1px solid rgba(31,31,34,0.08)",
                      }}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div className="text-sm" style={{ color: palette.muted }}>
                      {t}
                    </div>
                  </div>
                ))}

                <div
                  className="mt-5 rounded-3xl p-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(242,239,232,0.9), rgba(255,255,255,0.9))",
                    border: "1px solid rgba(31,31,34,0.08)",
                  }}
                >
                  <div className="text-sm font-semibold">Quick note</div>
                  <div className="mt-1 text-sm" style={{ color: palette.muted }}>
                    We’re {"insured & bonded"} — and happy to provide documentation upon request.
                  </div>
                </div>

                <Button asChild className="w-full rounded-2xl">
                  <a href="#contact">Get pricing for your space</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="text-xs uppercase tracking-[0.22em]" style={{ color: palette.muted }}>
            The process
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Simple, smooth, and professional</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StepCard
              n="01"
              title="Quick details"
              desc="Send your address, size, and what you want done."
              palette={palette}
            />
            <StepCard
              n="02"
              title="Walkthrough + quote"
              desc="We confirm scope + schedule, then send a clear quote."
              palette={palette}
            />
            <StepCard
              n="03"
              title="Clean + final check"
              desc="We clean, do a final quality check, and you enjoy the reset."
              palette={palette}
            />
          </div>
        </motion.div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.22em]" style={{ color: palette.muted }}>
                Reviews
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Client satisfaction</h2>
              <p className="mt-2 text-sm md:text-base" style={{ color: palette.muted }}>
                Replace these with your real reviews as you collect them.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Testimonial
              quote="My place looked brand new. Super professional and sweet."
              name="Emily J."
              detail="Residential deep clean"
              palette={palette}
            />
            <Testimonial
              quote="Reliable after-hours cleaning. Great communication."
              name="Mark T."
              detail="Commercial (restaurant)"
              palette={palette}
            />
            <Testimonial
              quote="The detail on the bathrooms and floors was perfection."
              name="Samantha R."
              detail="Airbnb turnover"
              palette={palette}
            />
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-20 pt-14">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.22em]" style={{ color: palette.muted }}>
                Get in touch
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Let’s get your space spotless</h2>
              <p className="mt-2 text-sm md:text-base" style={{ color: palette.muted }}>
                Share your space details + your ideal schedule. We’ll reply with next steps.
              </p>

              <div className="mt-6 grid gap-3">
                <ContactChip icon={<Phone className="h-4 w-4" />} label={BRAND.phoneDisplay} href={BRAND.phoneHref} palette={palette} />
                <ContactChip icon={<Mail className="h-4 w-4" />} label={BRAND.email} href={`mailto:${BRAND.email}`} palette={palette} />
                <ContactChip
                  icon={<MapPin className="h-4 w-4" />}
                  label={BRAND.serviceArea}
                  href="#services"
                  palette={palette}
                />
              </div>

              <div
                className="mt-6 rounded-3xl p-5"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(31,31,34,0.08)",
                }}
              >
                <div className="text-sm font-semibold">Insurance + Bonding</div>
                <div className="mt-1 text-sm" style={{ color: palette.muted }}>
                  We are fully insured and bonded. If your business requires COI/bond documentation, just ask and we’ll send it.
                </div>
              </div>
            </div>

            <Card className="rounded-[2.25rem] shadow-sm" style={{ borderColor: "rgba(31,31,34,0.08)" }}>
              <CardHeader>
                <CardTitle className="text-lg">Request a quote</CardTitle>
              </CardHeader>
              <CardContent>
                {!submitted ? (
                  <form onSubmit={onSubmit} className="space-y-3">
                    <div className="grid gap-3 md:grid-cols-2">
                      <Input
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      />
                      <Input
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      />
                    </div>
                    <Input
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    />
                    <Textarea
                      placeholder="Tell us: type of space, approx. size, what you need, and your preferred schedule."
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      className="min-h-[120px]"
                    />
                    <Button className="w-full rounded-2xl" type="submit">
                      Send request
                    </Button>
                    <div className="text-xs" style={{ color: palette.muted }}>
                      Tip: add photos/video during a walkthrough for the most accurate quote.
                    </div>
                  </form>
                ) : (
                  <div className="space-y-3">
                    <div
                      className="rounded-3xl p-5"
                      style={{
                        background: "rgba(122,139,122,0.14)",
                        border: "1px solid rgba(31,31,34,0.08)",
                      }}
                    >
                      <div className="text-sm font-semibold">Request sent ✨</div>
                      <div className="mt-1 text-sm" style={{ color: palette.muted }}>
                        If this was a real website, this would go to your inbox/CRM.
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full rounded-2xl"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", phone: "", email: "", message: "" });
                      }}
                    >
                      Send another
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white/45">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold">{BRAND.name}</div>
              <div className="text-xs" style={{ color: palette.muted }}>
                {"Insured & bonded"} • {BRAND.serviceArea}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs hover:opacity-80"
                  style={{ color: palette.muted }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 text-xs" style={{ color: palette.muted }}>
            © {new Date().getFullYear()} Ruby &amp; Pearl. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, bullets, palette, accent }) {
  const tint =
    accent === "sage"
      ? "rgba(122,139,122,0.14)"
      : accent === "champagne"
      ? "rgba(200,180,138,0.16)"
      : "rgba(215,180,173,0.12)";

  return (
    <Card className="rounded-[2.25rem] shadow-sm" style={{ borderColor: "rgba(31,31,34,0.08)" }}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div
            className="grid h-10 w-10 place-items-center rounded-2xl"
            style={{ background: tint, border: "1px solid rgba(31,31,34,0.08)" }}
          >
            {icon}
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {bullets.map((b) => (
          <div key={b} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4" />
            <div className="text-sm" style={{ color: palette.muted }}>
              {b}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function MiniStat({ label, value, icon, palette }) {
  return (
    <div className="flex items-center justify-between rounded-3xl px-4 py-4"
      style={{
        background: "rgba(242,239,232,0.7)",
        border: "1px solid rgba(31,31,34,0.08)",
      }}
    >
      <div>
        <div className="text-xs uppercase tracking-[0.18em]" style={{ color: palette.muted }}>
          {label}
        </div>
        <div className="mt-1 text-sm font-semibold">{value}</div>
      </div>
      <div className="grid h-9 w-9 place-items-center rounded-2xl"
        style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(31,31,34,0.08)" }}
      >
        {icon}
      </div>
    </div>
  );
}

function StepCard({ n, title, desc, palette }) {
  return (
    <div
      className="rounded-[2.25rem] p-6 shadow-sm"
      style={{
        background: "rgba(255,255,255,0.72)",
        border: "1px solid rgba(31,31,34,0.08)",
      }}
    >
      <div className="text-xs font-semibold" style={{ color: palette.muted }}>
        {n}
      </div>
      <div className="mt-2 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm" style={{ color: palette.muted }}>
        {desc}
      </div>
    </div>
  );
}

function Testimonial({ quote, name, detail, palette }) {
  return (
    <div
      className="rounded-[2.25rem] p-6 shadow-sm"
      style={{
        background: "rgba(255,255,255,0.72)",
        border: "1px solid rgba(31,31,34,0.08)",
      }}
    >
      <div className="text-sm" style={{ color: palette.muted }}>
        “{quote}”
      </div>
      <div className="mt-4 text-sm font-semibold">{name}</div>
      <div className="text-xs" style={{ color: palette.muted }}>
        {detail}
      </div>
    </div>
  );
}

function ContactChip({ icon, label, href, palette }) {
  return (
    <a
      href={href}
      className="flex items-center justify-between rounded-3xl px-4 py-4 hover:opacity-90"
      style={{
        background: "rgba(255,255,255,0.72)",
        border: "1px solid rgba(31,31,34,0.08)",
      }}
    >
      <div className="flex items-center gap-2">
        <div
          className="grid h-9 w-9 place-items-center rounded-2xl"
          style={{
            background: "rgba(200,180,138,0.16)",
            border: "1px solid rgba(31,31,34,0.08)",
          }}
        >
          {icon}
        </div>
        <div className="text-sm" style={{ color: palette.muted }}>
          {label}
        </div>
      </div>
      <ArrowRight className="h-4 w-4" style={{ color: palette.muted }} />
    </a>
  );
}
