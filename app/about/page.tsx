import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { FigurePanel } from '@/components/FigurePanel';

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
        title="A hospital town, reported honestly."
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
              { term: 'Chartered', value: club.charterDate?.slice(0, 4) ?? '—' },
              { term: 'District', value: club.district },
              { term: 'Multiple district', value: club.multipleDistrict },
              { term: 'Sponsor', value: club.sponsoringLionsClub ?? '—' },
              { term: 'Base', value: club.contact.address ?? '—' },
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
    </>
  );
}
