"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X, Home, Calculator, Calendar, Info, MapPin, Phone } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Calculator },
  { name: "Service Areas", href: "/service-areas", icon: MapPin },
  { name: "Contact", href: "/contact", icon: Phone },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 lg:h-24 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/logos/LOGO TRANSPARENT DARK.png" 
              alt="RooferLy Logo" 
              className="h-12 md:h-16 lg:h-20 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
            <Link href="/estimate">Get Estimate</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="space-y-1 px-4 pb-4 pt-3">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-4 py-3 text-base font-medium transition-colors min-h-[44px]",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            <div className="pt-4">
              <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white min-h-[44px]" asChild>
                <Link href="/estimate" onClick={() => setMobileMenuOpen(false)}>Get Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
