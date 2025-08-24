import { oneDark } from '../theme';
import { userProfile } from '../data/profile';
import SectionWrapper from './SectionWrapper';

export interface ProjectsPageProps {
  darkMode: boolean;
}

export const ProjectsPage = ({ darkMode }: ProjectsPageProps) => {
  return (
    <SectionWrapper title="My Projects" subtitle="A selection of my work and contributions." darkMode={darkMode}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {userProfile.projects.map((project) => (
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
