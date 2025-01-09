import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { UUIDGeneratorForm } from './uuid-generator-form'

const title = 'UUID Generator Tool'
const description = 'Generate UUIDs (Universally Unique Identifiers) with our free online UUID Generator tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function UUIDGeneratorPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our UUID Generator tool allows you to quickly generate UUIDs (Universally Unique Identifiers). UUIDs are 128-bit numbers used to identify information in computer systems, often used in distributed systems and databases to ensure uniqueness across different domains."
      features={[
        "Generate version 4 UUIDs",
        "Generate multiple UUIDs at once",
        "Copy UUIDs to clipboard with one click",
        "Option to remove hyphens from generated UUIDs",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is a UUID?",
          answer: "A UUID (Universally Unique Identifier) is a 128-bit number used to identify information in computer systems. It's designed to be unique across both space and time, making it ideal for distributed systems where uniqueness is crucial."
        },
        {
          question: "What version of UUID does this generator use?",
          answer: "This generator creates version 4 UUIDs, which are randomly generated. This version is widely used and suitable for most applications requiring unique identifiers."
        },
        {
          question: "Are the generated UUIDs cryptographically secure?",
          answer: "While the UUIDs generated are based on cryptographically strong random numbers, they should not be used for cryptographic purposes. They are designed for uniqueness, not security."
        }
      ]}
    >
      <UUIDGeneratorForm />
    </ToolLayout>
  )
}

