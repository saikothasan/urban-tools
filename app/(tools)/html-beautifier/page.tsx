import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { HTMLBeautifierForm } from './html-beautifier-form'

const title = 'HTML Beautifier Tool'
const description = 'Format and beautify your HTML code with our free online HTML Beautifier tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function HTMLBeautifierPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our HTML Beautifier tool is designed to format and prettify your HTML code, making it more readable and easier to maintain. It's an essential tool for web developers and designers working with HTML."
      features={[
        "Format and indent HTML code",
        "Improve code readability",
        "Consistent styling of HTML elements",
        "Easy-to-use interface suitable for beginners and professionals",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is HTML beautification?",
          answer: "HTML beautification is the process of formatting HTML code to improve its readability. This includes proper indentation, line breaks, and consistent styling of elements."
        },
        {
          question: "Why should I beautify my HTML code?",
          answer: "Beautifying HTML code makes it easier to read, understand, and maintain. It's particularly useful when working on large projects or collaborating with other developers."
        },
        {
          question: "Does beautifying HTML affect how the page is rendered?",
          answer: "No, beautifying HTML doesn't change how the page is rendered in browsers. It only affects the code's appearance, making it easier for humans to read and work with."
        }
      ]}
    >
      <HTMLBeautifierForm />
    </ToolLayout>
  )
}

