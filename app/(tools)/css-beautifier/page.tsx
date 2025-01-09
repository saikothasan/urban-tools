import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { CSSBeautifierForm } from './css-beautifier-form'

const title = 'CSS Beautifier Tool'
const description = 'Format and beautify your CSS code with our free online CSS Beautifier tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function CSSBeautifierPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our CSS Beautifier tool is designed to format and prettify your CSS code, making it more readable and easier to maintain. It's an essential tool for web developers and designers working with CSS."
      features={[
        "Format and indent CSS code",
        "Improve code readability",
        "Consistent styling of CSS rules",
        "Easy-to-use interface suitable for beginners and professionals",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is CSS beautification?",
          answer: "CSS beautification is the process of formatting CSS code to improve its readability. This includes proper indentation, line breaks, and consistent styling of selectors and properties."
        },
        {
          question: "Why should I beautify my CSS code?",
          answer: "Beautifying CSS code makes it easier to read, understand, and maintain. It's particularly useful when working on large projects or collaborating with other developers."
        },
        {
          question: "Does beautifying CSS affect how the styles are applied?",
          answer: "No, beautifying CSS doesn't change how the styles are applied to your web pages. It only affects the code's appearance, making it easier for humans to read and work with."
        }
      ]}
    >
      <CSSBeautifierForm />
    </ToolLayout>
  )
}

