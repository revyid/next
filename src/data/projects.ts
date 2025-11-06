export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  thumbnail?: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, featuring user authentication, payment processing, inventory management, and real-time analytics dashboard.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Modern task management application with real-time collaboration, drag-and-drop functionality, team workspaces, and advanced filtering options.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
    liveUrl: "https://taskmaster-app.netlify.app",
    githubUrl: "https://github.com/alexjohnson/task-management",
    featured: true
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using OpenAI's GPT API with custom prompts.",
    technologies: ["Next.js", "OpenAI API", "Python", "FastAPI", "Redis", "Docker"],
    liveUrl: "https://ai-content-gen.vercel.app",
    githubUrl: "https://github.com/alexjohnson/ai-content-generator",
    featured: true
  },
  {
    id: "4",
    title: "Weather Analytics Dashboard",
    description: "Interactive weather analytics dashboard with real-time data visualization, historical trends, and predictive modeling for weather patterns.",
    technologies: ["React", "D3.js", "Python", "Flask", "PostgreSQL", "Chart.js"],
    liveUrl: "https://weather-dashboard.herokuapp.com",
    githubUrl: "https://github.com/alexjohnson/weather-analytics",
    featured: false
  },
  {
    id: "5",
    title: "Social Media Scheduler",
    description: "Comprehensive social media management tool for scheduling posts across multiple platforms, analytics tracking, and content calendar management.",
    technologies: ["Vue.js", "Node.js", "MySQL", "AWS S3", "Twitter API", "Instagram API"],
    liveUrl: "https://social-scheduler.app",
    githubUrl: "https://github.com/alexjohnson/social-scheduler",
    featured: false
  },
  {
    id: "6",
    title: "Cryptocurrency Tracker",
    description: "Real-time cryptocurrency tracking application with portfolio management, price alerts, market analysis, and trading recommendations.",
    technologies: ["React Native", "Redux", "CoinGecko API", "Firebase", "TypeScript"],
    liveUrl: "https://crypto-tracker-mobile.app",
    githubUrl: "https://github.com/alexjohnson/crypto-tracker",
    featured: false
  }
]