'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { club } from '@/content/club';
import { cn } from '@/lib/utils';

/**
 * Header, set as a report cover line: club name left, sections right, a heavy
 * rule closing it. It does not shrink or change on scroll — a document header
 * stays put.
 *
 * Accessibility is structural: a real `aria-expanded`/`aria-controls`
 * disclosure, Escape closes and returns focus to the toggle, body scroll locks
 * while open, and the current route carries `aria-current`.
 */
const nav = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Ledger' },
  { href: '/board', label: 'Board' },
  { href: '/past-presidents', label: 'Presidents' },
  { href: '/achievements', label: 'Awards' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Reset on navigation by adjusting state during render — React's documented
  // pattern — rather than in an effect, which costs an extra render pass.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-page/97 backdrop-blur-sm">
      <div className="wrap flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex flex-col gap-1" aria-label={`${club.name} — home`}>
          <span className="font-heading text-lg leading-none font-semibold tracking-tight text-ink">
            Leo Club of {club.shortName}
          </span>
          <span className="font-heading text-[0.65rem] font-semibold tracking-[0.16em] text-ink-faint uppercase">
            {club.district}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'font-heading text-sm font-medium transition-colors',
                      active ? 'text-accent underline underline-offset-8' : 'text-ink-muted hover:text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/join"
          className="hidden shrink-0 bg-accent px-5 py-2.5 font-heading text-sm font-semibold text-page transition-colors hover:bg-accent-strong lg:inline-block"
        >
          Join
        </Link>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>

      <div
        id="site-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-rule bg-page lg:hidden"
      >
        <nav aria-label="Primary" className="wrap py-2">
          <ul>
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href} className="border-b border-rule last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block py-4 font-heading text-base font-medium',
                      active ? 'text-accent' : 'text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/join"
            className="mt-4 mb-4 block bg-accent px-4 py-3 text-center font-heading text-sm font-semibold text-page"
          >
            Join the club
          </Link>
        </nav>
      </div>
    </header>
  );
}
