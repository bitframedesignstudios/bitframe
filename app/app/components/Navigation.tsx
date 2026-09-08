"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useMemo, useState } from 'react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '/works', label: 'Our Work' },
  { href: '#process', label: 'Process' },
];

const mobileLinks = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Our Work' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const resolveHref = useMemo(
    () => (href: string) => (href.startsWith('#') && pathname !== '/' ? `/${href}` : href),
    [pathname],
  );

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-900 flex items-center justify-center relative animate-soft-pulse">
            <span className="text-white text-xs font-bold tracking-tighter">BF</span>
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-600" />
          </div>
          <span className="font-bold tracking-tight text-xl text-zinc-900">BITFRAME DESIGN STUDIO</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          {navLinks.map((link) => (
            <Link key={link.href} href={resolveHref(link.href)} className="hover:text-zinc-900 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/works"
            className="hidden sm:inline-flex bg-zinc-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-zinc-800 transition-colors rounded-none"
          >
            Launch Your Project
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-zinc-100 bg-white/95 px-6 py-5 shadow-lg backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/works"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-zinc-950 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800"
            >
              View Full Works
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
