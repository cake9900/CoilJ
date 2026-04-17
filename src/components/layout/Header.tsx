'use client';

import { useState } from 'react';
import { personalInfo } from '@/data/portfolio';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'Обо мне' },
    { href: '#projects', label: 'Проекты' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="container-custom">
        <div className="rounded-full border border-white/70 bg-[#fffaf1]/80 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <a href="#" className="flex min-w-0 items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-950/10 bg-slate-950 text-sm font-bold uppercase tracking-[0.2em] text-[#f5efe4]">
                ZH
              </span>
              <span className="truncate text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
                {personalInfo.name}
              </span>
            </a>

            <nav className="hidden items-center gap-2 rounded-full border border-slate-950/10 bg-white/70 px-2 py-2 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 hover:bg-slate-950 hover:text-[#f5efe4]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a href="#contact" className="btn-primary hidden md:inline-flex">
              Обсудить проект
            </a>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-950/10 bg-white/80 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Меню"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <nav className="mt-3 space-y-2 border-t border-slate-950/10 pt-3 md:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-950 hover:text-[#f5efe4]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary flex w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Обсудить проект
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
