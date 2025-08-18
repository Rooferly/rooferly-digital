import type { Metadata } from 'next'
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, MessageSquare, Wrench, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: 'About Rooferly - Digital-First Roofing for Chicago',
  description: 'Learn about Rooferly\'s mission to make roofing simple with digital-first transparency, professional crews, and customer-focused service in Chicagoland.',
  openGraph: {
    title: 'About Rooferly - Digital-First Roofing for Chicago',
    description: 'Learn about Rooferly\'s mission to make roofing simple with digital-first transparency and professional service.',
  },
}

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We do what we say we'll do. No surprises, no hidden fees, no runaround. Just honest roofing service."
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Time is valuable. We've streamlined every step from estimate to installation to respect your schedule."
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "You'll always know what's happening. Real-time updates, clear timelines, and responsive support."
  },
  {
    icon: Wrench,
    title: "Craftsmanship",
    description: "Quality work that lasts. Professional crews, premium materials, and attention to every detail."
  },
  {
    icon: Users,
    title: "Safety",
    description: "Comprehensive safety protocols protect our crews and your property. Fully insured and bonded."
  }
]

const stats = [
  { label: "Homes Served", value: "2,000+" },
  { label: "Years in Business", value: "15+" },
  { label: "Customer Rating", value: "4.9/5" },
  { label: "Warranty Years", value: "25" },
]

const team = [
  {
    name: "Mike Rodriguez",
    role: "Founder & CEO",
    bio: "15+ years in residential roofing. Started Rooferly to bring transparency and efficiency to the industry.",
    image: "/placeholder-team-1.jpg"
  },
  {
    name: "Sarah Chen",
    role: "Operations Director",
    bio: "Former project manager at top Chicago construction firms. Ensures every job runs smoothly.",
    image: "/placeholder-team-2.jpg"
  },
  {
    name: "David Thompson",
    role: "Lead Crew Chief",
    bio: "Master craftsman with 20+ years experience. Trains all our crews in quality standards.",
    image: "/placeholder-team-3.jpg"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">About Rooferly</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                We Make Roofing Simple
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Born from frustration with the traditional roofing industry, Rooferly brings 
                digital-first transparency to residential roofing. No sales visits, no pressure, 
                no surprises—just quality roofing done right.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden">
                <Image
                  src="/placeholder-about-hero.jpg"
                  alt="Rooferly crew working on residential home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              We believe getting your roof fixed shouldn't be complicated, stressful, or opaque. 
              By combining digital-first processes with skilled craftsmanship, we're reimagining 
              what roofing service should be: fast, transparent, and focused on your needs.
            </p>
            
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <blockquote className="text-xl font-medium text-foreground mb-4">
                "Every homeowner deserves clear pricing, reliable timelines, and quality work. 
                That's exactly what we deliver, every single time."
              </blockquote>
              <cite className="text-muted-foreground">— Mike Rodriguez, Founder</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground">
              Our values guide every decision, from how we price our services to 
              how we treat your property.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-primary/10 p-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Led by experienced professionals who are passionate about quality roofing 
              and customer service.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader>
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Licensed, Insured & Certified</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-lg p-4 mb-3">
                  <Award className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div className="font-semibold text-sm">IL Licensed</div>
                <div className="text-xs text-muted-foreground">License #123456</div>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-lg p-4 mb-3">
                  <Shield className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div className="font-semibold text-sm">Fully Insured</div>
                <div className="text-xs text-muted-foreground">$2M Coverage</div>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-lg p-4 mb-3">
                  <Award className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div className="font-semibold text-sm">A+ BBB Rating</div>
                <div className="text-xs text-muted-foreground">Accredited</div>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-lg p-4 mb-3">
                  <Users className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div className="font-semibold text-sm">OSHA Certified</div>
                <div className="text-xs text-muted-foreground">Safety First</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
