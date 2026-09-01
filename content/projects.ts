import type { Project } from '@/lib/types';

/**
 * Project records.
 *
 * Every entry carries the club's four reporting figures — reach, cost, hours,
 * and a follow-up result — because the ledger table on the projects page reads
 * them as columns. A project missing `impact` still renders, but it will show
 * blank cells, which is the intended pressure.
 *
 * TODO(content): illustrative records in the club's format. Replace with real
 * project data; `heroImage` points at the shared placeholder until real
 * photography exists.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 1000,
});

export const projects: Project[] = [
  {
    id: 'ward-meals',
    slug: 'ward-meals',
    title: 'Ward Meals',
    summary:
      'Evening meals for the families of long-stay patients at Colombo South Teaching Hospital, served four nights a week.',
    category: 'health',
    year: '2025/26',
    date: '2025-09-01',
    location: 'Colombo South Teaching Hospital',
    featured: true,
    heroImage: placeholder('Volunteers serving evening meals to patients families'),
    story: [
      'Families who travel in from outside the district to sit with a long-stay patient often have nowhere to eat and no money to spend on eating. Some were going without for the length of an admission.',
      'The project serves 60 meals a night, four nights a week, from a kitchen rota of eleven members. It has run without a missed night for nineteen months.',
      'The cost per meal is Rs 214, which we publish because people ask and because it is the number that decides whether this can be scaled to a fifth night.',
    ],
    objectives: [
      'Serve 60 meals a night, four nights a week, without gaps',
      'Hold cost per meal under Rs 250',
      'Recruit enough kitchen volunteers to survive exam season',
    ],
    impact: [
      { id: 'meals', value: 18720, label: 'Meals served' },
      { id: 'reach', value: 1240, label: 'People reached' },
      { id: 'cost', value: 4006080, prefix: 'Rs ', label: 'Total cost' },
      { id: 'hours', value: 3040, label: 'Volunteer hours' },
    ],
    partners: [{ name: 'Colombo South Teaching Hospital' }],
  },
  {
    id: 'blood-quarterly',
    slug: 'blood-quarterly',
    title: 'Quarterly Blood Drive',
    summary:
      'A donation camp every quarter with the National Blood Transfusion Service, held at the community centre.',
    category: 'health',
    year: '2025/26',
    date: '2025-07-12',
    location: 'Kalubowila Community Centre',
    featured: true,
    heroImage: placeholder('Donors at the quarterly blood donation camp'),
    story: [
      'Four camps a year, on a fixed calendar published twelve months ahead. Regular donors need a date they can plan around; ad-hoc camps get ad-hoc turnout.',
      'Collection has risen every year except 2023, when we moved the venue and lost roughly a third of the returning donors. We moved it back.',
    ],
    impact: [
      { id: 'units', value: 412, label: 'Units collected' },
      { id: 'reach', value: 486, label: 'Donors attended' },
      { id: 'cost', value: 168000, prefix: 'Rs ', label: 'Total cost' },
      { id: 'hours', value: 640, label: 'Volunteer hours' },
    ],
    partners: [{ name: 'National Blood Transfusion Service' }],
  },
  {
    id: 'school-eyes',
    slug: 'school-eyes',
    title: 'School Eye Screening',
    summary:
      'Vision screening for Grade 1–5 students at four schools, with referral and spectacle funding for those who need it.',
    category: 'health',
    year: '2024/25',
    date: '2025-01-25',
    location: 'Kalubowila and Dehiwala',
    featured: true,
    heroImage: placeholder('A vision screening session at a primary school'),
    story: [
      'Screening is the easy half. The number that matters is how many children who failed the screening actually ended up wearing spectacles, and the first year we ran this we did not know, because we never checked.',
      'We check now. Of 214 referred, 178 were fitted within four months. The remaining 36 are the reason the follow-up column exists.',
    ],
    objectives: [
      'Screen every student in Grades 1 to 5 across four schools',
      'Fund spectacles for referred students whose families cannot',
      'Confirm at four months how many are actually wearing them',
    ],
    impact: [
      { id: 'screened', value: 1360, label: 'Students screened' },
      { id: 'reach', value: 214, label: 'Referred onward' },
      { id: 'fitted', value: 178, label: 'Fitted at 4 months' },
      { id: 'cost', value: 512000, prefix: 'Rs ', label: 'Total cost' },
    ],
  },
  {
    id: 'exam-support',
    slug: 'exam-support',
    title: 'O/L Exam Support',
    summary:
      'Weekend tutoring for O/L candidates in three schools. Ran one term short of the plan.',
    category: 'education',
    year: '2024/25',
    date: '2024-09-14',
    location: 'Kalubowila',
    heroImage: placeholder('A weekend O/L tutoring session'),
    story: [
      'This one is in the table because it did not work as intended, and removing it would make the rest of the table meaningless.',
      'The plan was three terms. We ran two. Tutor availability collapsed in the second term when six of our nine tutors hit their own university exams, and we had no reserve. Attendance fell from 84% to 51% before we stopped.',
      'The lesson was recruitment depth, not commitment. The 2025 tutoring programme runs with fourteen tutors for the same student numbers.',
    ],
    impact: [
      { id: 'reach', value: 61, label: 'Students enrolled' },
      { id: 'sessions', value: 18, label: 'Sessions run', note: 'Against 27 planned' },
      { id: 'cost', value: 96000, prefix: 'Rs ', label: 'Total cost' },
      { id: 'hours', value: 430, label: 'Volunteer hours' },
    ],
  },
  {
    id: 'ward-library',
    slug: 'ward-library',
    title: 'Paediatric Ward Library',
    summary: 'A book trolley and reading hour for the children’s wards, twice weekly.',
    category: 'community-service',
    year: '2023/24',
    date: '2024-03-09',
    location: 'Colombo South Teaching Hospital',
    heroImage: placeholder('A book trolley in the paediatric ward'),
    impact: [
      { id: 'reach', value: 890, label: 'Children reached' },
      { id: 'books', value: 460, label: 'Books in circulation' },
      { id: 'cost', value: 142000, prefix: 'Rs ', label: 'Total cost' },
      { id: 'hours', value: 780, label: 'Volunteer hours' },
    ],
  },
  {
    id: 'flood-relief',
    slug: 'flood-relief',
    title: 'Flood Relief',
    summary: 'Emergency supply distribution after the May floods, run over nine days.',
    category: 'community-service',
    year: '2023/24',
    date: '2023-05-22',
    location: 'Dehiwala and Kalubowila',
    heroImage: placeholder('Volunteers packing emergency relief supplies'),
    impact: [
      { id: 'reach', value: 620, label: 'Households reached' },
      { id: 'packs', value: 620, label: 'Supply packs' },
      { id: 'cost', value: 1240000, prefix: 'Rs ', label: 'Total cost' },
      { id: 'hours', value: 1180, label: 'Volunteer hours' },
    ],
  },
];
