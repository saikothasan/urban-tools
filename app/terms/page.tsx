import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'

const title = 'Terms of Service'
const description = 'Read our Terms of Service to understand the conditions of using DevTools.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function TermsPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="These Terms of Service govern your use of the DevTools website and the tools provided therein. By using our website and tools, you agree to these terms in full. If you disagree with these terms or any part of these terms, you must not use our website and tools."
      features={[
        "Clear guidelines for website and tool usage",
        "Information on intellectual property rights",
        "Details on user responsibilities",
        "Explanation of limitation of liability",
        "Process for modifications to terms"
      ]}
      faqs={[
        {
          question: "Can I use DevTools for commercial projects?",
          answer: "Yes, you can use DevTools for both personal and commercial projects. However, you may not resell or redistribute our tools as your own."
        },
        {
          question: "What happens if I violate these terms?",
          answer: "Violation of these terms may result in termination of your access to our services. In severe cases, we reserve the right to take legal action."
        },
        {
          question: "How often do these terms change?",
          answer: "We may update these terms from time to time. We encourage you to review this page periodically for any changes."
        }
      ]}
    >
      <div className="prose dark:prose-invert">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using DevTools, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily use the tools and services on DevTools for personal or commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul>
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on DevTools;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on DevTools are provided on an 'as is' basis. DevTools makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2>4. Limitations</h2>
        <p>
          In no event shall DevTools or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DevTools, even if DevTools or a DevTools authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2>5. Accuracy of materials</h2>
        <p>
          The materials appearing on DevTools could include technical, typographical, or photographic errors. DevTools does not warrant that any of the materials on its website are accurate, complete or current. DevTools may make changes to the materials contained on its website at any time without notice.
        </p>

        <h2>6. Links</h2>
        <p>
          DevTools has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by DevTools of the site. Use of any such linked website is at the user's own risk.
        </p>

        <h2>7. Modifications</h2>
        <p>
          DevTools may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>

        <p>Last updated: July 10, 2023</p>
      </div>
    </ToolLayout>
  )
}

