import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const About = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
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
        <div className="w-1/2 flex items-start justify-start">
          <p className="font-main text-4xl font-semibold leading-tight tracking-wider" style={{ color: 'var(--color-secondary)' }}>
            I'm Aeron Almendras, a passionate web designer and developer who creates visually striking, user-focused websites. I love transforming creative ideas into engaging digital experiences that seamlessly blend beautiful design with powerful functionality.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
