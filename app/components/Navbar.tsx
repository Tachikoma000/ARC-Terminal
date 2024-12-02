import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Github, Waves } from 'lucide-react'

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/arc_logo.png"
            alt="ARC Logo"
            width={32}
            height={32}
          />
          <span className="font-serif text-xl text-gray-800">arc</span>
        </Link>
        <div className="space-x-8 flex items-center">
          <Link 
            href="https://x.com/arcdotfun" 
            className="text-gray-700 hover:text-gray-900"
            aria-label="Digital Garden"
          >
            <Twitter size={20} />
          </Link>
          <Link 
            href="https://github.com/0xPlaygrounds/rig" 
            className="text-gray-700 hover:text-gray-900"
            aria-label="Build with Rig"
          >
            <Github size={20} />
          </Link>
          <Link 
            href="/peaceful" 
            className="text-gray-700 hover:text-gray-900"
            aria-label="Peaceful Thoughts"
          >
            <Waves size={20} />
          </Link>
        </div>
      </nav>
    </header>
  )
}