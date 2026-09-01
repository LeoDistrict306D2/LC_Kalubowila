import Link from 'next/link';
import type { Project, Statistic } from '@/lib/types';
import { formatDate } from '@/lib/utils';

/**
 * The project ledger — this site's signature, and the reason there are no
 * project cards anywhere.
 *
 * A real `<table>` with real `<th scope>` headers, because this genuinely is
 * tabular data: every project reports the same four figures, and the whole
 * point of the club's method is that those figures can be compared down a
 * column. A grid of cards would make that comparison impossible.
 *
 * Wrapped in `.ledger-scroll` so a wide table scrolls itself on a phone rather
 * than pushing the page sideways.
 */

/** Pulls a reported figure by id, tolerating projects that omit it. */
function figure(project: Project, id: string): Statistic | undefined {
  return project.impact?.find((stat) => stat.id === id);
}

function render(stat: Statistic | undefined): string {
  if (!stat) return '—';
  const value =
    typeof stat.value === 'number' ? stat.value.toLocaleString('en-LK') : stat.value;
  return `${stat.prefix ?? ''}${value}${stat.suffix ?? ''}`;
}

export function LedgerTable({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <div className="ledger-scroll">
      <table className="ledger">
        <caption className="sr-only">
          Projects with reported reach, cost and volunteer hours, newest first.
        </caption>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Project</th>
            <th scope="col" className="num">
              Reach
            </th>
            <th scope="col" className="num">
              Cost
            </th>
            <th scope="col" className="num">
              Hours
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => {
            const reach = figure(project, 'reach');
            const cost = figure(project, 'cost');
            const hours = figure(project, 'hours');

            return (
              <tr key={project.id}>
                <td className="text-sm whitespace-nowrap text-ink-faint">
                  {formatDate(project.date, { year: 'numeric', month: 'short' })}
                </td>
                <td>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-heading font-semibold text-ink underline-offset-4 hover:text-accent hover:underline"
                  >
                    {project.title}
                  </Link>
                  <span className="mt-0.5 block max-w-md text-sm leading-relaxed text-ink-muted">
                    {project.summary}
                  </span>
                </td>
                <td className="num font-heading font-semibold">{render(reach)}</td>
                <td className="num font-heading font-semibold">{render(cost)}</td>
                {/* A missing hours figure is shown as a flagged em-dash rather
                    than a blank, so an unreported project is visibly unreported. */}
                <td className={`num font-heading font-semibold ${hours ? '' : 'flagged'}`}>
                  {render(hours)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
