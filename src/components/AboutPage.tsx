import { getTheme } from '../theme'
import { userProfile } from '../data/profile'
import SectionWrapper from './SectionWrapper'
import Card from './ui/Card'
import profileImage from '../assets/pfp_2025.jpg'

export interface AboutPageProps {
  darkMode: boolean
}

export const AboutPage = ({ darkMode }: AboutPageProps) => {
  const theme = getTheme(darkMode)

  return (
    <SectionWrapper title="About Me" subtitle="A glimpse into my journey and expertise." darkMode={darkMode}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div
          className="p-6 sm:p-8 rounded-xl shadow-lg border"
          style={{
            backgroundColor: theme.card,
            borderColor: theme.border,
          }}
        >
          <img
            src={profileImage}
            alt="Johannes - AI Engineer"
            className="rounded-lg shadow-md mx-auto mb-6 w-full max-w-xs object-cover"
          />
          <h3
            className="text-2xl font-semibold mb-3"
            style={{ color: theme.heading }}
          >
            {userProfile.name}
          </h3>
          <p
            className="font-medium mb-4"
            style={{ color: theme.blue }}
          >
            {userProfile.tagline}
          </p>
          <p style={{ color: theme.fg, lineHeight: '1.625' }}>
            {userProfile.bio}
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: theme.heading }}
            >
              My Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {userProfile.skills.map((skill) => (
                <Card
                  key={skill.name}
                  style={{
                    backgroundColor: theme.card,
                    borderColor: theme.border,
                  }}
                >
                  <div className="p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                    <div className="mb-2">{skill.icon}</div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: theme.fg }}
                    >
                      {skill.name}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: theme.heading }}
            >
              Interests
            </h3>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: theme.fg }}
            >
              <li>Large Language Models (LLMs)</li>
              <li>Machine Learning Operations (MLOps)</li>
              <li>AI Safety and Responsible AI</li>
              <li>Content Creation (YouTube and Blogging)</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default AboutPage
