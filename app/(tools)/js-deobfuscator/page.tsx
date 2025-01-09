import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSDeObfuscatorForm } from './js-deobfuscator-form'

const title = 'JavaScript DeObfuscator Tool'
const description = 'Attempt to deobfuscate obfuscated JavaScript code with our free online JavaScript DeObfuscator tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSDeObfuscatorPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our JavaScript DeObfuscator tool is designed to attempt to reverse the process of JavaScript obfuscation, making obfuscated code more readable and understandable. It's a useful tool for developers and security researchers analyzing potentially malicious scripts."
      features={[
        "Attempt to deobfuscate JavaScript code",
        "Improve readability of obfuscated scripts",
        "Helpful for analyzing and understanding complex or minified code",
        "Easy-to-use interface suitable for developers and researchers",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is JavaScript deobfuscation?",
          answer: "JavaScript deobfuscation is the process of attempting to reverse obfuscated or intentionally obscured JavaScript code to make it more readable and understandable. This can be useful for analyzing potentially malicious scripts or understanding minified code."
        },
        {
          question: "Can all obfuscated JavaScript be fully deobfuscated?",
          answer: "Not always. The effectiveness of deobfuscation depends on the methods used to obfuscate the code. Some obfuscation techniques can be very difficult to reverse completely. Our tool attempts to improve readability, but may not achieve perfect deobfuscation in all cases."
        },
        {
          question: "Is it legal to deobfuscate JavaScript code?",
          answer: "The legality can depend on the specific use case and jurisdiction. Generally, deobfuscating code for security research, debugging, or understanding open-source projects is considered acceptable. However, it's important to respect copyright laws and terms of service."
        }
      ]}
    >
      <JSDeObfuscatorForm />
    </ToolLayout>
  )
}

