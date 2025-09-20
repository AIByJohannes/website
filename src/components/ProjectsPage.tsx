import { oneDark } from '../theme'
import { userProfile } from '../data/profile'
import SectionWrapper from './SectionWrapper'
import { useEffect, useState } from 'react'

export interface ProjectsPageProps {
  darkMode: boolean
}

export const ProjectsPage = ({ darkMode }: ProjectsPageProps) => {
  // Add GitHub-backed projects state with fallback
  type ProjectItem = {
    id: number | string
    title: string
    description: string
    technologies: string[]
    link: string
  }

  type ProjectCache = {
    ts: number
    data: ProjectItem[]
  }
  const [ghProjects, setGhProjects] = useState<ProjectItem[]>([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState<string | null>(null)

  // Simple local cache to reduce API calls and avoid hitting rate limits too often
  const CACHE_KEY = 'gh_projects_cache_v1'
  const CACHE_TTL_MS = 1000 * 60 * 60 * 6 // 6 hours

  useEffect(() => {
    let active = true
    const token = import.meta.env?.VITE_GITHUB_TOKEN as string | undefined
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    }
    if (token) headers.Authorization = `Bearer ${token}`

    async function fetchProjects() {
      setLoading(true)
      setError(null)
      try {
        // Try cache first
        const cachedRaw = typeof window !== 'undefined' ? localStorage.getItem(CACHE_KEY) : null
        if (cachedRaw) {
          try {
            const cached = JSON.parse(cachedRaw) as ProjectCache
            const isFresh = Date.now() - cached.ts < CACHE_TTL_MS
            if (isFresh && cached.data?.length) {
              if (active) setGhProjects(cached.data)
              // Still revalidate in background
            }
          } catch {
            // ignore cache parse errors
          }
        }

        const owner = 'AIByJohannes'
        const repos = ['alfred', 'elitelm', 'alfred-android']
        const fetched = await Promise.all(
          repos.map(async (name) => {
            const [repoRes, topicsRes, langsRes] = await Promise.all([
              fetch(`https://api.github.com/repos/${owner}/${name}`, { headers }),
              fetch(`https://api.github.com/repos/${owner}/${name}/topics`, { headers }),
              fetch(`https://api.github.com/repos/${owner}/${name}/languages`, { headers }),
            ])

            if (!repoRes.ok) {
              // Bubble up a helpful message for rate limits
              if (repoRes.status === 403) {
                const text = await repoRes.text()
                throw new Error('GitHub rate limit hit. Add VITE_GITHUB_TOKEN or wait and retry. ' + text)
              }
              throw new Error(`Repo fetch failed for ${name} (${repoRes.status})`)
            }

            const repo = await repoRes.json()
            const topicsJson = topicsRes.ok ? await topicsRes.json() : { names: [] }
            const langsJson = langsRes.ok ? await langsRes.json() : {}
            const topics: string[] = Array.isArray(topicsJson.names) ? topicsJson.names : []
            const languages: string[] = Object.keys(langsJson)
            const technologies = (topics.length ? topics : languages).slice(0, 8)
            const title = (repo.name || name).replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())
            return {
              id: repo.id ?? name,
              title,
              description: repo.description || 'No description provided.',
              technologies,
              link: repo.html_url || `https://github.com/${owner}/${name}`,
            } as ProjectItem
          })
        )
        if (active) {
          setGhProjects(fetched)
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: fetched }))
          } catch {
            // ignore storage errors
          }
        }
      } catch (e: unknown) {
        // fall back gracefully and surface a small hint if rate-limited
        if (active) {
          const msg = e instanceof Error ? e.message : 'Failed to load GitHub projects. Showing fallback.'
          setError(msg)
          // If we have stale cache, prefer showing that
          try {
            const cachedRaw = localStorage.getItem(CACHE_KEY)
            if (cachedRaw) {
              const cached = JSON.parse(cachedRaw) as ProjectCache
              if (cached.data?.length) setGhProjects(cached.data)
            }
          } catch {
            // ignore cache parse errors
          }
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    fetchProjects()
    return () => {
      active = false
    }
  }, [CACHE_KEY, CACHE_TTL_MS])

  const projects = ghProjects.length ? ghProjects : userProfile.projects

  return (
    <SectionWrapper title="My Projects" subtitle="A selection of my work and contributions." darkMode={darkMode}>
      {loading && !ghProjects.length && (
        <p className={`${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-500'}`}>Loading projects…</p>
      )}
  {/* Intentionally no error message shown to users; fallback projects render silently. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${darkMode ? `bg-[${oneDark.bg}] border border-[${oneDark.comment}]` : 'bg-white'} rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col`}
          >
            <img
              src={`https://placehold.co/600x400/${oneDark.cyan.substring(1)}/${oneDark.fg.substring(1)}?text=${project.title.replace(/\s+/g, '+')}`}
              alt={project.title}
              className="w-full h-48 object-cover"
              onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = event.target as HTMLImageElement
                target.onerror = null
                target.src = `https://placehold.co/600x400/c4b5fd/3730a3?text=Error`
              }}
            />
            <div className="p-6 flex-grow flex flex-col">
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? `text-[${oneDark.fg}]` : 'text-gray-900'}`}>{project.title}</h3>
              <p className={`${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-700'} text-sm mb-4 flex-grow`}>{project.description}</p>
              <div className="mb-4">
                <h4 className={`text-xs font-semibold uppercase mb-1 ${darkMode ? `text-[${oneDark.comment}]` : 'text-gray-500'}`}>Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded-full ${darkMode ? `bg-[${oneDark.hoverBg}] text-[${oneDark.blue}]` : 'bg-blue-100 text-blue-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-block text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors ${darkMode ? `text-white bg-[${oneDark.blue}] hover:bg-[${oneDark.cyan}]` : 'text-white bg-blue-600 hover:bg-blue-700'}`}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default ProjectsPage
