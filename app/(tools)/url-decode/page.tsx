import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { URLDecodeForm } from './url-decode-form'

const title = 'URL Decode Tool'
const description = 'Easily decode URL-encoded strings with our free online URL Decode tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function URLDecodePage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our URL Decode tool is designed to convert URL-encoded strings back into their original form. It's an essential tool for web developers and anyone working with URLs or query parameters."
      features={[
        "Decode URL-encoded strings to their original form",
        "Support for all standard URL encoding characters",
        "Real-time decoding as you type",
        "Easy-to-use interface suitable for beginners and professionals",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is URL decoding?",
          answer: "URL decoding is the process of converting URL-encoded characters back to their original form. This is useful when working with query parameters or encoded URLs."
        },
        {
          question: "Why would I need to decode a URL?",
          answer: "You might need to decode a URL when you're working with query parameters, analyzing web traffic, or debugging web applications. Decoding allows you to see the original, human-readable form of the URL."
        },
        {
          question: "Is this tool safe to use with sensitive information?",
          answer: "While our tool is designed to be secure, we recommend not using it with sensitive or confidential information. The decoding process happens in your browser, but it's always best to handle sensitive data on your local machine."
        }
      ]}
    >
      <URLDecodeForm />
    </ToolLayout>
  )
}

