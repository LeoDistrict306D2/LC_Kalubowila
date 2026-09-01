import type { Club } from '@/lib/types';

/**
 * Leo Club of Kalubowila — club record.
 *
 * The voice here is deliberately plain and numeric: this club reports rather
 * than promotes. Copy should avoid adjectives where a figure is available.
 *
 * TODO(content): charter date, roster, contact details and photography are
 * placeholders pending real values from the club.
 */
export const club: Club = {
  name: 'Leo Club of Kalubowila',
  shortName: 'Kalubowila',
  tagline: 'Everything here is counted.',
  motto: 'Leadership · Experience · Opportunity',
  description:
    'A Leo club serving the Kalubowila and Dehiwala hospital catchment. We publish what each project cost, how many people it reached, and what happened when we went back — because a service report without figures is just a claim.',
  charterDate: '2014-05-30',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  sponsoringLionsClub: 'Lions Club of Kalubowila',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.png',
    alt: 'Leo Club of Kalubowila emblem',
    width: 512,
    height: 512,
  },
  heroImage: {
    src: '/images/hero/hero.png',
    alt: 'Leo Club of Kalubowila volunteers at a hospital ward support session',
    width: 1800,
    height: 900,
  },

  contact: {
    email: 'leoclubofkalubowila@gmail.com',
    address: 'Kalubowila, Dehiwala, Sri Lanka',
  },

  socials: {
    facebook: 'https://www.facebook.com/leoclubofkalubowila',
    instagram: 'https://www.instagram.com/leokalubowila',
    email: 'leoclubofkalubowila@gmail.com',
  },

  siteUrl: 'https://kalubowila.leo306d2.org',

  stats: [
    { id: 'years', value: 11, label: 'Years of service' },
    { id: 'members', value: 46, label: 'Active members' },
    { id: 'projects', value: 83, label: 'Projects reported' },
    {
      id: 'reached',
      value: 12400,
      label: 'People reached',
      note: 'Counted once per person per project, not per visit.',
    },
    {
      id: 'spend',
      value: 4820000,
      prefix: 'Rs ',
      label: 'Total spend',
      note: 'Cumulative since charter. Annual accounts are tabled at the AGM.',
    },
    {
      id: 'hours',
      value: 9700,
      label: 'Volunteer hours',
      note: 'Logged per session, not estimated at year end.',
    },
  ],

  about: {
    story: [
      'Kalubowila is a hospital town. The Colombo South Teaching Hospital sits at its centre, and a good part of what the club does happens within a kilometre of its gates — ward support, blood drives, meals for the families of long-stay patients who have travelled from outside the district.',
      'The club was chartered in 2014. For the first four years it kept no figures worth the name, which meant nobody could tell whether the same things were working or whether we were simply doing them again.',
      'That changed in 2018. Every project now reports four things before it closes: what it cost, how many people it reached, how many hours went into it, and what happened at the follow-up. Those four numbers are on this website for every project since.',
      'It is a less flattering way to present a club. It is also the only honest one.',
    ],
    mission:
      'To provide sustained support to patients, families and schools in the Kalubowila catchment, and to report every project in figures that can be checked.',
    vision:
      'A club whose annual report would survive an audit, and whose projects would survive a second look.',
    values: [
      {
        title: 'Report the cost',
        description:
          'Every project publishes what it spent. A project nobody can cost is a project nobody can repeat.',
      },
      {
        title: 'Count people once',
        description:
          'Reach is counted per person per project, not per visit. Inflating a number is the easiest way to lose the right to quote it.',
      },
      {
        title: 'Log hours as they happen',
        description:
          'Volunteer hours are recorded at each session. Year-end estimates are guesses wearing a suit.',
      },
      {
        title: 'Publish the misses',
        description:
          'Projects that fell short stay in the table, flagged. Removing them would make the rest meaningless.',
      },
    ],
  },
};
