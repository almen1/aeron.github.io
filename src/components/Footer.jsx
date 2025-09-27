import React from 'react'
import { motion } from "motion/react"

const footer = () => {
  return (
    <motion.footer 
      className="w-full"
      style={{ 
        backgroundColor: 'var(--color-primary)'
      }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="px-4 md:px-9 py-4 text-center text-xs md:text-sm font-light">
        <p className="font-main text-background">
          DESIGNED BY AERON&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;MADE WITH REACT&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;BASED IN THE PHILIPPINES
        </p>
      </div>
    </motion.footer>
  )
}

export default footer