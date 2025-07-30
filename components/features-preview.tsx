"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, MessageCircle, Bot } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Bot,
      title: "Voice AI Agent",
      description: "Intelligent voice interactions that qualify leads and schedule appointments automatically.",
      link: "https://salescentri.com/platforms/lead-management/voice-ai-agent",
      gradient: "from-[#ff477e] to-[#ffb997]",
    },
    {
      icon: MessageSquare,
      title: "Smart Chat Bot",
      description: "Engage website visitors 24/7 with AI-powered conversations that convert.",
      link: "https://salescentri.com/platforms/lead-management/chat-bot",
      gradient: "from-[#80ced6] to-[#d5f4e6]",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Integration",
      description: "Connect with leads on their preferred platform with automated WhatsApp messaging.",
      link: "https://salescentri.com/platforms/lead-management/whatsapp-bot",
      gradient: "from-[#ffb997] to-[#fefbd8]",
    },
  ]

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Powerful Features for <span className="gradient-text">Modern Sales</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to automate and optimize every aspect of your lead management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50"
            >
              <div
                className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 mx-auto`}
              >
                <feature.icon className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">{feature.title}</h3>

              <p className="text-gray-600 mb-8 text-center leading-relaxed">{feature.description}</p>

              <div className="text-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#ff477e] to-[#ffb997] text-black hover:opacity-90 px-6 py-3 font-semibold"
                >
                  <Link href={feature.link}>Explore Feature</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-2 border-white bg-white/20 backdrop-blur-sm text-black hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
          >
            <Link href="/features">View All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
