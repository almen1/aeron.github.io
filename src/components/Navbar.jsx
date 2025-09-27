import React, { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin)

const Navbar = () => {
  const navRef = useRef(null)
  const linkedinRef = useRef(null)
  const emailRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.set(navRef.current, { y: -100, opacity: 0 })
    gsap.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    })
  }, [])

  const handleLinkedinHover = () =>
    gsap.to(linkedinRef.current, {
      duration: 0.4,
      text: "linkedin/in/aeron-almendras",
      ease: "power2.out",
      overwrite: true,
    })

  const handleLinkedinLeave = () =>
    gsap.to(linkedinRef.current, {
      duration: 0.4,
      text: "LINKEDIN",
      ease: "power2.out",
      overwrite: true,
    })

  const handleEmailHover = () =>
    gsap.to(emailRef.current, {
      duration: 0.4,
      text: "aeronalmendras@gmail.com",
      ease: "power2.out",
      overwrite: true,
    })

  const handleEmailLeave = () =>
    gsap.to(emailRef.current, {
      duration: 0.4,
      text: "EMAIL",
      ease: "power2.out",
      overwrite: true,
    })

  // Animate mobile dropdown height
  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        height: menuOpen ? "auto" : 0,
        duration: 0.45,
        ease: "power2.inOut",
      })
    }
  }, [menuOpen])

  return (
    <motion.nav
      ref={navRef}
      className="w-full fixed top-0 left-0 right-0 z-50 border-b inline-flex"
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-background)",
        borderBottomColor: "var(--color-secondary)",
        opacity: 0,
        transform: "translateY(-100px)",
      }}
    >
      {/* === LEFT SIDE (brand + line) === */}
      <div className="flex items-center px-4 md:px-9 py-4 md:py-4">
        <div className="font-main">iamaeron®</div>
        <div
          className="ml-2 md:ml-4 h-px w-[200px] md:w-[500px]"
          style={{ backgroundColor: "var(--color-background)" }}
        />
      </div>

      {/* === RIGHT SIDE (desktop links) === */}
      <div className="hidden md:flex items-end h-auto ml-auto">
        <button
          className="desktop-link h-full w-32 sm:w-40 md:w-80 border-l font-main text-xs sm:text-sm transition-all duration-300 group"
          style={{
            borderLeftColor: "var(--color-secondary)",
            color: "var(--color-background)",
          }}
          onMouseEnter={handleLinkedinHover}
          onMouseLeave={handleLinkedinLeave}
        >
          <span ref={linkedinRef}>LINKEDIN</span>
        </button>

        <button
          className="desktop-link h-full w-32 sm:w-40 md:w-80 border-l font-main text-xs sm:text-sm transition-all duration-300 group"
          style={{
            borderLeftColor: "var(--color-secondary)",
            color: "var(--color-background)",
          }}
          onMouseEnter={handleEmailHover}
          onMouseLeave={handleEmailLeave}
        >
          <span ref={emailRef}>EMAIL</span>
        </button>
      </div>

      {/* === HAMBURGER (mobile only) === */}
      <button
        className="md:hidden ml-auto flex flex-col justify-center items-center px-4"
        onClick={() => setMenuOpen((p) => !p)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-[var(--color-background)] transition-transform duration-300 ${
            menuOpen ? "translate-y-1 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-[var(--color-background)] transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-[var(--color-background)] transition-transform duration-300 ${
            menuOpen ? "-translate-y-1 -rotate-45" : ""
          }`}
        />
      </button>

      {/* === MOBILE DROPDOWN === */}
      <div
        ref={mobileMenuRef}
        className="absolute top-full left-0 w-full md:hidden overflow-hidden border-t bg-[var(--color-primary)]"
        style={{ borderTopColor: "var(--color-secondary)", height: 0 }}
      >
        <div className="flex flex-col divide-y divide-[var(--color-secondary)]">
          <button
            className="w-full py-4 px-6 font-main text-sm text-left hover:bg-white active:bg-white hover:text-[var(--color-primary)] active:text-[var(--color-primary)] transition-colors"
            onClick={() =>
              window.open("https://linkedin.com/in/aeron-almendras", "_blank")
            }
          >
            LINKEDIN
          </button>
          <button
            className="w-full py-4 px-6 font-main text-sm text-left hover:bg-white active:bg-white hover:text-[var(--color-primary)] active:text-[var(--color-primary)] transition-colors"
            onClick={() =>
              (window.location.href = "mailto:aeronalmendras@gmail.com")
            }
          >
            EMAIL
          </button>
        </div>
      </div>

      {/* Desktop-only hover styling */}
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-link:hover span {
            color: var(--color-primary) !important;
          }
          .desktop-link:hover {
            background-color: white !important;
          }
        }
      `}</style>
    </motion.nav>
  )
}

export default Navbar
