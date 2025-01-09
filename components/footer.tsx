import Link from 'next/link'
import { TextIcon as Telegram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:underline">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://t.me/drkingbd" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm hover:underline inline-flex items-center gap-2"
                >
                  <Telegram className="h-4 w-4" />
                  Telegram Community
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} DevTools. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

