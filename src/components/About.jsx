import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.section 
      className="h-fit border-b px-9"
      style={{ 
        borderBottomColor: 'var(--color-secondary)'
      }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <div className="h-full flex pt-8 pb-32">
        {/* Left side - Title */}
        <div className="w-1/2 flex items-start justify-start">
          <div className="flex items-center">
            <h2 className="font-main text-6xl font-medium" style={{ color: 'var(--color-background)' }}>
              ABOUT MYSELF&nbsp;↗
            </h2>
          </div>
        </div>

        {/* Right side - Description */}
        <div className="w-1/2 flex items-start justify-start">
          <p className="font-main text-xl font-medium leading-relaxed tracking-wider" style={{ color: 'var(--color-secondary)' }}>
            I'm Aeron Almendras, a passionate web designer and developer who creates visually striking, user-focused websites. I love transforming creative ideas into engaging digital experiences that seamlessly blend beautiful design with powerful functionality.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default About