import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { JSDeObfuscatorForm } from './js-deobfuscator-form'

const title = 'Advanced JavaScript DeObfuscator Tool'
const description = 'Deobfuscate and analyze obfuscated JavaScript code with our comprehensive online JavaScript DeObfuscator tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function JSDeObfuscatorPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our Advanced JavaScript DeObfuscator tool is designed to help developers, security researchers, and curious minds understand and analyze obfuscated JavaScript code. It employs multiple sophisticated techniques to make the code more readable and easier to comprehend, while providing detailed insights into the deobfuscation process."
      features={[
        "Multiple deobfuscation techniques including variable renaming, constant folding, and dead code elimination",
        "Syntax highlighting for both input and output code",
        "Detailed analysis of obfuscation techniques used",
        "Step-by-step deobfuscation process visualization",
        "Support for various obfuscation methods including string encryption and control flow flattening",
        "Customizable deobfuscation options for fine-tuned results",
        "Export deobfuscated code and analysis report",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is JavaScript deobfuscation?",
          answer: "JavaScript deobfuscation is the process of taking obfuscated (intentionally obscured or minified) JavaScript code and attempting to make it more readable and understandable. This can be useful for analyzing potentially malicious scripts, understanding minified code, or reverse engineering."
        },
        {
          question: "How effective is this deobfuscator?",
          answer: "Our tool employs a wide range of advanced techniques and is effective against many common obfuscation methods. However, the effectiveness can vary depending on the specific obfuscation techniques used. Some highly sophisticated or custom obfuscation methods might still pose challenges."
        },
        {
          question: "Is it safe to use this deobfuscator with potentially malicious code?",
          answer: "Our deobfuscator processes the code entirely in your browser and doesn't execute it. However, always exercise caution when dealing with unknown or potentially malicious code. It's recommended to use this tool in a secure, isolated environment when working with suspicious scripts."
        },
        {
          question: "Can this tool handle large JavaScript files?",
          answer: "Yes, our tool is designed to handle large JavaScript files. However, for extremely large files (over 1MB), the deobfuscation process might take longer and could potentially impact browser performance. In such cases, consider splitting the file or using a local deobfuscation tool."
        }
      ]}
    >
      <JSDeObfuscatorForm />
    </ToolLayout>
  )
}

