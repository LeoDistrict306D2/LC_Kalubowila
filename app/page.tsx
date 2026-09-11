import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { club } from '@/content/club';
import { district } from '@/content/district';
import { projects } from '@/content/projects';
import { board } from '@/content/board';
import { byDateDesc, sortExecutives, getInitials, cn } from '@/lib/utils';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';
import { FigurePanel } from '@/components/FigurePanel';
import { ProjectGrid } from '@/components/ProjectCard';

/**
 * Home.
 *
 * Leads with a full-bleed photograph and a stat-counter band — the pattern
 * Leo District 306 D2's own site uses — rather than the plain, figures-first
 * report layout this page opened with previously.
 */
export default function HomePage() {
  const recent = byDateDesc(projects).slice(0, 3);
  const leadership = sortExecutives(board).slice(0, 6);
  const charterYear = club.charterDate ? new Date(club.charterDate).getFullYear() : null;

  return (
    <>
      {/* Banner ------------------------------------------------------------
          The club's own designed banner already carries its name and crest
          in the artwork, so it's shown clean here — full width, no text
          stacked on top of it — with only a Ken Burns drift and a soft fade
          at the base into the band below. */}
      <section className="relative w-full overflow-hidden bg-inverse">
        <div className="relative aspect-video w-full">
          <Image
            src={club.heroImage.src}
            alt={club.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="animate-ken-burns object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-inverse/45 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-inverse to-transparent" />
        </div>
      </section>

      {/* Hero copy --------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-inverse">
        <div className="grid-pattern absolute inset-0 opacity-20 invert" />

        {/* Ambient glows */}
        <div
          aria-hidden
          className="absolute top-0 left-1/4 h-[28rem] w-[28rem] animate-float rounded-full bg-accent/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="absolute right-0 bottom-0 h-[22rem] w-[22rem] rounded-full bg-accent/15 blur-[110px]"
        />

        <div className="wrap relative py-14 text-on-inverse md:py-20">
          <p className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-on-inverse/15 bg-on-inverse/[0.06] px-4 py-2 font-heading text-[0.65rem] font-semibold tracking-[0.16em] text-on-inverse/80 uppercase backdrop-blur-md">
            {club.district}
            {charterYear ? ` · Chartered ${charterYear}` : ''}
          </p>

          <h1 className="animate-fade-up animation-delay-150 mt-6 max-w-3xl font-heading text-4xl leading-[1.06] font-semibold md:text-6xl">
            <span className="block">Beyond titles.</span>
            <span className="gradient-text block">Into the work.</span>
          </h1>

          <p className="animate-fade-up animation-delay-300 measure mt-5 text-lg leading-relaxed text-on-inverse/85">
            {club.description}
          </p>

          <div className="animate-fade-up animation-delay-450 mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-[#0aa5a5] px-6 py-3 font-heading text-sm font-semibold text-page shadow-[0_0_16px_rgba(5,122,122,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(5,122,122,0.5)]"
            >
              Our projects
              <ArrowRight
                aria-hidden
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center rounded-full border border-on-inverse/30 bg-on-inverse/[0.04] px-6 py-3 font-heading text-sm font-semibold text-on-inverse backdrop-blur-sm transition-all duration-300 hover:border-on-inverse/60 hover:bg-on-inverse/10"
            >
              Join the club
            </Link>
          </div>
        </div>
      </section>

      {/* Headline figures ----------------------------------------------- */}
      <section className="border-b border-rule bg-panel" aria-labelledby="figures">
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
              What &ldquo;Beyond Titles&rdquo; means
            </h2>
            <p className="measure mt-4 text-ink-muted">
              Four ideas drawn from the club&rsquo;s own motto and mission, not a slogan written
              for this website.
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

      {/* Recent projects -------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="recent-projects">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
              Recent projects
            </p>
            <h2
              id="recent-projects"
              className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl"
            >
              What we&rsquo;ve been doing
            </h2>
          </div>
          <Link href="/projects" className="text-sm text-accent hover:text-accent-strong">
            All {projects.length} projects →
          </Link>
        </div>

        <div className="mt-10">
          <ProjectGrid projects={recent} />
        </div>
      </section>

      {/* Board ---------------------------------------------------------- */}
      <section className="border-t border-y border-rule bg-panel" aria-labelledby="board-heading">
        <div className="wrap band">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
                Leadership
              </p>
              <h2
                id="board-heading"
                className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl"
              >
                The people, not just the titles
              </h2>
              <p className="measure mt-3 text-ink-muted">
                Sixteen officers elected for the {leadership[0]?.term ?? 'current'} term,
                installed at ORCENZA&rsquo;26 on 22 August 2026.
              </p>
            </div>
            <Link href="/board" className="text-sm text-accent hover:text-accent-strong">
              The full board →
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {leadership.map((member, index) => (
              <li key={member.id} className="text-center">
                <Reveal delay={index * 40}>
                  {member.photo ? (
                    <Photo
                      image={member.photo}
                      ratio="square"
                      roundedFull
                      className="mx-auto w-28 md:w-32"
                      sizes="128px"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="mx-auto flex aspect-square w-28 items-center justify-center rounded-full bg-accent/10 font-heading text-2xl font-semibold text-accent md:w-32"
                    >
                      {getInitials(member.name)}
                    </div>
                  )}
                  <p className="mt-3 font-heading text-sm leading-tight font-semibold text-ink">
                    {member.name}
                  </p>
                  <p className="mt-1 font-heading text-[0.65rem] font-semibold tracking-[0.12em] text-ink-faint uppercase">
                    {member.position}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* District ---------------------------------------------------------
          Kept compact here — the full club list and CTA live on /about, this
          is just enough to place the club within the wider district. */}
      <section className="wrap band" aria-labelledby="district-heading">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <div className="flex items-start gap-5">
              <Image
                src={district.mapImage.src}
                alt={district.mapImage.alt}
                width={district.mapImage.width}
                height={district.mapImage.height}
                className="h-auto w-20 shrink-0 md:w-24"
              />
              <div>
                <p className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
                  Part of a wider network
                </p>
                <h2
                  id="district-heading"
                  className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl"
                >
                  {district.name}
                </h2>
              </div>
            </div>
            <p className="measure mt-4 text-ink-muted leading-relaxed">{district.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={district.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-[#0aa5a5] px-6 py-3 font-heading text-sm font-semibold text-page shadow-[0_0_14px_rgba(5,122,122,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(5,122,122,0.4)]"
              >
                Explore the district
                <ArrowUpRight
                  aria-hidden
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <Link href="/about#district-heading" className="text-sm text-accent hover:text-accent-strong">
                All {district.clubs.length} clubs in the district →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="md:col-span-6 md:col-start-7">
            <div className="glass-card flex flex-wrap gap-2 p-6">
              {district.clubs.map((name) => {
                const isThisClub = name === club.shortName;
                return (
                  <span
                    key={name}
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium',
                      isThisClub
                        ? 'border-accent/30 bg-accent/10 font-semibold text-accent-strong'
                        : 'border-rule text-ink-muted',
                    )}
                  >
                    {isThisClub ? (
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                    ) : null}
                    {name}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="bg-inverse text-on-inverse">
        <div className="wrap band flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              Open to passionate youth aged 18 to 30.
            </h2>
            <p className="measure mt-3 text-on-inverse/75">
              If you&rsquo;re eager to grow through volunteering, teamwork and personal
              development, this is the place to belong.
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
