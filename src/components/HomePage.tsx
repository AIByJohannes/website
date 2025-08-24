import type { Dispatch, SetStateAction } from 'react';
import { oneDark } from '../theme';
import { userProfile } from '../data/profile';
import profileImage from '../assets/pfp_2025.jpg';

export interface HomePageProps {
  setCurrentPage: Dispatch<SetStateAction<string>>;
  darkMode: boolean;
}

export const HomePage = ({ setCurrentPage, darkMode }: HomePageProps) => {
  return (
    <div
      className={`min-h-[calc(100vh-120px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${
        darkMode ? `bg-[${oneDark.bg}]` : 'bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50'
      }`}
    >
      <div className="text-center max-w-3xl">
        <img
          src={profileImage}
          alt={userProfile.name}
          className={`w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 shadow-xl border-4 object-cover ${
            darkMode ? `border-[${oneDark.comment}]` : 'border-white'
          }`}
        />
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>
          Hi, I'm <span className={`${darkMode ? `text-[${oneDark.blue}]` : 'text-blue-600'}`}>{userProfile.name}</span>
        </h1>
        <p className={`mt-4 text-xl sm:text-2xl ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-600'}`}>{userProfile.tagline}</p>
        <p className={`mt-2 text-md sm:text-lg ${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-500'}`}>
          Based in {userProfile.location}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => setCurrentPage('projects')}
            className={`px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg transition-transform transform hover:scale-105 ${
              darkMode ? `text-white bg-[${oneDark.blue}] hover:bg-[${oneDark.cyan}]` : 'text-white bg-blue-600 hover:bg-blue-700'
            }`}
          >
            View My Work
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`px-8 py-3 border text-base font-medium rounded-md shadow-lg transition-transform transform hover:scale-105 ${
              darkMode
                ? `border-[${oneDark.blue}] text-[${oneDark.blue}] bg-[${oneDark.bg}] hover:bg-[${oneDark.hoverBg}]`
                : 'border-blue-600 text-blue-600 bg-white hover:bg-blue-50'
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
