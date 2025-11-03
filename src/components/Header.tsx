'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '@/components/ThemeProvider'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navItems = ['Home', 'About', 'Info', 'Projects', 'Contact']

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <motion.div 
              className="w-8 h-8 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 rounded-lg flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
                className="w-4 h-4 bg-white dark:bg-black rounded-sm"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.span 
              className="text-xl font-bold text-gradient"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Portfolio
            </motion.span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              >
                <motion.span
                  whileHover={{ letterSpacing: "0.05em" }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-black dark:bg-white"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: '100%', opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.15, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                boxShadow: theme === 'dark' 
                  ? "0 0 20px rgba(255, 255, 255, 0.1)" 
                  : "0 0 20px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <motion.div
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {theme === 'dark' ? (
                  <FiSun className="w-4 h-4 text-yellow-500" />
                ) : (
                  <FiMoon className="w-4 h-4 text-blue-600" />
                )}
              </motion.div>
            </motion.button>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 px-4 text-zinc-300 hover:text-white hover:bg-zinc-800/30 rounded-lg transition-colors"
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}