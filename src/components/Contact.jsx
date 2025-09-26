import React from 'react'
import { motion } from "motion/react"

const Contact = () => {
  return (
    <motion.section 
      className="h-fit border-b px-9"
      style={{ 
        borderBottomColor: 'var(--color-secondary)'
      }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
    >
      <div className="h-full flex pt-8 pb-32">
        {/* Left side - Title */}
        <div className="w-1/2 flex items-start justify-start">
          <div className="flex items-center">
            <h2 className="font-main text-6xl font-medium" style={{ color: 'var(--color-background)' }}>
              GET IN TOUCH&nbsp;↗
            </h2>
          </div>
        </div>

        {/* Right side - Links */}
        <div className="w-1/2 flex flex-col items-start justify-start">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full py-4 border-b text-4xl font-main font-extralight transition-all duration-300"
            style={{ 
              color: 'var(--color-secondary)',
              borderColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-background)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-secondary)'}
          >
            GitHub
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full py-4 border-b text-4xl font-main font-extralight transition-all duration-300"
            style={{ 
              color: 'var(--color-secondary)',
              borderColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-background)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-secondary)'}
          >
            LinkedIn
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>
          <a 
            href="https://facebook.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full py-4 border-b text-4xl font-main font-extralight transition-all duration-300"
            style={{ 
              color: 'var(--color-secondary)',
              borderColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-background)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-secondary)'}
          >
            Facebook
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
