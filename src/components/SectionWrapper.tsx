import type { ReactNode } from 'react'
import { oneDark } from '../theme'

export interface SectionWrapperProps {
  children: ReactNode
  title: string
  subtitle?: string
  darkMode: boolean
}

export const SectionWrapper = ({ children, title, subtitle, darkMode }: SectionWrapperProps) => (
  <div className={`py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? `bg-[${oneDark.bg}] text-[${oneDark.fg}]` : 'bg-white text-gray-900'}`}>
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className={`text-3xl font-extrabold sm:text-4xl ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-4 text-lg ${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-600'}`}>{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  </div>
)

export default SectionWrapper
