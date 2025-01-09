import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSONToTSVForm } from './json-to-tsv-form'

const title = 'JSON to TSV Converter Tool'
const description = 'Convert JSON data to TSV format with our free online JSON to TSV tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSONToTSVPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JSON to TSV Converter tool allows you to easily transform JSON data into TSV (Tab-Separated Values) format. This is particularly useful when you need to import JSON data into spreadsheet applications or work with systems that prefer TSV input."
      features={[
        "Convert JSON to TSV with a single click",
        "Handle complex JSON structures",
        "Automatically generate TSV headers",
        "Support for nested JSON objects and arrays",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is TSV?",
          answer: "TSV stands for Tab-Separated Values. It's a simple text format for storing tabular data where each row is on a new line and columns are separated by tab characters."
        },
        {
          question: "Why convert JSON to TSV?",
          answer: "Converting JSON to TSV is often necessary when you need to use data from web APIs or JSON-based systems in spreadsheet applications or databases that work better with tabular data formats. TSV is particularly useful when your data might contain commas, which could cause issues with CSV format."
        },
        {
          question: "How are nested JSON structures handled?",
          answer: "Our tool attempts to flatten nested JSON structures into a tabular format. Complex nested objects or arrays may result in multiple columns in the TSV output."
        }
      ]}
    >
      <JSONToTSVForm />
    </ToolLayout>
  )
}

