import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, MapPin, Clock, Star, CheckCircle, Zap, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: 'About Rooferly - Revolutionizing Chicago Roofing | Digital-First Roofing Company',
  description: 'Learn about Rooferly, the digital-first roofing company revolutionizing roof replacement in Chicagoland. Instant estimates, virtual visualization, and transparent pricing.',
  openGraph: {
    title: 'About Rooferly - Revolutionizing Chicago Roofing',
    description: 'Digital-first roofing company making roof replacement simple, fast, and trustworthy for Chicagoland homeowners.',
    url: 'https://rooferly.com/about',
    siteName: 'Rooferly',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Rooferly Team - Chicago Roofing Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Rooferly - Revolutionizing Chicago Roofing',
    description: 'Digital-first roofing company making roof replacement simple for Chicagoland homeowners.',
  },
}

const stats = [
  { icon: Users, label: "Homeowners Served", value: "2,000+", description: "Satisfied customers across Chicagoland" },
  { icon: Star, label: "Average Rating", value: "4.9/5", description: "Based on verified customer reviews" },
  { icon: Clock, label: "Average Response", value: "< 2hrs", description: "Fast, reliable customer service" },
  { icon: Shield, label: "Warranty", value: "25 Years", description: "Industry-leading warranty coverage" },
]

const values = [
  {
    icon: CheckCircle,
    title: "Transparency",
    description: "No hidden costs, no surprises. Every price is upfront and honest."
  },
  {
    icon: Zap,
    title: "Simplicity", 
    description: "Easy to understand, easy to use, easy to buy. Roofing made simple."
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Licensed, insured, and backed by industry-leading warranties."
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Using cutting-edge technology to modernize an outdated industry."
  },
  {
    icon: Heart,
    title: "Service",
    description: "Homeowner-first experience, every single time."
  }
]

const team = [
  {
    name: "Leadership Team",
    role: "Roofing Industry Veterans",
    description: "20+ years combined experience in residential roofing",
    image: "/team-leadership.jpg"
  },
  {
    name: "Technology Team", 
    role: "Digital Innovation Experts",
    description: "Building the future of home improvement",
    image: "/team-tech.jpg"
  },
  {
    name: "Installation Crews",
    role: "Licensed & Certified Professionals", 
    description: "Expert craftsmen delivering quality workmanship",
    image: "/team-installers.jpg"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-orange-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Revolutionizing Roofing in <span className="text-orange-600">Chicagoland</span>
          </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              We're making roof replacement as simple as shopping online — instant estimates, 
              virtual visualization, and transparent pricing without the sales pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4" asChild>
                <Link href="/estimate">Get Your Instant Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-600 text-slate-700 hover:bg-slate-50 text-lg px-8 py-4" asChild>
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  Our Mission: <span className="text-orange-600">Roofing Made Simple</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  For too long, getting a new roof meant dealing with high-pressure salespeople, 
                  surprise costs, and outdated processes. We're changing that.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our digital-first approach combines cutting-edge technology with expert craftsmanship 
                  to deliver a roofing experience that's transparent, efficient, and stress-free.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Instant estimates using satellite technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Virtual roof visualization before you buy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Transparent pricing with no hidden costs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Licensed, insured, and warranty-backed</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Rooferly Technology Platform</p>
                    <p className="text-sm">Satellite imaging & virtual visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Trusted by Thousands of Chicagoland Homeowners
              </h2>
              <p className="text-lg text-gray-600">
                Our numbers speak for themselves
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.label} className="text-center border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                        <Icon className="h-8 w-8 text-orange-600" />
                      </div>
                      <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                      <div className="text-lg font-semibold text-slate-700 mb-2">{stat.label}</div>
                      <div className="text-sm text-gray-600">{stat.description}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do, from technology development 
                to customer service to roof installation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                        <Icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Meet the Rooferly Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Industry veterans and technology innovators working together 
                to revolutionize the roofing experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mb-6 flex items-center justify-center mx-auto w-32 h-32">
                      <Users className="h-16 w-16 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              Licensed, Insured, and Trusted
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Fully Licensed</h3>
                <p className="text-gray-600">Illinois Roofing License #100.123456</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Fully Insured</h3>
                <p className="text-gray-600">$2M Liability & Workers Compensation</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Warranty Backed</h3>
                <p className="text-gray-600">25-Year Manufacturer + Labor Warranty</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              We're not just another roofing company. We're your neighbors, committed to 
              serving the Chicagoland community with integrity and excellence.
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4" asChild>
              <Link href="/estimate">Experience the Rooferly Difference</Link>
            </Button>
        </div>
      </div>
      </section>
    </div>
  )
}