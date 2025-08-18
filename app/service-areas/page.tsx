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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Professional Roofing Services
                <span className="block text-primary">Across Chicagoland</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We serve Chicago and 40+ surrounding communities with fast, reliable roofing services. 
                Licensed crews, local expertise, and guaranteed response times.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild>
                  <Link href="/estimate">Get Local Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Local Team</Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                <MapPin className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Primary Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our main coverage zones with dedicated crews and fastest response times
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryAreas.map((area, index) => (
              <Card key={index} className={`relative ${area.highlighted ? 'ring-2 ring-primary' : ''}`}>
                {area.highlighted && (
                  <Badge className="absolute -top-2 left-4">Most Popular</Badge>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {area.name}
                  </CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{area.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{area.crews}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Coverage Area</h2>
            <p className="text-lg text-muted-foreground">
              All communities we serve across the Chicago metropolitan area
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Chicago Metro Service Areas</CardTitle>
              <CardDescription>
                Click on any area to check availability and get local pricing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {allAreas.map((area, index) => (
                  <Link 
                    key={index} 
                    href="/estimate"
                    className="text-sm p-2 rounded hover:bg-primary/10 transition-colors text-center border border-border hover:border-primary"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Coverage Map Placeholder */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Area Map</h2>
            <p className="text-lg text-muted-foreground">
              Visual coverage of our roofing service areas across Chicagoland
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Service Map</h3>
                  <p className="text-muted-foreground">Coming Soon - Interactive coverage map</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't See Your Area Listed?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're expanding our coverage area. Contact us to check if we can serve your location 
            or get on our waiting list for new areas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Check My Area</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/estimate">Get Estimate Anyway</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
