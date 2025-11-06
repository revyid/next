'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { personalInfo } from '@/data/personal'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', url: personalInfo.social.github },
    { icon: FiLinkedin, label: 'LinkedIn', url: personalInfo.social.linkedin },
    { icon: FiTwitter, label: 'Twitter', url: personalInfo.social.twitter },
    { icon: FiMail, label: 'Email', url: `mailto:${personalInfo.email}` },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to bring your ideas to life? Let&apos;s collaborate and create something amazing together.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-gray-700/50 flex items-center justify-center transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Work Together</h3>
            <p className="text-gray-400 mb-6">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center space-x-2 bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="w-5 h-5" />
              <span>Send Message</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}