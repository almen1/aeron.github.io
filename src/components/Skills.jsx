import React, { useState } from 'react'
import { motion } from "motion/react"

const skillsData = {
  "Web Development": ["React", "Laravel", "Node.js"],
  "Web Design": ["Figma", "Tailwind", "Materialize"],
  "Cloud": ["AWS", "Firebase"],
  "Testing": ["Jest", "Cypress"],
  "Database": ["MySQL", "MongoDB"],
  "Deployment": ["Vercel", "Netlify", "Docker"],
  "Project Management": ["Trello", "Jira", "Agile"]
}

const SkillItem = ({ title, borderLeft, hoveredSkill, setHoveredSkill }) => {
  const isHovered = hoveredSkill === title

  return (
    <div
      className={`w-1/2 flex items-end justify-between h-auto py-4 px-4 transition-all duration-500 hover:cursor-pointer relative select-none ${borderLeft ? "border-l" : ""}`}
      style={{
        borderLeftColor: borderLeft ? 'var(--color-secondary)' : undefined,
        backgroundColor: isHovered ? 'var(--color-background)' : 'transparent'
      }}
      onMouseEnter={() => setHoveredSkill(title)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {/* Circle + Title */}
      <div className="flex items-center gap-2">
        <div
          className="circle w-5 h-5 rounded-full border transition-all duration-500"
          style={{
            borderColor: 'var(--color-secondary)',
            backgroundColor: 'transparent'
          }}
        ></div>
        <h3
          className="font-main text-2xl font-semibold transition-colors duration-500"
          style={{
            color: isHovered ? 'var(--color-primary)' : 'var(--color-background)'
          }}
        >
          {title}
        </h3>
      </div>

      {/* Stack Reveal */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-end pr-2 text-right"
      >
        {skillsData[title]?.map((stack, idx) => (
          <span
            key={idx}
            className="text-sm font-medium"
            style={{ color: 'var(--color-secondary)' }}
          >
            {stack}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <motion.section
      className="h-fit border-b"
      style={{ borderBottomColor: 'var(--color-secondary)' }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    >
      {/* ROW 1 */}
      <div className="h-[20vh] flex border-b" style={{ borderBottomColor: 'var(--color-secondary)' }}>
        <div className="w-1/2 flex items-start justify-start py-8 px-9 h-auto">
          <h2 className="font-main text-6xl font-medium" style={{ color: 'var(--color-background)' }}>
            MY EXPERTISE&nbsp;↗
          </h2>
        </div>
        <SkillItem title="Web Development" borderLeft hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
      </div>

      {/* ROW 2 */}
      <div className="h-[20vh] flex border-b" style={{ borderBottomColor: 'var(--color-secondary)' }}>
        <SkillItem title="Web Design" hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
        <div className="w-1/2 flex">
          <SkillItem title="Cloud" borderLeft hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
          <SkillItem title="Testing" borderLeft hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
        </div>
      </div>

      {/* ROW 3 */}
      <div className="h-[20vh] flex">
        <div className="w-1/2 flex">
          <SkillItem title="Database" hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
          <SkillItem title="Deployment" borderLeft hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
        </div>
        <SkillItem title="Project Management" borderLeft hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
      </div>
    </motion.section>
  )
}

export default Skills
