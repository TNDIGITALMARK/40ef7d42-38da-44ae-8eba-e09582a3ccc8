'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Courses', href: '/courses' },
    { name: 'Membership', href: '/membership' },
    { name: 'Events', href: '/events' },
    { name: 'Academy', href: '/academy' },
    { name: 'Pro Shop', href: '/pro-shop' },
  ];

  return (
    <>
      {/* Top gold bar */}
      <div className="bg-accent h-1 w-full" />

      {/* Info bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end h-10 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:555-867-5100" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>(555) 867-5100</span>
              </a>
              <Link href="/login" className="hover:text-accent transition-colors">
                Member Login
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-background border-b sticky top-0 z-50 backdrop-blur-sm bg-background/95">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center">
              <span className="text-2xl font-serif font-semibold text-foreground tracking-tight">
                STERLING OAKS
              </span>
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Golf Club
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/book-tee-time">Book Tee Time</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/book-tee-time" onClick={() => setMobileMenuOpen(false)}>
                    Book Tee Time
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
