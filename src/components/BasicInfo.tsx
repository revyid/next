'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMapPin, FiMail, FiPhone, FiCalendar } from 'react-icons/fi'
import { personalInfo } from '@/data/personal'

export default function BasicInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const infoItems = [
    { icon: FiMapPin, label: 'Location', value: personalInfo.location },
    { icon: FiMail, label: 'Email', value: personalInfo.email },
    { icon: FiPhone, label: 'Phone', value: personalInfo.phone },
    { icon: FiCalendar, label: 'Experience', value: personalInfo.experience },
  ]

  return (
    <section id="info" className="py-20 bg-gradient-to-b from-gray-950/90 via-gray-900/50 to-gray-900/0">
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
            Basic <span className="text-gradient">Information</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {infoItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-white to-gray-400 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-black" />
                  </motion.div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">{item.label}</h3>
                    <p className="text-lg font-semibold text-white">{item.value}</p>
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