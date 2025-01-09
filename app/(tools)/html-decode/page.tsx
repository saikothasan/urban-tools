import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { HTMLDecodeForm } from './html-decode-form'

const title = 'HTML Decode Tool'
const description = 'Easily decode HTML entities into their corresponding characters with our free online HTML Decode tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function HTMLDecodePage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our HTML Decode tool is designed to convert HTML entities back into their original characters. It's an essential tool for web developers and content creators who need to work with HTML-encoded text."
      features={[
        "Decode HTML entities to their corresponding characters",
        "Support for common HTML entities like &amp;, &lt;, &gt;, &quot;, and more",
        "Real-time decoding as you type",
        "Easy-to-use interface suitable for beginners and professionals",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is HTML decoding?",
          answer: "HTML decoding is the process of converting HTML entities (like &amp;, &lt;, &gt;) back into their original characters (like &, <, >). This is useful when you need to display HTML-encoded text in its original form."
        },
        {
          question: "Why would I need to decode HTML?",
          answer: "You might need to decode HTML when you're working with content that has been HTML-encoded for safe storage or transmission. Decoding allows you to view and edit the original text without the HTML entities."
        },
        {
          question: "Is this tool safe to use with sensitive information?",
          answer: "While our tool is designed to be secure, we recommend not using it with sensitive or confidential information. The decoding process happens in your browser, but it's always best to handle sensitive data on your local machine."
        }
      ]}
    >
      <HTMLDecodeForm />
    </ToolLayout>
  )
}

