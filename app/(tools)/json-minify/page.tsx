import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSONMinifyForm } from './json-minify-form'

const title = 'JSON Minify Tool'
const description = 'Minify JSON data by removing whitespace with our free online JSON Minify tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSONMinifyPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JSON Minify tool helps you reduce the size of your JSON data by removing unnecessary whitespace and formatting. This is useful for optimizing data transfer and storage while maintaining the original structure and content of your JSON."
      features={[
        "Remove unnecessary whitespace from JSON",
        "Reduce file size for faster data transfer",
        "Maintain original JSON structure and content",
        "Validate JSON before minification",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "Why should I minify JSON?",
          answer: "Minifying JSON reduces its file size, which can lead to faster data transfer and lower storage costs, especially important for large-scale applications or when working with limited bandwidth."
        },
        {
          question: "Does minifying JSON affect its functionality?",
          answer: "No, minifying JSON only removes unnecessary whitespace and formatting. The structure and content of the JSON remain unchanged, so it will function exactly the same as the original."
        },
        {
          question: "Can minified JSON be reversed to its original format?",
          answer: "While you can't recover the exact original formatting, you can use a JSON formatter to make the minified JSON more readable. However, any comments in the original JSON will be lost during minification."
        }
      ]}
    >
      <JSONMinifyForm />
    </ToolLayout>
  )
}

