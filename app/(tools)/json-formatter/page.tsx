import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSONFormatterForm } from './json-formatter-form'

const title = 'JSON Formatter Tool'
const description = 'Format and prettify JSON data with our free online JSON Formatter tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSONFormatterPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JSON Formatter tool allows you to beautify and format your JSON data, making it more readable and easier to understand. It's perfect for developers working with APIs, configuration files, or any JSON-based data."
      features={[
        "Format JSON with customizable indentation",
        "Syntax highlighting for better readability",
        "Error detection and reporting",
        "Copy formatted JSON with a single click",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "Why should I format my JSON?",
          answer: "Formatting JSON makes it more readable for humans, which is especially useful when debugging or working with large JSON structures."
        },
        {
          question: "Does formatting change my JSON data?",
          answer: "No, formatting only changes the appearance of the JSON, not its content or structure."
        },
        {
          question: "Can I use this tool for large JSON files?",
          answer: "Yes, but be aware that very large JSON files might cause performance issues in the browser. For extremely large files, consider using a desktop application."
        }
      ]}
    >
      <JSONFormatterForm />
    </ToolLayout>
  )
}

