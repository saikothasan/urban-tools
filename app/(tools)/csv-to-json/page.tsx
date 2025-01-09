import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { CSVToJSONForm } from './csv-to-json-form'

const title = 'CSV to JSON Converter Tool'
const description = 'Convert CSV data to JSON format with our free online CSV to JSON tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function CSVToJSONPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our CSV to JSON Converter tool allows you to easily transform CSV (Comma-Separated Values) data into JSON format. This is particularly useful when working with spreadsheet data that needs to be used in JSON-based applications or APIs."
      features={[
        "Convert CSV to JSON with a single click",
        "Automatically detect CSV delimiters",
        "Handle CSV files with or without headers",
        "Support for complex CSV structures",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "Why convert CSV to JSON?",
          answer: "Converting CSV to JSON is often necessary when you need to use data from spreadsheets or databases in web applications or APIs that work with JSON. JSON is a more flexible and widely used format in modern programming."
        },
        {
          question: "Does this tool support different CSV formats?",
          answer: "Yes, our tool can handle various CSV formats, including different delimiters and files with or without headers. It attempts to automatically detect the format of your CSV data."
        },
        {
          question: "Can I convert large CSV files?",
          answer: "Yes, but be aware that very large CSV files might cause performance issues in the browser. For extremely large files, consider using a desktop application or a server-side conversion tool."
        }
      ]}
    >
      <CSVToJSONForm />
    </ToolLayout>
  )
}

