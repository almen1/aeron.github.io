import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const speed = 0.04 // balanced trailing speed

  useEffect(() => {
    const cursor = cursorRef.current
    gsap.set(cursor, { xPercent: -50, yPercent: -50 })

    const updateMousePosition = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      const elementAtCursor = document.elementFromPoint(e.clientX, e.clientY)

      if (elementAtCursor) {
        // Check for cursor-enlarge class (2.2x scale)
        if (elementAtCursor.classList.contains('cursor-enlarge')) {
          gsap.to(cursor, {
            backgroundColor: "#ffffff",
            scale: 2.5,
            mixBlendMode: "difference",
            duration: 0.4,
            ease: "power2.out"
          })
        } 
        // Check for cursor-encapsulate class (15x scale - covers text)
        else if (elementAtCursor.classList.contains('cursor-encapsulate')) {
          gsap.to(cursor, {
            backgroundColor: "#ffffff",
            scale: 5.0,
            mixBlendMode: "difference",
            duration: 0.4,
            ease: "power2.out"
          })
        } else if (elementAtCursor.tagName === "A") {
          gsap.to(cursor, {
            backgroundColor: "var(--color-secondary)",
            scale: 0.3,
            duration: 0.3,
          })
        } else if (
          elementAtCursor.tagName === "BUTTON" ||
          elementAtCursor.classList.contains("cursor-pointer")
        ) {
          gsap.to(cursor, {
            backgroundColor: "var(--color-primary)",
            scale: 0.4,
            duration: 0.3,
          })
        } else {
          gsap.to(cursor, {
            backgroundColor: "var(--color-background)",
            scale: 1,
            duration: 0.3,
          })
        }
      }
    }

    const updateCursor = () => {
      // Smoother, balanced resistance
      pos.current.x += (mouse.current.x - pos.current.x) * speed
      pos.current.y += (mouse.current.y - pos.current.y) * speed

      gsap.set(cursor, {
        x: pos.current.x,
        y: pos.current.y,
      })

      requestAnimationFrame(updateCursor)
    }

    window.addEventListener("mousemove", updateMousePosition)
    updateCursor()

    gsap.to(cursor, {
      rotation: 360,
      duration: 16,
      repeat: -1,
      ease: "linear",
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50 w-8 h-8 rounded-full"
      style={{
        backgroundColor: "var(--color-background)",
        mixBlendMode: "difference",
      }}
    />
  )
}

export default CustomCursor
