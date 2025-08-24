import { useState, useEffect } from 'react';
import { Briefcase, Home, User, Youtube, Mail, Linkedin, Twitter, Github, Cpu, Brain, Code, Database, Cloud, Terminal, Mic, Settings, Moon, Sun, Menu, X } from 'lucide-react';

// Atom One Dark Palette
const oneDark = {
    bg: '#282c34',        // Background
    fg: '#abb2bf',        // Foreground (primary text)
    comment: '#5c6370',   // Comments, secondary text, borders
    gutter: '#4b5263',    // Gutter grey, slightly lighter border/bg accents
    red: '#e06c75',
    lightYellow: '#e5c07b',
    darkYellow: '#d19a66',
    green: '#98c379',
    blue: '#61afef',       // Primary Accent
    magenta: '#c678dd',
    cyan: '#56b6c2',
    hoverBg: '#3a3f4c'    // A slightly lighter bg for hover
};

// Mock data - in a real app, this might come from an API or a more structured source
const userProfile = {
    name: "Johannes Copeland",
    tagline: "AI Engineer & Content Creator",
    location: "Hamburg, Germany 🇩🇪",
    email: "contact@johannescopeland.com",
    linkedin: "https://www.linkedin.com/in/johannscopeland",
    twitter: "https://twitter.com/AIByJohannes",
    github: "https://github.com/AIByJohannes",
    youtube: "https://www.youtube.com/channel/UCbHkKsUfa_jjooXU59EzmoQ", // Placeholder, replace with actual channel
    bio: "I'm an AI engineer passionate about building intelligent systems that make life better. By day, I work on machine learning models and software solutions; by night, I'm pursuing my Master's in Artificial Intelligence and sharing insights on my YouTube channel about AI and productivity.",
    skills: [
        { name: "Python", icon: <Code className={`w-6 h-6 text-[${oneDark.blue}]`} /> },
        { name: "PyTorch", icon: <Brain className={`w-6 h-6 text-[${oneDark.darkYellow}]`} /> },
        { name: "LLMs", icon: <Cpu className={`w-6 h-6 text-[${oneDark.magenta}]`} /> },
        { name: "FastAPI", icon: <Terminal className={`w-6 h-6 text-[${oneDark.green}]`} /> },
        { name: "Docker", icon: <Settings className={`w-6 h-6 text-[${oneDark.cyan}]`} /> },
        { name: "Supabase", icon: <Database className={`w-6 h-6 text-[${oneDark.green}]`} /> },
        { name: "Hugging Face", icon: <Mic className={`w-6 h-6 text-[${oneDark.lightYellow}]`} /> },
        { name: "Cloud (GCP/AWS)", icon: <Cloud className={`w-6 h-6 text-[${oneDark.cyan}]`} /> },
    ],
    projects: [
        { id: 1, title: "AI-Powered Recommendation System", description: "Developed a content recommendation engine using collaborative filtering and NLP techniques.", technologies: ["Python", "PyTorch", "FastAPI"], link: "#" },
        { id: 2, title: "YouTube Content Automation", description: "Building tools to streamline video creation and analysis for my AI channel.", technologies: ["Python", "OpenAI API", "FFmpeg"], link: "#" },
        { id: 3, title: "Personal Portfolio Website", description: "This very website, built with React and Tailwind CSS.", technologies: ["React", "Tailwind CSS", "JavaScript"], link: "#" },
    ],
    youtubeVideos: [ // Replace with actual video data
        { id: 'vid1', title: "Understanding Large Language Models", thumbnail: `https://placehold.co/600x400/${oneDark.magenta.substring(1)}/${oneDark.fg.substring(1)}?text=LLM+Basics`, link: "https://www.youtube.com/channel/UCbHkKsUfa_jjooXU59EzmoQ" },
        { id: 'vid2', title: "My Journey into AI Engineering", thumbnail: `https://placehold.co/600x400/${oneDark.green.substring(1)}/${oneDark.fg.substring(1)}?text=AI+Journey`, link: "https://www.youtube.com/channel/UCbHkKsUfa_jjooXU59EzmoQ" },
        { id: 'vid3', title: "Productivity Hacks for Developers", thumbnail: `https://placehold.co/600x400/${oneDark.blue.substring(1)}/${oneDark.fg.substring(1)}?text=Dev+Productivity`, link: "https://www.youtube.com/channel/UCbHkKsUfa_jjooXU59EzmoQ" },
    ]
};
import type { ReactNode, Dispatch, SetStateAction } from 'react';

