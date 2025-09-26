import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Laravel",
  "TailwindCSS",
  "Python",
  "C#",
  "ASP.NET",
  "Figma",
  "Canva",
  "Microsoft Azure",
  "Amazon Lightsail",
  "Vercel",
  "Docker",
  "MySQL",
  "Supabase",
  "Firebase"
]

const Skills = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".skill-item"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )
    }
  }, [])

  return (
    <section 
    ref={sectionRef}
    className="h-fit border-b border-t px-9"
    style={{ 
      backgroundColor: 'var(--color-primary)',
      borderBottomColor: 'var(--color-secondary)',
      borderTopColor: 'var(--color-secondary)'
    }}
  >
    <div className="h-auto flex pt-8 pb-8">
      {/* Left side - Title */}
      <div className="w-1/2 flex items-start justify-start">
        <div className="flex items-center">
          <h2 
            ref={headerRef}
            className="font-main text-6xl font-medium cursor-enlarge"
            style={{ color: 'var(--color-background)', cursor: 'pointer' }}
          >
            MY EXPERTISE ↗
          </h2>
        </div>
      </div>

       {/* Right side - Skills Grid */}
       <div className="w-1/2 flex items-start justify-end">
         <div className="grid grid-cols-2 gap-y-0 gap-x-8">
           {skills.map((skill, index) => (
             <span 
               key={index}
               className="skill-item font-main text-sm font-normal leading-relaxed uppercase"
               style={{ color: 'var(--color-background)' }}
             >
               {skill}
             </span>
           ))}
         </div>
       </div>
     </div>
   </section>
  )
}

export default Skills
