import Hero from "@/components/landing/Hero"
import Features from "@/components/landing/Features"
import Pricing from "@/components/landing/Pricing"
import Testimonials from "@/components/landing/Testimonials"
import FAQ from "@/components/landing/FAQ"
import FinalCta from "@/components/landing/FinalCta"
import Waitlist from "@/components/landing/Waitlist"
import config from "@/config"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      {config.features.pricing && <Pricing />}
      <Testimonials />
      <FAQ />
      <FinalCta />
      {config.features.waitlist && <Waitlist />}
    </>
  )
}
