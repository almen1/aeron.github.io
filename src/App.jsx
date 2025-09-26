import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Footer from './components/footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      <motion.div 
        className="w-screen min-h-screen pb-16"
        style={{ backgroundColor: 'var(--color-primary)' }}
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: 1
        }}
      >
        <motion.div 
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={{ 
            y: isLoading ? 50 : 0,
            opacity: isLoading ? 0 : 1
          }}
          transition={{ 
            duration: 1,
            ease: "easeOut",
            delay: isLoading ? 0 : 0.3
          }}
        >
          <h1 
            className='text-4xl font-bold font-main'
            style={{ color: 'var(--color-background)' }}
          >
            Hello World
          </h1>
        </motion.div>
      </motion.div>
      
      <Footer />
    </>
  )
}

export default App