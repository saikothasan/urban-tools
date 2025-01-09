import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSONEditorForm } from './json-editor-form'

const title = 'JSON Editor Tool'
const description = 'Edit and manipulate JSON data with our free online JSON Editor tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSONEditorPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JSON Editor tool provides an interface for editing and manipulating JSON data. It allows you to format, minify, and validate your JSON with ease."
      features={[
        "Format JSON with proper indentation",
        "Minify JSON to reduce file size",
        "Validate JSON as you type",
        "Easy-to-use interface suitable for all users",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "Can I use this editor for large JSON files?",
          answer: "Yes, but be aware that very large JSON files might cause performance issues in the browser. For extremely large files, consider using a desktop application."
        },
        {
          question: "Does this editor support JSON schema validation?",
          answer: "This editor validates JSON syntax but does not support schema validation. For schema validation, you may need a more specialized tool."
        },
        {
          question: "Can I undo changes in the editor?",
          answer: "The editor uses a standard textarea, so you can use the browser's built-in undo functionality (usually Ctrl+Z or Cmd+Z)."
        }
      ]}
    >
      <JSONEditorForm />
    </ToolLayout>
  )
}

