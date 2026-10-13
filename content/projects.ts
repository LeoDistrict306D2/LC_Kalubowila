import type { Project } from '@/lib/types';

/**
 * Projects, 2026/27 Leoistic year — as submitted by the club, with photos
 * from the same submission. The Leo/Lions year runs July to June, so these
 * four (18 July – 22 August 2026) mark the opening of the new year, ending
 * with the installation of the board at ORCENZA’26.
 *
 * "Category" values on the club's original form (e.g. "Best Project for
 * Hunger") are district convention submission categories, not confirmed
 * results — they are folded into each project's story as "submitted in the
 * category of…" rather than claimed as wins, since the form does not state
 * an outcome for them. The one confirmed award is in achievements.ts.
 */
export const projects: Project[] = [
  {
    id: 'thuru',
    slug: 'thuru',
    title: 'Thuru',
    summary:
      'An environmental planting drive distributing 50 fruit and vegetable saplings to the community, run jointly with the Lions Club of Colombo Kalubowila.',
    category: 'environment',
    year: '2026/27',
    date: '2026-07-24',
    featured: true,
    heroImage: {
      src: '/images/projects/thuru/hero.jpg',
      alt: 'Leo Club of Kalubowila members with fruit and vegetable saplings for Project Thuru',
      width: 2200,
      height: 1238,
    },
    gallery: [
      { src: '/images/projects/thuru/g1.jpg', alt: 'Saplings prepared for distribution at Project Thuru', width: 900, height: 1600 },
      { src: '/images/projects/thuru/g2.jpg', alt: 'A community member receiving a sapling at Project Thuru', width: 900, height: 1600 },
      { src: '/images/projects/thuru/g3.jpg', alt: 'Members of the Leo Club of Kalubowila at Project Thuru', width: 900, height: 1600 },
    ],
    story: [
      'Thuru was run in joint collaboration with the Lions Club of Colombo Kalubowila, centred on a shared commitment to environmental protection and community well-being. As part of the initiative, the club distributed 50 fruit and vegetable saplings to local community members.',
      'Beyond the physical distribution, the project served as a step toward protecting the environment, promoting home agriculture, and educating the community on environmental stewardship, biodiversity, and sustainable living.',
      'The project was submitted in the district convention categories of Best Project for Hunger and Best Project for Health, Nutrition & Food Safety.',
    ],
    impact: [{ id: 'saplings', value: 50, label: 'Saplings distributed' }],
    partners: [{ name: 'Lions Club of Colombo Kalubowila' }],
  },
  {
    id: 'hot-takes-fc-fifa-26',
    slug: 'hot-takes-fc-fifa-26',
    title: 'Hot Takes FC — FIFA ’26',
    summary:
      'An interactive Leo engagement initiative connecting Leos and football fans across districts through match discussions, predictions and a published FIFA handbook.',
    category: 'fellowship',
    year: '2026/27',
    date: '2026-07-27',
    featured: true,
    heroImage: {
      src: '/images/projects/placeholder.png',
      alt: 'FIFA Match Day — no photograph on file yet',
      width: 1600,
      height: 1000,
    },
    story: [
      'FIFA Match Day was an interactive engagement initiative designed to bring Leos and football enthusiasts together beyond geographical boundaries. A dedicated group chat actively engaged Leos from other districts and external participants through match discussions, predictions, updates and friendly interactions.',
      'To add educational value, the club published a FIFA Handbook featuring facts, lesser-known stories, records and insights about the FIFA World Cup. Combining sport, knowledge, networking and digital engagement, the project connected participants while making match day more exciting and meaningful.',
      'The project was submitted in the district convention categories of Best Project for Fellowship and Most Innovative Project.',
    ],
  },
  {
    id: 'sadaham-wandana-26',
    slug: 'sadaham-wandana-26',
    title: 'සදහම් වන්දනා ’26',
    summary:
      'A Bodhi Pooja held to invoke blessings for the new Leoistic year, attended by the District President and club executives.',
    category: 'culture',
    year: '2026/27',
    date: '2026-07-18',
    featured: true,
    heroImage: {
      src: '/images/projects/sadaham-wandana/hero.jpg',
      alt: 'The Sadaham Wandana Bodhi Pooja marking the start of the 2026/27 Leoistic year',
      width: 2200,
      height: 1650,
    },
    gallery: [
      { src: '/images/projects/sadaham-wandana/g1.jpg', alt: 'Club members at the Sadaham Wandana Bodhi Pooja', width: 1200, height: 1600 },
      { src: '/images/projects/sadaham-wandana/g2.jpg', alt: 'Club members at the Sadaham Wandana Bodhi Pooja', width: 1200, height: 1600 },
    ],
    story: [
      'The Sadaham Wandana Bodhi Pooja was organised to invoke blessings for the new Leoistic year. The ceremony was graced by the District President, club executives, and fellow members, who gathered in unity and devotion to begin the year with spiritual strength and guidance.',
      'The occasion reflected the values of service, leadership and togetherness as the club stepped into a new chapter.',
    ],
  },
  {
    id: 'orcenza-26',
    slug: 'orcenza-26',
    title: 'ORCENZA ’26',
    summary:
      'The club’s 26th Installation Ceremony, inducting the 2026/27 executive board.',
    category: 'leadership',
    year: '2026/27',
    date: '2026-08-22',
    featured: true,
    heroImage: {
      src: '/images/projects/orcenza-26/hero.jpg',
      alt: 'The 2026/27 executive board of the Leo Club of Kalubowila at ORCENZA’26',
      width: 2200,
      height: 1238,
    },
    gallery: [
      { src: '/images/projects/orcenza-26/g1.jpg', alt: 'ORCENZA’26 installation ceremony', width: 900, height: 1600 },
      { src: '/images/projects/orcenza-26/g2.jpg', alt: 'ORCENZA’26 installation ceremony', width: 900, height: 1600 },
      { src: '/images/projects/orcenza-26/g3.jpg', alt: 'ORCENZA’26 installation ceremony', width: 900, height: 1600 },
      { src: '/images/projects/orcenza-26/g4.jpg', alt: 'ORCENZA’26 installation ceremony', width: 1600, height: 900 },
      { src: '/images/projects/orcenza-26/g5.jpg', alt: 'ORCENZA’26 installation ceremony', width: 1600, height: 900 },
      { src: '/images/projects/orcenza-26/g6.jpg', alt: 'ORCENZA’26 installation ceremony', width: 1600, height: 900 },
      { src: '/images/projects/orcenza-26/g7.jpg', alt: 'ORCENZA’26 installation ceremony', width: 900, height: 1600 },
    ],
    story: [
      'The Leo Club of Kalubowila unveiled ORCENZA’26, its 26th Installation Ceremony, with the induction of the new executive board.',
      'The evening was graced by Chief Guest Leo Lion Buddhika Abenayake (District President, Leo District 306 D2), Guest of Honour Leo Lion Thameera Dananjaya (Immediate Past District President, Leo District 306 D2), and Special Guest Leo Lion Kesari Senevirathne PMJF (Past Multiple District President, Leo Multiple District 306).',
      'ORCENZA’26 embodied the spirit of Leoism: guiding the present, inspiring the future, and igniting passion for service in every heart.',
    ],
  },
];
