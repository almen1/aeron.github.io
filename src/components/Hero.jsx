import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = 4
    this.baseX = this.x
    this.baseY = this.y
    this.speed = (Math.random() * 25) + 5
  }

  draw(ctx) {
    ctx.fillStyle = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-secondary") || "rgba(81,81,81,0.2)"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }

  update(mouse) {
    let dx = mouse.x - this.x
    let dy = mouse.y - this.y
    let distance = Math.sqrt(dx * dx + dy * dy)
    let maxDistance = mouse.radius
    let force = (maxDistance - distance) / maxDistance // 0 ~ 1
    let forceDirectionX = dx / distance
    let forceDirectionY = dy / distance
    let directionX = forceDirectionX * force * this.speed
    let directionY = forceDirectionY * force * this.speed

    if (distance < mouse.radius) {
      this.x -= directionX
      this.y -= directionY
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX
        this.x -= dx / 10
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY
        this.y -= dy / 10
      }
    }
  }
}

const Hero = () => {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = ["Developer", "Designer"]
  const [particles, setParticles] = useState([])
  const [mouse, setMouse] = useState({ x: undefined, y: undefined, radius: 100 })
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 })

  // Fade-in animation
  useEffect(() => {
    if (sectionRef.current) {
      gsap.set(sectionRef.current, { y: 50, opacity: 0 })
      gsap.to(sectionRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      })
    }
  }, [])

  // Cycle between Developer / Designer
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2000) // change every 2s
    return () => clearInterval(interval)
  }, [])

  // Initialize particles
  useEffect(() => {
    const initParticles = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const particleDistance = 40
      const newParticles = []

      for (let y = (((h - particleDistance) % particleDistance) + particleDistance) / 2; y < h; y += particleDistance) {
        for (let x = (((w - particleDistance) % particleDistance) + particleDistance) / 2; x < w; x += particleDistance) {
          newParticles.push(new Particle(x, y))
        }
      }

      setParticles(newParticles)
      setDimensions({ w, h })
    }

    initParticles()
    window.addEventListener("resize", initParticles)
    return () => window.removeEventListener("resize", initParticles)
  }, [])

  // Animation loop
  useEffect(() => {
    if (!particles.length || !dimensions.w || !dimensions.h) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationId

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.w, dimensions.h)
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update(mouse)
        particle.draw(ctx)
      })
      
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [particles, mouse, dimensions])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse(prev => ({ ...prev, x: e.clientX, y: e.clientY }))
    }

    const handleMouseOut = () => {
      setMouse(prev => ({ ...prev, x: undefined, y: undefined }))
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-[90vh] border-b relative overflow-hidden"
      style={{
        borderBottomColor: 'var(--color-secondary)',
        opacity: 0,
      }}
    >
      {/* Interactive particle system */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
        width={dimensions.w}
        height={dimensions.h}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="font-main text-6xl md:text-8xl font-bold flex items-center space-x-4">
          <span style={{ color: 'var(--color-background)' }}>WEB</span>
          <span style={{ color: 'var(--color-background)' }}>
            {roles[roleIndex]}
          </span>
        </h1>
      </div>
    </section>
  )
}

export default Hero
