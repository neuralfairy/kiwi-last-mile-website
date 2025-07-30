import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { Features } from "@/components/features-preview"
import { ROICalculator } from "@/components/roi-calculator"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Features />
      <ROICalculator />
      <Testimonials />
      <CTA />
    </div>
  )
}
