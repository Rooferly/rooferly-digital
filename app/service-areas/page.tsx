import type { Metadata } from 'next'
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Phone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Service Areas - Chicago Roofing Coverage | Rooferly',
  description: 'Rooferly serves Chicago and surrounding suburbs with professional roofing services. See if we serve your area and get local pricing.',
  openGraph: {
    title: 'Service Areas - Chicago Roofing Coverage | Rooferly',
    description: 'Professional roofing services across Chicago and surrounding suburbs.',
  },
}

const primaryAreas = [
  {
    name: "Chicago",
    description: "All neighborhoods within city limits",
    responseTime: "< 2 hours",
    crews: "4 dedicated crews",
    highlighted: true
  },
  {
    name: "Naperville",
    description: "Complete coverage including Aurora border",
    responseTime: "< 3 hours", 
    crews: "2 dedicated crews",
    highlighted: false
  },
  {
    name: "Schaumburg",
    description: "Including Hoffman Estates and Streamwood",
    responseTime: "< 3 hours",
    crews: "2 dedicated crews", 
    highlighted: false
  },
  {
    name: "Evanston",
    description: "North Shore coverage",
    responseTime: "< 2 hours",
    crews: "1 dedicated crew",
    highlighted: false
  }
]

const allAreas = [
  "Arlington Heights", "Des Plaines", "Palatine", "Mount Prospect", "Prospect Heights",
  "Rolling Meadows", "Elk Grove Village", "Wood Dale", "Itasca", "Roselle",
  "Oak Park", "River Forest", "Forest Park", "Maywood", "Melrose Park",
  "Wheaton", "Glen Ellyn", "Lombard", "Villa Park", "Elmhurst",
  "Downers Grove", "Westmont", "Clarendon Hills", "Hinsdale", "Oak Brook",
  "Winnetka", "Wilmette", "Kenilworth", "Northfield", "Glencoe",
  "Skokie", "Lincolnwood", "Morton Grove", "Niles", "Park Ridge"
]

const stats = [
  { label: "Cities Served", value: "40+" },
  { label: "Service Radius", value: "35 miles" },
  { label: "Response Time", value: "< 3 hrs" },
  { label: "Emergency Coverage", value: "24/7" },
]

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Service Coverage</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                Serving Chicagoland
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional roofing services across Chicago and 40+ surrounding suburbs. 
                Local crews, fast response times, and pricing tailored to your area.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/estimate">Get Local Estimate</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Check Your Area</Link>
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-muted overflow-hidden">
                <Image
                  src="/placeholder-service-map.jpg"
                  alt="Rooferly service area map showing Chicago and suburbs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      40+ Cities Served
                    </h3>
                    <p className="text-muted-foreground">
                      Chicago & Surrounding Suburbs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Primary Service Areas
            </h2>
            <p className="text-lg text-muted-foreground">
              These areas have dedicated crews and the fastest response times
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {primaryAreas.map((area) => (
              <Card key={area.name} className={`relative ${
                area.highlighted ? 'border-primary shadow-md' : ''
              }`}>
                {area.highlighted && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Main Hub
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{area.name}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Response:</span>
                    <span className="font-medium">{area.responseTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Coverage:</span>
                    <span className="font-medium">{area.crews}</span>
                  </div>
                  <Button 
                    variant={area.highlighted ? "default" : "outline"} 
                    size="sm" 
                    className="w-full mt-4"
                    asChild
                  >
                    <Link href="/estimate">Get Estimate</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Service Areas */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Complete Coverage Area
            </h2>
            <p className="text-lg text-muted-foreground">
              We serve these additional communities with standard response times
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Extended Service Areas</CardTitle>
              <CardDescription>
                Professional roofing services available in all these locations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {allAreas.map((area) => (
                  <div key={area} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Don't see your city? We're expanding our coverage area regularly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13125557663" 
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium"
              >
                <Phone className="h-4 w-4" />
                <span>Call (312) 555-ROOF</span>
              </a>
              <Button variant="outline" asChild>
                <Link href="/contact">Request Coverage</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              24/7 Emergency Service
            </h2>
            <p className="text-red-700 mb-6">
              Storm damage or emergency repairs? We provide 24/7 emergency service 
              across our entire coverage area with rapid response teams.
            </p>
            
            <div className="bg-white rounded-2xl p-6 border border-red-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">< 4 hrs</div>
                  <div className="text-sm text-red-700">Emergency Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-red-700">Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">All Areas</div>
                  <div className="text-sm text-red-700">Service Coverage</div>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href="tel:+13125554357"
                  className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-red-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Emergency Line: (312) 555-HELP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
