import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open to anyone aged 12 to 30 in the Kalubowila area.`,
  alternates: { canonical: '/join' },
};

const expectations = [
  {
    title: 'A fixed commitment',
    body: 'Most of our work is on a rota — a service night, a screening weekend, a kitchen shift. We ask what you can commit to and then hold you to that, not more.',
  },
  {
    title: 'You will log your hours',
    body: 'Every session is recorded as it happens. It takes thirty seconds and it is the reason the figures on this site mean anything.',
  },
  {
    title: 'You will lead a project',
    body: 'Every member runs a project before their term ends, including writing the report at the end. The report is part of the job, not an extra.',
  },
  {
    title: 'You will see the misses',
    body: 'Projects that fall short stay in the ledger, flagged. If you would rather that were quietly deleted, this is not the club.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="Membership"
        title="We need hours, not enthusiasm."
        standfirst="Open to anyone aged 12 to 30 living or studying near Kalubowila. No experience needed."
      />

      <div className="wrap band grid gap-14 md:grid-cols-12">
        <section className="md:col-span-5" aria-labelledby="expect">
          <h2
            id="expect"
            className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase"
          >
            What is expected
          </h2>
          <ol className="mt-6 border-t border-rule-strong">
            {expectations.map((item, index) => (
              <li key={item.title} className="border-b border-rule py-5">
                <div className="flex gap-5">
                  <span
                    aria-hidden
                    className="figure font-heading text-sm font-semibold text-ink-faint"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="md:col-span-6 md:col-start-7" aria-labelledby="enquiry">
          <h2
            id="enquiry"
            className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase"
          >
            Enquiry
          </h2>
          <p className="measure mt-4 mb-8 text-ink-muted">
            Fill this in and it opens a pre-written email to the club secretary. We answer
            everything, usually within a week.
          </p>
          <JoinForm email={club.contact.email ?? ''} />
          {club.contact.email ? (
            <p className="mt-6 text-sm text-ink-faint">
              Or write directly to{' '}
              <a
                href={`mailto:${club.contact.email}`}
                className="text-ink-muted underline underline-offset-2 hover:text-accent"
              >
                {club.contact.email}
              </a>
              .
            </p>
          ) : null}
        </section>
      </div>
    </>
  );
}
