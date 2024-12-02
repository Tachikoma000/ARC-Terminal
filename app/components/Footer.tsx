import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full bg-white/80 backdrop-blur-sm shadow-sm mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">© {new Date().getFullYear()} arc</p>
          <div className="space-x-6">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 