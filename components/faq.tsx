import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How accurate are your online estimates?",
    answer: "Our estimates are typically within 10-15% of the final price. We use satellite imagery, local pricing data, and your roof specifications to provide realistic ranges. The final price is confirmed after our crew chief does a brief walkthrough on installation day."
  },
  {
    question: "What's included in Priority Scheduling?",
    answer: "Priority Scheduling gets you a reserved crew allocation, 2-3 weeks earlier start date, dedicated project manager, and priority access to emergency repairs. It's perfect for time-sensitive projects or storm damage situations."
  },
  {
    question: "Do you work with insurance claims?",
    answer: "Yes! We work directly with insurance companies and can help you navigate the claims process. Our team will meet with your adjuster, provide detailed documentation, and ensure you get fair coverage for storm damage repairs."
  },
  {
    question: "How long does a typical roof replacement take?",
    answer: "Most residential roofs take 1-3 days depending on size and complexity. We'll give you an exact timeline with your estimate. Weather delays are the main variable, but we'll keep you updated throughout the process."
  },
  {
    question: "What financing options do you offer?",
    answer: "We partner with several financing companies to offer 12-84 month terms with competitive rates. Many customers qualify for 0% interest for 12-18 months. You can apply online and get instant approval in most cases."
  },
  {
    question: "Is there a warranty on your work?",
    answer: "Yes! All our packages include workmanship warranties (5-15 years depending on package). Materials come with manufacturer warranties (25 years to lifetime). Our Better and Best packages include transferable warranties if you sell your home."
  },
  {
    question: "What happens if there's storm damage after installation?",
    answer: "If storm damage occurs within your warranty period, we'll assess and repair any workmanship-related issues at no charge. For material damage, we'll work with your insurance and honor manufacturer warranties."
  },
  {
    question: "Can I schedule around my availability?",
    answer: "Absolutely. Our scheduling system shows real availability and you pick what works for you. Priority Scheduling customers get access to more time slots and can often get weekend or early morning starts."
  },
  {
    question: "Do you handle permits and inspections?",
    answer: "Yes, we handle all permits and coordinate inspections with your local building department. This is included in all our packages at no extra charge."
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "You can reschedule up to 48 hours before your start date with no penalties. Cancellations within 24 hours may incur a trip charge, but we're flexible for weather or emergencies."
  }
]

export function FAQ() {
  return (
    <section className="py-16 lg:py-24 bg-background" id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our pricing, process, and warranties.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-2xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:roof@rooferly.co" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              Email us: roof@rooferly.co
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
