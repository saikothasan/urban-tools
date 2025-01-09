import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  return (
    <header className="border-b" role="banner">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav aria-label="Main Navigation">
          <Link href="/" className="text-2xl font-bold" aria-label="DevTools Home">
            DevTools
          </Link>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}

