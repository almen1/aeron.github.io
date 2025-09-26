import React, { useState } from 'react'
import { motion } from "motion/react"

const skillsData = {
  "Web Development": ["React", "Next.js", "JavaScript", "Node.js", "Laravel", "TailwindCSS", "Python", "C#", "ASP.NET"],
  "Web Design": ["Figma", "Canva"],
  "Cloud": ["Microsoft Azure", "Amazon Lightsail", "Vercel"],
  "Testing": ["Jest", "Cypress"],
  "Database": ["MySQL", "Supabase", "Firebase Firestore", "SQLite", "MariaDB"],
  "Deployment": ["Vercel", "Netlify", "Docker"],
  "Project Management": ["ClickUp", "Trello", "Microsoft Teams", "Git", "GitHub"]
}

const SkillItem = ({ title, borderLeft, hoveredSkill, setHoveredSkill }) => {
  const isHovered = hoveredSkill === title

  return (
    <div
      className={`w-1/2 flex items-start justify-start h-auto py-4 px-4 transition-all duration-500 hover:cursor-pointer relative select-none ${borderLeft ? "border-l" : ""}`}
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

      {/* Stack Reveal - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-4 right-4 flex items-end text-right max-w-[200px]"
      >
        {title === "Web Development" ? (
          <div className="flex gap-4">
            <div className="flex flex-col">
              {skillsData[title]?.slice(0, Math.ceil(skillsData[title].length / 2)).map((stack, idx) => (
                <span
                  key={idx}
                  className="text-sm font-medium uppercase tracking-wide leading-tight"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  {stack}
                </span>
              ))}
            </div>
            <div className="flex flex-col">
              {skillsData[title]?.slice(Math.ceil(skillsData[title].length / 2)).map((stack, idx) => (
                <span
                  key={idx}
                  className="text-sm font-medium uppercase tracking-wide leading-tight"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            {skillsData[title]?.map((stack, idx) => (
              <span
                key={idx}
                className="text-sm font-medium uppercase tracking-wide leading-tight"
                style={{ color: 'var(--color-secondary)' }}
              >
                {stack}
              </span>
            ))}
          </div>
        )}
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
