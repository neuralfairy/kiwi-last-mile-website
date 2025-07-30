import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing - iLMS Lead Management System | Kiwilastmile Solutions",
  description:
    "Choose the perfect iLMS plan for your business. Flexible pricing options from Starter to Enterprise with 14-day free trial.",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: 49,
      description: "Perfect for small teams getting started with lead management",
      features: [
        "Up to 1,000 leads/month",
        "Basic lead scoring",
        "Email integration",
        "Standard support",
        "Basic analytics",
        "CRM integration (1 platform)",
      ],
      cta: "Start Free Trial",
      link: "https://salescentri.com/get-started/free-trial",
      popular: false,
    },
    {
      name: "Professional",
      price: 149,
      description: "Advanced features for growing sales teams",
      features: [
        "Up to 10,000 leads/month",
        "AI-powered lead scoring",
        "Multi-channel automation",
        "Priority support",
        "Advanced analytics",
        "CRM integration (unlimited)",
        "Voice AI agent",
        "Chat bot integration",
        "WhatsApp automation",
      ],
      cta: "Start Free Trial",
      link: "https://salescentri.com/get-started/free-trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited leads",
        "Custom AI models",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees",
        "Custom training",
        "API access",
      ],
      cta: "Get Custom Quote",
      link: "https://salescentri.com/pricing/enterprise-custom",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Simple, Transparent</span>
            <br />
            Pricing
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial with no credit card
            required.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <Zap className="w-4 h-4 text-[#ff477e] mr-2" />
            <span className="text-sm font-medium text-gray-800">14-day free trial • No credit card required</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  plan.popular ? "border-[#ff477e] scale-105" : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#ff477e] to-[#ffb997] text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {typeof plan.price === "number" ? (
                      <>
                        <span className="text-5xl font-bold gradient-text">${plan.price}</span>
                        <span className="text-gray-600">/month</span>
                      </>
                    ) : (
                      <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-[#ff477e] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  asChild
                  className={`w-full py-4 text-lg font-semibold ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#ff477e] to-[#ffb997] text-black hover:opacity-90"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  <Link href={plan.link}>{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">Need help choosing the right plan?</p>
            <Button
              variant="outline"
              asChild
              className="border-[#ff477e] text-black hover:bg-[#ff477e] hover:text-white bg-transparent"
            >
              <Link href="https://salescentri.com/get-started/book-demo">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
              },
              {
                question: "What happens after my free trial ends?",
                answer:
                  "After your 14-day free trial, you'll be automatically enrolled in the plan you selected. You can cancel anytime during the trial with no charges.",
              },
              {
                question: "Do you offer custom integrations?",
                answer:
                  "Yes, our Enterprise plan includes custom integrations. We can connect iLMS with virtually any CRM, marketing automation, or sales tool.",
              },
              {
                question: "Is my data secure?",
                answer:
                  "Absolutely. We use bank-level encryption, are GDPR compliant, and maintain SOC 2 Type II certification for data security.",
              },
              {
                question: "What kind of support do you provide?",
                answer:
                  "We offer email support for Starter plans, priority support for Professional plans, and dedicated support with SLA guarantees for Enterprise customers.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-gradient-to-r from-[#ff477e] to-[#ffb997] text-black hover:opacity-90 px-8 py-4 text-lg font-semibold"
            >
              <Link href="https://salescentri.com/pricing/plans-overview">View Detailed Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Get <span className="gradient-text">Started</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using iLMS to transform their lead management process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-[#ff477e] to-[#ffb997] text-black hover:opacity-90 px-8 py-4 text-lg font-semibold"
            >
              <Link href="https://salescentri.com/get-started/free-trial">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Link href="https://salescentri.com/get-started/book-demo">Book Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
