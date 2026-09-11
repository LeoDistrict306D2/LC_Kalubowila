import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Music2, Youtube } from 'lucide-react';
import { club } from '@/content/club';

const socialIcons = [
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
  { key: 'youtube', label: 'YouTube', Icon: Youtube },
  { key: 'tiktok', label: 'TikTok', Icon: Music2 },
  { key: 'whatsapp', label: 'WhatsApp channel', Icon: MessageCircle },
] as const;

/**
 * Footer, set as a report colophon: the affiliation chain as a printed
 * sentence, plus a credit line for the district-wide initiative this site was
 * built under.
 *
 * A server component: no state, and the year resolves at build time.
 */
const columns = [
  {
    heading: 'The club',
    links: [
      { href: '/about', label: 'About' },
      { href: '/board', label: 'Board' },
      { href: '/past-presidents', label: 'Past Presidents' },
      { href: '/achievements', label: 'Awards' },
    ],
  },
  {
    heading: 'The work',
    links: [
      { href: '/projects', label: 'Projects' },
      { href: '/gallery', label: 'Gallery' },
    ],
  },
  {
    heading: 'Take part',
    links: [
      { href: '/join', label: 'Join the club' },
      { href: '/contact', label: 'Contact' },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t-2 border-ink bg-panel">
      <div className="wrap py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-heading text-xl font-semibold text-ink">{club.name}</p>
            <p className="mt-2 text-sm text-ink-faint">{club.motto}</p>
            <p className="measure mt-5 text-sm leading-relaxed text-ink-muted">
              {club.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {socialIcons.map(({ key, label, Icon }) => {
                const href = club.socials[key];
                if (!href) return null;
                return (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon aria-hidden size={17} />
                    </a>
                  </li>
                );
              })}
              {club.contact.email ? (
                <li>
                  <a
                    href={`mailto:${club.contact.email}`}
                    aria-label="Email"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Mail aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-6 md:col-start-7">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
                  {column.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <p className="mt-14 border-t border-rule pt-6 text-xs leading-relaxed text-ink-faint">
          {club.name} is a member club of{' '}
          <a
            href={club.districtUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink-muted underline underline-offset-2 hover:text-accent"
          >
            {club.district}
          </a>
          , part of{' '}
          <a
            href={club.multipleDistrictUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink-muted underline underline-offset-2 hover:text-accent"
          >
            {club.multipleDistrict}
          </a>
          , within Lions Clubs International.
          {club.sponsoringLionsClub ? ` Sponsored by the ${club.sponsoringLionsClub}.` : ''}
        </p>

        <p className="mt-3 text-xs text-ink-faint">
          © {year} {club.name}. {club.contact.address}
        </p>

        <p className="mt-3 text-xs text-ink-faint">
          Built as part of Leo District 306 D2&rsquo;s{' '}
          <span className="text-ink-muted">Project Web Weavers</span> — one district, one web.
        </p>
      </div>
    </footer>
  );
}
