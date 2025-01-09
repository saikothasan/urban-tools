import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { MarkdownToHTMLForm } from './markdown-to-html-form'

const title = 'Markdown to HTML Converter Tool'
const description = 'Convert Markdown to HTML with our free online Markdown to HTML Converter tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function MarkdownToHTMLPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our Markdown to HTML Converter tool allows you to easily transform Markdown syntax into HTML. This is particularly useful for content creators, developers, and anyone who works with both Markdown and HTML formats. Markdown is a lightweight markup language that's easy to write, and this tool helps you convert it to HTML for web publishing."
      features={[
        "Convert Markdown to HTML instantly",
        "Support for common Markdown syntax elements",
        "Preview of the generated HTML",
        "Copy HTML output with a single click",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is Markdown?",
          answer: "Markdown is a lightweight markup language with plain text formatting syntax. It's designed to be easy to write and easy to read, and can be converted to HTML and many other formats."
        },
        {
          question: "Why convert Markdown to HTML?",
          answer: "While Markdown is great for writing, HTML is the standard for web content. Converting Markdown to HTML allows you to write in an easy-to-use format and then publish it on the web or use it in web applications."
        },
        {
          question: "Does this tool support all Markdown features?",
          answer: "This tool supports common Markdown syntax including headers, lists, links, images, and basic formatting. However, some advanced or non-standard Markdown features may not be supported."
        }
      ]}
    >
      <MarkdownToHTMLForm />
    </ToolLayout>
  )
}

