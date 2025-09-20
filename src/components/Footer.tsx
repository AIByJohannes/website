import { oneDark } from '../theme'
import { userProfile } from '../data/profile'

export interface FooterProps {
  darkMode: boolean
}

export const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer className={`${darkMode ? `bg-[${oneDark.bg}] border-t border-[${oneDark.comment}]` : 'bg-white border-t border-gray-200'}`}>
      <div className={`container mx-auto px-6 py-8 text-center text-sm ${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-600'}`}>
        <p>© {new Date().getFullYear()} {userProfile.name}. All rights reserved.</p>
        <p className="mt-1">Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  )
}

export default Footer
