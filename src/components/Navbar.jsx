import React, { useEffect, useRef } from 'react'
import { motion } from "motion/react"
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const Navbar = () => {
    const navRef = useRef(null)
    const linkedinRef = useRef(null)
    const emailRef = useRef(null)

    useEffect(() => {
        if (navRef.current) {
            // Start hidden
            gsap.set(navRef.current, { y: -100, opacity: 0 })

            // Animate in
            gsap.to(navRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            })
        }
    }, [])

    const handleLinkedinHover = () => {
        gsap.to(linkedinRef.current, {
            duration: 0.4,
            text: "linkedin/in/aeron-almendras",
            ease: "power2.out",
            overwrite: true
        })
    }

    const handleLinkedinLeave = () => {
        gsap.to(linkedinRef.current, {
            duration: 0.4,
            text: "LINKEDIN",
            ease: "power2.out",
            overwrite: true
        })
    }

    const handleEmailHover = () => {
        gsap.to(emailRef.current, {
            duration: 0.4,
            text: "aeronalmendras@gmail.com",
            ease: "power2.out",
            overwrite: true
        })
    }

    const handleEmailLeave = () => {
        gsap.to(emailRef.current, {
            duration: 0.4,
            text: "EMAIL",
            ease: "power2.out",
            overwrite: true
        })
    }

    return (
        <motion.nav 
            ref={navRef}
            className="w-full fixed top-0 left-0 right-0 z-50 border-b h-auto inline-flex"
            style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-background)',
                borderBottomColor: 'var(--color-secondary)',
                opacity: 0, // ✅ initial hidden (backup in case GSAP is slow)
                transform: 'translateY(-100px)' // ✅ prevents flash
            }}
        >
            <div className="flex items-center px-9 py-4">
                <div className="font-main">iamaeron®</div>
                <div className="ml-4 h-px w-[500px]" style={{ backgroundColor: 'var(--color-background)' }}></div>
            </div>

            <div className="flex items-end h-auto ml-auto">
                <button 
                    className="h-full w-80 border-l font-main text-sm transition-all duration-300 cursor-pointer group" 
                    style={{ 
                        borderLeftColor: 'var(--color-secondary)',
                        color: 'var(--color-background)',
                    }}
                    onMouseEnter={handleLinkedinHover}
                    onMouseLeave={handleLinkedinLeave}
                >
                    <span ref={linkedinRef}>LINKEDIN</span>
                </button>
           
                <button 
                    className="h-full w-80 border-l font-main text-sm transition-all duration-300 cursor-pointer group"
                    style={{ 
                        borderLeftColor: 'var(--color-secondary)',
                        color: 'var(--color-background)',
                    }}
                    onMouseEnter={handleEmailHover}
                    onMouseLeave={handleEmailLeave}
                >
                    <span ref={emailRef}>EMAIL</span>
                </button>
            </div>

            {/* Scoped hover fix */}
            <style jsx>{`
                button:hover span {
                    color: var(--color-primary) !important;
                }
                button:hover {
                    background-color: white !important;
                }
            `}</style>
        </motion.nav>
    )
}

export default Navbar
