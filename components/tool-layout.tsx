import { Metadata } from 'next'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ToolLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  about: string
  features: string[]
  faqs: { question: string; answer: string }[]
}

export function ToolLayout({ children, title, description, about, features, faqs }: ToolLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-8 text-muted-foreground">{description}</p>
      
      <div className="mb-8">{children}</div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-muted-foreground">{about}</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-muted-foreground">{feature}</li>
          ))}
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}

export function generateMetadata({ title, description }: { title: string, description: string }): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

