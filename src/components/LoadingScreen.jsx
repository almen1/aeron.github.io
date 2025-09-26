import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
import CustomCursor from "./CustomCursor"

const LoadingScreen = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showKumusta, setShowKumusta] = useState(false)
  const [isZooming, setIsZooming] = useState(false)

  const helloWords = [
    "HELLO", // English
    "KUMUSTA" // Filipino (final word)
  ]

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev < helloWords.length - 1) {
            return prev + 1
          } else {
            setShowKumusta(true)
            clearInterval(timer)
            return prev
          }
        })
      }, 600)

      return () => clearInterval(timer)
    }, 100)

    return () => clearTimeout(initialTimer)
  }, [])

  useEffect(() => {
    if (showKumusta) {
      const zoomTimer = setTimeout(() => {
        setIsZooming(true)
      }, 600)

        const completeTimer = setTimeout(() => {
          onComplete()
        }, 2200)

      return () => {
        clearTimeout(zoomTimer)
        clearTimeout(completeTimer)
      }
    }
  }, [showKumusta, onComplete])

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen overflow-hidden flex items-center justify-center z-50"
      style={{ backgroundColor: 'var(--color-background)' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative h-20 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 95, opacity: 0, scale: 0.9 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              scale: (showKumusta && isZooming) ? 1200 : 1
            }}
            exit={{ y: -100, opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: showKumusta && isZooming ? 1.5 : 0.3,
              ease: showKumusta && isZooming  ? [0.76, 0, 0.24, 1]
              : [0.43, 0.195, 0.02, 1]
            }}
              style={{
                color: currentIndex === helloWords.length - 1 ? 'var(--color-primary)' : 'var(--color-primary)'
              }}
            className="text-8xl font-bold font-main"
          >
            {helloWords[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Custom cursor with inverted colors for loading screen */}
      <CustomCursor inverted={true} />
    </motion.div>
  )
}

export default LoadingScreen
