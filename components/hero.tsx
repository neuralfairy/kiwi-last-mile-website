"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Zap, Target, TrendingUp } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#ff477e]/20 animate-float"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 rounded-full bg-[#ffb997]/30 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-[#80ced6]/40 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"} mt-8`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
            <Zap className="w-4 h-4 text-[#ff477e] mr-2" />
            <span className="text-sm font-medium text-gray-800">{"#1 Lead Management System"}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Transform Your</span>
            <br />
            <span className="text-gray-800">Lead Management</span>
            <br />
            <span className="gradient-text">Into Revenue</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Score, segment, and prioritize leads with AI-powered intelligence. Turn prospects into profits with faster,
            smarter follow-ups.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-[#ff477e] to-[#ffb997] text-black hover:opacity-90 transform hover:scale-105 transition-all duration-200 px-8 py-4 text-lg font-semibold"
            >
              <Link href="https://salescentri.com/get-started/free-trial">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white bg-white/20 backdrop-blur-sm text-black hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
            >
              <Link href="https://salescentri.com/get-started/book-demo">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-[#ff477e]" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">85%</div>
              <div className="text-gray-700">Lead Conversion Increase</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-[#80ced6]" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">3x</div>
              <div className="text-gray-700">Faster Follow-ups</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-[#ffb997]" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">50%</div>
              <div className="text-gray-700">Time Saved Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
