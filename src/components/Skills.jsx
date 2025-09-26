import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

// Register the TextPlugin
gsap.registerPlugin(TextPlugin)

const skillsData = {
  "Web Development": ["React", "Next.js", "JavaScript", "Node.js", "Laravel", "TailwindCSS", "Python", "C#", "ASP.NET"],
  "Web Design": ["Figma", "Canva"],
  "Cloud": ["Microsoft Azure", "Amazon Lightsail", "Vercel"],
  "Testing": ["Jest", "Cypress"],
  "Database": ["MySQL", "Supabase", "Firebase Firestore", "SQLite", "MariaDB"],
  "Deployment": ["Vercel", "Netlify", "Docker"],
  "Project Management": ["ClickUp", "Trello", "Microsoft Teams", "Git", "GitHub"]
}

const skillIcons = {
  "React": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
  "Next.js": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg",
  "JavaScript": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
  "Node.js": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
  "Laravel": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg",
  "TailwindCSS": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
  "Python": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg",
  "C#": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/csharp.svg",
  "ASP.NET": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dotnet.svg",
  "Figma": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg",
  "Canva": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg",
  "Microsoft Azure": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftazure.svg",
  "Amazon Lightsail": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg",
  "Vercel": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg",
  "Jest": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jest.svg",
  "Cypress": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cypress.svg",
  "MySQL": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg",
  "Supabase": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/supabase.svg",
  "Firebase Firestore": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg",
  "SQLite": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sqlite.svg",
  "MariaDB": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mariadb.svg",
  "Netlify": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netlify.svg",
  "Docker": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg",
  "ClickUp": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/clickup.svg",
  "Trello": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/trello.svg",
  "Microsoft Teams": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftteams.svg",
  "Git": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg",
  "GitHub": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
}

