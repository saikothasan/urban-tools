import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { HTMLMinifierForm } from './html-minifier-form'

const title = 'HTML Minifier Tool'
const description = 'Minify your HTML code by removing unnecessary whitespace with our free online HTML Minifier tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function HTMLMinifierPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our HTML Minifier tool is designed to reduce the size of your HTML code by removing unnecessary whitespace and comments. It's an essential tool for web developers looking to optimize their websites for faster loading times."
      features={[
        "Remove unnecessary whitespace from HTML code",
        "Reduce file size for faster page loading",
        "Option to remove comments",
        "Easy-to-use interface suitable for beginners and professionals",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is HTML minification?",
          answer: "HTML minification is the process of removing unnecessary characters from HTML code without changing its functionality. This includes removing whitespace, new lines, and comments to reduce file size."
        },
        {
          question: "Why should I minify my HTML?",
          answer: "Minifying HTML reduces the file size, which can lead to faster page load times. This is particularly important for improving user experience and search engine optimization (SEO)."
        },
        {
          question: "Does minifying HTML affect how the page looks?",
          answer: "No, minifying HTML doesn't change how the page looks in browsers. It only removes unnecessary characters that don't affect the rendering of the page."
        }
      ]}
    >
      <HTMLMinifierForm />
    </ToolLayout>
  )
}

