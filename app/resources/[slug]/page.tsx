import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft, Download, Share } from "lucide-react"

// Mock article data - in real app, this would come from CMS or API
const articles = {
  'roof-types-101': {
    title: "Roof Types 101: Choosing the Right Material",
    description: "Complete guide to asphalt, metal, tile, and flat roofing options with pros, cons, and cost comparisons.",
    content: `
# Roof Types 101: Choosing the Right Material

Choosing the right roofing material is one of the most important decisions you'll make for your home. The right choice depends on your budget, climate, home style, and long-term goals.

## Asphalt Shingles

**Pros:**
- Most affordable option
- Easy to install and repair
- Wide variety of colors and styles
- Good warranty options

**Cons:**
- Shorter lifespan (20-30 years)
- Less energy efficient
- Can be damaged by severe weather

**Best for:** Budget-conscious homeowners, traditional home styles

## Metal Roofing

**Pros:**
- Long lifespan (50+ years)
- Energy efficient
- Fire resistant
- Low maintenance

**Cons:**
- Higher upfront cost
- Can be noisy during storms
- Limited color options

**Best for:** Long-term investment, energy efficiency priorities

## Tile Roofing

**Pros:**
- Very long lifespan (75+ years)
- Fire resistant
- Energy efficient
- Beautiful aesthetic

**Cons:**
- Very expensive
- Heavy (requires structural support)
- Difficult repairs

**Best for:** High-end homes, Mediterranean/Spanish styles

## Flat Roofing (TPO/EPDM)

**Pros:**
- Most cost-effective for flat/low-pitch roofs
- Easy maintenance access
- Can support HVAC equipment

**Cons:**
- Shorter lifespan than pitched options
- Drainage challenges
- Limited style options

**Best for:** Modern homes, commercial-style residential

## Making Your Decision

Consider these factors when choosing:

1. **Budget**: Both upfront costs and long-term value
2. **Climate**: Your area's weather patterns
3. **Home Style**: What complements your architecture
4. **Energy Goals**: Efficiency and cooling costs
5. **Maintenance**: How much upkeep you want

## Get Expert Advice

Still not sure which option is best for your home? Our roofing experts can provide personalized recommendations based on your specific situation.
    `,
    readTime: "8 min read",
    category: "Materials",
    publishedAt: "2024-01-15"
  },
  'insurance-basics': {
    title: "Working with Insurance on Roof Claims",
    description: "Navigate the insurance claims process for storm damage, what's covered, and how to maximize your claim.",
    content: `
# Working with Insurance on Roof Claims

Filing an insurance claim for roof damage can feel overwhelming, but understanding the process helps ensure you get fair coverage for necessary repairs.

## When to File a Claim

File a claim when you have:
- Storm damage (hail, wind, fallen trees)
- Sudden leaks from covered perils
- Damage from fire or vandalism

**Don't file for:**
- Normal wear and tear
- Gradual leaks
- Maintenance issues

## Documentation is Key

Before calling your insurance company:

1. **Take Photos**: Document all visible damage
2. **Note Dates**: When did the damage occur?
3. **Collect Evidence**: Weather reports, receipts for temporary repairs
4. **List Damage**: Interior and exterior issues

## The Claims Process

1. **Contact Your Insurer**: Report the claim promptly
2. **Emergency Repairs**: Make temporary fixes to prevent further damage
3. **Adjuster Visit**: Cooperate fully and be present
4. **Get Estimates**: Work with reputable contractors
5. **Review Settlement**: Understand what's covered

## Working with Contractors

- Choose licensed, insured contractors
- Get multiple estimates
- Understand the difference between actual cash value and replacement cost
- Don't sign over insurance checks

## Maximizing Your Claim

- Document everything thoroughly
- Know your policy details
- Consider hiring a public adjuster for large claims
- Don't accept the first offer if you believe it's inadequate

## Common Pitfalls

- Filing claims for normal wear and tear
- Not reading policy details
- Choosing contractors based only on price
- Not understanding depreciation

## Get Professional Help

If you're dealing with insurance after roof damage, we can help guide you through the process and work directly with your adjuster.
    `,
    readTime: "6 min read", 
    category: "Insurance",
    publishedAt: "2024-01-10"
  }
}

type ArticleParams = {
  slug: string
}

export async function generateMetadata({ params }: { params: ArticleParams }): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles]
  
  if (!article) {
    return {
      title: 'Article Not Found'
    }
  }

  return {
    title: `${article.title} - Rooferly Resources`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
    },
  }
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug: slug,
  }))
}

export default function ArticlePage({ params }: { params: ArticleParams }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/resources" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Resources</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <Badge>{article.category}</Badge>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {article.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="sm" variant="outline" className="flex items-center space-x-2">
                <Share className="h-4 w-4" />
                <span>Share</span>
              </Button>
              <Button size="sm" variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ 
                __html: article.content.replace(/\n/g, '<br/>').replace(/#{2,}/g, (match) => {
                  const level = match.length
                  return `<h${level}>`
                }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need Expert Roofing Advice?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Our experienced team can provide personalized guidance for your specific roofing project.
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
