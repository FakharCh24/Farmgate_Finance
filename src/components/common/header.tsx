'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/constants';
import Image from 'next/image';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <Image
      src="/fargate-logo.png"
      alt="Farmgate Finance Logo"
      width={160}
      height={160}
      className="h-40 w-40 object-contain"
      priority
    />
  </Link>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium text-[#234066] transition-colors hover:text-accent',
                pathname === link.href ? 'text-accent' : ''
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild style={{ backgroundColor: '#2E9B5B', color: '#fff' }}>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild style={{ backgroundColor: '#2E9B5B', color: '#fff' }}>
            <Link href="/login">Register</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Main navigation menu</SheetTitle>
              <div className="p-4">
                <div className="mb-8">
                  <Logo />
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-lg font-medium text-[#234066] transition-colors hover:text-accent',
                        pathname === link.href ? 'text-accent' : ''
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 flex flex-col gap-4">
                  <Button asChild style={{ backgroundColor: '#2E9B5B', color: '#fff' }} onClick={() => setIsOpen(false)}>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild style={{ backgroundColor: '#2E9B5B', color: '#fff' }} onClick={() => setIsOpen(false)}>
                    <Link href="/login">Register</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
