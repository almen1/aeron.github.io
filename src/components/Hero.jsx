import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const Hero = () => {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const roleRef = useRef(null)

  const roles = ["DEVELOPER", "DESIGNER"]
  const [roleIndex, setRoleIndex] = useState(0)

  const mouse = useRef({ x: -9999, y: -9999 }) // start offscreen
  const dimensionsRef = useRef({ w: 0, h: 0 })
  const dotsRef = useRef([]) // precomputed grid dots

  // Fade-in hero
  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
      )
    }
  }, [])

  // Cycle roles
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(roleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setRoleIndex((prev) => (prev + 1) % roles.length)
          gsap.fromTo(
            roleRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
          )
        },
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  // Setup canvas once
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const gridSize = 30
    const size = 2

    const createDots = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      dimensionsRef.current = { w, h }
      canvas.width = w
      canvas.height = h

      const dots = []
      for (let i = 2; i < w / gridSize - 1; i++) {
        for (let j = 2; j < h / gridSize - 1; j++) {
          dots.push({ x: i * gridSize, y: j * gridSize })
        }
      }
      dotsRef.current = dots
    }

    createDots()
    window.addEventListener("resize", createDots)

    const drawDots = () => {
      const { w, h } = dimensionsRef.current
      ctx.clearRect(0, 0, w, h)

      const mx = mouse.current.x
      const my = mouse.current.y

      for (const dot of dotsRef.current) {
        let dx = dot.x - mx
        let dy = dot.y - my
        let dist = Math.sqrt(dx * dx + dy * dy)

        let offsetX = (dx / dist) * gridSize
        let offsetY = (dy / dist) * gridSize
        if (!isFinite(offsetX)) offsetX = 0
        if (!isFinite(offsetY)) offsetY = 0

        ctx.beginPath()
        ctx.arc(dot.x + offsetX, dot.y + offsetY, size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255,255,255,0.7)"
        ctx.fill()
      }
    }

    const animate = () => {
      drawDots()
      requestAnimationFrame(animate)
    }
    animate()

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    const handleMouseLeave = () => {
      mouse.current.x = -9999
      mouse.current.y = -9999
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("resize", createDots)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-[90vh] border-b relative overflow-hidden"
      style={{
        borderBottomColor: "var(--color-secondary)",
        opacity: 0,
      }}
    >
      {/* Dot grid background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="flex w-full max-w-6xl">
          {/* Left column for WEB */}
          <div className="w-[34%] flex justify-end">
            <h1
              className="font-main text-8xl md:text-[150px] font-bold cursor-enlarge"
              style={{ color: "var(--color-background)" }}
            >
              WEB&nbsp;
            </h1>
          </div>

          {/* Right column for cycling role */}
          <div className="w-[66%] flex justify-start">
            <h1
              ref={roleRef}
              className="font-main text-8xl md:text-[150px] font-bold cursor-enlarge text-neutral-500"
              // style={{ color: "var(--color-background)" }}
            >
              {roles[roleIndex]}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
