import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';

const categoryLabel: Record<string, string> = {
  'community-service': 'Community service',
  education: 'Education',
  health: 'Health',
  environment: 'Environment',
  'youth-development': 'Youth development',
  fundraising: 'Fundraising',
  leadership: 'Leadership',
  international: 'International',
  fellowship: 'Fellowship',
  culture: 'Culture',
};

/**
 * Photo-forward project card — District 306 D2's own site presents recent
 * work as image cards rather than a data table, and that pattern reads far
 * livelier for a page whose whole point is showing what happened.
 */
export function ProjectCard({
  project,
  priority = false,
  revealDelay = 0,
}: {
  project: Project;
  priority?: boolean;
  revealDelay?: number;
}) {
  return (
    <li className="h-full">
      <Reveal delay={revealDelay} className="group h-full">
        <Link
          href={`/projects/${project.slug}`}
          className="glass-card flex h-full flex-col overflow-hidden p-3"
        >
          <div className="relative">
            <Photo
              image={project.heroImage}
              ratio="landscape"
              priority={priority}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              frameClassName="rounded-xl transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-page/95 px-3 py-1 font-heading text-[0.65rem] font-semibold tracking-widest text-accent-strong uppercase shadow-sm backdrop-blur-sm">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              {categoryLabel[project.category] ?? project.category}
            </span>
          </div>

          <div className="mt-4 flex flex-1 flex-col px-2 pb-2">
            <p className="font-heading text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
              {formatDate(project.date, { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <h3 className="mt-1.5 font-heading text-lg leading-snug font-semibold text-ink transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{project.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-accent">
              Read the story
              <ArrowUpRight
                aria-hidden
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </Link>
      </Reveal>
    </li>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          priority={index === 0}
          revealDelay={(index % 3) * 90}
        />
      ))}
    </ul>
  );
}
