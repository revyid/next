'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '@/data/projects'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  thumbnail?: string
  liveUrl: string
  githubUrl: string
  technologies: string[]
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ z: 50 }}
    >
      <motion.div
        className="bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 relative"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ 
          borderColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.05)',
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 pointer-events-none"
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ transform: 'translateZ(20px)' }}
        />

        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
          {project.thumbnail ? (
            <>
              <motion.div
                animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="w-full h-full"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-gray-900/90 via-gray-900/40 to-transparent"
                animate={isHovered ? { opacity: 0.4 } : { opacity: 0.7 }}
                transition={{ duration: 0.4 }}
              />
            </>
          ) : (
            <>
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(110deg, transparent 25%, rgba(255, 255, 255, 0.03) 50%, transparent 75%)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 0.5
                }}
              />
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={isHovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="text-6xl font-bold text-white/10">
                  {project.title.charAt(0)}
                </div>
              </motion.div>
            </>
          )}
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"
            animate={isHovered ? { opacity: 0.7 } : { opacity: 0.9 }}
            transition={{ duration: 0.4 }}
          />
          
          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{ transform: 'translateZ(40px)' }}
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink className="w-4 h-4 text-white" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub className="w-4 h-4 text-white" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          className="p-6"
          style={{ transform: 'translateZ(30px)' }}
        >
          <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${
            isHovered 
              ? 'bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent' 
              : 'text-white'
          }`}>
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          <motion.div 
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0.8 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0.8 }}
          >
            {project.technologies.slice(0, 3).map((tech: string, idx: number) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
                transition={{ delay: 0.6 + index * 0.1 + idx * 0.05, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <motion.span 
                className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700/50"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                +{project.technologies.length - 3}
              </motion.span>
            )}
          </motion.div>

          <div className="flex items-center gap-4">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}