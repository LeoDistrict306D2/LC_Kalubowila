import type { Metadata } from 'next';
import { Award } from 'lucide-react';
import { club } from '@/content/club';
import { achievements } from '@/content/achievements';
import { PageMasthead } from '@/components/PageMasthead';

export const metadata: Metadata = {
  title: 'Awards',
  description: `Recognition earned by ${club.name}.`,
  alternates: { canonical: '/achievements' },
};

const levelLabel: Record<string, string> = {
  winner: 'Winner',
  'runner-up': 'Runner-up',
  merit: 'Merit',
  recognition: 'Recognition',
};

export default function AchievementsPage() {
  const awards = [...achievements].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={awards.length > 0 ? `${awards.length} district award` : 'Awards'}
        title="Recognition."
        standfirst="Earned, not chased — an outcome of the work, not the reason for it."
      />

      <div className="wrap band">
        {awards.length === 0 ? (
          <p className="measure text-ink-muted">No awards recorded yet.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2">
            {awards.map((award) => (
              <li
                key={award.id}
                className="rounded-2xl border border-rule bg-page p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Award aria-hidden size={22} />
                </div>
                <p className="mt-5 font-heading text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
                  {award.year}
                  {award.level ? ` · ${levelLabel[award.level] ?? award.level}` : ''}
                </p>
                <h2 className="mt-1.5 font-heading text-xl font-semibold text-ink">{award.title}</h2>
                {award.competition ? (
                  <p className="mt-1 text-sm text-ink-muted">{award.competition}</p>
                ) : null}
                {award.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{award.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
