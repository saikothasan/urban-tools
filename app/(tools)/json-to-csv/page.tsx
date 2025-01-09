import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSONToCSVForm } from './json-to-csv-form'

const title = 'JSON to CSV Converter Tool'
const description = 'Convert JSON data to CSV format with our free online JSON to CSV tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSONToCSVPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JSON to CSV Converter tool allows you to easily transform JSON data into CSV (Comma-Separated Values) format. This is particularly useful when you need to import JSON data into spreadsheet applications or work with systems that prefer CSV input."
      features={[
        "Convert JSON to CSV with a single click",
        "Handle complex JSON structures",
        "Automatically generate CSV headers",
        "Support for nested JSON objects and arrays",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "Why convert JSON to CSV?",
          answer: "Converting JSON to CSV is often necessary when you need to use data from web APIs or JSON-based systems in spreadsheet applications or databases that work better with tabular data formats."
        },
        {
          question: "How are nested JSON structures handled?",
          answer: "Our tool attempts to flatten nested JSON structures into a tabular format. Complex nested objects or arrays may result in multiple rows or columns in the CSV output."
        },
        {
          question: "Can I convert large JSON files?",
          answer: "Yes, but be aware that very large JSON files might cause performance issues in the browser. For extremely large files, consider using a desktop application or a server-side conversion tool."
        }
      ]}
    >
      <JSONToCSVForm />
    </ToolLayout>
  )
}

