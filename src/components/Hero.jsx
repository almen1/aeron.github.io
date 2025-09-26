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

  const roles = ["DEVELOPER", "DESIGNER"]
  const mouse = useRef({ x: -9999, y: -9999 })
  const dimensionsRef = useRef({ w: 0, h: 0 })
  const dotsRef = useRef([])

  // Reveal animations (no flash)
  useEffect(() => {
    // Only animate text and fade section in
    gsap.set([webRef.current, roleRef.current], { y: 80, opacity: 0 })

    const tl = gsap.timeline()
    tl.to(sectionRef.current, { opacity: 1, duration: 0.6 })
      .to(webRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.2")
      .to(roleRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
  }, [])

  // Cycle roles
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

  // Scroll arrow bounce
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

  // Dot canvas background
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const gridSize = 30
    const size = 2

    const createDots = () => {
      const w = window.innerWidth
      const h = window.innerHeight * 0.8 // 80vh
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
      className="h-screen flex flex-col opacity-0" // hidden until GSAP fade-in
    >
      {/* 80vh dots */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        />
      </div>

      {/* 20vh text */}
      <div className="relative h-[20vh] flex flex-col items-start justify-end z-10">
        <div className="flex w-full max-w-6xl">
          <div className="flex w-full max-w-6xl justify-start px-9 py-4">
            <h1
              className="font-main text-[64px] md:text-[120px] font-normal"
              style={{ color: "var(--color-background)" }}
            >
              <span ref={webRef}>WEB&nbsp;</span>
              <span ref={roleRef}></span>
            </h1>
          </div>

          {/* Simple description */}
          <div className="absolute right-9 top-10 max-w-md">
            <p
              className="font-main text-sm font-normal leading-relaxed cursor-encapsulate"
              style={{ color: "var(--color-background)" }}
            >
              I'M AERON ALMENDRAS, A WEB DESIGNER AND DEVELOPER DEDICATED TO
              BUILDING MODERN, USER-FOCUSED WEBSITES THAT COMBINE CREATIVE
              DESIGN WITH FUNCTIONALITY.
            </p>
          </div>
        </div>

        {/* Scroll arrow */}
        <div
          ref={scrollRef}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <span
            className="block w-6 h-6 border-l-2 border-b-2"
            style={{
              borderColor: "var(--color-background)",
              transform: "rotate(-45deg)",
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
