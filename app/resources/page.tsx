import type { Metadata } from 'next'
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Download, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: 'Roofing Resources & Guides - Expert Tips from Rooferly',
  description: 'Free roofing guides, tips, and resources from Chicago roofing experts. Learn about roof types, maintenance, insurance, and more.',
  openGraph: {
    title: 'Roofing Resources & Guides - Expert Tips from Rooferly',
    description: 'Free roofing guides and expert tips from Chicago roofing professionals.',
  },
}

const articles = [
  {
    slug: "roof-types-101",
    title: "Roof Types 101: Choosing the Right Material",
    description: "Complete guide to asphalt, metal, tile, and flat roofing options with pros, cons, and cost comparisons.",
    readTime: "8 min read",
    category: "Materials",
    featured: true
  },
  {
    slug: "insurance-basics",
    title: "Working with Insurance on Roof Claims",
    description: "Navigate the insurance claims process for storm damage, what's covered, and how to maximize your claim.",
    readTime: "6 min read", 
    category: "Insurance",
    featured: true
  },
  {
    slug: "replacement-signs",
    title: "10 Signs You Need a New Roof",
    description: "Learn the warning signs that indicate it's time for a roof replacement vs. simple repairs.",
    readTime: "5 min read",
    category: "Maintenance",
    featured: false
  },
  {
    slug: "winter-prep",
    title: "Preparing Your Roof for Chicago Winters",
    description: "Essential winterization steps to prevent ice dams, leaks, and weather damage.",
    readTime: "7 min read",
    category: "Seasonal",
    featured: false
  },
  {
    slug: "ventilation-matters",
    title: "Why Proper Roof Ventilation Matters",
    description: "How ventilation affects energy costs, prevents damage, and extends roof life.",
    readTime: "4 min read",
    category: "Maintenance",
    featured: false
  },
  {
    slug: "financing-guide",
    title: "Roof Financing Options Explained",
    description: "Compare financing options, understand terms, and find the best payment solution for your project.",
    readTime: "6 min read",
    category: "Financing",
    featured: false
  }
]

const categories = ["All", "Materials", "Insurance", "Maintenance", "Seasonal", "Financing"]

const downloads = [
  {
    title: "Roof Inspection Checklist",
    description: "Free DIY checklist to assess your roof's condition",
    type: "PDF"
  },
  {
    title: "Storm Damage Documentation Guide", 
    description: "How to document damage for insurance claims",
    type: "PDF"
  },
  {
    title: "Roofing Cost Calculator Worksheet",
    description: "Estimate your project costs with our worksheet",
    type: "Excel"
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Expert Resources</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Roofing Resources & Guides
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert advice, guides, and tools to help you make informed decisions 
              about your roofing project. All content from licensed Chicago roofing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Featured Guides
            </h2>
            <p className="text-lg text-muted-foreground">
              Most popular resources from our roofing experts
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {articles.filter(article => article.featured).map((article) => (
              <Card key={article.slug} className="group hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    <Link href={`/resources/${article.slug}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/resources/${article.slug}`} className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Read Guide</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              All Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse our complete library of roofing guides and tips
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.slug} className="group hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    <Link href={`/resources/${article.slug}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="ghost" size="sm" asChild className="w-full justify-start p-0 h-auto">
                    <Link href={`/resources/${article.slug}`} className="flex items-center space-x-2">
                      <span>Read more</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Free Downloads
            </h2>
            <p className="text-lg text-muted-foreground">
              Helpful tools and checklists for your roofing project
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {downloads.map((download) => (
              <Card key={download.title} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-3">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Download className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{download.title}</CardTitle>
                  <CardDescription>{download.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" size="sm">
                    Download {download.type}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our roofing experts are here to help. Get personalized advice for your specific project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Ask an Expert</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/estimate">Get Estimate</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
