import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'

const title = 'Privacy Policy'
const description = 'Learn about how we protect your privacy and handle your data at DevTools.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function PrivacyPolicyPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="At DevTools, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices concerning the collection, use, and protection of your data when you use our online developer tools."
      features={[
        "Transparent data handling practices",
        "No collection of personal data for most tools",
        "Data processed locally in your browser",
        "No sharing of user data with third parties",
        "Regular updates to our privacy practices"
      ]}
      faqs={[
        {
          question: "Do you collect my personal information?",
          answer: "For most of our tools, we do not collect any personal information. Your data is processed locally in your browser. However, for features like the contact form, we collect the information you provide to respond to your inquiry."
        },
        {
          question: "How do you use cookies?",
          answer: "We use cookies only for essential functions of our website, such as remembering your preferences. We do not use cookies for tracking or advertising purposes."
        },
        {
          question: "Is my code safe when I use your tools?",
          answer: "Yes, your code and data are processed entirely in your browser. We do not store or have access to any code or data you input into our tools."
        }
      ]}
    >
      <div className="prose dark:prose-invert">
        <h2>1. Information We Collect</h2>
        <p>
          Most of our tools process all data locally in your browser. We do not collect, store, or have access to any data you input into these tools. For certain features, such as our contact form, we may collect personal information you voluntarily provide, including your name and email address.
        </p>

        <h2>2. Use of Information</h2>
        <p>
          Any personal information collected through our contact form is used solely for the purpose of responding to your inquiry. We do not use this information for marketing purposes or share it with third parties.
        </p>

        <h2>3. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. All data processing for our tools occurs locally in your browser, minimizing the risk of data interception or unauthorized access.
        </p>

        <h2>4. Cookies</h2>
        <p>
          We use cookies only for essential functions of our website, such as remembering your preferences. We do not use cookies for tracking or advertising purposes.
        </p>

        <h2>5. Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
        </p>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the bottom of this page.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our Contact page.
        </p>

        <p>Last updated: July 10, 2023</p>
      </div>
    </ToolLayout>
  )
}

