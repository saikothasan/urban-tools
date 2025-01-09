import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { HTMLEncodeForm } from './html-encode-form'

const title = 'HTML Encode Tool'
const description = 'Convert special characters to their HTML entity equivalents with our free online HTML Encode tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function HTMLEncodePage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our HTML Encode tool is designed to convert special characters into their corresponding HTML entities. It's an essential tool for web developers and content creators who need to ensure their content is properly displayed in HTML."
      features={[
        "Encode special characters to their HTML entity equivalents",
        "Support for common characters like &, <, >, \", and '",
        "Real-time encoding as you type",
        "Easy-to-use interface suitable for beginners and professionals",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is HTML encoding?",
          answer: "HTML encoding is the process of converting special characters into their corresponding HTML entities. This ensures that characters are displayed correctly in web browsers and prevents potential security issues."
        },
        {
          question: "Why do I need to encode HTML?",
          answer: "Encoding HTML is important to prevent characters from being interpreted as HTML syntax. It's particularly useful when displaying user-generated content or when you need to include special characters in your HTML code."
        },
        {
          question: "Is this tool safe to use with sensitive information?",
          answer: "While our tool is designed to be secure, we recommend not using it with sensitive or confidential information. The encoding process happens in your browser, but it's always best to handle sensitive data on your local machine."
        }
      ]}
    >
      <HTMLEncodeForm />
    </ToolLayout>
  )
}

