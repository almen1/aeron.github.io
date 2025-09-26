import { motion, useMotionValue, useSpring } from "motion/react"
import { useEffect } from "react"

const CustomCursor = ({ inverted = false }) => {
  // Custom cursor with motion values
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springX = useSpring(cursorX, { stiffness: 200, damping: 20 })
  const springY = useSpring(cursorY, { stiffness: 200, damping: 20 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        x: springX,
        y: springY,
      }}
    >
       <motion.div
         className="w-8 h-8 rounded-full"
         style={{
           backgroundColor: inverted ? 'var(--color-primary)' : 'var(--color-background)',
         }}
         animate={{
           scale: [1, 1.1, 1],
         }}
         transition={{
           duration: 1.5,
           repeat: Infinity,
           ease: "easeInOut"
         }}
       />
    </motion.div>
  )
}

export default CustomCursor
