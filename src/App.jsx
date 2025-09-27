import { useState, useEffect } from "react"
import "./App.css"
import LoadingScreen from "./components/LoadingScreen"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import CustomCursor from "./components/CustomCursor"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Works from "./components/Works"
import Marquee from "./components/Marquee"
import Contact from "./components/Contact"
import BackToTop from "./components/BackToTop"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768) // Tailwind md breakpoint
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {!isLoading && (
        <>
          <Navbar />

          <div
            className="w-screen min-h-screen"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <Hero />
            {/* <About /> */}
            <Skills />
            {/* <Marquee /> */}
            <Works />
            <Contact />
          </div>

          <Footer />
        </>
      )}

      {/* Custom Cursor and Back to Top */}
      {!isLoading && !isMobile && <CustomCursor />}
      {!isLoading && <BackToTop />}
    </>
  )
}

export default App
