import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Integrations", href: "https://salescentri.com/solutions/psa-suite/integrations" },
      { name: "API", href: "https://salescentri.com/contact/partnerships/integration-requests" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "https://salescentri.com/company/careers" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
      { name: "Whitepapers", href: "https://salescentri.com/resources/whitepapers-ebooks" },
      { name: "Tutorials", href: "https://salescentri.com/resources/tutorials-webinars" },
      { name: "Support", href: "https://salescentri.com/contact/support-request" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Security", href: "https://salescentri.com/trust/security-privacy" },
      { name: "Compliance", href: "https://salescentri.com/trust/compliance-certifications" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff477e] to-[#80ced6] flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold gradient-text">Kiwilastmile</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your B2B lead management with AI-powered intelligence. Score, segment, and prioritize leads for
              maximum conversion.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Los Angeles, CA</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <Link href="mailto:info@kiwilastmile.com" className="hover:text-[#ff477e]">
                  info@kiwilastmile.com
                </Link>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#ff477e] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#ff477e] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#ff477e] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#ff477e] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="#" className="text-gray-400 hover:text-[#ff477e] transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#ff477e] transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#ff477e] transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">© 2024 Kiwilastmile Solutions. All rights reserved.</p>
              <p className="text-gray-500 text-xs">
                <Link
                  href="https://salescentri.com?utm_source=kiwilastmile.com&utm_medium=footer&utm_campaign=partner_network"
                  className="hover:text-[#ff477e] transition-colors duration-200"
                >
                  Powered by Sales Intelligence Platform
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
