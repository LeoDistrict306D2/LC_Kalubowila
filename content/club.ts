import type { Club } from '@/lib/types';

/**
 * Leo Club of Kalubowila — club record.
 *
 * Source: the club's Project Web Weavers content form, returned to the
 * district on 2026-09-11, plus the photos and branding files supplied
 * alongside it. Every fact below traces back to that submission — see
 * README.md for what is still outstanding (meeting day/time/venue was left
 * blank on the form, and most officers do not have a photo on file yet).
 */
export const club: Club = {
  name: 'Leo Club of Kalubowila',
  shortName: 'Kalubowila',
  tagline: 'Beyond titles. Into the work.',
  motto: 'Beyond Titles',
  description:
    'A Leo club in Kalubowila, chartered in 2001. For over two decades it has been a training ground for young leaders — several of whom have gone on to prominent roles across the wider Leo movement.',
  charterDate: '2001-11-13',
  clubNumber: '74159/1139',
  clubType: 'Community Based',
  region: 'Region A',
  zone: 'Zone A1',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  sponsoringLionsClub: 'Lions Club of Kalubowila',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.jpg',
    alt: 'Leo Club of Kalubowila emblem',
    width: 782,
    height: 800,
  },
  heroImage: {
    src: '/images/hero/hero.jpg',
    alt: 'Leo Club of Kalubowila members and officers at a club banner event',
    width: 1920,
    height: 1080,
  },

  contact: {
    email: 'leoclub.kalubowila@gmail.com',
    phone: '+94 76 689 8916',
    address: 'Leo Club of Kalubowila, Colombo, Sri Lanka',
  },

  socials: {
    facebook: 'https://www.facebook.com/share/19NHvak6qT/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/leos_of_kalubowila?stkn=aWk4OTJscWZmamkx&utm_source=qr',
    linkedin: 'https://www.linkedin.com/company/leo-club-of-kalubowila/',
    youtube: 'https://youtube.com/@leosofkalubowila4579?si=g2wU2Bum2vn29TGi',
    tiktok: 'https://www.tiktok.com/@leos_of_kalubowila?_r=1&_t=ZS-99db7pjN8j9',
    whatsapp: 'https://whatsapp.com/channel/0029VbBFyot2P59hmKAIA22n',
    email: 'leoclub.kalubowila@gmail.com',
  },

  siteUrl: 'https://kalubowila.leo306d2.org',

  donations: {
    bank: 'Hatton National Bank',
    branch: 'Maharagama',
    accountNumber: '064020481195',
  },

  stats: [
    {
      id: 'years',
      value: 24,
      label: 'Years of service',
      note: 'Chartered 13 November 2001.',
    },
    { id: 'members', value: 28, label: 'Active members' },
    {
      id: 'board',
      value: 16,
      label: 'Board & officers',
      note: '2026/27 term, installed at ORCENZA’26.',
    },
    {
      id: 'awards',
      value: 1,
      label: 'District award',
      note: 'Most Outstanding Community Based Club, Leoistic Year 2024/25.',
    },
  ],

  about: {
    story: [
      'Founded in 2001, the Leo Club of Kalubowila has grown into a beacon of youth leadership and service in the community. For over two decades the club has been more than an organisation — it has been a training ground for passionate young leaders, nurturing individuals who have gone on to become prominent figures across the wider Leo movement.',
      'That legacy rests on a plain motto: Beyond Titles. A position on the board carries responsibility, not privilege, and the club holds every member — from a first-term Project Director to the President — to the same standard of showing up and doing the work.',
      'In the 2024/25 Leoistic year the club was named Most Outstanding Community Based Club at district level. The projects behind that recognition — an environmental planting drive run jointly with the Lions Club of Colombo Kalubowila, a Bodhi Pooja marking the start of the new Leoistic year, and an installation ceremony inducting each incoming board — are the club’s ongoing programme, not a highlight reel assembled for this page.',
      'The club now runs on a board of sixteen: a President, three Vice Presidents, a Secretary and Treasurer with their assistants, a Chief Editor and Editorial Director, four Project Directors, an Immediate Past President, and a Lion Advisor — serving a membership of around thirty.',
    ],
    mission:
      'To empower individuals through leadership, service and unity to make a meaningful difference in society.',
    vision:
      'With every project and every initiative, the Leo Club of Kalubowila stands as a living testament to the power of youth united in purpose.',
    values: [
      {
        title: 'Beyond Titles',
        description:
          'Our motto. Responsibility is not attached to a position — every member, whatever their title, is expected to do the work.',
      },
      {
        title: 'Leadership',
        description:
          'Two decades of training young leaders, several of whom have gone on to prominent roles across the Leo movement.',
      },
      {
        title: 'Service',
        description:
          'Community service delivered consistently in the neighbourhoods around Kalubowila, not occasionally.',
      },
      {
        title: 'Unity',
        description:
          'Run through partnership — with the Lions Club of Colombo Kalubowila, local schools, and the wider district — rather than alone.',
      },
    ],
  },
};
