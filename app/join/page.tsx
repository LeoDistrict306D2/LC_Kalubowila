import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open to passionate youth and young adults aged 18 to 30.`,
  alternates: { canonical: '/join' },
};

const MEMBERSHIP_FORM_URL = 'https://forms.gle/fWkLYHQM4p6fkqS96';

const steps = [
  {
    title: 'Reach out',
    body: 'Contact the Club President, Leo Lion Savindi Dias, for guidance on getting started.',
  },
  {
    title: 'Complete the membership form',
    body: 'A short application form — the same one linked below.',
  },
  {
    title: 'Join the orientation',
    body: 'Once submitted, you’ll be welcomed into orientation and introduced to upcoming projects.',
  },
];

const benefits = [
  'Opportunities to develop leadership skills',
  'Community service projects that make a real impact',
  'A strong network of peers and leaders',
  'Recognition and experience that supports personal and professional growth',
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="Membership"
        title="Open to passionate youth aged 18 to 30."
        standfirst="If you're eager to grow through volunteering, teamwork and personal development, this is the place to belong."
      />

      <div className="wrap band grid gap-14 md:grid-cols-12">
        <section className="md:col-span-5" aria-labelledby="how">
          <h2
            id="how"
            className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase"
          >
            How to join
          </h2>
          <ol className="mt-6 border-t border-rule-strong">
            {steps.map((step, index) => (
              <li key={step.title} className="border-b border-rule py-5">
                <div className="flex gap-5">
                  <span
                    aria-hidden
                    className="figure font-heading text-sm font-semibold text-ink-faint"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{step.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={MEMBERSHIP_FORM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="group mt-7 inline-flex items-center gap-2 bg-accent px-6 py-3 font-heading text-sm font-semibold text-page transition-colors hover:bg-accent-strong"
          >
            Open the membership form
            <ArrowUpRight
              aria-hidden
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
            />
          </a>

          <h2 className="mt-12 font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
            What membership gives you
          </h2>
          <ul className="mt-5 space-y-2.5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                <span aria-hidden className="text-accent">
                  —
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <section className="md:col-span-6 md:col-start-7" aria-labelledby="enquiry">
          <h2
            id="enquiry"
            className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase"
          >
            Have a question first?
          </h2>
          <p className="measure mt-4 mb-8 text-ink-muted">
            Fill this in and it opens a pre-written email to the club secretary. We answer
            everything, usually within a week.
          </p>
          <JoinForm email={club.contact.email ?? ''} />
          <p className="mt-6 text-sm text-ink-faint">
            Or reach out directly — phone / WhatsApp{' '}
            {club.contact.phone ? (
              <a
                href={`tel:${club.contact.phone}`}
                className="text-ink-muted underline underline-offset-2 hover:text-accent"
              >
                {club.contact.phone}
              </a>
            ) : null}
            {club.contact.email ? (
              <>
                {' '}
                or email{' '}
                <a
                  href={`mailto:${club.contact.email}`}
                  className="text-ink-muted underline underline-offset-2 hover:text-accent"
                >
                  {club.contact.email}
                </a>
              </>
            ) : null}
            .
          </p>
        </section>
      </div>
    </>
  );
}
