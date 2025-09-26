import React from 'react'
import { motion } from "motion/react"

const Contact = () => {
  return (
    <motion.section 
      className="h-[30%] border-b px-9 py-4"
      style={{ 
        borderBottomColor: 'var(--color-secondary)'
      }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
    >
      <div className="h-full flex items-center justify-center">
        <p className="font-main text-background text-lg">
          This is Contact
        </p>
      </div>
    </motion.section>
  )
}

export default Contact
