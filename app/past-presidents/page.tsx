import type { Metadata } from 'next';
import { club } from '@/content/club';
import { pastPresidents } from '@/content/past-presidents';
import { PageMasthead } from '@/components/PageMasthead';

export const metadata: Metadata = {
  title: 'Past Presidents',
  description: `Every president of ${club.name} since charter.`,
  alternates: { canonical: '/past-presidents' },
};

export default function PastPresidentsPage() {
  const years = [...pastPresidents].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={`${years.length} terms`}
        title="Succession."
        standfirst="Every president since charter, with the theme they served under."
      />

      <div className="wrap band">
        <div className="ledger-scroll">
          <table className="ledger">
            <caption className="sr-only">Past presidents by year, newest first.</caption>
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">President</th>
                <th scope="col">Theme</th>
                <th scope="col">Noted</th>
              </tr>
            </thead>
            <tbody>
              {years.map((president) => (
                <tr key={president.year}>
                  <td className="font-heading font-semibold whitespace-nowrap">{president.year}</td>
                  <td className="font-heading font-semibold">{president.name}</td>
                  <td className="text-sm text-ink-muted">{president.theme ?? '—'}</td>
                  <td className="text-sm text-ink-muted">
                    {president.highlights && president.highlights.length > 0
                      ? president.highlights.join('; ')
                      : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
