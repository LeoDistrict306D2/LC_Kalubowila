import { IBM_Plex_Sans, Inter_Tight } from 'next/font/google';

/**
 * Inter Tight for headings, IBM Plex Sans for text.
 *
 * Inter Tight sets dense, tightly-tracked headings without the airiness that
 * would undercut a report. IBM Plex Sans was drawn for technical documentation
 * and has genuinely good tabular figures, which matters on a site whose central
 * component is a table of numbers.
 *
 * Loaded via next/font, which self-hosts the files and removes the
 * render-blocking request to fonts.googleapis.com.
 */
const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const fontVariables = `${interTight.variable} ${plex.variable}`;
