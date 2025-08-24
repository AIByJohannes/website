import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import YouTubePage from './components/YouTubePage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import { oneDark } from './theme';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkModeState] = useState(true);

  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode');
    if (storedPreference !== null) {
      setDarkModeState(storedPreference === 'true');
    } else {
      // Default to dark mode for new users
      setDarkModeState(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = oneDark.bg;
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '';
    }
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkModeState(!darkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} darkMode={darkMode} />;
      case 'about':
        return <AboutPage darkMode={darkMode} />;
      case 'projects':
        return <ProjectsPage darkMode={darkMode} />;
      case 'youtube':
        return <YouTubePage darkMode={darkMode} />;
      case 'contact':
        return <ContactPage darkMode={darkMode} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${darkMode ? `bg-[${oneDark.bg}]` : 'bg-gray-100'}`}>
      <Navbar
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <main className="flex-grow">{renderPage()}</main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
