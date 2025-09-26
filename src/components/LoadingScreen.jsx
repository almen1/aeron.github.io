import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"

const LoadingScreen = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showKumusta, setShowKumusta] = useState(false)
  const [isZooming, setIsZooming] = useState(false)

  const helloWords = [
    "Hello", // English
    "Hola", // Spanish
    "Bonjour", // French
    "Guten Tag", // German
    "Ciao", // Italian
    "Olá", // Portuguese
    "Привет", // Russian
    "こんにちは", // Japanese
    "안녕하세요", // Korean
    "你好", // Chinese
    "مرحبا", // Arabic
    "Namaste", // Hindi
    "Sawubona", // Zulu
    "Kumusta" // Filipino (final word)
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < helloWords.length - 1) {
          return prev + 1
        } else {
          // Show kumusta with special styling
          setShowKumusta(true)
          clearInterval(timer)
          return prev
        }
      })
    }, 600) // Change word every 350ms for fast but readable scrolling

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (showKumusta) {
      // After showing kumusta, start zoom in animation
      const zoomTimer = setTimeout(() => {
        setIsZooming(true)
      }, 800) // Show kumusta for 0.8 seconds before zooming

      const completeTimer = setTimeout(() => {
        onComplete()
      }, 3000) // Complete after zoom animation (0.8s + 2.0s zoom)

      return () => {
        clearTimeout(zoomTimer)
        clearTimeout(completeTimer)
      }
    }
  }, [showKumusta, onComplete])

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen bg-white overflow-hidden flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative h-20 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              scale: (showKumusta && isZooming) ? 1200 : 1
            }}
            exit={{ y: -50, opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: showKumusta && isZooming ? 2.0 : 0.3,
              ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier curve
            }}
            className={`text-6xl font-bold ${
              currentIndex === helloWords.length - 1 ? 'text-black' : 'text-neutral-500'
            }`}
          >
            {helloWords[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
