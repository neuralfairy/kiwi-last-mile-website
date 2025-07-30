import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Kiwilastmile Solutions | iLMS Lead Management",
  description:
    "Learn about Kiwilastmile Solutions mission to transform B2B lead management with AI-powered intelligence and automation.",
}

export default function AboutPage() {
  const stats = [
    { number: "10,000+", label: "Active Users", icon: Users },
    { number: "85%", label: "Conversion Increase", icon: Target },
    { number: "500+", label: "Companies Served", icon: Award },
    { number: "3x", label: "Faster Follow-ups", icon: TrendingUp },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Sales at Fortune 500 company with 15+ years in B2B sales and lead management.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "AI and machine learning expert with previous experience at Google and Microsoft.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      bio: "Product strategy leader with deep expertise in SaaS platforms and user experience.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Full-stack engineering leader with expertise in scalable cloud architectures.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Transforming</span>
                <br />
                B2B Sales Forever
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                At Kiwilastmile Solutions, we believe every lead deserves intelligent attention. Our mission is to
                empower sales teams with AI-driven insights that turn prospects into profits.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-[#ff477e] to-[#ffb997] text-black hover:opacity-90 px-8 py-4 text-lg font-semibold"
              >
                <Link href="https://salescentri.com/company/about-us">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Kiwilastmile team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#ff477e]/20 animate-pulse-slow"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#80ced6]/30 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff477e] to-[#80ced6] flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="gradient-text">Mission</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff477e] to-[#ffb997] flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Precision</h3>
              <p className="text-gray-700">
                We help businesses identify and prioritize the most valuable leads with surgical precision.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#80ced6] to-[#d5f4e6] flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Growth</h3>
              <p className="text-gray-700">
                Our platform is designed to scale with your business and accelerate sustainable growth.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ffb997] to-[#fefbd8] flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Partnership</h3>
              <p className="text-gray-700">
                We believe in building long-term partnerships with our clients for mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders from top technology and sales organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-48 h-48 rounded-2xl mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#ff477e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#ff477e] font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              className="bg-gradient-to-r from-[#ff477e] to-[#ffb997] text-black hover:opacity-90 px-8 py-4 text-lg font-semibold"
            >
              <Link href="https://salescentri.com/company/about-us/leadership-team">View Full Leadership Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We constantly push the boundaries of what's possible in lead management technology.",
              },
              {
                title: "Customer Success",
                description: "Your success is our success. We're committed to helping you achieve your sales goals.",
              },
              {
                title: "Data Privacy",
                description: "We maintain the highest standards of data security and privacy protection.",
              },
              {
                title: "Transparency",
                description: "We believe in honest communication and transparent business practices.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Join Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the future of lead management. Start your transformation today.
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
              <Link href="https://salescentri.com/company/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
