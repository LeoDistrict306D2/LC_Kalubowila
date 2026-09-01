import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { board } from '@/content/board';
import { byDateDesc, sortExecutives } from '@/lib/utils';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';
import { FigurePanel } from '@/components/FigurePanel';
import { LedgerTable } from '@/components/LedgerTable';

/**
 * Home.
 *
 * Reads as the front of an annual report: statement, headline figures with
 * their footnotes, method, then the ledger itself. The figures come before the
 * photograph on purpose — this club leads with what it counted, not with how
 * the day looked.
 */
export default function HomePage() {
  const recent = byDateDesc(projects).slice(0, 5);
  const leadership = sortExecutives(board).slice(0, 6);
  const charterYear = club.charterDate ? new Date(club.charterDate).getFullYear() : null;

  return (
    <>
      {/* Statement ------------------------------------------------------ */}
      <section className="wrap pt-14 pb-10 md:pt-20 md:pb-14">
        <p className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
          {club.district}
          {charterYear ? ` · Chartered ${charterYear}` : ''}
        </p>

        <h1 className="mt-6 max-w-4xl font-heading text-5xl leading-[1.04] font-semibold text-ink md:text-6xl">
          {club.tagline}
        </h1>

        <div className="mt-10 grid gap-8 border-t-2 border-ink pt-8 md:grid-cols-12">
          <p className="text-lg leading-relaxed text-ink-muted md:col-span-7">
            {club.description}
          </p>
          <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-accent px-6 py-3 font-heading text-sm font-semibold text-page transition-colors hover:bg-accent-strong"
            >
              The ledger
              <ArrowRight
                aria-hidden
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center border border-rule-strong px-6 py-3 font-heading text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              Join the club
            </Link>
          </div>
        </div>
      </section>

      {/* Headline figures ----------------------------------------------- */}
      <section className="border-y border-rule bg-panel" aria-labelledby="figures">
        <div className="wrap band">
          <h2
            id="figures"
            className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase"
          >
            Since charter
          </h2>
          <div className="mt-8">
            <FigurePanel stats={club.stats} label="Club record since charter" />
          </div>
        </div>
      </section>

      {/* Method --------------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="method">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="method" className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              How we report
            </h2>
            <p className="measure mt-4 text-ink-muted">
              Four rules, applied to every project since 2018. They are the reason the figures
              above are worth reading.
            </p>
          </div>

          <ol className="md:col-span-7 md:col-start-6">
            {club.about.values.map((value, index) => (
              <li key={value.title} className="border-b border-rule py-5 first:border-t">
                <Reveal delay={index * 50}>
                  <div className="flex gap-5">
                    <span
                      aria-hidden
                      className="figure font-heading text-sm font-semibold text-ink-faint"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-ink">{value.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap">
        <Photo image={club.heroImage} ratio="wide" priority sizes="100vw" />
      </section>

      {/* Ledger --------------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="ledger">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
              Recent projects
            </p>
            <h2 id="ledger" className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl">
              The ledger
            </h2>
          </div>
          <Link href="/projects" className="text-sm text-accent hover:text-accent-strong">
            All {projects.length} projects →
          </Link>
        </div>

        <div className="mt-8">
          <LedgerTable projects={recent} />
        </div>
      </section>

      {/* Board ---------------------------------------------------------- */}
      <section className="border-t border-rule bg-panel" aria-labelledby="board-heading">
        <div className="wrap band grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2
              id="board-heading"
              className="font-heading text-3xl font-semibold text-ink md:text-4xl"
            >
              Who signs it off
            </h2>
            <p className="measure mt-4 text-ink-muted">
              The board for {leadership[0]?.term ?? 'this year'}. The Director of Reporting is
              responsible for the figures on this site.
            </p>
            <Link
              href="/board"
              className="mt-6 inline-block text-sm text-accent hover:text-accent-strong"
            >
              The full board →
            </Link>
          </div>

          <ul className="md:col-span-7 md:col-start-6">
            {leadership.map((member, index) => (
              <li
                key={member.id}
                className="flex flex-col gap-0.5 border-b border-rule py-4 first:border-t sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <Reveal delay={index * 40} className="contents">
                  <span className="font-heading text-lg font-semibold text-ink">{member.name}</span>
                  <span className="shrink-0 font-heading text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
                    {member.position}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="bg-inverse text-on-inverse">
        <div className="wrap band flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              We need hours more than we need enthusiasm.
            </h2>
            <p className="measure mt-3 text-on-inverse/75">
              Open to anyone aged 12 to 30 in the Kalubowila area. Tell us honestly how many hours
              a month you can give — a small reliable number is worth more than a large hopeful one.
            </p>
          </div>
          <Link
            href="/join"
            className="group inline-flex shrink-0 items-center gap-2 bg-page px-6 py-3 font-heading text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-page"
          >
            Join the club
            <ArrowRight
              aria-hidden
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
