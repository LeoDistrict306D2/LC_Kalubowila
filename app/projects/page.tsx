import type { Metadata } from 'next';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { ProjectGrid } from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Every project run by ${club.name} in the 2026/27 Leoistic year.`,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const entries = byDateDesc(projects);

  return (
    <>
      <PageMasthead
        kicker={`${entries.length} projects`}
        title="What we've been doing."
        standfirst="Every project run so far in the 2026/27 Leoistic year, newest first."
      />

      <div className="wrap band">
        <ProjectGrid projects={entries} />
      </div>
    </>
  );
}
