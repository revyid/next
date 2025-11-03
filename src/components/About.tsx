'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '@/data/personal'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-950 dark:to-gray-950 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.05) 50%, transparent 70%)",
            "linear-gradient(225deg, transparent 30%, rgba(0,0,0,0.05) 50%, transparent 70%)",
            "linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.05) 50%, transparent 70%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-zinc-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Core Technologies</h3>
                <div className="grid grid-cols-2 gap-2">
                  {personalInfo.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-2 text-zinc-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="aspect-square bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <div className="w-32 h-32 bg-gradient-to-br from-white to-zinc-400 rounded-full flex items-center justify-center text-4xl font-bold text-black">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}