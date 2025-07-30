"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Users, Zap, Target, BarChart3, Shield } from "lucide-react"

export function ValueProposition() {
  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Lead Scoring",
      description: "Automatically score and rank leads based on behavior, demographics, and engagement patterns.",
      link: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator/overview",
      color: "from-[#ff477e] to-[#ffb997]",
    },
    {
      icon: Target,
      title: "Smart Lead Generation",
      description: "Generate high-quality leads with precision targeting and advanced filtering capabilities.",
      link: "https://salescentri.com/platforms/lead-management/lead-generation",
      color: "from-[#80ced6] to-[#d5f4e6]",
    },
    {
      icon: Zap,
      title: "Pipeline Automation",
      description: "Streamline your sales process with automated workflows and intelligent routing.",
      link: "https://salescentri.com/solutions/psa-suite/overview",
      color: "from-[#ffb997] to-[#fefbd8]",
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Seamlessly connect with your existing CRM and sales tools for unified operations.",
      link: "https://salescentri.com/solutions/psa-suite/integrations",
      color: "from-[#d5f4e6] to-[#80ced6]",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into lead performance and sales metrics with real-time dashboards.",
      link: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator",
      color: "from-[#ff477e] to-[#80ced6]",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with GDPR compliance and advanced data protection.",
      link: "https://salescentri.com/trust/security-privacy",
      color: "from-[#fefbd8] to-[#d5f4e6]",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose</span> iLMS?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your B2B sales process with intelligent lead management that drives results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>

              <Button
                variant="ghost"
                asChild
                className="text-[#ff477e] hover:text-[#ffb997] hover:bg-[#ff477e]/10 p-0 h-auto font-semibold"
              >
                <Link href={benefit.link}>Learn More →</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-[#ff477e] to-[#ffb997] text-black hover:opacity-90 px-8 py-4 text-lg font-semibold"
          >
            <Link href="https://salescentri.com/get-started/free-trial">Start Your Free Trial Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
