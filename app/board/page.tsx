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
  const president = members[0];
  const officers = members.slice(1, 4);
  const rest = members.slice(4);
  const term = members[0]?.term ?? '';

  return (
    <>
      <PageMasthead
        kicker={term ? `Board ${term}` : 'Board'}
        title="The people, not just the titles."
        standfirst="Sixteen officers elected for the 2026/27 term, installed at ORCENZA’26 on 22 August 2026."
      />

      <div className="wrap band">
        {president ? (
          <Reveal className="mb-12">
            <div className="glass-card relative grid items-center gap-8 overflow-hidden p-8 sm:grid-cols-[auto_1fr] sm:p-10">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
              />
              {president.photo ? (
                <Photo
                  image={president.photo}
                  ratio="square"
                  roundedFull
                  className="relative mx-auto w-32 shrink-0 sm:mx-0 sm:w-40"
                  sizes="160px"
                />
              ) : (
                <div
                  aria-hidden
                  className="relative mx-auto flex aspect-square w-32 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-strong font-heading text-4xl font-semibold text-page sm:mx-0 sm:w-40"
                >
                  {getInitials(president.name)}
                </div>
              )}
              <div className="relative text-center sm:text-left">
                <span className="inline-block rounded-full bg-gradient-to-r from-accent to-[#0aa5a5] px-3 py-1 font-heading text-[0.65rem] font-bold tracking-widest text-page uppercase shadow-[0_0_12px_rgba(5,122,122,0.3)]">
                  President
                </span>
                <h2 className="mt-3 font-heading text-2xl font-semibold text-ink md:text-3xl">
                  {president.name}
                </h2>
                <p className="measure mt-2 text-sm leading-relaxed text-ink-muted">
                  Leading the {term} executive board, installed at ORCENZA&rsquo;26.
                </p>
              </div>
            </div>
          </Reveal>
        ) : null}

        <h2 className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
          Vice presidents
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {officers.map((member, index) => (
            <li key={member.id} className="text-center">
              <Reveal delay={index * 50}>
                {member.photo ? (
                  <Photo
                    image={member.photo}
                    ratio="square"
                    roundedFull
                    className="mx-auto w-36 md:w-44"
                    sizes="(min-width: 768px) 176px, 144px"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="mx-auto flex aspect-square w-36 items-center justify-center rounded-full bg-accent/10 font-heading text-3xl font-semibold text-accent md:w-44"
                  >
                    {getInitials(member.name)}
                  </div>
                )}
                <p className="mt-4 font-heading text-base leading-tight font-semibold">
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
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((member) => (
                <li
                  key={member.id}
                  className="flex items-center justify-between gap-4 rounded-xl border border-rule bg-panel/60 px-4 py-3"
                >
                  <span className="font-heading text-sm font-semibold text-ink">{member.name}</span>
                  <span className="shrink-0 font-heading text-[0.65rem] font-semibold tracking-widest text-ink-faint uppercase">
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
