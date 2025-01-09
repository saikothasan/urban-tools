import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSObfuscatorForm } from './js-obfuscator-form'

const title = 'JavaScript Obfuscator Tool'
const description = 'Obfuscate your JavaScript code to make it harder to read with our free online JavaScript Obfuscator tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSObfuscatorPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JavaScript Obfuscator tool is designed to make your JavaScript code harder to read and understand, which can help protect your intellectual property. It's a useful tool for developers who want to add a layer of security to their client-side scripts."
      features={[
        "Obfuscate JavaScript code to make it harder to read",
        "Multiple obfuscation techniques available",
        "Customizable obfuscation settings",
        "Easy-to-use interface suitable for beginners and professionals",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is JavaScript obfuscation?",
          answer: "JavaScript obfuscation is the process of transforming readable and understandable code into a version that is difficult for humans to comprehend, while still maintaining the original functionality."
        },
        {
          question: "Why would I want to obfuscate my JavaScript?",
          answer: "Obfuscation can help protect your intellectual property by making it harder for others to reverse-engineer your code. It can also deter casual inspection of your code logic. However, it's important to note that obfuscation is not a foolproof security measure."
        },
        {
          question: "Does obfuscating JavaScript affect its performance?",
          answer: "Obfuscation can sometimes slightly increase the size of your JavaScript file, which could marginally affect load times. However, the impact on runtime performance is usually negligible. Some obfuscation techniques might even improve performance by shortening variable names."
        }
      ]}
    >
      <JSObfuscatorForm />
    </ToolLayout>
  )
}

