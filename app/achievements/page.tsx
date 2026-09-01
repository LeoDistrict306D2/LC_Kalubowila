import type { Metadata } from 'next';
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
        kicker={awards.length > 0 ? `${awards.length} awards` : 'Awards'}
        title="Recognition."
        standfirst="Listed for completeness. They are an outcome of the reporting discipline, not a substitute for it."
      />

      <div className="wrap band">
        {awards.length === 0 ? (
          <p className="measure text-ink-muted">No awards recorded yet.</p>
        ) : (
          <div className="ledger-scroll">
            <table className="ledger">
              <caption className="sr-only">Awards by year, newest first.</caption>
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Award</th>
                  <th scope="col">Awarded by</th>
                  <th scope="col">Result</th>
                </tr>
              </thead>
              <tbody>
                {awards.map((award) => (
                  <tr key={award.id}>
                    <td className="font-heading font-semibold whitespace-nowrap">{award.year}</td>
                    <td>
                      <span className="font-heading font-semibold">{award.title}</span>
                      {award.description ? (
                        <span className="mt-0.5 block max-w-md text-sm leading-relaxed text-ink-muted">
                          {award.description}
                        </span>
                      ) : null}
                    </td>
                    <td className="text-sm text-ink-muted">{award.competition ?? '—'}</td>
                    <td className="text-sm whitespace-nowrap">
                      {award.level ? (levelLabel[award.level] ?? award.level) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
