'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/decouvrir', label: 'Découvrir G3S' },
    { href: '/expertises', label: 'Nos expertises' },
    { href: '/secteurs', label: 'Nos secteurs' },
    { href: '/actualites', label: 'Actualités' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy text-white shadow-md transition-all duration-300">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative h-10 md:h-12 shrink-0">
            <img
              src="/logo/g3s-groupe.jpg"
              alt="G3S Groupe Logo"
              className="h-full w-auto object-contain rounded-md shadow-sm"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center md:gap-2 lg:gap-6 md:flex">
          <ul className="flex md:gap-0 lg:gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-md md:px-1.5 lg:px-3 py-2 font-sans md:text-xs lg:text-sm font-medium uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${pathname === link.href
                    ? 'bg-white/20 text-white font-semibold'
                    : 'text-mist hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:0685641267"
            className="flex items-center md:gap-1 lg:gap-2 rounded bg-brand md:px-3 lg:px-5 md:py-2 lg:py-2.5 font-sans md:text-sm lg:text-base font-semibold text-white transition-all hover:bg-brand/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Appeler
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-md p-2 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${menuOpen ? 'translate-y-[8px] rotate-45' : ''}`}></span>
          <span className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${menuOpen ? '-translate-y-[8px] -rotate-45' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Nav Panel */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-navy px-4 md:px-6 transition-all duration-300 ease-in-out md:hidden ${menuOpen ? 'max-h-[500px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
          }`}
      >
        <ul className="flex flex-col gap-2 text-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-lg px-4 py-3 font-sans text-lg font-medium uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${pathname === link.href
                  ? 'bg-white/20 text-white font-semibold'
                  : 'text-mist hover:bg-white/10 hover:text-white'
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="tel:0685641267"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-brand p-4 font-sans text-lg font-semibold text-white shadow-md transition-colors hover:bg-brand/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          06 85 64 12 67
        </a>
      </div>
    </header>
  );
}
