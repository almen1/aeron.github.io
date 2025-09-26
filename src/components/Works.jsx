import React from 'react'
import { motion } from "motion/react"

const Works = () => {
  return (
    <motion.section 
      className="h-fit border-b px-9"
      style={{ 
        borderBottomColor: 'var(--color-secondary)'
      }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      <div className="h-full flex flex-col pt-8 pb-32">
        {/* Title */}
        <div className="w-full flex items-start justify-start mb-12">
          <div className="flex items-center">
            <h2 className="font-main text-6xl font-medium" style={{ color: 'var(--color-background)' }}>
              FEATURED WORK&nbsp;↗
            </h2>
          </div>
        </div>

        {/* Projects Grid - Full Width */}
        <div className="w-full flex flex-col items-start justify-start">
          <div className="grid grid-cols-2 gap-6 w-full">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-video mb-2 rounded-sm transition-all duration-300 group-hover:opacity-80" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="font-main text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                React • Supabase • TailwindCSS
              </p>
              <p className="font-main text-2xl font-medium" style={{ color: 'var(--color-background)' }}>
                SAMPLE WEBSITE
              </p>
            </div>
            
            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-video mb-2 rounded-sm transition-all duration-300 group-hover:opacity-80" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="font-main text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                React • Supabase • TailwindCSS
              </p>
              <p className="font-main text-2xl font-medium" style={{ color: 'var(--color-background)' }}>
                SAMPLE WEBSITE
              </p>
            </div>
            
            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-video mb-2 rounded-sm transition-all duration-300 group-hover:opacity-80" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="font-main text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                React • Supabase • TailwindCSS
              </p>
              <p className="font-main text-2xl font-medium" style={{ color: 'var(--color-background)' }}>
                SAMPLE WEBSITE
              </p>
            </div>
            
            {/* Project 4 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-video mb-2 rounded-sm transition-all duration-300 group-hover:opacity-80" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="font-main text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                React • Supabase • TailwindCSS
              </p>
              <p className="font-main text-2xl font-medium" style={{ color: 'var(--color-background)' }}>
                SAMPLE WEBSITE
              </p>
            </div>
            
            {/* Project 5 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-video mb-2 rounded-sm transition-all duration-300 group-hover:opacity-80" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="font-main text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                React • Supabase • TailwindCSS
              </p>
              <p className="font-main text-2xl font-medium" style={{ color: 'var(--color-background)' }}>
                SAMPLE WEBSITE
              </p>
            </div>
            
            {/* Project 6 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-video mb-2 rounded-sm transition-all duration-300 group-hover:opacity-80" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="font-main text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                React • Supabase • TailwindCSS
              </p>
              <p className="font-main text-2xl font-medium" style={{ color: 'var(--color-background)' }}>
                SAMPLE WEBSITE
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Works
