import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.section 
      className="h-[20vh] border-b px-9 py-4"
      style={{ 
        borderBottomColor: 'var(--color-secondary)'
      }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <div className="h-full flex items-center justify-center">
        <p className="font-main text-background text-lg">
          This is About
        </p>
      </div>
    </motion.section>
  )
}

export default About