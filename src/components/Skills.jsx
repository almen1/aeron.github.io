import React from 'react'
import { motion } from "motion/react"

const Skills = () => {
  return (
    <motion.section
      className="h-fit border-b"
      style={{
        borderBottomColor: 'var(--color-secondary)'
      }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    >
      {/* ROW 1 */}
      <div className="h-[20vh] flex border-b"
        style={{
          borderBottomColor: 'var(--color-secondary)'
        }}
      >
        {/* MY EXPERTISE */}
        <div className="w-1/2 flex items-start justify-start py-8 px-9 h-auto">
          <h2 className="font-main text-6xl font-medium" style={{ color: 'var(--color-background)' }}>
            MY EXPERTISE&nbsp;↗
          </h2>
        </div>
        {/* Web Development */}
        <div className="w-1/2 flex items-end justify-start border-l h-auto py-4 px-4 transition-all duration-300 hover:cursor-pointer"
          style={{
            borderLeftColor: 'var(--color-secondary)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--color-background)'
            e.target.querySelector('h3').style.color = 'var(--color-primary)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'
            e.target.querySelector('h3').style.color = 'var(--color-background)'
          }}
        >
          <h3 className="font-main text-2xl font-semibold" style={{ color: 'var(--color-background)' }}>
            Web Development
          </h3>
        </div>
      </div>
      {/* ROW 2 */}
      <div className="h-[20vh] flex border-b"
        style={{
          borderBottomColor: 'var(--color-secondary)'
        }}
      >
        {/* Web Design */}
        <div className="w-1/2 flex items-end justify-start border-l h-auto py-4 px-4 transition-all duration-300 hover:cursor-pointer"
          style={{
            borderLeftColor: 'var(--color-secondary)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--color-background)'
            e.target.querySelector('h3').style.color = 'var(--color-primary)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'
            e.target.querySelector('h3').style.color = 'var(--color-background)'
          }}
        >
          <h3 className="font-main text-2xl font-semibold" style={{ color: 'var(--color-background)' }}>
            Web Design
          </h3>
        </div>
        {/* Cloud & Testing */}
        <div className="w-1/2 flex border-l"
          style={{
            borderLeftColor: 'var(--color-secondary)'
          }}
        >
          <div className="w-1/2 flex items-end justify-start border-l h-auto py-4 px-4 transition-all duration-300 hover:cursor-pointer"
            style={{
              borderLeftColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--color-background)'
              e.target.querySelector('h3').style.color = 'var(--color-primary)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.querySelector('h3').style.color = 'var(--color-background)'
            }}
          >
            <h3 className="font-main text-2xl font-semibold" style={{ color: 'var(--color-background)' }}>
              Cloud
            </h3>
          </div>
          <div className="w-1/2 flex items-end justify-start border-l h-auto py-4 px-4 transition-all duration-300 hover:cursor-pointer"
            style={{
              borderLeftColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--color-background)'
              e.target.querySelector('h3').style.color = 'var(--color-primary)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.querySelector('h3').style.color = 'var(--color-background)'
            }}
          >
            <h3 className="font-main text-2xl font-semibold" style={{ color: 'var(--color-background)' }}>
              Testing
            </h3>
          </div>
        </div>
      </div>
      {/* ROW 3 */}
      <div className="h-[20vh] flex">
        {/* Database & Deployment */}
        <div className="w-1/2 flex">
          <div className="w-1/2 flex items-end justify-start border-l h-auto py-4 px-4 transition-all duration-300 hover:cursor-pointer"
            style={{
              borderLeftColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--color-background)'
              e.target.querySelector('h3').style.color = 'var(--color-primary)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.querySelector('h3').style.color = 'var(--color-background)'
            }}
          >
            <h3 className="font-main text-2xl font-semibold" style={{ color: 'var(--color-background)' }}>
              Database
            </h3>
          </div>
          <div className="w-1/2 flex items-end justify-start border-l h-auto py-4 px-4 transition-all duration-300 hover:cursor-pointer"
            style={{
              borderLeftColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--color-background)'
              e.target.querySelector('h3').style.color = 'var(--color-primary)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.querySelector('h3').style.color = 'var(--color-background)'
            }}
          >
            <h3 className="font-main text-2xl font-semibold" style={{ color: 'var(--color-background)' }}>
              Deployment
            </h3>
          </div>
        </div>
        {/* Project Management */}
        <div className="w-1/2 flex items-end justify-start border-l h-auto py-4 px-4 transition-all duration-300 hover:cursor-pointer"
          style={{
            borderLeftColor: 'var(--color-secondary)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--color-background)'
            e.target.querySelector('h3').style.color = 'var(--color-primary)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent'
            e.target.querySelector('h3').style.color = 'var(--color-background)'
          }}
        >
          <h3 className="font-main text-2xl font-semibold" style={{ color: 'var(--color-background)' }}>
            Project Management
          </h3>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills