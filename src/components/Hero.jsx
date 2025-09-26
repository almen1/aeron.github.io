import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
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
        delay: 0.2 
      })
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="h-[90vh] border-b px-9 py-4"
      style={{ 
        borderBottomColor: 'var(--color-secondary)',
        opacity: 0 // Initial CSS opacity to prevent flash
      }}
    >
      <div className="h-full flex items-center justify-center">
        <p className="font-main text-background text-lg">
          This is Hero
        </p>
      </div>
    </section>
  )
}

export default Hero