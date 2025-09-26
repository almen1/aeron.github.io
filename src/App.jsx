import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/navbar'
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
      
      {!isLoading && (
        <>
          <Navbar />
          
          <motion.div 
            className="w-screen min-h-screen pt-20 pb-16"
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
                y: 0,
                opacity: 1
              }}
              transition={{ 
                duration: 1,
                ease: "easeOut",
                delay: 0.3
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
      )}
    </>
  )
}

export default App