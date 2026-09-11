import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { club } from '@/content/club';
import { district } from '@/content/district';
import { cn } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { FigurePanel } from '@/components/FigurePanel';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About',
  description: club.about.mission,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageMasthead
        kicker="About the club"
        title="Twenty-four years of Beyond Titles."
        standfirst={club.about.mission}
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {club.about.story.map((paragraph, index) => (
            <p key={index} className="measure mb-6 text-lg leading-relaxed text-ink-muted last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <Photo image={club.heroImage} ratio="landscape" sizes="(min-width: 768px) 33vw, 100vw" />
          <dl className="mt-10 border-t-2 border-ink">
            {[
              { term: 'Club number', value: club.clubNumber ?? '—' },
              { term: 'Chartered', value: club.charterDate?.slice(0, 4) ?? '—' },
              { term: 'Club type', value: club.clubType ?? '—' },
              { term: 'Region / Zone', value: [club.region, club.zone].filter(Boolean).join(' / ') || '—' },
              { term: 'District', value: club.district },
              { term: 'Multiple district', value: club.multipleDistrict },
              { term: 'Sponsor', value: club.sponsoringLionsClub ?? '—' },
            ].map((row) => (
              <div key={row.term} className="flex justify-between gap-4 border-b border-rule py-3">
                <dt className="font-heading text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
                  {row.term}
                </dt>
                <dd className="text-right text-sm">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <section className="border-y border-rule bg-panel band">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
              Mission
            </h2>
            <p className="mt-4 font-heading text-2xl leading-snug font-semibold text-ink">
              {club.about.mission}
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
              Vision
            </h2>
            <p className="mt-4 font-heading text-2xl leading-snug font-semibold text-ink">
              {club.about.vision}
            </p>
          </div>
        </div>
      </section>

      <div className="wrap band">
        <FigurePanel stats={club.stats} label="Club record since charter" />
      </div>

      {/* District ----------------------------------------------------------
          Map recoloured from the district's own site asset (gold → this
          club's teal) rather than reused as-is — same district, this club's
          palette. */}
      <section className="border-t border-rule bg-panel" aria-labelledby="district-heading">
        <div className="wrap band">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <Reveal className="md:col-span-5">
              <Image
                src={district.mapImage.src}
                alt={district.mapImage.alt}
                width={district.mapImage.width}
                height={district.mapImage.height}
                className="mx-auto h-auto w-full max-w-[260px]"
              />
              <div className="mt-4 flex items-center justify-center gap-2">
                <span aria-hidden className="h-3 w-3 rounded-sm bg-accent" />
                <span className="text-sm text-ink-muted">{district.name}</span>
              </div>
            </Reveal>

            <Reveal delay={100} className="md:col-span-6 md:col-start-7">
              <p className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
                Part of a wider network
              </p>
              <h2
                id="district-heading"
                className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl"
              >
                {district.name}
              </h2>
              <p className="measure mt-4 text-ink-muted leading-relaxed">{district.description}</p>
              <a
                href={district.url}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-[#0aa5a5] px-6 py-3 font-heading text-sm font-semibold text-page shadow-[0_0_14px_rgba(5,122,122,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(5,122,122,0.4)]"
              >
                Explore Leo District 306 D2
                <ArrowUpRight
                  aria-hidden
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>

          <Reveal delay={150} className="mt-14">
            <div className="glass-card p-7">
              <h3 className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
                Leo clubs in the district
              </h3>
              <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {district.clubs.map((name) => {
                  const isThisClub = name === club.shortName;
                  return (
                    <li
                      key={name}
                      className={cn(
                        'flex items-start gap-2 text-sm leading-snug',
                        isThisClub ? 'font-semibold text-accent-strong' : 'text-ink-muted',
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          'mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full',
                          isThisClub ? 'bg-accent' : 'bg-rule-strong',
                        )}
                      />
                      <span>
                        Leo Club of {name}
                        {isThisClub ? (
                          <span className="ml-1.5 text-[0.6rem] font-bold tracking-widest text-accent uppercase">
                            This club
                          </span>
                        ) : null}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
