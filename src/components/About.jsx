import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const About = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const descriptionRef = useRef(null)
  const originalText = "ABOUT MYSELF ↗"

  useEffect(() => {
    if (sectionRef.current) {
      // Initial fade-in animation
      gsap.set(sectionRef.current, { y: 50, opacity: 0 })
      gsap.to(sectionRef.current, { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out", 
        delay: 0.3 
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

    // Cursor enlargement for description
    const description = descriptionRef.current
    if (description) {
      const handleMouseEnter = () => {
        gsap.to(description, {
          scale: 10.0,
          duration: 0.4,
          ease: "power2.out"
        })
      }

      const handleMouseLeave = () => {
        gsap.to(description, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        })
      }

      description.addEventListener("mouseenter", handleMouseEnter)
      description.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        description.removeEventListener("mouseenter", handleMouseEnter)
        description.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="h-fit border-b px-9"
      style={{ 
        borderBottomColor: 'var(--color-secondary)',
        opacity: 0
      }}
    >
      <div className="h-[90vh] flex pt-8 pb-8">
        {/* Left side - Title */}
        <div className="w-1/2 flex items-start justify-start">
          <div className="flex items-center">
            <h2 
              ref={headerRef}
              className="font-main text-6xl font-medium cursor-enlarge"
              style={{ color: 'var(--color-background)', cursor: 'pointer' }}
            >
              ABOUT MYSELF ↗
            </h2>
          </div>
        </div>

        {/* Right side - Description */}
        <div className="w-1/2 flex items-end justify-start">
          <p 
            ref={descriptionRef}
            className="font-main text-5xl font-medium leading-tight tracking-wider cursor-encapsulate text-neutral-500" 
            // style={{ color: 'var(--color-secondary)' }}
          >
I’M AERON ALMENDRAS, A WEB DESIGNER AND DEVELOPER DEDICATED TO BUILDING MODERN, USER-FOCUSED WEBSITES THAT COMBINE CREATIVE DESIGN WITH FUNCTIONALITY.          </p>
        </div>
      </div>
    </section>
  )
}

export default About
