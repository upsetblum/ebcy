'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: '/', label: 'Portfolio' },
    { href: '/accueil', label: 'Accueil' },
    { href: '/techniques', label: 'Techniques' },
    { href: '/trop-humain', label: 'Trop Humain' },
    { href: '/epicerie', label: 'Épicerie' },
    { href: '/oiseaux', label: 'Oiseaux' },
    { href: '/poissons', label: 'Poissons' },
    { href: '/rivages', label: 'Rivages' },
    { href: '/bouleversement', label: 'Bouleversement' },
    { href: '/ruralite', label: 'Ruralité' },
    { href: '/ficus', label: 'Ficus' },
    { href: '/cv', label: 'CV' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" prefetch={true}>
            <Image
              src="/assets/images/LOGO - EBCY poisson - final.jpg"
              alt="EBCY"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="font-bold text-xl text-stone-800">EBCY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-stone-600 hover:text-stone-900 font-medium transition-colors"
                prefetch={true}
                onMouseEnter={() => router.prefetch(item.href)}
              >
                {item.label}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-stone-600 hover:text-stone-900 font-medium transition-colors">
                Plus
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {navItems.slice(6).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors"
                      prefetch={true}
                      onMouseEnter={() => router.prefetch(item.href)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-6 bg-stone-800 transform transition-all duration-200 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`} />
              <span className={`absolute h-0.5 w-6 bg-stone-800 transform transition-all duration-200 ${isOpen ? 'opacity-0' : 'top-3'}`} />
              <span className={`absolute h-0.5 w-6 bg-stone-800 transform transition-all duration-200 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-stone-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-stone-600 hover:text-stone-900 font-medium transition-colors"
                prefetch={true}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}