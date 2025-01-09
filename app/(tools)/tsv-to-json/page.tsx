import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { TSVToJSONForm } from './tsv-to-json-form'

const title = 'TSV to JSON Converter Tool'
const description = 'Convert TSV data to JSON format with our free online TSV to JSON tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function TSVToJSONPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our TSV to JSON Converter tool allows you to easily transform TSV (Tab-Separated Values) data into JSON format. This is particularly useful when working with spreadsheet data that uses tabs as delimiters and needs to be used in JSON-based applications or APIs."
      features={[
        "Convert TSV to JSON with a single click",
        "Handle TSV files with or without headers",
        "Support for complex TSV structures",
        "Preserve data types when possible",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is TSV?",
          answer: "TSV stands for Tab-Separated Values. It's a simple format for storing tabular data where each row is on a new line and columns are separated by tab characters."
        },
        {
          question: "Why convert TSV to JSON?",
          answer: "Converting TSV to JSON is often necessary when you need to use data from spreadsheets or databases in web applications or APIs that work with JSON. JSON is a more flexible and widely used format in modern programming."
        },
        {
          question: "Can I convert large TSV files?",
          answer: "Yes, but be aware that very large TSV files might cause performance issues in the browser. For extremely large files, consider using a desktop application or a server-side conversion tool."
        }
      ]}
    >
      <TSVToJSONForm />
    </ToolLayout>
  )
}

