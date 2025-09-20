import { useState } from 'react'
import { Briefcase, Home, Mail, Menu, Sun, Moon, User, X, Youtube } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { oneDark } from '../theme'
import { userProfile } from '../data/profile'

export interface NavbarProps {
  setCurrentPage: Dispatch<SetStateAction<string>>
  currentPage: string
  toggleDarkMode: () => void
  darkMode: boolean
}

export const Navbar = ({ setCurrentPage, currentPage, toggleDarkMode, darkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { name: 'Home', icon: <Home className="w-5 h-5 mr-2" />, page: 'home' },
    { name: 'About', icon: <User className="w-5 h-5 mr-2" />, page: 'about' },
    { name: 'Projects', icon: <Briefcase className="w-5 h-5 mr-2" />, page: 'projects' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5 mr-2" />, page: 'youtube' },
    { name: 'Contact', icon: <Mail className="w-5 h-5 mr-2" />, page: 'contact' },
  ]

  // Compose button classes without nested ternaries
  const lightInactive = 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
  const lightActive = 'bg-blue-600 text-white'
  const darkInactive = `text-[${oneDark.fg}] hover:bg-[${oneDark.hoverBg}] hover:text-[${oneDark.blue}]`
  const darkActive = `bg-[${oneDark.blue}] text-white`
  const navBtnCls = (isActive: boolean) => {
    const base = 'px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors'
    if (darkMode) {
      return `${base} ${isActive ? darkActive : darkInactive}`
    }
    return `${base} ${isActive ? lightActive : lightInactive}`
  }

  // Other computed classes
  const navContainerBase = 'shadow-md sticky top-0 z-50'
  const navContainerSurface = darkMode
    ? `bg-[${oneDark.bg}] border-b border-[${oneDark.comment}]`
    : 'bg-white'
  const titleClass = darkMode
    ? `text-[${oneDark.fg}] hover:text-[${oneDark.blue}]`
    : 'text-gray-800 hover:text-blue-600'
  const toggleDesktopClass = darkMode
    ? `text-[${oneDark.fg}] hover:bg-[${oneDark.hoverBg}] hover:text-[${oneDark.blue}]`
    : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
  const toggleMobileClass = darkMode
    ? `text-[${oneDark.fg}] hover:bg-[${oneDark.hoverBg}]`
    : 'text-gray-700 hover:bg-blue-100'

  return (
    <nav className={`${navContainerBase} ${navContainerSurface}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className={`text-2xl font-bold cursor-pointer transition-colors ${titleClass}`}
            onClick={() => setCurrentPage('home')}
            aria-label="Go to Home"
          >
            {userProfile.name}
          </button>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={navBtnCls(currentPage === item.page)}
              >
                {item.icon} {item.name}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md transition-colors ${toggleDesktopClass}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md mr-2 transition-colors ${toggleMobileClass}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${toggleMobileClass}`}
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page)
                  setIsOpen(false)
                }}
                className={`w-full text-left mb-1 ${navBtnCls(currentPage === item.page)}`}
              >
                {item.icon} {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
