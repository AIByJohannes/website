import { oneDark } from '../theme';
import { userProfile } from '../data/profile';
import SectionWrapper from './SectionWrapper';
import { useEffect, useState } from 'react';

export interface ProjectsPageProps {
  darkMode: boolean;
}

export const ProjectsPage = ({ darkMode }: ProjectsPageProps) => {
  // Add GitHub-backed projects state with fallback
  type ProjectItem = { id: number | string; title: string; description: string; technologies: string[]; link: string };
  const [ghProjects, setGhProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;
    const headers = { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' } as const;

    async function fetchProjects() {
      setLoading(true);
      try {
        const owner = 'AIByJohannes';
        const repos = ['alfred', 'elitelm', 'alfred-android'];
        const fetched = await Promise.all(
          repos.map(async (name) => {
            const [repoRes, topicsRes, langsRes] = await Promise.all([
              fetch(`https://api.github.com/repos/${owner}/${name}`, { headers }),
              fetch(`https://api.github.com/repos/${owner}/${name}/topics`, { headers }),
              fetch(`https://api.github.com/repos/${owner}/${name}/languages`, { headers }),
            ]);
            if (!repoRes.ok) throw new Error('repo fetch failed');
            const repo = await repoRes.json();
            const topicsJson = topicsRes.ok ? await topicsRes.json() : { names: [] };
            const langsJson = langsRes.ok ? await langsRes.json() : {};
            const topics: string[] = Array.isArray(topicsJson.names) ? topicsJson.names : [];
            const languages: string[] = Object.keys(langsJson);
            const technologies = (topics.length ? topics : languages).slice(0, 8);
            const title = (repo.name || name).replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
            return {
              id: repo.id ?? name,
              title,
              description: repo.description || 'No description provided.',
              technologies,
              link: repo.html_url || `https://github.com/${owner}/${name}`,
            } as ProjectItem;
          })
        );
        if (active) setGhProjects(fetched);
      } catch {
        // fall back silently
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchProjects();
    return () => {
      active = false;
    };
  }, []);

  const projects = ghProjects.length ? ghProjects : userProfile.projects;

  return (
    <SectionWrapper title="My Projects" subtitle="A selection of my work and contributions." darkMode={darkMode}>
      {loading && !ghProjects.length && (
        <p className={`${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-500'}`}>Loading projects…</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${darkMode ? `bg-[${oneDark.bg}] border border-[${oneDark.comment}]` : 'bg-white'} rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col`}
          >
            <img
              src={`https://placehold.co/600x400/${oneDark.cyan.substring(1)}/${oneDark.fg.substring(1)}?text=${project.title.replace(/\s+/g, '+')}`}
              alt={project.title}
              className="w-full h-48 object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = `https://placehold.co/600x400/c4b5fd/3730a3?text=Error`;
              }}
            />
            <div className="p-6 flex-grow flex flex-col">
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>{project.title}</h3>
              <p className={`${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-700'} text-sm mb-4 flex-grow`}>{project.description}</p>
              <div className="mb-4">
                <h4 className={`text-xs font-semibold uppercase mb-1 ${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-500'}`}>Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded-full ${darkMode ? `bg-[${oneDark.hoverBg}] text-[${oneDark.blue}]` : 'bg-purple-100 text-purple-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors ${darkMode ? `text-white bg-[${oneDark.blue}] hover:bg-[${oneDark.cyan}]` : 'text-white bg-purple-600 hover:bg-purple-700'}`}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsPage;