interface NavbarProps {
    setCurrentPage: Dispatch<SetStateAction<string>>;
    currentPage: string;
    toggleDarkMode: () => void;
    darkMode: boolean;
}

const Navbar = ({ setCurrentPage, currentPage, toggleDarkMode, darkMode }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { name: "Home", icon: <Home className="w-5 h-5 mr-2" />, page: "home" },
        { name: "About", icon: <User className="w-5 h-5 mr-2" />, page: "about" },
        { name: "Projects", icon: <Briefcase className="w-5 h-5 mr-2" />, page: "projects" },
        { name: "YouTube", icon: <Youtube className="w-5 h-5 mr-2" />, page: "youtube" },
        { name: "Contact", icon: <Mail className="w-5 h-5 mr-2" />, page: "contact" },
    ];

    return (
        <nav className={`shadow-md sticky top-0 z-50 ${darkMode ? `bg-[${oneDark.bg}] border-b border-[${oneDark.comment}]` : 'bg-white'}`}>
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div
                        className={`text-2xl font-bold cursor-pointer transition-colors ${darkMode ? `text-[${oneDark.fg}] hover:text-[${oneDark.blue}]` : 'text-gray-800 hover:text-purple-600'}`}
                        onClick={() => setCurrentPage("home")}
                    >
                        {userProfile.name}
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map(item => (
                            <button
                                key={item.page}
                                onClick={() => setCurrentPage(item.page)}
                                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors
                  ${currentPage === item.page
                                    ? `${darkMode ? `bg-[${oneDark.blue}] text-white` : 'bg-purple-600 text-white'}`
                                    : `${darkMode ? `text-[${oneDark.fg}] hover:bg-[${oneDark.hoverBg}] hover:text-[${oneDark.blue}]` : 'text-gray-700 hover:bg-purple-100 hover:text-purple-600'}`
                                }`}
                            >
                                {item.icon} {item.name}
                            </button>
                        ))}
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-md transition-colors ${darkMode ? `text-[${oneDark.fg}] hover:bg-[${oneDark.hoverBg}] hover:text-[${oneDark.blue}]` : 'text-gray-700 hover:bg-purple-100 hover:text-purple-600'}`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-md mr-2 transition-colors ${darkMode ? `text-[${oneDark.fg}] hover:bg-[${oneDark.hoverBg}]` : 'text-gray-700 hover:bg-purple-100'}`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md transition-colors ${darkMode ? `text-[${oneDark.fg}] hover:bg-[${oneDark.hoverBg}]` : 'text-gray-700 hover:bg-purple-100'}`}
                            aria-label="Open menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden mt-3">
                        {navItems.map(item => (
                            <button
                                key={item.page}
                                onClick={() => { setCurrentPage(item.page); setIsOpen(false); }}
                                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors mb-1
                  ${currentPage === item.page
                                    ? `${darkMode ? `bg-[${oneDark.blue}] text-white` : 'bg-purple-600 text-white'}`
                                    : `${darkMode ? `text-[${oneDark.fg}] hover:bg-[${oneDark.hoverBg}] hover:text-[${oneDark.blue}]` : 'text-gray-700 hover:bg-purple-100 hover:text-purple-600'}`
                                }`}
                            >
                                {item.icon} {item.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};
interface HomePageProps {
    setCurrentPage: Dispatch<SetStateAction<string>>;
    darkMode: boolean;
}

const HomePage = ({ setCurrentPage, darkMode }: HomePageProps) => {
    return (
        <div className={`min-h-[calc(100vh-120px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? `bg-[${oneDark.bg}]` : 'bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50'}`}>
            <div className="text-center max-w-3xl">
                <img
                    src={`https://placehold.co/150x150/${oneDark.blue.substring(1)}/${oneDark.fg.substring(1)}?text=${userProfile.name.substring(0,1)}`}
                    alt={userProfile.name}
                    className={`w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 shadow-xl border-4 ${darkMode ? `border-[${oneDark.comment}]` : 'border-white'}`}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src=`https://placehold.co/150x150/7c3aed/white?text=Error`; }}
                />
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>
                    Hi, I'm <span className={`${darkMode ? `text-[${oneDark.blue}]` : 'text-purple-600'}`}>{userProfile.name}</span>
                </h1>
                <p className={`mt-4 text-xl sm:text-2xl ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-600'}`}>
                    {userProfile.tagline}
                </p>
                <p className={`mt-2 text-md sm:text-lg ${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-500'}`}>
                    Based in {userProfile.location}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        onClick={() => setCurrentPage("projects")}
                        className={`px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg transition-transform transform hover:scale-105 ${darkMode ? `text-white bg-[${oneDark.blue}] hover:bg-[${oneDark.cyan}]` : 'text-white bg-purple-600 hover:bg-purple-700'}`}
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => setCurrentPage("about")}
                        className={`px-8 py-3 border text-base font-medium rounded-md shadow-lg transition-transform transform hover:scale-105 ${darkMode ? `border-[${oneDark.blue}] text-[${oneDark.blue}] bg-[${oneDark.bg}] hover:bg-[${oneDark.hoverBg}]` : 'border-purple-600 text-purple-600 bg-white hover:bg-purple-50'}`}
                    >
                        More About Me
                    </button>
                </div>
            </div>
        </div>
    );
};
interface SectionWrapperProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
    darkMode: boolean;
}

