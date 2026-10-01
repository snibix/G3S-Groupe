'use client';

import Link from 'next/link';
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
    <header className="fixed top-0 left-0 w-full z-50 bg-navy text-white shadow-md transition-all duration-300">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky rounded"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white shadow-lg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span className="font-display text-2xl font-bold uppercase tracking-wider text-white">
            G3S - Groupe
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <ul className="flex gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-md px-3 py-2 font-sans font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky ${pathname === link.href
                      ? 'bg-brand/20 text-sky font-semibold'
                      : 'text-mist hover:bg-brand/10 hover:text-sky'
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:0356990900"
            className="flex items-center gap-2 rounded bg-brand px-5 py-2.5 font-sans font-semibold text-white transition-all hover:bg-brand/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky shadow-sm"
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
        className={`overflow-hidden border-t border-white/10 bg-navy px-6 transition-all duration-300 ease-in-out md:hidden ${menuOpen ? 'max-h-[500px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
          }`}
      >
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-lg px-4 py-3 font-sans text-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky ${pathname === link.href
                    ? 'bg-brand/20 text-sky font-semibold'
                    : 'text-mist hover:bg-brand/10 hover:text-sky'
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="tel:0356990900"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-brand p-4 font-sans text-lg font-semibold text-white shadow-md transition-colors hover:bg-brand/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          03 56 99 09 00
        </a>
      </div>
    </header>
  );
}