const SkillItem = ({ title, borderLeft, hoveredSkill, setHoveredSkill }) => {
  const isHovered = hoveredSkill === title
  const titleRef = useRef(null)

  const handleMouseEnter = () => {
    setHoveredSkill(title)
    // Copy the exact MY EXPERTISE effect
    if (titleRef.current) {
      const chars = "!@#$%^&*()_+{}[]<>?/abcdefghijklmnopqrstuvwxyz".split("")
      let interval

      const shuffleText = () => {
        let i = 0
        interval = setInterval(() => {
          const scrambled = title
            .split("")
            .map((char, idx) => {
              if (char === " ") return " " // keep spaces
              return idx < i ? title[idx] : chars[Math.floor(Math.random() * chars.length)]
            })
            .join("")
          titleRef.current.textContent = scrambled

          if (i >= title.length) {
            clearInterval(interval)
            titleRef.current.textContent = title
          }
          i++
        }, 50) // speed of shuffle
      }

      shuffleText()
    }
  }

  const handleMouseLeave = () => {
    setHoveredSkill(null)
    // Reset title text back to original
    if (titleRef.current) {
      titleRef.current.textContent = title
    }
  }

  return (
    <div
      className={`w-1/2 flex items-start justify-start h-auto py-4 px-4 transition-all duration-500 hover:cursor-pointer relative select-none ${borderLeft ? "border-l" : ""}`}
      style={{
        borderLeftColor: borderLeft ? 'var(--color-secondary)' : undefined,
        backgroundColor: isHovered ? 'var(--color-background)' : 'transparent',
        cursor: 'none'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Circle + Title */}
      <div className="flex items-center justify-between w-full">
        <h3
          ref={titleRef}
          className="font-main text-2xl font-semibold transition-colors duration-500"
          style={{
            color: isHovered ? 'var(--color-primary)' : 'var(--color-background)'
          }}
        >
          {title}
        </h3>
        <div
          className="circle w-5 h-5 rounded-full border transition-all duration-500"
          style={{
            borderColor: 'var(--color-secondary)',
            backgroundColor: 'transparent'
          }}
        ></div>
      </div>

      {/* Stack Reveal - Top Right */}
      <div
        ref={el => {
          if (el) {
            gsap.set(el, { opacity: 0, y: -10 })
            if (isHovered) {
              gsap.to(el, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" })
            } else {
              gsap.to(el, { opacity: 0, y: -10, duration: 0.4, ease: "power2.out" })
            }
          }
        }}
        className="absolute bottom-4 left-4 flex items-end text-right max-w-[200px]"
      >
        {title === "Web Development" ? (
          <div className="flex gap-8">
            <div className="flex flex-col">
              {skillsData[title]?.slice(0, Math.ceil(skillsData[title].length / 2)).map((stack, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <img 
                    src={skillIcons[stack]} 
                    alt={stack}
                    className="w-3.5 h-3.5"
                    style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}
                  />
                  <span
                    className="text-sm font-medium uppercase tracking-wide leading-tight"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {stack}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              {skillsData[title]?.slice(Math.ceil(skillsData[title].length / 2)).map((stack, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <img 
                    src={skillIcons[stack]} 
                    alt={stack}
                    className="w-3.5 h-3.5"
                    style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}
                  />
                  <span
                    className="text-sm font-medium uppercase tracking-wide leading-tight"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {stack}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            {skillsData[title]?.map((stack, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <img 
                  src={skillIcons[stack]} 
                  alt={stack}
                  className="w-3.5 h-3.5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}
                />
                <span
                  className="text-sm font-medium uppercase tracking-wide leading-tight"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  {stack}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const originalText = "MY EXPERTISE ↗"

  useEffect(() => {
    if (sectionRef.current) {
      // Set initial state immediately to prevent flash
      gsap.set(sectionRef.current, { y: 50, opacity: 0 })
      
      // Then animate
      gsap.to(sectionRef.current, { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out", 
        delay: 0.4 
      })
    }

    const header = headerRef.current
    if (header) {
      const chars = "!@#$%^&*()_+{}[]<>?/abcdefghijklmnopqrstuvwxyz".split("")
      let interval

      const shuffleText = () => {
        let i = 0
        interval = setInterval(() => {
          const scrambled = originalText
            .split("")
            .map((char, idx) => {
              if (char === " ") return " " // keep spaces
              return idx < i ? originalText[idx] : chars[Math.floor(Math.random() * chars.length)]
            })
            .join("")
          header.textContent = scrambled

          if (i >= originalText.length) {
            clearInterval(interval)
            header.textContent = originalText
          }
          i++
        }, 50) // speed of shuffle
      }

      header.addEventListener("mouseenter", shuffleText)
      header.addEventListener("mouseleave", () => {
        clearInterval(interval)
        header.textContent = originalText
      })

      return () => {
        clearInterval(interval)
        header.removeEventListener("mouseenter", shuffleText)
        header.removeEventListener("mouseleave", () => {})
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-fit border-b"
      style={{ 
        borderBottomColor: 'var(--color-secondary)',
        opacity: 0 // Initial CSS opacity to prevent flash
      }}
    >
      {/* ROW 1 */}
      <div className="h-[30vh] flex border-b" style={{ borderBottomColor: 'var(--color-secondary)' }}>
        <div className="w-1/2 flex items-start justify-start py-8 px-9 h-auto">
          <h2 
            ref={headerRef}
            className="font-main text-6xl font-medium cursor-enlarge"
            style={{ color: 'var(--color-background)', cursor: 'pointer' }}
          >
            MY EXPERTISE ↗
          </h2>
        </div>
        <SkillItem title="Web Development" borderLeft hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
      </div>

      {/* ROW 2 */}
      <div className="h-[30vh] flex border-b" style={{ borderBottomColor: 'var(--color-secondary)' }}>
        <SkillItem title="Web Design" hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
        <div className="w-1/2 flex">
          <SkillItem title="Cloud" borderLeft hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
          <SkillItem title="Testing" borderLeft hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
        </div>
      </div>

      {/* ROW 3 */}
      <div className="h-[30vh] flex">
        <div className="w-1/2 flex">
          <SkillItem title="Database" hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
          <SkillItem title="Deployment" borderLeft hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
        </div>
        <SkillItem title="Project Management" borderLeft hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
      </div>
    </section>
  )
}

export default Skills