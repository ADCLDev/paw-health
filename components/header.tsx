// components/Header.tsx
import { Heart} from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href='/'>
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-rose-500" fill="currentColor" />
            <span className="text-xl font-bold">PawHealth AI</span>
          </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <button className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}