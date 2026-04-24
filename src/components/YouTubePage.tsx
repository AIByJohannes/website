import { useEffect, useState } from 'react'
import { ExternalLink, PlayCircle } from 'lucide-react'
import { getTheme } from '../theme'
import { userProfile } from '../data/profile'
import SectionWrapper from './SectionWrapper'
import Card from './ui/Card'

export interface YouTubePageProps {
  darkMode: boolean
}

export const YouTubePage = ({ darkMode }: YouTubePageProps) => {
  const theme = getTheme(darkMode)

  type Video = {
    id: string
    title: string
    thumbnail: string
    link: string
  }

  const [videos, setVideos] = useState<Video[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const extractChannelId = (url: string): string | null => {
    try {
      const u = new URL(url)
      const parts = u.pathname.split('/').filter(Boolean)
      const idx = parts.indexOf('channel')
      if (idx !== -1 && parts[idx + 1]) return parts[idx + 1]
      return null
    } catch {
      return null
    }
  }

  useEffect(() => {
    const run = async () => {
      setLoading(true)
      setError(null)

      const channelId = extractChannelId(userProfile.youtube)
      if (!channelId) {
        setError('Could not determine YouTube channel ID.')
        setVideos(userProfile.youtubeVideos as unknown as Video[])
        setLoading(false)
        return
      }
      const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
      try {
        const res = await fetch(apiUrl, { headers: { Accept: 'application/json' } })
        if (!res.ok) throw new Error(`Feed error: ${res.status}`)
        interface RssItem {
          title?: string
          pubDate?: string
          link?: string
          guid?: string
          thumbnail?: string
        }
        interface RssResponse {
          items?: RssItem[]
        }
        const data = (await res.json()) as RssResponse
        const items: RssItem[] = Array.isArray(data?.items) ? data.items : []
        const mapped: Video[] = items.slice(0, 3).map((it) => {
          const idMatch = typeof it.link === 'string' ? /[?&]v=([a-zA-Z0-9_-]{6,})/.exec(it.link) : null
          const id = idMatch?.[1] ?? (typeof it.guid === 'string' ? it.guid : 'unknown')
          const thumbnail = it.thumbnail || (id !== 'unknown' ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : `https://placehold.co/600x400/ef4444/ffffff?text=No+Thumbnail`)
          return {
            id,
            title: String(it.title ?? 'Untitled video'),
            link: String(it.link ?? `https://www.youtube.com/channel/${channelId}`),
            thumbnail,
          }
        })
        if (mapped.length > 0) {
          setVideos(mapped)
        } else {
          setVideos(userProfile.youtubeVideos as unknown as Video[])
        }
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : 'Failed to load videos.'
        setError(message)
        setVideos(userProfile.youtubeVideos as unknown as Video[])
      } finally {
        setLoading(false)
      }
    }

    run()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile.youtube])

  const list: Video[] = (videos ?? (userProfile.youtubeVideos as unknown as Video[])).slice(0, 3)

  return (
    <SectionWrapper title="My YouTube Channel" subtitle="Insights on AI, Productivity, and Tech." darkMode={darkMode}>
      <a
        href={userProfile.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-12 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white transition-colors"
        style={{
          backgroundColor: theme.red,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#c75661' }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = theme.red }}
      >
        <ExternalLink className="w-5 h-5 mr-2" /> Visit Channel
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading && list.length === 0 && (
          <div className="col-span-full text-center">
            <span style={{ color: theme.muted }}>Loading latest videos…</span>
          </div>
        )}
        {!loading && error && (
          <div className="col-span-full text-center">
            <span style={{ color: theme.muted }}>Showing recent videos.</span>
          </div>
        )}
        {list.map((video) => (
          <Card
            key={video.id}
            style={{
              backgroundColor: theme.card,
              borderColor: theme.border,
            }}
          >
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
                onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = event.target as HTMLImageElement
                  target.onerror = null
                  target.src = `https://placehold.co/600x400/ef4444/ffffff?text=Video+Error`
                }}
              />
            </a>
            <div className="p-6">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: theme.heading }}
              >
                {video.title}
              </h3>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-colors"
                style={{ color: theme.link }}
                onMouseEnter={(e) => { e.currentTarget.style.color = theme.linkHover }}
                onMouseLeave={(e) => { e.currentTarget.style.color = theme.link }}
              >
                <PlayCircle className="w-4 h-4 mr-1" /> Watch Video
              </a>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default YouTubePage
