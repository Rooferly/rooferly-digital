import Link from "next/link"
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

const footerNavigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Contact", href: "/contact" },
    { name: "Reviews", href: "/reviews" },
  ],
  resources: [
    { name: "Roofing Guide", href: "/resources" },
    { name: "FAQs", href: "/faq" },
    { name: "Warranty Info", href: "/warranty" },
    { name: "How It Works", href: "/about" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/rooferly", icon: Facebook },
  { name: "X", href: "https://x.com/rooferly", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/rooferly", icon: Instagram },
]

export function SiteFooter() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logos/LOGO TRANSPARENT DARK.png" 
                alt="Rooferly Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-xs text-sm">
              Roofing Made Simple. Fast estimates, transparent pricing, and professional crews serving all of Chicagoland.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-1 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:roof@rooferly.co" 
                  className="hover:text-primary transition-colors"
                >
                  roof@rooferly.co
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <a 
                  href="https://maps.google.com/?q=1552+South+Route+59+1415+Naperville+IL+60564" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  title="View on Google Maps"
                >
                  Naperville, IL
                </a>
              </div>
            </div>

          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-6">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full bg-muted hover:bg-muted/80"
                  title={item.name}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              )
            })}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Rooferly. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
              <span>
                <a 
                  href="https://online-dfpr.micropact.com/lookup/licenselookup.aspx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors underline"
                >
                  IL License #100.123456
                </a>
                {" | Roofing made Simple"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
