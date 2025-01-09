import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { QRGeneratorForm } from './qr-generator-form'

const title = 'QR Code Generator Tool'
const description = 'Generate QR codes from text or URLs with our free online QR Code Generator tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function QRGeneratorPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our QR Code Generator tool allows you to create QR codes quickly and easily. It's perfect for businesses, marketers, or anyone who needs to share information in a scannable format."
      features={[
        "Generate QR codes from text or URLs",
        "Customizable QR code size",
        "Download generated QR codes as images",
        "Easy-to-use interface suitable for all users",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What can I use a QR code for?",
          answer: "QR codes can be used for various purposes, including sharing website URLs, contact information, Wi-Fi network details, product information, event details, and more. They're a quick way to transfer information to mobile devices."
        },
        {
          question: "How do I use the generated QR code?",
          answer: "Once you've generated a QR code, you can download it as an image file. You can then print this image or use it digitally in your marketing materials, business cards, posters, or websites. Users can scan the QR code with their smartphone camera or a QR code reader app to access the encoded information."
        },
        {
          question: "Are there any limitations to what I can encode in a QR code?",
          answer: "While QR codes can store various types of data, there are limitations to the amount of information they can contain. The more data you try to encode, the more complex and potentially harder to scan the QR code becomes. For best results, keep the encoded information concise."
        }
      ]}
    >
      <QRGeneratorForm />
    </ToolLayout>
  )
}

