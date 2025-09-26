import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Works = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const originalText = "FEATURED WORK ↗"

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
        delay: 0.5 
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
      className="h-fit border-b px-9"
      style={{ 
        borderBottomColor: 'var(--color-secondary)',
        backgroundColor: 'var(--color-primary)',
        opacity: 0 // Initial CSS opacity to prevent flash
      }}
    >
      <div className="h-full flex flex-col pt-8 pb-32">
        {/* Title */}
        <div className="w-full flex items-start justify-start mb-12">
          <div className="flex items-center">
            <h2 
              ref={headerRef}
              className="font-main text-6xl font-medium cursor-enlarge"
              style={{ color: 'var(--color-background)', cursor: 'pointer' }}
            >
              FEATURED WORK ↗
            </h2>
          </div>
        </div>

        {/* Projects Grid - Full Width */}
        <div className="w-full flex flex-col items-start justify-start">
          <div className="grid grid-cols-2 gap-6 w-full">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-video mb-2 rounded-sm transition-all duration-300 group-hover:opacity-80" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="font-main text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                React • Supabase • TailwindCSS
              </p>
              <p className="font-main text-2xl font-medium" style={{ color: 'var(--color-background)' }}>
                SAMPLE WEBSITE
              </p>
            </div>
            
            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-video mb-2 rounded-sm transition-all duration-300 group-hover:opacity-80" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="font-main text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                React • Supabase • TailwindCSS
              </p>
              <p className="font-main text-2xl font-medium" style={{ color: 'var(--color-background)' }}>
                SAMPLE WEBSITE
              </p>
            </div>
            
            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-video mb-2 rounded-sm transition-all duration-300 group-hover:opacity-80" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="font-main text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                React • Supabase • TailwindCSS
              </p>
              <p className="font-main text-2xl font-medium" style={{ color: 'var(--color-background)' }}>
                SAMPLE WEBSITE
              </p>
            </div>
            
            {/* Project 4 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-video mb-2 rounded-sm transition-all duration-300 group-hover:opacity-80" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="font-main text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                React • Supabase • TailwindCSS
              </p>
              <p className="font-main text-2xl font-medium" style={{ color: 'var(--color-background)' }}>
                SAMPLE WEBSITE
              </p>
            </div>
            
            {/* Project 5 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-video mb-2 rounded-sm transition-all duration-300 group-hover:opacity-80" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="font-main text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                React • Supabase • TailwindCSS
              </p>
              <p className="font-main text-2xl font-medium" style={{ color: 'var(--color-background)' }}>
                SAMPLE WEBSITE
              </p>
            </div>
            
            {/* Project 6 */}
            <div className="group cursor-pointer">
              <div className="w-full aspect-video mb-2 rounded-sm transition-all duration-300 group-hover:opacity-80" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
              <p className="font-main text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>
                React • Supabase • TailwindCSS
              </p>
              <p className="font-main text-2xl font-medium" style={{ color: 'var(--color-background)' }}>
                SAMPLE WEBSITE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works