'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '@/data/projects'

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
              <motion.div
                key={project.id}
                className="bg-zinc-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-video bg-gradient-to-br from-zinc-700 to-zinc-800 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/20">{project.title.charAt(0)}</div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full border border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-zinc-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-zinc-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>Source</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}