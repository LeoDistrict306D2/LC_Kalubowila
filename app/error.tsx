'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="font-heading text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
        Error
      </p>
      <h1 className="mt-4 font-heading text-4xl font-semibold text-ink md:text-report">
        Something went wrong.
      </h1>
      <p className="measure mt-5 text-lg text-ink-muted">
        This page failed to render. Trying again usually clears it.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 self-start bg-accent px-6 py-3 font-heading text-sm font-semibold text-page hover:bg-accent-strong"
      >
        Try again
      </button>
    </div>
  );
}
