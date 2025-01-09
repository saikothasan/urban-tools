import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { CSSMinifierForm } from './css-minifier-form'

const title = 'CSS Minifier Tool'
const description = 'Minify your CSS code by removing unnecessary characters with our free online CSS Minifier tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function CSSMinifierPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our CSS Minifier tool is designed to reduce the size of your CSS code by removing unnecessary characters. It's an essential tool for web developers looking to optimize their stylesheets for faster loading times."
      features={[
        "Remove unnecessary characters from CSS code",
        "Reduce file size for faster stylesheet loading",
        "Option to remove comments",
        "Easy-to-use interface suitable for beginners and professionals",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is CSS minification?",
          answer: "CSS minification is the process of removing unnecessary characters from CSS code without changing its functionality. This includes removing whitespace, new lines, and comments to reduce file size."
        },
        {
          question: "Why should I minify my CSS?",
          answer: "Minifying CSS reduces the file size, which can lead to faster page load times. This is particularly important for improving user experience and website performance."
        },
        {
          question: "Does minifying CSS affect how the styles are applied?",
          answer: "No, minifying CSS doesn't change how the styles are applied to your web pages. It only removes unnecessary characters that don't affect the rendering of the styles."
        }
      ]}
    >
      <CSSMinifierForm />
    </ToolLayout>
  )
}

