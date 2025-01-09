import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { XMLToJSONForm } from './xml-to-json-form'

const title = 'XML to JSON Converter Tool'
const description = 'Convert XML data to JSON format with our free online XML to JSON tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function XMLToJSONPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our XML to JSON Converter tool allows you to easily transform XML data into JSON format. This is particularly useful when working with different data formats or integrating systems that use XML with JSON-based applications."
      features={[
        "Convert XML to JSON with a single click",
        "Preserve XML structure in JSON format",
        "Handle complex XML with nested elements and attributes",
        "Validate XML input before conversion",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "Why convert XML to JSON?",
          answer: "Converting XML to JSON is often necessary when working with different systems or APIs that prefer JSON format. JSON is generally more compact and easier to work with in modern programming languages."
        },
        {
          question: "Does this conversion lose any data from the original XML?",
          answer: "Our converter aims to preserve all data and structure from the original XML. However, some XML features (like comments) may not have direct equivalents in JSON and might be lost in the conversion."
        },
        {
          question: "Can I convert large XML files?",
          answer: "Yes, but be aware that very large XML files might cause performance issues in the browser. For extremely large files, consider using a desktop application or a server-side conversion tool."
        }
      ]}
    >
      <XMLToJSONForm />
    </ToolLayout>
  )
}

