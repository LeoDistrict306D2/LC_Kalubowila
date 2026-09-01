import type { Achievement } from '@/lib/types';

/** TODO(content): confirm against the club's award records. */
export const achievements: Achievement[] = [
  {
    id: 'reporting-2025',
    title: 'Best Club Reporting',
    competition: 'Leo District 306 D2 Convention',
    year: '2025',
    level: 'winner',
    description: 'For publishing per-project cost, reach, hours and follow-up figures.',
  },
  {
    id: 'health-2024',
    title: 'Outstanding Health Service Project',
    competition: 'Leo District 306 D2 Convention',
    year: '2024',
    level: 'winner',
    description: 'For Ward Meals, and for nineteen months without a missed service night.',
  },
  {
    id: 'service-2022',
    title: 'Sustained Service Award',
    competition: 'Leo District 306 D2 Convention',
    year: '2022',
    level: 'merit',
  },
];
