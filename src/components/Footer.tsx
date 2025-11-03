'use client'

import { motion } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'
import { personalInfo } from '@/data/personal'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const navItems = ['Home', 'About', 'Info', 'Projects', 'Contact']

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-zinc-900/50 backdrop-blur-sm border-t border-zinc-800/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-white to-zinc-400 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gradient">Portfolio</span>
            </motion.div>
            <p className="text-zinc-400 text-sm">
              Crafting digital experiences with modern web technologies.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-zinc-400 hover:text-white transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-zinc-400">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-zinc-400 text-sm flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="w-4 h-4 text-red-500" />
              </motion.span>
              <span>and Next.js</span>
            </motion.p>

            <motion.p 
              className="text-zinc-500 text-xs mt-2 md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}