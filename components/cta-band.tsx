import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function CTABand() {
  return (
    <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 text-sm">
            <Zap className="h-4 w-4" />
            <span>Priority Scheduling Available</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need Your Roof Done Fast?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Skip the line with Priority Scheduling. Get reserved crews, earlier start windows, 
            and dedicated project management. Available as a paid upgrade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="secondary" 
              asChild
              className="text-lg px-8 py-6"
            >
              <Link href="/estimate" className="flex items-center space-x-2">
                <span>Get Priority Estimate</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/pricing">Learn More</Link>
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/70">
            Priority slots fill up fast • Book within 24 hours for best availability
          </p>
        </div>
      </div>
    </section>
  )
}
