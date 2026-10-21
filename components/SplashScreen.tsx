import Image from 'next/image';
import { club } from '@/content/club';

/**
 * Entry splash, built from the `.glass-card` / `.gradient-text` / glow
 * vocabulary already in `globals.css` — same energy as the rest of the
 * site, this club's teal. Pure CSS fade/rise — no client JS — so it
 * degrades correctly with JavaScript off.
 */
export function SplashScreen() {
  return (
    <div
      aria-hidden="true"
      className="splash-screen fixed inset-0 z-80 flex items-center justify-center bg-inverse"
    >
      <div className="splash-glow absolute h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="glass-card animate-fade-up relative flex flex-col items-center px-10 py-10 text-center">
        <Image
          src={club.logo.src}
          alt=""
          width={72}
          height={72}
          priority
          className="rounded-full"
        />
        <h1 className="gradient-text mt-6 text-3xl font-bold">Leo Club of {club.shortName}</h1>
        <p className="mt-2 text-sm text-on-inverse/70">{club.tagline}</p>
        <div className="splash-bar mt-7 h-[3px] w-40 overflow-hidden rounded-full bg-on-inverse/10">
          <div className="splash-bar-fill h-full rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
