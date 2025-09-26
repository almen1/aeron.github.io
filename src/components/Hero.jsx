import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin)

const Hero = () => {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const roleRef = useRef(null)
  const scrollRef = useRef(null)
  const webRef = useRef(null)
  const subtextRef = useRef(null)

  const roles = ["DEVELOPER", "DESIGNER"]
  const mouse = useRef({ x: -9999, y: -9999 })
  const dimensionsRef = useRef({ w: 0, h: 0 })
  const dotsRef = useRef([])

  // Hero reveal animations
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    tl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    )
      .fromTo(
        webRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        roleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        subtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
  }, [])

  // Cycle roles with GSAP TextPlugin
  useEffect(() => {
    let i = 0
    const cycle = () => {
      gsap.to(roleRef.current, {
        duration: 1,
        text: roles[i % roles.length],
        ease: "power2.inOut",
      })
      i++
    }
    cycle()
    const interval = setInterval(cycle, 3000)
    return () => clearInterval(interval)
  }, [])

  // Scroll down animation
  useEffect(() => {
    if (scrollRef.current) {
      gsap.to(scrollRef.current, {
        y: 15,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "power1.inOut",
      })
    }
  }, [])

  // Canvas background (untouched)
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
      className="h-[100vh] border-b relative overflow-hidden"
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
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="flex w-full max-w-6xl">
          {/* Left column for WEB */}
          <div className="w-[31%] flex justify-end">
            <h1
              ref={webRef}
              className="font-main text-8xl md:text-[150px] font-bold"
              style={{ color: "var(--color-background)" }}
            >
              WEB&nbsp;
            </h1>
          </div>

          {/* Right column for cycling role */}
          <div className="w-[69%] flex justify-start">
            <h1
              ref={roleRef}
              className="font-main text-8xl md:text-[150px] font-bold"
              style={{ color: "var(--color-background)" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll down animation */}
      <div
        ref={scrollRef}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <span
          className="block w-6 h-6 border-l-2 border-b-2"
          style={{
            borderColor: "var(--color-background)",
            transform: "rotate(-45deg)",
          }}
        />
      </div>
    </section>
  )
}

export default Hero
