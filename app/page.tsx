import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'DevTools - Online Developer Tools',
  description: 'A collection of useful online tools for developers including HTML, CSS, and JavaScript utilities.',
  openGraph: {
    title: 'DevTools - Online Developer Tools',
    description: 'A collection of useful online tools for developers including HTML, CSS, and JavaScript utilities.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevTools - Online Developer Tools',
    description: 'A collection of useful online tools for developers including HTML, CSS, and JavaScript utilities.',
  },
}

const tools = [
  { name: "HTML Decode", description: "Decode HTML entities to their corresponding characters", path: "/html-decode" },
  { name: "HTML Encode", description: "Encode special characters to their HTML entity equivalents", path: "/html-encode" },
  { name: "URL Decode", description: "Decode URL-encoded strings", path: "/url-decode" },
  { name: "URL Encode", description: "Encode strings for use in URLs", path: "/url-encode" },
  { name: "HTML Beautifier", description: "Format and beautify HTML code", path: "/html-beautifier" },
  { name: "HTML Minifier", description: "Minify HTML code by removing unnecessary whitespace", path: "/html-minifier" },
  { name: "CSS Beautifier", description: "Format and beautify CSS code", path: "/css-beautifier" },
  { name: "CSS Minifier", description: "Minify CSS code by removing unnecessary characters", path: "/css-minifier" },
  { name: "JavaScript Beautifier", description: "Format and beautify JavaScript code", path: "/js-beautifier" },
  { name: "JavaScript Minifier", description: "Minify JavaScript code to reduce file size", path: "/js-minifier" },
  { name: "JavaScript DeObfuscator", description: "Attempt to deobfuscate obfuscated JavaScript code", path: "/js-deobfuscator" },
  { name: "JavaScript Obfuscator", description: "Obfuscate JavaScript code to make it harder to read", path: "/js-obfuscator" },
  { name: "QR Code Decoder", description: "Decode QR codes from images", path: "/qr-decoder" },
  { name: "QR Code Generator", description: "Generate QR codes from text or URLs", path: "/qr-generator" },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Online Developer Tools</h1>
      <p className="text-xl mb-12 text-center text-muted-foreground">A collection of useful online tools for web developers and programmers</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link href={tool.path} key={tool.name} className="no-underline">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{tool.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tool.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "DevTools - Online Developer Tools",
          "description": "A collection of useful online tools for developers including HTML, CSS, and JavaScript utilities.",
          "url": "https://your-website-url.com",
        })}
      </Script>
    </div>
  )
}

