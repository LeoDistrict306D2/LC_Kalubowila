import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
        Error 404
      </p>
      <h1 className="mt-4 font-heading text-4xl font-semibold text-ink md:text-report">
        No entry at that address.
      </h1>
      <p className="measure mt-5 text-lg text-ink-muted">
        The page you asked for is not in the ledger. It may have been renamed, or never existed.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="bg-accent px-6 py-3 font-heading text-sm font-semibold text-page hover:bg-accent-strong">
          Home
        </Link>
        <Link
          href="/projects"
          className="border border-rule-strong px-6 py-3 font-heading text-sm font-semibold text-ink-muted hover:border-ink hover:text-ink"
        >
          Project ledger
        </Link>
      </div>
    </div>
  );
}
