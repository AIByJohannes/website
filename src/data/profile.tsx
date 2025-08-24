import { Brain, Cloud, Code, Cpu, Database, Mic, Settings } from 'lucide-react';
import { oneDark } from '../theme';

export const userProfile = {
  name: 'Johannes Copeland',
  tagline: 'AI Engineer & Content Creator',
  location: 'Hamburg, Germany 🇩🇪',
  email: 'contact@johannescopeland.com',
  linkedin: 'https://www.linkedin.com/in/johannscopeland',
  twitter: 'https://twitter.com/AIByJohannes',
  github: 'https://github.com/AIByJohannes',
  youtube:
    'https://www.youtube.com/channel/UCbHkKsUfa_jjooXU59EzmoQ',
  bio: "I'm an AI engineer passionate about building intelligent systems that make life better. By day, I work on machine learning models and software solutions; by night, I'm pursuing my Master's in Artificial Intelligence and sharing insights on my YouTube channel about AI and productivity.",
  skills: [
    { name: 'Python', icon: <Code className={`w-6 h-6 text-[${oneDark.blue}]`} /> },
    { name: 'PyTorch', icon: <Brain className={`w-6 h-6 text-[${oneDark.darkYellow}]`} /> },
    { name: 'LLMs', icon: <Cpu className={`w-6 h-6 text-[${oneDark.magenta}]`} /> },
    { name: 'FastAPI', icon: <Code className={`w-6 h-6 text-[${oneDark.green}]`} /> },
    { name: 'Docker', icon: <Settings className={`w-6 h-6 text-[${oneDark.cyan}]`} /> },
    { name: 'Supabase', icon: <Database className={`w-6 h-6 text-[${oneDark.green}]`} /> },
    { name: 'Hugging Face', icon: <Mic className={`w-6 h-6 text-[${oneDark.lightYellow}]`} /> },
    { name: 'Cloud (GCP/AWS)', icon: <Cloud className={`w-6 h-6 text-[${oneDark.cyan}]`} /> },
  ],
  projects: [
    {
      id: 1,
      title: 'AI-Powered Recommendation System',
      description:
        'Developed a content recommendation engine using collaborative filtering and NLP techniques.',
      technologies: ['Python', 'PyTorch', 'FastAPI'],
      link: '#',
    },
    {
      id: 2,
      title: 'YouTube Content Automation',
      description:
        'Building tools to streamline video creation and analysis for my AI channel.',
      technologies: ['Python', 'OpenAI API', 'FFmpeg'],
      link: '#',
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description: 'This very website, built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      link: '#',
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
} as const;

export type UserProfile = typeof userProfile;
