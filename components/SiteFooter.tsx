import Link from 'next/link';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { club } from '@/content/club';

/**
 * Footer, set as a report colophon: the affiliation chain as a printed
 * sentence, plus a note on how the figures elsewhere on the site were
 * compiled — because a report that does not say how it counted is not a report.
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
      { href: '/projects', label: 'Project ledger' },
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

            <ul className="mt-6 flex gap-3">
              {club.socials.facebook ? (
                <li>
                  <a
                    href={club.socials.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Facebook aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
              {club.socials.instagram ? (
                <li>
                  <a
                    href={club.socials.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Instagram aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
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

        {/* Basis of preparation — the note that makes the figures usable. */}
        <div className="mt-14 border-t border-rule pt-6">
          <h2 className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
            How these figures were compiled
          </h2>
          <p className="measure mt-3 text-xs leading-relaxed text-ink-faint">
            Reach is counted once per person per project, not per visit. Volunteer hours are
            logged at each session rather than estimated at year end. Costs are actual spend,
            inclusive of donated goods valued at replacement cost. Projects that fell short of
            plan remain in the ledger and are flagged rather than removed.
          </p>
        </div>

        <p className="mt-8 border-t border-rule pt-6 text-xs leading-relaxed text-ink-faint">
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
      </div>
    </footer>
  );
}
