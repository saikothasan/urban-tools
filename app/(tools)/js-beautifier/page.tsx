import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSBeautifierForm } from './js-beautifier-form'

const title = 'JavaScript Beautifier Tool'
const description = 'Format and beautify your JavaScript code with our free online JavaScript Beautifier tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSBeautifierPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JavaScript Beautifier tool is designed to format and prettify your JavaScript code, making it more readable and easier to maintain. It's an essential tool for web developers and programmers working with JavaScript."
      features={[
        "Format and indent JavaScript code",
        "Improve code readability",
        "Consistent styling of JavaScript syntax",
        "Easy-to-use interface suitable for beginners and professionals",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is JavaScript beautification?",
          answer: "JavaScript beautification is the process of formatting JavaScript code to improve its readability. This includes proper indentation, line breaks, and consistent styling of syntax elements."
        },
        {
          question: "Why should I beautify my JavaScript code?",
          answer: "Beautifying JavaScript code makes it easier to read, understand, and maintain. It's particularly useful when working on large projects, debugging, or collaborating with other developers."
        },
        {
          question: "Does beautifying JavaScript affect how the code runs?",
          answer: "No, beautifying JavaScript doesn't change how the code functions. It only affects the code's appearance, making it easier for humans to read and work with."
        }
      ]}
    >
      <JSBeautifierForm />
    </ToolLayout>
  )
}

