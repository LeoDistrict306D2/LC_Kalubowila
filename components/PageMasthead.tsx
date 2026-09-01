import Link from 'next/link';

/**
 * Page heading, set as a report section head: a small tracked label, the title,
 * and a heavy rule closing the block. No coloured banner — the page is a
 * document, and the document is one continuous piece of paper.
 */
export function PageMasthead({
  kicker,
  title,
  standfirst,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
  breadcrumb?: { href: '/projects'; label: string };
}) {
  return (
    <div className="wrap border-b-2 border-ink pt-12 pb-8 md:pt-18 md:pb-10">
      {breadcrumb ? (
        <nav aria-label="Breadcrumb" className="mb-5">
          <Link href={breadcrumb.href} className="text-sm text-accent hover:text-accent-strong">
            ← {breadcrumb.label}
          </Link>
        </nav>
      ) : null}

      <p className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
        {kicker}
      </p>

      <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-[1.06] font-semibold text-ink md:text-report">
        {title}
      </h1>

      {standfirst ? (
        <p className="measure mt-5 text-lg leading-relaxed text-ink-muted">{standfirst}</p>
      ) : null}
    </div>
  );
}
