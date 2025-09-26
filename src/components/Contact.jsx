import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Contact = () => {
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
        delay: 0.6 
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
              GET IN TOUCH&nbsp;↗
            </h2>
          </div>
        </div>

        {/* Right side - Links */}
        <div className="w-1/2 flex flex-col items-start justify-start">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full py-4 border-b text-4xl font-main font-extralight transition-all duration-300"
            style={{ 
              color: 'var(--color-secondary)',
              borderColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-background)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-secondary)'}
          >
            GitHub
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full py-4 border-b text-4xl font-main font-extralight transition-all duration-300"
            style={{ 
              color: 'var(--color-secondary)',
              borderColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-background)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-secondary)'}
          >
            LinkedIn
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>
          <a 
            href="https://facebook.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full py-4 border-b text-4xl font-main font-extralight transition-all duration-300"
            style={{ 
              color: 'var(--color-secondary)',
              borderColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-background)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-secondary)'}
          >
            Facebook
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact