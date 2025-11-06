'use client'

import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { personalInfo } from '@/data/personal'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [particlePositions, setParticlePositions] = useState<Array<{
    left: number
    top: number
    duration: number
    delay: number
  }>>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setParticlePositions(
      [...Array(20)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    )
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 to-black">
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
          ]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
      />
      
      {mounted && (
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {particlePositions.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </motion.div>
      )}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl md:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            >
              <motion.span 
                className="text-gradient block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  transform: ["rotateY(0deg)", "rotateY(5deg)", "rotateY(0deg)"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {personalInfo.name.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-4"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.5 + index * 0.3,
                      type: "spring",
                      stiffness: 200 
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: [-1, 1, -1, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {personalInfo.tagline.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.02 }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              {personalInfo.skills.slice(0, 6).map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-6 py-3 bg-black/20 backdrop-blur-sm text-gray-300 rounded-full border border-gray-700/50 font-medium"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 2 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    whileHover={{ letterSpacing: "0.1em" }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.button
            onClick={scrollToAbout}
            className="absolute bottom left-1/2 transform -translate-x-1/2 translate-y-1/2 p-4 rounded-full bg-black/20 backdrop-blur-sm border border-gray-700/50"
            animate={{ 
              y: [0, -10, 0],
              boxShadow: [
                "0 0 0 0 rgba(255, 255, 255, 0.1)",
                "0 0 0 10px rgba(255, 255, 255, 0.05)",
                "0 0 0 0 rgba(255, 255, 255, 0.1)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <FiArrowDown className="w-6 h-6 text-gray-400" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  )
}