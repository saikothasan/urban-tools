import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSONToXMLForm } from './json-to-xml-form'

const title = 'JSON to XML Converter Tool'
const description = 'Convert JSON data to XML format with our free online JSON to XML tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSONToXMLPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JSON to XML Converter tool allows you to easily transform JSON data into XML format. This is particularly useful when working with systems or APIs that require XML input, or when you need to convert data between these two popular formats."
      features={[
        "Convert JSON to XML with a single click",
        "Preserve JSON structure in XML format",
        "Handle complex JSON with nested objects and arrays",
        "Validate JSON input before conversion",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "Why convert JSON to XML?",
          answer: "While JSON is widely used in modern web applications, some systems still require XML format. This tool helps bridge the gap between these two formats, allowing for easy data interchange."
        },
        {
          question: "How are JSON arrays handled in XML?",
          answer: "JSON arrays are typically converted to repeated XML elements. The exact structure may vary depending on the complexity of your JSON data."
        },
        {
          question: "Can I convert large JSON files?",
          answer: "Yes, but be aware that very large JSON files might cause performance issues in the browser. For extremely large files, consider using a desktop application or a server-side conversion tool."
        }
      ]}
    >
      <JSONToXMLForm />
    </ToolLayout>
  )
}

