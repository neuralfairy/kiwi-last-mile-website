import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Target,
  Users,
  BarChart3,
  Shield,
  MessageSquare,
  MessageCircle,
  Bot,
  Database,
  Workflow,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Features - iLMS Lead Management System | Kiwilastmile Solutions",
  description:
    "Explore powerful features of iLMS including AI-powered lead scoring, automation, CRM integration, and advanced analytics.",
}

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Lead Scoring",
      description:
        "Advanced machine learning algorithms analyze lead behavior, demographics, and engagement patterns to automatically score and rank prospects.",
      benefits: ["Predictive scoring models", "Real-time updates", "Custom scoring criteria", "Behavioral tracking"],
      link: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator/overview",
    },
    {
      icon: Target,
      title: "Smart Lead Generation",
      description:
        "Generate high-quality leads with precision targeting, advanced filtering, and intelligent prospecting capabilities.",
      benefits: ["Multi-channel lead capture", "Advanced filtering", "Lead enrichment", "Duplicate detection"],
      link: "https://salescentri.com/platforms/lead-management/lead-generation",
    },
    {
      icon: Workflow,
      title: "Pipeline Automation",
      description:
        "Streamline your sales process with automated workflows, intelligent routing, and customizable sales stages.",
      benefits: ["Automated workflows", "Smart routing", "Custom stages", "Task automation"],
      link: "https://salescentri.com/solutions/psa-suite/overview",
    },
    {
      icon: Users,
      title: "CRM Integration",
      description:
        "Seamlessly connect with popular CRM platforms and sales tools for unified lead management and data synchronization.",
      benefits: ["Salesforce integration", "HubSpot compatibility", "Real-time sync", "Data mapping"],
      link: "https://salescentri.com/solutions/psa-suite/integrations",
    },
    {
      icon: Bot,
      title: "Voice AI Agent",
      description:
        "Intelligent voice interactions that qualify leads, schedule appointments, and handle initial customer inquiries automatically.",
      benefits: ["Natural language processing", "Appointment scheduling", "Lead qualification", "24/7 availability"],
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
    },
    {
      icon: MessageSquare,
      title: "Smart Chat Bot",
      description: "Engage website visitors with AI-powered conversations that convert prospects into qualified leads.",
      benefits: ["Intelligent conversations", "Lead capture forms", "Multi-language support", "Custom responses"],
      link: "https://salescentri.com/platforms/lead-management/chat-bot",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Integration",
      description:
        "Connect with leads on their preferred messaging platform with automated WhatsApp marketing and support.",
      benefits: ["Automated messaging", "Rich media support", "Broadcast campaigns", "Two-way conversations"],
      link: "https://salescentri.com/platforms/lead-management/whatsapp-bot",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Get deep insights into lead performance, conversion rates, and sales metrics with comprehensive dashboards.",
      benefits: ["Real-time dashboards", "Custom reports", "Performance metrics", "ROI tracking"],
      link: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator",
    },
    {
      icon: Database,
      title: "Data Enrichment",
      description:
        "Automatically enrich lead profiles with additional contact information, company data, and social insights.",
      benefits: ["Contact enrichment", "Company insights", "Social data", "Email verification"],
      link: "https://salescentri.com/services/data-enrichment",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with GDPR compliance, data encryption, and advanced access controls.",
      benefits: ["GDPR compliance", "Data encryption", "Access controls", "Audit trails"],
      link: "https://salescentri.com/trust/security-privacy",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
            <br />
            for Modern Sales Teams
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Discover how iLMS transforms your lead management process with cutting-edge AI technology and intelligent
            automation
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-[#ff477e] to-[#ffb997] text-black hover:opacity-90 px-8 py-4 text-lg font-semibold"
          >
            <Link href="https://salescentri.com/get-started/free-trial">Start Free Trial</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff477e] to-[#80ced6] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2 mb-6">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-[#ff477e] mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-[#ff477e] to-[#ffb997] text-black hover:opacity-90 font-semibold"
                    >
                      <Link href={feature.link}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Experience <span className="gradient-text">All Features</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how iLMS can transform your lead management process
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
