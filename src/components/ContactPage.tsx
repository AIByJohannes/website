import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import { oneDark } from '../theme';
import { userProfile } from '../data/profile';
import SectionWrapper from './SectionWrapper';

export interface ContactPageProps {
  darkMode: boolean;
}

export const ContactPage = ({ darkMode }: ContactPageProps) => {
  return (
    <SectionWrapper
      title="Get In Touch"
      subtitle="I'm always open to discussing new projects, creative ideas, or opportunities."
      darkMode={darkMode}
    >
      <div className={`${darkMode ? `bg-[${oneDark.bg}] border border-[${oneDark.comment}]` : 'bg-white'} p-8 sm:p-10 rounded-xl shadow-xl max-w-3xl mx-auto`}>
        <form action={`mailto:${userProfile.email}`} method="POST" encType="text/plain">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-700'}`}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                  darkMode
                    ? `bg-[${oneDark.hoverBg}] border-[${oneDark.comment}] text-[${oneDark.fg}] focus:ring-[${oneDark.blue}] focus:border-[${oneDark.blue}]`
                    : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
                }`}
              />
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-700'}`}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                  darkMode
                    ? `bg-[${oneDark.hoverBg}] border-[${oneDark.comment}] text-[${oneDark.fg}] focus:ring-[${oneDark.blue}] focus:border-[${oneDark.blue}]`
                    : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
                }`}
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="subject" className={`block text-sm font-medium ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-700'}`}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                darkMode
                  ? `bg-[${oneDark.hoverBg}] border-[${oneDark.comment}] text-[${oneDark.fg}] focus:ring-[${oneDark.blue}] focus:border-[${oneDark.blue}]`
                  : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
              }`}
            />
          </div>
          <div className="mt-6">
            <label htmlFor="message" className={`block text-sm font-medium ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-700'}`}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                darkMode
                  ? `bg-[${oneDark.hoverBg}] border-[${oneDark.comment}] text-[${oneDark.fg}] focus:ring-[${oneDark.blue}] focus:border-[${oneDark.blue}]`
                  : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
              }`}
            ></textarea>
          </div>
          <div className="mt-8 text-center">
            <button
              type="submit"
              className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                darkMode
                  ? `text-white bg-[${oneDark.blue}] hover:bg-[${oneDark.cyan}] focus:ring-[${oneDark.blue}] focus:ring-offset-[${oneDark.bg}]`
                  : 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
              }`}
            >
              Send Message
            </button>
          </div>
        </form>

        <div className={`mt-10 pt-8 text-center ${darkMode ? `border-t border-[${oneDark.comment}]` : 'border-t border-gray-200'}`}>
          <p className={`${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-600'} mb-4`}>
            Or connect with me on social media:
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { href: userProfile.linkedin, icon: <Linkedin className="w-8 h-8" />, label: 'LinkedIn', hoverColor: oneDark.blue },
              { href: userProfile.twitter, icon: <Twitter className="w-8 h-8" />, label: 'Twitter', hoverColor: oneDark.blue },
              { href: userProfile.github, icon: <Github className="w-8 h-8" />, label: 'GitHub', hoverColor: oneDark.fg },
              { href: userProfile.youtube, icon: <Youtube className="w-8 h-8" />, label: 'YouTube', hoverColor: oneDark.red },
            ].map((social) => (
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

export default ContactPage;
