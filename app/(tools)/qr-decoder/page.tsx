import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { QRDecoderForm } from './qr-decoder-form'

const title = 'QR Code Decoder Tool'
const description = 'Decode QR codes from images with our free online QR Code Decoder tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function QRDecoderPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our QR Code Decoder tool is designed to extract information from QR code images. It's a useful tool for anyone who needs to quickly read QR codes without a mobile device."
      features={[
        "Decode QR codes from uploaded images",
        "Support for various QR code formats",
        "Fast and accurate decoding",
        "Easy-to-use interface suitable for all users",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "What is a QR code?",
          answer: "A QR code (Quick Response code) is a type of matrix barcode that contains information such as website URLs, plain text, contact information, or other data. It can be read quickly by a digital device with a camera and QR code reading software."
        },
        {
          question: "What types of QR codes can this tool decode?",
          answer: "Our tool can decode standard QR codes containing various types of data, including URLs, plain text, contact information, and more. It supports common QR code formats used in most applications."
        },
        {
          question: "Is it safe to use this QR code decoder?",
          answer: "Yes, our QR code decoder is safe to use. The decoding process happens in your browser, and we don't store any of the uploaded images or decoded data. However, always be cautious when following links or using information from QR codes from unknown sources."
        }
      ]}
    >
      <QRDecoderForm />
    </ToolLayout>
  )
}

