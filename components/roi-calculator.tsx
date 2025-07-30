"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"

export function ROICalculator() {
  const [leads, setLeads] = useState(100)
  const [conversionRate, setConversionRate] = useState(5)
  const [dealValue, setDealValue] = useState(5000)

  const currentRevenue = leads * (conversionRate / 100) * dealValue
  const improvedRevenue = leads * ((conversionRate * 1.85) / 100) * dealValue
  const monthlyIncrease = improvedRevenue - currentRevenue
  const annualIncrease = monthlyIncrease * 12

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your <span className="gradient-text">ROI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much revenue you could generate with improved lead management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-[#d5f4e6] to-[#fefbd8] rounded-3xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-[#ff477e] mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">ROI Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="leads" className="text-gray-700 font-medium">
                  Monthly Leads
                </Label>
                <Input
                  id="leads"
                  type="number"
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="mt-2 text-black"
                />
              </div>

              <div>
                <Label htmlFor="conversion" className="text-gray-700 font-medium">
                  Current Conversion Rate (%)
                </Label>
                <Input
                  id="conversion"
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="mt-2 text-black"
                />
              </div>

              <div>
                <Label htmlFor="deal-value" className="text-gray-700 font-medium">
                  Average Deal Value ($)
                </Label>
                <Input
                  id="deal-value"
                  type="number"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="mt-2 text-black"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <DollarSign className="w-6 h-6 text-[#80ced6] mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">Current Monthly Revenue</h4>
              </div>
              <p className="text-3xl font-bold text-gray-900">${currentRevenue.toLocaleString()}</p>
            </div>

            <div className="bg-gradient-to-r from-[#ff477e] to-[#ffb997] rounded-2xl p-6 shadow-lg text-white">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 mr-2" />
                <h4 className="text-lg font-semibold">With iLMS (85% Improvement)</h4>
              </div>
              <p className="text-3xl font-bold mb-2">${improvedRevenue.toLocaleString()}</p>
              <p className="text-sm opacity-90">Monthly increase: ${monthlyIncrease.toLocaleString()}</p>
            </div>

            <div className="bg-[#d5f4e6] rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Annual Revenue Increase</h4>
              <p className="text-4xl font-bold gradient-text">${annualIncrease.toLocaleString()}</p>
            </div>

            <Button
              size="lg"
              asChild
              className="w-full bg-gradient-to-r from-[#ff477e] to-[#ffb997] text-black hover:opacity-90 py-4 text-lg font-semibold"
            >
              <Link href="https://salescentri.com/solutions/use-case-navigator/recommendations">
                Get Personalized Recommendations
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
