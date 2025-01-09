import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { DiffCheckerForm } from './diff-checker-form'

const title = 'Diff Checker Tool'
const description = 'Compare and highlight differences between two texts with our free online Diff Checker tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function DiffCheckerPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our Diff Checker tool helps you compare two pieces of text and highlight the differences between them. This is particularly useful for comparing code snippets, reviewing changes in documents, or identifying modifications between different versions of text."
      features={[
        "Compare two texts and highlight differences",
        "Line-by-line comparison",
        "Color-coded output for easy identification of changes",
        "Support for various text formats including code",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "How does the diff checker work?",
          answer: "The diff checker uses an algorithm to compare two texts line by line. It then highlights the differences, showing additions, deletions, and modifications between the two texts."
        },
        {
          question: "Can I use this for comparing code?",
          answer: "Yes, this diff checker can be used to compare code snippets. However, for more advanced code comparison features, you might want to use a specialized code diff tool or version control system."
        },
        {
          question: "Is there a limit to the text size I can compare?",
          answer: "While there's no strict limit, very large texts may impact the performance of your browser. For extremely large comparisons, consider using a desktop diff tool."
        }
      ]}
    >
      <DiffCheckerForm />
    </ToolLayout>
  )
}

