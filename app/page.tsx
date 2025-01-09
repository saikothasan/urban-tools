import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import SEO from '@/components/seo'

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
  { name: "JSON Viewer", description: "Visualize and navigate through JSON data", path: "/json-viewer" },
  { name: "JSON Formatter", description: "Format and prettify JSON data", path: "/json-formatter" },
  { name: "JSON Validator", description: "Validate JSON data structure and syntax", path: "/json-validator" },
  { name: "JSON Editor", description: "Edit and manipulate JSON data", path: "/json-editor" },
  { name: "JSON Minify", description: "Minify JSON data by removing whitespace", path: "/json-minify" },
  { name: "XML to JSON", description: "Convert XML data to JSON format", path: "/xml-to-json" },
  { name: "CSV to JSON", description: "Convert CSV data to JSON format", path: "/csv-to-json" },
  { name: "TSV to JSON", description: "Convert TSV data to JSON format", path: "/tsv-to-json" },
  { name: "JSON to XML", description: "Convert JSON data to XML format", path: "/json-to-xml" },
  { name: "JSON to CSV", description: "Convert JSON data to CSV format", path: "/json-to-csv" },
  { name: "JSON to Text", description: "Convert JSON data to plain text", path: "/json-to-text" },
  { name: "JSON to TSV", description: "Convert JSON data to TSV format", path: "/json-to-tsv" },
  { name: "UUID Generator", description: "Generate UUIDs (Universally Unique Identifiers)", path: "/uuid-generator" },
  { name: "Diff Checker", description: "Compare and highlight differences between two texts", path: "/diff-checker" },
  { name: "Markdown to HTML", description: "Convert Markdown syntax to HTML", path: "/markdown-to-html" },
  { name: "Hash Generator", description: "Generate various types of hashes using crypto-js", path: "/hash-generator" },
]

export default function Home() {
  return (
    <>
      <SEO 
        title="DevTools - Online Developer Tools"
        description="A collection of useful online tools for developers including HTML, CSS, JavaScript, and JSON utilities."
      />
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
      </div>
    </>
  )
}

