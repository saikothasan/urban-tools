import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'

const title = 'About DevTools'
const description = 'Learn more about our online developer tools and the team behind them.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function AboutPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="DevTools is a comprehensive suite of online utilities designed to streamline and enhance the workflow of developers, programmers, and tech enthusiasts. Our platform offers a wide array of tools, from code formatters and converters to generators and testers, all accessible for free and without the need for registration."
      features={[
        "Wide range of developer tools",
        "User-friendly interface",
        "Regularly updated with new features",
        "Commitment to privacy and security",
        "Community-driven development"
      ]}
      faqs={[
        {
          question: "Who created DevTools?",
          answer: "DevTools was created by a team of passionate developers who wanted to provide free, accessible, and high-quality tools for the developer community."
        },
        {
          question: "How often are new tools added?",
          answer: "We strive to add new tools and improve existing ones on a regular basis. We also welcome suggestions from our user community for new tools or improvements."
        },
        {
          question: "Is my data safe when using DevTools?",
          answer: "We take data privacy very seriously. All tools process data in your browser, and we do not store or have access to any of the data you input. For more information, please see our Privacy Policy."
        }
      ]}
    >
      <div className="prose dark:prose-invert">
        <p>
          At DevTools, we're passionate about empowering developers with the tools they need to work more efficiently and effectively. Our platform was born out of the recognition that developers often need quick access to various utilities without the hassle of installing multiple applications or navigating complex interfaces.
        </p>
        <p>
          Our team consists of experienced developers, designers, and product managers who understand the challenges of modern software development. We've combined our expertise to create a suite of tools that we ourselves would want to use daily.
        </p>
        <p>
          We believe in the power of community and open source. While our platform itself is not open source, we actively encourage feedback and suggestions from our users. Many of our tools and improvements have come directly from user requests and feedback.
        </p>
        <p>
          As we continue to grow and evolve, our commitment remains the same: to provide high-quality, reliable, and user-friendly tools for developers around the world. We're excited to have you as part of our community and look forward to supporting your development journey.
        </p>
      </div>
    </ToolLayout>
  )
}

