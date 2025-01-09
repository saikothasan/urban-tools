import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSONValidatorForm } from './json-validator-form'

const title = 'JSON Validator Tool'
const description = 'Validate JSON data structure and syntax with our free online JSON Validator tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSONValidatorPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JSON Validator tool helps you check the validity of your JSON data. It ensures that your JSON is well-formed and follows the correct syntax, helping you catch and fix errors quickly."
      features={[
        "Validate JSON syntax and structure",
        "Detailed error reporting",
        "Line and column number for error location",
        "Support for large JSON files",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What does JSON validation check for?",
          answer: "JSON validation checks for proper syntax, including correctly formed objects and arrays, properly quoted strings, and valid data types."
        },
        {
          question: "Why is JSON validation important?",
          answer: "Validating JSON helps ensure that your data is correctly formatted and can be properly parsed by applications, preventing potential errors or data loss."
        },
        {
          question: "Can this tool validate against a JSON schema?",
          answer: "This tool checks for valid JSON syntax but does not validate against a specific JSON schema. For schema validation, you may need a more specialized tool."
        }
      ]}
    >
      <JSONValidatorForm />
    </ToolLayout>
  )
}

