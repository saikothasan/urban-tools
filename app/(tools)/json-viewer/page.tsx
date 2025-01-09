import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSONViewerForm } from './json-viewer-form'

const title = 'JSON Viewer Tool'
const description = 'Visualize and navigate through JSON data with our free online JSON Viewer tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSONViewerPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JSON Viewer tool allows you to easily visualize and navigate through complex JSON data structures. It's perfect for developers working with APIs, configuration files, or any JSON-based data."
      features={[
        "Interactive tree view for JSON data",
        "Expandable and collapsible nodes",
        "Syntax highlighting for better readability",
        "Easy-to-use interface suitable for all users",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is JSON?",
          answer: "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate."
        },
        {
          question: "Why use a JSON viewer?",
          answer: "A JSON viewer helps you visualize complex JSON structures, making it easier to understand the data hierarchy and relationships between different elements."
        },
        {
          question: "Can I edit the JSON data in the viewer?",
          answer: "This tool is primarily for viewing JSON data. For editing capabilities, check out our JSON Editor tool."
        }
      ]}
    >
      <JSONViewerForm />
    </ToolLayout>
  )
}

