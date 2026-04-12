import { useState } from 'react'
import { Briefcase, Home, Mail, Menu, Sun, Moon, User, X, Youtube } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { oneDark, oneLight } from '../theme'
import { userProfile } from '../data/profile'

export interface NavbarProps {
  setCurrentPage: Dispatch<SetStateAction<string>>
  currentPage: string
  toggleDarkMode: () => void
  darkMode: boolean
}

export const Navbar = ({ setCurrentPage, currentPage, toggleDarkMode, darkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = darkMode ? oneDark : oneLight
  const navItems = [
    { name: 'Home', icon: <Home className="w-5 h-5 mr-2" />, page: 'home' },
    { name: 'About', icon: <User className="w-5 h-5 mr-2" />, page: 'about' },
    { name: 'Projects', icon: <Briefcase className="w-5 h-5 mr-2" />, page: 'projects' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5 mr-2" />, page: 'youtube' },
    { name: 'Contact', icon: <Mail className="w-5 h-5 mr-2" />, page: 'contact' },
  ]

  // Nav button classes based on theme
  const navBtnCls = (isActive: boolean) => {
    const base = 'px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors'
    if (darkMode) {
      return `${base} ${isActive
        ? `text-white`
        : `hover:text-[${theme.blue}]`}`
    }
    return `${base} ${isActive
      ? `text-white`
      : `hover:text-[${theme.blue}]`}`
  }

  return (
    <nav
      className="shadow-md sticky top-0 z-50 border-b"
      style={{
        backgroundColor: theme.bg2,
        borderColor: theme.border,
      }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="text-2xl font-bold cursor-pointer transition-colors"
            style={{ color: theme.heading }}
            onMouseEnter={(e) => { e.currentTarget.style.color = theme.link }}
            onMouseLeave={(e) => { e.currentTarget.style.color = theme.heading }}
            onClick={() => setCurrentPage('home')}
            aria-label="Go to Home"
          >
            {userProfile.name}
          </button>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page
              return (
                <button
                  key={item.page}
                  onClick={() => setCurrentPage(item.page)}
                  className={navBtnCls(isActive)}
                  style={{
                    backgroundColor: isActive ? theme.blue : 'transparent',
                    color: isActive ? '#ffffff' : theme.fg,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = theme.hoverBg
                      e.currentTarget.style.color = theme.link
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = theme.fg
                    }
                  }}
                >
                  {item.icon} {item.name}
                </button>
              )
            })}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md transition-colors"
              style={{ color: theme.fg }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.hoverBg
                e.currentTarget.style.color = theme.link
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = theme.fg
              }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md mr-2 transition-colors"
              style={{ color: theme.fg }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.hoverBg }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md transition-colors"
              style={{ color: theme.fg }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.hoverBg }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-3 space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page
              return (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left ${navBtnCls(isActive)}`}
                  style={{
                    backgroundColor: isActive ? theme.blue : 'transparent',
                    color: isActive ? '#ffffff' : theme.fg,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = theme.hoverBg
                      e.currentTarget.style.color = theme.link
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = theme.fg
                    }
                  }}
                >
                  {item.icon} {item.name}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
