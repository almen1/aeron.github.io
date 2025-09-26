import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const About = () => {
  const sectionRef = useRef(null)

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
        delay: 0.3 
      })
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="h-fit border-b px-9"
      style={{ 
        borderBottomColor: 'var(--color-secondary)',
        opacity: 0 // Initial CSS opacity to prevent flash
      }}
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
          <p className="font-main text-xl font-medium leading-relaxed tracking-wider" style={{ color: 'var(--color-background)' }}>
            I'm Aeron Almendras, a passionate web designer and developer who creates visually striking, user-focused websites. I love transforming creative ideas into engaging digital experiences that seamlessly blend beautiful design with powerful functionality.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About