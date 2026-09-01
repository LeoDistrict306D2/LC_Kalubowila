import type { Metadata } from 'next';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { LedgerTable } from '@/components/LedgerTable';

export const metadata: Metadata = {
  title: 'Project ledger',
  description: `Every project run by ${club.name}, with reported reach, cost and hours.`,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const entries = byDateDesc(projects);

  return (
    <>
      <PageMasthead
        kicker={`${entries.length} projects`}
        title="The ledger."
        standfirst="Every project, newest first, with what it reached, what it cost and how many hours went into it. Projects that fell short stay in the table."
      />

      <div className="wrap band">
        <LedgerTable projects={entries} />

        <p className="measure mt-8 text-xs leading-relaxed text-ink-faint">
          Reach is counted once per person per project, not per visit. Hours are logged at each
          session rather than estimated at year end. Costs are actual spend, inclusive of donated
          goods valued at replacement cost.
        </p>
      </div>
    </>
  );
}
