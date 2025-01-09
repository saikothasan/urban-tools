import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

const tools = [
  { name: "HTML Tools", items: ["HTML Decode", "HTML Encode", "HTML Beautifier", "HTML Minifier"] },
  { name: "CSS Tools", items: ["CSS Beautifier", "CSS Minifier"] },
  { name: "JavaScript Tools", items: ["JS Beautifier", "JS Minifier", "JS Obfuscator", "JS Deobfuscator"] },
  { name: "JSON Tools", items: ["JSON Viewer", "JSON Formatter", "JSON Validator", "JSON Editor", "JSON Minify"] },
  { name: "Converters", items: ["XML to JSON", "JSON to XML", "CSV to JSON", "JSON to CSV", "TSV to JSON", "JSON to TSV"] },
  { name: "Encoders/Decoders", items: ["URL Encode", "URL Decode"] },
  { name: "Other Tools", items: ["QR Code Generator", "QR Code Decoder"] },
]

export default function Header() {
  return (
    <header className="border-b" role="banner">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="flex items-center space-x-4" aria-label="Main Navigation">
          <Link href="/" className="text-2xl font-bold" aria-label="DevTools Home">
            DevTools
          </Link>
          <div className="relative group">
            <button className="py-2">Tools</button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none hidden group-hover:block">
              {tools.map((category) => (
                <div key={category.name} className="py-1">
                  <p className="block px-4 py-2 text-sm text-gray-700 font-semibold">{category.name}</p>
                  {category.items.map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}

