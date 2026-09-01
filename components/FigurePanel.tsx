'use client';

import type { Statistic } from '@/lib/types';
import { useCountUp } from '@/lib/hooks';
import { formatStatValue } from '@/lib/utils';

/**
 * The headline figures, set as a report summary rather than a stat band: each
 * figure sits in its own cell with a footnote explaining exactly how it was
 * counted. The footnotes are the point — an uncaveated number is a claim.
 *
 * Module scope so the reference is stable and the count-up effect is not torn
 * down on every parent render.
 */
const formatNumber = (value: number) => value.toLocaleString('en-LK');

function Cell({ stat }: { stat: Statistic }) {
  const numeric = typeof stat.value === 'number';
  const ref = useCountUp(typeof stat.value === 'number' ? stat.value : 0, formatNumber, {
    enabled: numeric,
  });

  return (
    <div className="border-t border-rule pt-4">
      <dd className="figure font-heading text-3xl font-semibold text-ink md:text-4xl">
        {stat.prefix}
        {/* Final value is in the markup, so the served HTML is already correct;
            the hook only overwrites it while animating. */}
        <span ref={ref}>{formatStatValue(stat.value)}</span>
        {stat.suffix}
      </dd>
      <dt className="mt-2 font-heading text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
        {stat.label}
      </dt>
      {stat.note ? (
        <p className="mt-2 text-xs leading-relaxed text-ink-faint">{stat.note}</p>
      ) : null}
    </div>
  );
}

export function FigurePanel({ stats, label }: { stats: Statistic[]; label: string }) {
  if (stats.length === 0) return null;

  return (
    <section aria-label={label}>
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Cell key={stat.id} stat={stat} />
        ))}
      </dl>
    </section>
  );
}
