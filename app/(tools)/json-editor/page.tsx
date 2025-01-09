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
      about="Our JSON Editor tool provides an interactive interface for editing and manipulating JSON data. It combines the functionality of a text editor with a structured view, making it easy to modify complex JSON structures."
      features={[
        "Interactive tree view for editing JSON",
        "Text-based editing with syntax highlighting",
        "Add, edit, and delete JSON properties and values",
        "Validate JSON as you type",
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
          answer: "Yes, the editor supports undo and redo operations for both the tree view and text-based editing."
        }
      ]}
    >
      <JSONEditorForm />
    </ToolLayout>
  )
}

