import type { Metadata } from 'next'
import { LeadForm } from "@/components/lead-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageSquare, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: 'Contact Rooferly - Get Help with Your Roofing Project',
  description: 'Contact Rooferly for roofing questions, emergency service, or project consultations. Professional roofing experts serving all of Chicagoland.',
  openGraph: {
    title: 'Contact Rooferly - Get Help with Your Roofing Project',
    description: 'Contact Rooferly for roofing questions, emergency service, or project consultations.',
  },
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Send us your questions",
    primary: "roof@rooferly.co",
    secondary: "Typically respond within 2 hours",
    action: "Send Email",
    href: "mailto:roof@rooferly.co"
  },
  {
    icon: MessageSquare,
    title: "Online Form",
    description: "Quick project details",
    primary: "Get Started",
    secondary: "Fill out our project form below",
    action: "Start Form",
    href: "#contact-form"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our Naperville office",
    primary: "1552 S. Rte 59 #1415",
    secondary: "Naperville, IL 60564",
    action: "Get Directions",
    href: "https://maps.google.com/?q=1552+S.+Rte+59+%231415+Naperville+IL+60564"
  },
  {
    icon: Zap,
    title: "Service Area",
    description: "All of Chicagoland",
    primary: "Full Coverage",
    secondary: "Serving the entire Chicago metro area",
    action: "View Areas",
    href: "/service-areas"
  }
]

const hours = [
  { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "Emergency Service Only" },
]

const serviceAreas = [
  "Chicago", "Naperville", "Schaumburg", "Evanston", "Oak Park", 
  "Wheaton", "Lombard", "Downers Grove", "Arlington Heights", "Des Plaines",
  "Palatine", "Hoffman Estates", "Streamwood", "Elk Grove Village", "Mount Prospect"
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Questions about your roof? Need emergency service? We're here to help. 
              Professional roofing expertise serving all of Chicagoland.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <Card key={method.title} className="text-center hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-3">
                      <div className={`rounded-full p-3 ${
                        method.title === 'Emergency Line' 
                          ? 'bg-red-100 text-red-600' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="font-semibold text-foreground">{method.primary}</div>
                      <div className="text-sm text-muted-foreground">{method.secondary}</div>
                    </div>
                    <a
                      href={method.href}
                      className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                        method.title === 'Emergency Line'
                          ? 'bg-red-600 text-white hover:bg-red-700'
                          : 'bg-primary text-primary-foreground hover:bg-primary/90'
                      }`}
                    >
                      {method.action}
                    </a>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form">
              <LeadForm
                title="Send Us a Message"
                description="Tell us about your project and we'll get back to you within 2 hours"
                source="contact-page"
              />
            </div>

            {/* Business Info */}
            <div className="space-y-8">
              {/* Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {hours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-sm text-primary">
                      <strong>Emergency Service:</strong> For urgent repairs, email us at 
                      <a href="mailto:roof@rooferly.co" className="underline ml-1">roof@rooferly.co</a> with "EMERGENCY" in the subject line.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Service Area</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium text-foreground mb-2">Our Office:</p>
                    <p className="text-sm text-muted-foreground">
                      1552 S. Rte 59 #1415<br/>
                      Naperville, IL 60564
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We proudly serve all of Chicagoland including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {serviceAreas.map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm text-primary">
                      Don't see your area? We're expanding! Contact us to check availability.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Answers</CardTitle>
                  <CardDescription>
                    Check our FAQ for instant answers to common questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="/pricing#faq" className="block text-sm text-primary hover:text-primary/80">
                      • How accurate are your estimates?
                    </a>
                    <a href="/pricing#faq" className="block text-sm text-primary hover:text-primary/80">
                      • What's included in each package?
                    </a>
                    <a href="/pricing#faq" className="block text-sm text-primary hover:text-primary/80">
                      • Do you work with insurance?
                    </a>
                    <a href="/pricing#faq" className="block text-sm text-primary hover:text-primary/80">
                      • What financing options are available?
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
