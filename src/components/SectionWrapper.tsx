import type { ReactNode } from 'react'
import { oneDark, oneLight } from '../theme'

export interface SectionWrapperProps {
  children: ReactNode
  title: string
  subtitle?: string
  darkMode: boolean
}

export const SectionWrapper = ({ children, title, subtitle, darkMode }: SectionWrapperProps) => {
  const theme = darkMode ? oneDark : oneLight

  return (
    <div
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: theme.bg, color: theme.fg }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-extrabold sm:text-4xl"
            style={{ color: theme.heading }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg" style={{ color: theme.muted }}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

export default SectionWrapper
