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
    title: "IP Geolocation Tracker",
    description: "Discover geographic location of any IP address with real-time data visualization, interactive maps, and detailed network information.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ipgeo.revy.my.id",
    thumbnail: "https://revy.my.id/thum/ipgeo.png",
    githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
    featured: true
  }
]