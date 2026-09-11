import type { Metadata } from 'next';
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Music2, Phone, Youtube } from 'lucide-react';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';

export const metadata: Metadata = {
  title: 'Contact',
  description: `How to reach ${club.name}.`,
  alternates: { canonical: '/contact' },
};

const socialLinks = [
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
  { key: 'youtube', label: 'YouTube', Icon: Youtube },
  { key: 'tiktok', label: 'TikTok', Icon: Music2 },
  { key: 'whatsapp', label: 'WhatsApp channel', Icon: MessageCircle },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageMasthead
        kicker="Contact"
        title="Get in touch."
        standfirst="Partnerships, sponsorship, or a project the club could help with."
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <section className="md:col-span-7" aria-labelledby="details">
          <h2
            id="details"
            className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase"
          >
            Details
          </h2>
          <dl className="mt-6 border-t-2 border-ink">
            {club.contact.email ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <Mail aria-hidden size={18} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="font-heading text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
                    Email
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${club.contact.email}`}
                      className="font-heading text-xl font-semibold break-all underline underline-offset-4 hover:text-accent"
                    >
                      {club.contact.email}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            {club.contact.phone ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <Phone aria-hidden size={18} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="font-heading text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
                    Phone
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${club.contact.phone}`}
                      className="font-heading text-xl font-semibold hover:text-accent"
                    >
                      {club.contact.phone}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            {club.contact.address ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <MapPin aria-hidden size={18} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="font-heading text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
                    Based in
                  </dt>
                  <dd className="mt-1.5 font-heading text-xl font-semibold">
                    {club.contact.address}
                  </dd>
                </div>
              </div>
            ) : null}
          </dl>

          {club.donations ? (
            <section className="mt-10" aria-labelledby="donate">
              <h2
                id="donate"
                className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase"
              >
                Support us
              </h2>
              <p className="measure mt-3 text-sm leading-relaxed text-ink-muted">
                The club accepts public donations. Bank transfer details:
              </p>
              <dl className="mt-4 max-w-sm border-t border-rule-strong">
                <div className="flex justify-between gap-4 border-b border-rule py-2.5">
                  <dt className="text-xs tracking-[0.12em] text-ink-faint uppercase">Bank</dt>
                  <dd className="text-right text-sm font-semibold">{club.donations.bank}</dd>
                </div>
                {club.donations.branch ? (
                  <div className="flex justify-between gap-4 border-b border-rule py-2.5">
                    <dt className="text-xs tracking-[0.12em] text-ink-faint uppercase">Branch</dt>
                    <dd className="text-right text-sm font-semibold">{club.donations.branch}</dd>
                  </div>
                ) : null}
                <div className="flex justify-between gap-4 border-b border-rule py-2.5">
                  <dt className="text-xs tracking-[0.12em] text-ink-faint uppercase">Account</dt>
                  <dd className="text-right font-mono text-sm font-semibold">
                    {club.donations.accountNumber}
                  </dd>
                </div>
              </dl>
            </section>
          ) : null}
        </section>

        <section className="md:col-span-4 md:col-start-9" aria-labelledby="social">
          <h2
            id="social"
            className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase"
          >
            Elsewhere
          </h2>
          <ul className="mt-6 border-t border-rule-strong">
            {socialLinks.map(({ key, label, Icon }) => {
              const href = club.socials[key];
              if (!href) return null;
              return (
                <li key={key} className="border-b border-rule">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 py-4 text-ink-muted transition-colors hover:text-accent"
                  >
                    <Icon aria-hidden size={17} />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-ink-faint">
            Looking to join rather than get in touch? The membership page has the real
            application form.
          </p>
        </section>
      </div>
    </>
  );
}
