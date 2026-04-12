import { oneDark, oneLight } from '../theme'
import { userProfile } from '../data/profile'

export interface FooterProps {
  darkMode: boolean
}

export const Footer = ({ darkMode }: FooterProps) => {
  const theme = darkMode ? oneDark : oneLight

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: theme.bg,
        borderColor: theme.border,
      }}
    >
      <div
        className="container mx-auto px-6 py-8 text-center text-sm"
        style={{ color: theme.muted }}
      >
        <p>© {new Date().getFullYear()} {userProfile.name}. All rights reserved.</p>
        <p className="mt-1">Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  )
}

export default Footer
