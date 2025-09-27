import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Contact = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const originalText = "GET IN TOUCH ↗"

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
      className="h-fit border-b px-4 md:px-9"
      style={{ 
        borderBottomColor: 'var(--color-secondary)',
        opacity: 0 // Initial CSS opacity to prevent flash
      }}
    >
      <div className="h-full flex flex-col md:flex-row pt-8 pb-32">
        {/* Left side - Title */}
        <div className="w-full md:w-1/2 flex items-start justify-start mb-8 md:mb-0">
          <div className="flex items-center">
            <h2 
              ref={headerRef}
              className="font-main text-3xl md:text-6xl font-medium cursor-enlarge"
              style={{ color: 'var(--color-background)', cursor: 'pointer' }}
            >
              GET IN TOUCH ↗
            </h2>
          </div>
        </div>

        {/* Right side - Links */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-start">
          <a 
            href="https://github.com/almen1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full py-4 border-b text-2xl md:text-4xl font-main font-extralight transition-all duration-300"
            style={{ 
              color: 'var(--color-secondary)',
              borderColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-background)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-secondary)'}
          >
            GITHUB
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>
          <a 
            href="https://linkedin.com/in/aeron-almendras" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full py-4 border-b text-2xl md:text-4xl font-main font-extralight transition-all duration-300"
            style={{ 
              color: 'var(--color-secondary)',
              borderColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-background)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-secondary)'}
          >
            LINKEDIN
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>
          <a 
            href="mailto:aeronalmendras@gmail.com" 
            className="group flex items-center justify-between w-full py-4 border-b text-2xl md:text-4xl font-main font-extralight transition-all duration-300"
            style={{ 
              color: 'var(--color-secondary)',
              borderColor: 'var(--color-secondary)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-background)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-secondary)'}
          >
            EMAIL
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact