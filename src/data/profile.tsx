import { Brain, Code, Cpu, Mic, Settings } from 'lucide-react'
import { oneDark } from '../theme'

export const userProfile = {
  name: 'Johannes Copeland',
  tagline: 'AI Engineer',
  location: 'Hamburg, Germany',
  email: 'contact@johannescopeland.com',
  linkedin: 'https://www.linkedin.com/in/johannscopeland',
  twitter: 'https://x.com/AIByJohannes',
  github: 'https://github.com/AIByJohannes',
  youtube:
    'https://www.youtube.com/channel/UCbHkKsUfa_jjooXU59EzmoQ',
  bio: "I'm an AI engineer passionate about building intelligent systems that make life better. By day, I work on machine learning models and software solutions; by night, I'm pursuing my Master's in Artificial Intelligence and sharing insights on my YouTube channel about AI and productivity.",
  skills: [
    { name: 'Python', icon: <Code className={`w-6 h-6 text-[${oneDark.blue}]`} /> },
    { name: 'PyTorch', icon: <Brain className={`w-6 h-6 text-[${oneDark.darkYellow}]`} /> },
    { name: 'NLP', icon: <Cpu className={`w-6 h-6 text-[${oneDark.magenta}]`} /> },
    { name: 'FastAPI', icon: <Code className={`w-6 h-6 text-[${oneDark.green}]`} /> },
    { name: 'Docker', icon: <Settings className={`w-6 h-6 text-[${oneDark.cyan}]`} /> },
    { name: 'Hugging Face', icon: <Mic className={`w-6 h-6 text-[${oneDark.lightYellow}]`} /> },
  ],
  projects: [
    {
      id: 'alfred',
      title: 'Alfred',
      description: 'A personal AI assistant and tooling ecosystem.',
      technologies: ['Python', 'TypeScript', 'AI'],
      link: 'https://github.com/AIByJohannes/alfred',
    },
    {
      id: 'elitelm',
      title: 'EliteLM',
      description: 'Explorations and tooling around LLMs and ML systems.',
      technologies: ['Python', 'LLMs', 'ML'],
      link: 'https://github.com/AIByJohannes/elitelm',
    },
    {
      id: 'alfred-android',
      title: 'Alfred Android',
      description: 'Android client for the Alfred assistant.',
      technologies: ['Kotlin', 'Android'],
      link: 'https://github.com/AIByJohannes/alfred-android',
    },
  ],
  youtubeVideos: [
    {
      id: 'fallback1',
      title: 'Why Use Alternatives to OpenAI? #shorts',
      thumbnail: `https://placehold.co/600x400/${oneDark.magenta.substring(1)}/${oneDark.fg.substring(1)}?text=Why+Alternatives+to+OpenAI%3F`,
      link: 'https://www.youtube.com/results?search_query=Why+Use+Alternatives+to+OpenAI%3F+%23shorts',
    },
    {
      id: 'fallback2',
      title: 'Chat with Local AI using LM Studio FOR FREE',
      thumbnail: `https://placehold.co/600x400/${oneDark.green.substring(1)}/${oneDark.fg.substring(1)}?text=LM+Studio+for+Free`,
      link: 'https://www.youtube.com/results?search_query=Chat+with+Local+AI+using+LM+Studio+FOR+FREE',
    },
    {
      id: 'fallback3',
      title: 'Run AI on YOUR Laptop with ONE COMMAND',
      thumbnail: `https://placehold.co/600x400/${oneDark.blue.substring(1)}/${oneDark.fg.substring(1)}?text=Run+AI+on+Your+Laptop`,
      link: 'https://www.youtube.com/results?search_query=Run+AI+on+YOUR+Laptop+with+ONE+COMMAND',
    },
  ],
} as const

export type UserProfile = typeof userProfile