const SectionWrapper = ({ children, title, subtitle, darkMode }: SectionWrapperProps) => (
    <div className={`py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? `bg-[${oneDark.bg}] text-[${oneDark.fg}]` : 'bg-white text-gray-900'}`}>
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h2 className={`text-3xl font-extrabold sm:text-4xl ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>
                    {title}
                </h2>
                {subtitle && <p className={`mt-4 text-lg ${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-600'}`}>{subtitle}</p>}
            </div>
            {children}
        </div>
    </div>
);

interface AboutPageProps {
    darkMode: boolean;
}

const AboutPage = ({ darkMode }: AboutPageProps) => {
    return (
        <SectionWrapper title="About Me" subtitle="A glimpse into my journey and expertise." darkMode={darkMode}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className={`${darkMode ? `bg-[${oneDark.bg}] border border-[${oneDark.comment}]` : 'bg-gray-50'} p-6 sm:p-8 rounded-xl shadow-lg`}>
                    <img
                        src={`https://placehold.co/400x400/${oneDark.magenta.substring(1)}/${oneDark.fg.substring(1)}?text=Johannes+AI`}
                        alt="Johannes - AI Engineer"
                        className="rounded-lg shadow-md mx-auto mb-6 w-full max-w-xs object-cover"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src=`https://placehold.co/400x400/a78bfa/white?text=Error`; }}
                    />
                    <h3 className={`text-2xl font-semibold mb-3 ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>{userProfile.name}</h3>
                    <p className={`${darkMode ? `text-[${oneDark.blue}]` : 'text-purple-600'} font-medium mb-4`}>{userProfile.tagline}</p>
                    <p className={`${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-700'} leading-relaxed`}>
                        {userProfile.bio}
                    </p>
                </div>

                <div className="space-y-8">
                    <div>
                        <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>My Skills</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {userProfile.skills.map(skill => (
                                <div key={skill.name} className={`${darkMode ? `bg-[${oneDark.bg}] border border-[${oneDark.comment}]` : 'bg-gray-50'} p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow`}>
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
                            <li>AI Ethics and Responsible AI</li>
                            <li>Content Creation (YouTube)</li>
                            <li>Productivity and Workflow Optimization</li>
                        </ul>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
interface ProjectsPageProps {
    darkMode: boolean;
}

const ProjectsPage = ({ darkMode }: ProjectsPageProps) => {
    return (
        <SectionWrapper title="My Projects" subtitle="A selection of my work and contributions." darkMode={darkMode}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userProfile.projects.map(project => (
                    <div key={project.id} className={`${darkMode ? `bg-[${oneDark.bg}] border border-[${oneDark.comment}]` : 'bg-white'} rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col`}>
                        <img
                            src={`https://placehold.co/600x400/${oneDark.cyan.substring(1)}/${oneDark.fg.substring(1)}?text=${project.title.replace(/\s+/g, '+')}`}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src=`https://placehold.co/600x400/c4b5fd/3730a3?text=Error`; }}
                        />
                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>{project.title}</h3>
                            <p className={`${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-700'} text-sm mb-4 flex-grow`}>{project.description}</p>
                            <div className="mb-4">
                                <h4 className={`text-xs font-semibold uppercase mb-1 ${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-500'}`}>Technologies:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className={`px-2 py-1 text-xs rounded-full ${darkMode ? `bg-[${oneDark.hoverBg}] text-[${oneDark.blue}]` : 'bg-purple-100 text-purple-700'}`}>{tech}</span>
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
interface YouTubePageProps {
    darkMode: boolean;
}

const YouTubePage = ({ darkMode }: YouTubePageProps) => {
    return (
        <SectionWrapper title="My YouTube Channel" subtitle="Insights on AI, Productivity, and Tech." darkMode={darkMode}>
            <a
                href={userProfile.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={`mb-12 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white transition-colors ${darkMode ? `bg-[${oneDark.red}] hover:bg-[#c75661]` : 'bg-red-600 hover:bg-red-700'}`}
            >
                <Youtube className="w-5 h-5 mr-2" /> Visit Channel
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userProfile.youtubeVideos.map(video => (
                    <div key={video.id} className={`${darkMode ? `bg-[${oneDark.bg}] border border-[${oneDark.comment}]` : 'bg-gray-50'} rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300`}>
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-48 object-cover"
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src=`https://placehold.co/600x400/ef4444/white?text=Video+Error`; }}
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
interface ContactPageProps {
    darkMode: boolean;
}

const ContactPage = ({ darkMode }: ContactPageProps) => {
    return (
        <SectionWrapper title="Get In Touch" subtitle="I'm always open to discussing new projects, creative ideas, or opportunities." darkMode={darkMode}>
            <div className={`${darkMode ? `bg-[${oneDark.bg}] border border-[${oneDark.comment}]` : 'bg-white'} p-8 sm:p-10 rounded-xl shadow-xl max-w-3xl mx-auto`}>
                <form action={`mailto:${userProfile.email}`} method="POST" encType="text/plain">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-700'}`}>Full Name</label>
                            <input type="text" name="name" id="name" required className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${darkMode ? `bg-[${oneDark.hoverBg}] border-[${oneDark.comment}] text-[${oneDark.fg}] focus:ring-[${oneDark.blue}] focus:border-[${oneDark.blue}]` : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'}`} />
                        </div>
                        <div>
                            <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-700'}`}>Email Address</label>
                            <input type="email" name="email" id="email" required className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${darkMode ? `bg-[${oneDark.hoverBg}] border-[${oneDark.comment}] text-[${oneDark.fg}] focus:ring-[${oneDark.blue}] focus:border-[${oneDark.blue}]` : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'}`} />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="subject" className={`block text-sm font-medium ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-700'}`}>Subject</label>
                        <input type="text" name="subject" id="subject" required className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${darkMode ? `bg-[${oneDark.hoverBg}] border-[${oneDark.comment}] text-[${oneDark.fg}] focus:ring-[${oneDark.blue}] focus:border-[${oneDark.blue}]` : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'}`} />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="message" className={`block text-sm font-medium ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-700'}`}>Message</label>
                        <textarea name="message" id="message" rows={4} required className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${darkMode ? `bg-[${oneDark.hoverBg}] border-[${oneDark.comment}] text-[${oneDark.fg}] focus:ring-[${oneDark.blue}] focus:border-[${oneDark.blue}]` : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'}`}></textarea>
                    </div>
                    <div className="mt-8 text-center">
                        <button
                            type="submit"
                            className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${darkMode ? `text-white bg-[${oneDark.blue}] hover:bg-[${oneDark.cyan}] focus:ring-[${oneDark.blue}] focus:ring-offset-[${oneDark.bg}]` : 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'}`}
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                <div className={`mt-10 pt-8 text-center ${darkMode ? `border-t border-[${oneDark.comment}]` : 'border-t border-gray-200'}`}>
                    <p className={`${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-600'} mb-4`}>Or connect with me on social media:</p>
                    <div className="flex justify-center space-x-6">
                        {[
                            { href: userProfile.linkedin, icon: <Linkedin className="w-8 h-8" />, label: "LinkedIn", hoverColor: oneDark.blue },
                            { href: userProfile.twitter, icon: <Twitter className="w-8 h-8" />, label: "Twitter", hoverColor: oneDark.blue },
                            { href: userProfile.github, icon: <Github className="w-8 h-8" />, label: "GitHub", hoverColor: oneDark.fg },
                            { href: userProfile.youtube, icon: <Youtube className="w-8 h-8" />, label: "YouTube", hoverColor: oneDark.red }
                        ].map(social => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`transition-colors ${darkMode ? `text-[${oneDark.comment}] hover:text-[${social.hoverColor}]` : 'text-gray-500 hover:text-purple-600'}`}
                            >
                                {social.icon}
                                <span className="sr-only">{social.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

interface FooterProps {
    darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
    return (
        <footer className={`${darkMode ? `bg-[${oneDark.bg}] border-t border-[${oneDark.comment}]` : 'bg-white border-t border-gray-200'}`}>
            <div className={`container mx-auto px-6 py-8 text-center text-sm ${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-600'}`}>
                <p>© {new Date().getFullYear()} {userProfile.name}. All rights reserved.</p>
                <p className="mt-1">Built with React & Tailwind CSS.</p>
            </div>
        </footer>
    );
};


export default function App() {
    const [currentPage, setCurrentPage] = useState("home");
    const [darkMode, setDarkModeState] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedPreference = localStorage.getItem('darkMode');
        if (storedPreference !== null) {
            setDarkModeState(storedPreference === 'true');
        } else {
            setDarkModeState(prefersDark);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.style.backgroundColor = oneDark.bg;
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.style.backgroundColor = ''; // Or your light mode body bg
        }
        localStorage.setItem('darkMode', String(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkModeState(!darkMode);
    };

    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return <HomePage setCurrentPage={setCurrentPage} darkMode={darkMode} />;
            case "about":
                return <AboutPage darkMode={darkMode} />;
            case "projects":
                return <ProjectsPage darkMode={darkMode} />;
            case "youtube":
                return <YouTubePage darkMode={darkMode} />;
            case "contact":
                return <ContactPage darkMode={darkMode} />;
            default:
                return <HomePage setCurrentPage={setCurrentPage} darkMode={darkMode} />;
        }
    };



    return (
        <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${darkMode ? `bg-[${oneDark.bg}]` : 'bg-gray-100'}`}>
            <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer darkMode={darkMode} />
        </div>
    );
}
