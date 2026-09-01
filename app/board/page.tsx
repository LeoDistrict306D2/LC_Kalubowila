import type { Metadata } from 'next';
import { club } from '@/content/club';
import { board } from '@/content/board';
import { getInitials, sortExecutives } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Board',
  description: `The executive board of ${club.name}.`,
  alternates: { canonical: '/board' },
};

export default function BoardPage() {
  const members = sortExecutives(board);
  const officers = members.slice(0, 4);
  const rest = members.slice(4);
  const term = members[0]?.term ?? '';

  return (
    <>
      <PageMasthead
        kicker={term ? `Board ${term}` : 'Board'}
        title="Who signs it off."
        standfirst="The elected board and directors. The Director of Reporting is responsible for the figures published on this site."
      />

      <div className="wrap band">
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {officers.map((member, index) => (
            <li key={member.id}>
              <Reveal delay={index * 50}>
                {member.photo ? (
                  <Photo image={member.photo} ratio="portrait" sizes="(min-width: 1024px) 24vw, 45vw" />
                ) : (
                  <div
                    aria-hidden
                    className="flex aspect-[3/4] items-center justify-center bg-panel font-heading text-4xl font-semibold text-ink-faint"
                  >
                    {getInitials(member.name)}
                  </div>
                )}
                <p className="mt-3 font-heading text-base leading-tight font-semibold">
                  {member.name}
                </p>
                <p className="mt-1 font-heading text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
                  {member.position}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>

        {rest.length > 0 ? (
          <section className="mt-16" aria-labelledby="directors">
            <h2
              id="directors"
              className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase"
            >
              Directors and officers
            </h2>
            <ul className="mt-6 border-t-2 border-ink">
              {rest.map((member) => (
                <li
                  key={member.id}
                  className="flex flex-col gap-0.5 border-b border-rule py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-heading text-lg font-semibold">{member.name}</span>
                  <span className="shrink-0 font-heading text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
                    {member.position}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}
