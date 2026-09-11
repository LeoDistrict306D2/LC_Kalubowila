'use client';

import type { ComponentType } from 'react';
import { Award, Calendar, ShieldCheck, Sparkle, Users } from 'lucide-react';
import type { Statistic } from '@/lib/types';
import { useCountUp } from '@/lib/hooks';
import { formatStatValue } from '@/lib/utils';
import { Reveal } from '@/components/Reveal';

/**
 * Headline figures as icon-fronted stat cards — District 306 D2's own site
 * leads with a counter grid like this, and it reads far livelier than a bare
 * numbered list. Each card still keeps its footnote where the club supplied
 * one, so the credibility of the old report-style panel isn't lost.
 */
const icons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  years: Calendar,
  members: Users,
  board: ShieldCheck,
  awards: Award,
};

const formatNumber = (value: number) => value.toLocaleString('en-LK');

function Card({ stat }: { stat: Statistic }) {
  const numeric = typeof stat.value === 'number';
  const ref = useCountUp(typeof stat.value === 'number' ? stat.value : 0, formatNumber, {
    enabled: numeric,
  });
  const Icon = icons[stat.id] ?? Sparkle;

  return (
    <div className="glass-card group relative overflow-hidden p-6">
      <div
        aria-hidden
        className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
      />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
        <Icon aria-hidden size={20} />
      </div>
      <dd className="figure relative mt-5 font-heading text-3xl font-semibold text-ink md:text-4xl">
        {stat.prefix}
        {/* Final value is in the markup, so the served HTML is already correct;
            the hook only overwrites it while animating. */}
        <span ref={ref}>{formatStatValue(stat.value)}</span>
        {stat.suffix}
      </dd>
      <dt className="relative mt-2 font-heading text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
        {stat.label}
      </dt>
      {stat.note ? (
        <p className="relative mt-2 text-xs leading-relaxed text-ink-faint">{stat.note}</p>
      ) : null}
    </div>
  );
}

export function FigurePanel({ stats, label }: { stats: Statistic[]; label: string }) {
  if (stats.length === 0) return null;

  return (
    <section aria-label={label}>
      <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.id} delay={index * 80} className="h-full">
            <Card stat={stat} />
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
