import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { URLEncodeForm } from './url-encode-form'

const title = 'URL Encode Tool'
const description = 'Easily encode strings for use in URLs with our free online URL Encode tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function URLEncodePage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our URL Encode tool is designed to convert strings into a format that can be transmitted over the Internet. It's an essential tool for web developers and anyone working with URLs or query parameters."
      features={[
        "Encode strings for safe use in URLs",
        "Support for all standard characters that need URL encoding",
        "Real-time encoding as you type",
        "Easy-to-use interface suitable for beginners and professionals",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is URL encoding?",
          answer: "URL encoding is the process of converting characters into a format that can be transmitted over the Internet. It replaces unsafe ASCII characters with a '%' followed by two hexadecimal digits."
        },
        {
          question: "Why do I need to encode URLs?",
          answer: "URL encoding is necessary when you want to include special characters in a URL, such as spaces, &, =, ?, and other non-ASCII characters. It ensures that the URL is valid and can be properly transmitted and interpreted by web servers."
        },
        {
          question: "Is this tool safe to use with sensitive information?",
          answer: "While our tool is designed to be secure, we recommend not using it with sensitive or confidential information. The encoding process happens in your browser, but it's always best to handle sensitive data on your local machine."
        }
      ]}
    >
      <URLEncodeForm />
    </ToolLayout>
  )
}

