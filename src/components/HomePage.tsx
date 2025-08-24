import type { Dispatch, SetStateAction } from 'react';
import { oneDark } from '../theme';
import { userProfile } from '../data/profile';

export interface HomePageProps {
  setCurrentPage: Dispatch<SetStateAction<string>>;
  darkMode: boolean;
}

export const HomePage = ({ setCurrentPage, darkMode }: HomePageProps) => {
  return (
    <div
      className={`min-h-[calc(100vh-120px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${
        darkMode ? `bg-[${oneDark.bg}]` : 'bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50'
      }`}
    >
      <div className="text-center max-w-3xl">
        <img
          src={`https://placehold.co/150x150/${oneDark.blue.substring(1)}/${oneDark.fg.substring(1)}?text=${userProfile.name.substring(0, 1)}`}
          alt={userProfile.name}
          className={`w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 shadow-xl border-4 ${
            darkMode ? `border-[${oneDark.comment}]` : 'border-white'
          }`}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = `https://placehold.co/150x150/7c3aed/white?text=Error`;
          }}
        />
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>
          Hi, I'm <span className={`${darkMode ? `text-[${oneDark.blue}]` : 'text-purple-600'}`}>{userProfile.name}</span>
        </h1>
        <p className={`mt-4 text-xl sm:text-2xl ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-600'}`}>{userProfile.tagline}</p>
        <p className={`mt-2 text-md sm:text-lg ${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-500'}`}>
          Based in {userProfile.location}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => setCurrentPage('projects')}
            className={`px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg transition-transform transform hover:scale-105 ${
              darkMode ? `text-white bg-[${oneDark.blue}] hover:bg-[${oneDark.cyan}]` : 'text-white bg-purple-600 hover:bg-purple-700'
            }`}
          >
            View My Work
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`px-8 py-3 border text-base font-medium rounded-md shadow-lg transition-transform transform hover:scale-105 ${
              darkMode
                ? `border-[${oneDark.blue}] text-[${oneDark.blue}] bg-[${oneDark.bg}] hover:bg-[${oneDark.hoverBg}]`
                : 'border-purple-600 text-purple-600 bg-white hover:bg-purple-50'
            }`}
          >
            More About Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
