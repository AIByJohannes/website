import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'
import { oneDark, oneLight } from '../theme'
import { userProfile } from '../data/profile'
import SectionWrapper from './SectionWrapper'

export interface ContactPageProps {
  darkMode: boolean
}

export const ContactPage = ({ darkMode }: ContactPageProps) => {
  const theme = darkMode ? oneDark : oneLight

  return (
    <SectionWrapper
      title="Get In Touch"
      subtitle="I'm always open to discussing new projects, creative ideas, or opportunities."
      darkMode={darkMode}
    >
      <div
        className="p-8 sm:p-10 rounded-xl shadow-xl max-w-3xl mx-auto border"
        style={{
          backgroundColor: theme.card,
          borderColor: theme.border,
        }}
      >
        <form action={`mailto:${userProfile.email}`} method="POST" encType="text/plain">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium"
                style={{ color: theme.fg }}
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                style={{
                  backgroundColor: theme.hoverBg,
                  borderColor: theme.border,
                  color: theme.fg,
                }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium"
                style={{ color: theme.fg }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                style={{
                  backgroundColor: theme.hoverBg,
                  borderColor: theme.border,
                  color: theme.fg,
                }}
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="subject"
              className="block text-sm font-medium"
              style={{ color: theme.fg }}
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
              style={{
                backgroundColor: theme.hoverBg,
                borderColor: theme.border,
                color: theme.fg,
              }}
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium"
              style={{ color: theme.fg }}
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
              style={{
                backgroundColor: theme.hoverBg,
                borderColor: theme.border,
                color: theme.fg,
              }}
            ></textarea>
          </div>
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
              style={{
                backgroundColor: theme.blue,
                color: '#ffffff',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.linkHover }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = theme.blue }}
            >
              Send Message
            </button>
          </div>
        </form>

        <div
          className="mt-10 pt-8 text-center"
          style={{ borderTop: `1px solid ${theme.border}` }}
        >
          <p style={{ color: theme.muted }} className="mb-4">
            Or connect with me on social media:
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { href: userProfile.linkedin, icon: <Linkedin className="w-8 h-8" />, label: 'LinkedIn', hoverColor: theme.blue },
              { href: userProfile.twitter, icon: <Twitter className="w-8 h-8" />, label: 'Twitter', hoverColor: theme.blue },
              { href: userProfile.github, icon: <Github className="w-8 h-8" />, label: 'GitHub', hoverColor: theme.fg },
              { href: userProfile.youtube, icon: <Youtube className="w-8 h-8" />, label: 'YouTube', hoverColor: theme.red },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: theme.muted }}
                onMouseEnter={(e) => { e.currentTarget.style.color = social.hoverColor }}
                onMouseLeave={(e) => { e.currentTarget.style.color = theme.muted }}
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ContactPage
