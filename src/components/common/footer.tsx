'use client';

import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { navLinks } from '@/lib/constants';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Logo = () => (
  <div className="flex items-center gap-2">
    <Image
      src="/fargate-logo.png"
      alt="Farmgate Finance Logo"
      width={160}
      height={160}
      className="h-40 w-40 object-contain"
      priority
    />
  </div>
);

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 md:px-6 pt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-2 mt-0">
            <div className="-mt-14 mb-0 flex flex-col items-start -space-y-2">
              <Logo />
              <div className="text-sm text-muted-foreground -mt-2">
                Farmgate Finance Limited (Company Number 9356952)

              </div>
              <br />
              <div className="text-sm text-muted-foreground">
                Auckland — Level 10, 11 Britomart Place, Auckland CBD, 1010, New Zealand<br />
                <br />
                Christchurch — Awly Building, Level 4, 287-293 Durham Street North, Christchurch, 8013, New Zealand
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-accent focus:text-accent active:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-headline font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                Email:{' '}
                <a href="mailto:info@farmgatefinance.co.nz" className="transition-colors hover:text-accent focus:text-accent active:text-accent">
                  info@farmgatefinance.co.nz
                </a>
              </li>
              <li>
                Phone:{' '}
                <a href="tel:+6499505891" className="transition-colors hover:text-accent focus:text-accent active:text-accent">
                  +64 (09) 950 5891
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
            <a
              href="https://www.linkedin.com/company/farmgate-finance-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent focus:text-accent active:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t pt-6 pb-2 text-center text-sm text-muted-foreground w-full">
        <p>&copy; {currentYear || new Date().getFullYear()} Farmgate Finance Ltd. All rights reserved.</p>
        <p className="mt-2">
          <Link href="/terms" className="transition-colors hover:text-accent focus:text-accent active:text-accent">Terms & Conditions</Link>
        </p>
      </div>
    </footer>
  );
}