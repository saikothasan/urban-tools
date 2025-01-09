import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { HashGeneratorForm } from './hash-generator-form'

const title = 'Hash Generator Tool'
const description = 'Generate various types of hashes using our free online Hash Generator tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function HashGeneratorPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our Hash Generator tool allows you to create hash values using various algorithms provided by the crypto-js library. This tool is useful for developers, security professionals, and anyone needing to generate hash values for data integrity, password storage, or other cryptographic purposes."
      features={[
        "Support for multiple hash algorithms including MD5, SHA-1, SHA-256, SHA-3, and more",
        "Real-time hash generation as you type",
        "Copy generated hash to clipboard with one click",
        "Supports input of any length",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is a hash?",
          answer: "A hash is a fixed-size string of characters generated from input data of any size. It's designed to be a one-way function, meaning it's practically impossible to reverse the process and obtain the original data from the hash."
        },
        {
          question: "Which hash algorithm should I use?",
          answer: "The choice of hash algorithm depends on your specific needs. SHA-256 and SHA-3 are widely used and considered secure for most applications. MD5 and SHA-1 are faster but no longer considered cryptographically secure for all purposes."
        },
        {
          question: "Is it safe to use this tool for sensitive data?",
          answer: "While our tool processes all data in your browser and doesn't transmit it, we generally recommend against inputting sensitive data into online tools. For sensitive applications, consider using local cryptographic libraries."
        }
      ]}
    >
      <HashGeneratorForm />
    </ToolLayout>
  )
}

