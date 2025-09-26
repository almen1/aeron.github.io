import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import './App.css'
import LoadingScreen from './components/LoadingScreen'

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
        className="bg-black w-screen min-h-screen"
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
            delay: isLoading ? 0 : 0.5
          }}
        >
          <h1 className='text-white text-4xl font-bold'>Hello World</h1>
        </motion.div>
      </motion.div>
    </>
  )
}

export default App