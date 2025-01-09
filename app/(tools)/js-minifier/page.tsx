import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSMinifierForm } from './js-minifier-form'

const title = 'JavaScript Minifier Tool'
const description = 'Minify your JavaScript code to reduce file size with our free online JavaScript Minifier tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSMinifierPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JavaScript Minifier tool is designed to reduce the size of your JavaScript code by removing unnecessary characters and optimizing it. It's an essential tool for web developers looking to improve the performance of their websites."
      features={[
        "Remove unnecessary characters from JavaScript code",
        "Reduce file size for faster script loading",
        "Advanced optimization options",
        "Easy-to-use interface suitable for beginners and professionals",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is JavaScript minification?",
          answer: "JavaScript minification is the process of removing unnecessary characters from JavaScript code without changing its functionality. This includes removing whitespace, new lines, comments, and shortening variable names where possible."
        },
        {
          question: "Why should I minify my JavaScript?",
          answer: "Minifying JavaScript reduces the file size, which can lead to faster page load times. This is particularly important for improving user experience and website performance, especially on mobile devices or slow connections."
        },
        {
          question: "Does minifying JavaScript affect how the code runs?",
          answer: "When done correctly, minifying JavaScript shouldn't change how the code functions. However, it's always a good practice to test your minified code thoroughly to ensure it works as expected."
        }
      ]}
    >
      <JSMinifierForm />
    </ToolLayout>
  )
}

