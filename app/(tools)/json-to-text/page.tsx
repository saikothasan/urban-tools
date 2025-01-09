import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSONToTextForm } from './json-to-text-form'

const title = 'JSON to Text Converter Tool'
const description = 'Convert JSON data to plain text format with our free online JSON to Text tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSONToTextPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JSON to Text Converter tool allows you to transform JSON data into a more readable plain text format. This is useful when you need to extract information from JSON for documentation, reporting, or any scenario where a simpler text representation is preferred."
      features={[
        "Convert JSON to plain text with customizable formatting",
        "Handle complex JSON structures",
        "Option to include or exclude keys in the output",
        "Customizable indentation and line breaks",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "Why convert JSON to plain text?",
          answer: "Converting JSON to plain text can make the data more readable for non-technical users, or when you need to include JSON data in reports or documentation where a simpler format is preferred."
        },
        {
          question: "How are nested JSON structures handled?",
          answer: "Nested structures are represented with indentation in the plain text output, making it easy to understand the hierarchy of the data."
        },
        {
          question: "Can I customize the output format?",
          answer: "Yes, our tool provides options to customize the indentation, line breaks, and whether to include keys in the output, allowing you to tailor the text representation to your needs."
        }
      ]}
    >
      <JSONToTextForm />
    </ToolLayout>
  )
}

