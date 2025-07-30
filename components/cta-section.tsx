"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff477e]/20 to-[#80ced6]/20"></div>
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#ff477e]/10 animate-pulse-slow"></div>
      <div
        className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[#80ced6]/10 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff477e]/20 border border-[#ff477e]/30 mb-8">
          <Zap className="w-4 h-4 text-[#ff477e] mr-2" />
          <span className="text-sm font-medium text-white">Limited Time Offer</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Ready to <span className="gradient-text">Transform</span>
          <br />
          Your Sales Process?
        </h2>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of businesses already using iLMS to boost their lead conversion rates and accelerate growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold bg-transparent"
          >
            <Link href="https://salescentri.com/get-started/book-demo">Schedule Demo</Link>
          </Button>
        </div>

        <p className="text-sm text-gray-400">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  )
}
