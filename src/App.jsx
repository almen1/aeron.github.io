import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/navbar'
import Footer from './components/footer'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Marquee from './components/Marquee'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

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
          
          <div 
            className="w-screen min-h-screen pt-20"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <Hero />
            <About />
            <Skills />
            <Works />
            {/* <Marquee /> */}
            <Contact />
          </div>
          
          <Footer />
        </>
      )}

      {/* Custom Cursor */}
      {!isLoading && <CustomCursor />}
      {!isLoading && <BackToTop />}
    </>
  )
}

export default App