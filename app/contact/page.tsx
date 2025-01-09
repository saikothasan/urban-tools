import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { ContactForm } from './contact-form'
import { Alert, AlertDescription } from "@/components/ui/alert"

const title = 'Contact Us'
const description = 'Get in touch with the DevTools team for support, feedback, or inquiries.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function ContactPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="We value your feedback and are here to assist you with any questions or concerns you may have about our developer tools. Whether you're experiencing issues, have suggestions for improvement, or just want to share your thoughts, we're eager to hear from you."
      features={[
        "Direct communication with our support team",
        "Quick response times",
        "Opportunity to suggest new features",
        "Report bugs or issues",
        "General inquiries welcome"
      ]}
      faqs={[
        {
          question: "What's the typical response time?",
          answer: "We strive to respond to all inquiries within 24-48 hours during business days."
        },
        {
          question: "Can I request a new tool?",
          answer: "We love hearing ideas from our community. While we can't guarantee implementation, we seriously consider all suggestions."
        },
        {
          question: "Do you offer premium support?",
          answer: "Currently, all our tools and support are offered free of charge. However, we're always exploring ways to enhance our services."
        }
      ]}
    >
      <Alert className="mb-4">
        <AlertDescription>
          <strong>Note for developers:</strong> To use this contact form, you need to set up EmailJS. Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' in the ContactForm component with your actual EmailJS credentials.
        </AlertDescription>
      </Alert>
      <ContactForm />
    </ToolLayout>
  )
}

