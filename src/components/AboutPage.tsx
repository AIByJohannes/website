import { oneDark } from '../theme';
import { userProfile } from '../data/profile';
import SectionWrapper from './SectionWrapper';
import profileImage from '../assets/pfp_2025.jpg';

export interface AboutPageProps {
  darkMode: boolean;
}

export const AboutPage = ({ darkMode }: AboutPageProps) => {
  return (
    <SectionWrapper title="About Me" subtitle="A glimpse into my journey and expertise." darkMode={darkMode}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className={`${darkMode ? `bg-[${oneDark.bg}] border border-[${oneDark.comment}]` : 'bg-gray-50'} p-6 sm:p-8 rounded-xl shadow-lg`}>
          <img
            src={profileImage}
            alt="Johannes - AI Engineer"
            className="rounded-lg shadow-md mx-auto mb-6 w-full max-w-xs object-cover"
          />
          <h3 className={`text-2xl font-semibold mb-3 ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>{userProfile.name}</h3>
          <p className={`${darkMode ? `text-[${oneDark.blue}]` : 'text-blue-600'} font-medium mb-4`}>{userProfile.tagline}</p>
          <p className={`${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-700'} leading-relaxed`}>{userProfile.bio}</p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {userProfile.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`${darkMode ? `bg-[${oneDark.bg}] border border-[${oneDark.comment}]` : 'bg-gray-50'} p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow`}
                >
                  <div className="mb-2">{skill.icon}</div>
                  <p className={`text-sm font-medium ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-700'}`}>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>Interests</h3>
            <ul className={`list-disc list-inside space-y-2 ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-700'}`}>
              <li>Large Language Models (LLMs)</li>
              <li>Machine Learning Operations (MLOps)</li>
              <li>AI Safety and Responsible AI</li>
              <li>Content Creation (YouTube and Blogging)</li>
              <li>Productivity and Workflow Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutPage;
