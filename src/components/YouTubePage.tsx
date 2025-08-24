import { Youtube } from 'lucide-react';
import { oneDark } from '../theme';
import { userProfile } from '../data/profile';
import SectionWrapper from './SectionWrapper';

export interface YouTubePageProps {
  darkMode: boolean;
}

export const YouTubePage = ({ darkMode }: YouTubePageProps) => {
  return (
    <SectionWrapper title="My YouTube Channel" subtitle="Insights on AI, Productivity, and Tech." darkMode={darkMode}>
      <a
        href={userProfile.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className={`mb-12 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white transition-colors ${
          darkMode ? `bg-[${oneDark.red}] hover:bg-[#c75661]` : 'bg-red-600 hover:bg-red-700'
        }`}
      >
        <Youtube className="w-5 h-5 mr-2" /> Visit Channel
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {userProfile.youtubeVideos.map((video) => (
          <div
            key={video.id}
            className={`${darkMode ? `bg-[${oneDark.bg}] border border-[${oneDark.comment}]` : 'bg-gray-50'} rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300`}
          >
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src = `https://placehold.co/600x400/ef4444/white?text=Video+Error`;
                }}
              />
            </a>
            <div className="p-6">
              <h3 className={`text-lg font-semibold mb-2 ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>{video.title}</h3>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center transition-colors ${darkMode ? `text-[${oneDark.blue}] hover:text-[${oneDark.cyan}]` : 'text-purple-600 hover:text-purple-800'}`}
              >
                Watch Video <Youtube className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default YouTubePage;
