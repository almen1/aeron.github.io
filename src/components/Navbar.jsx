import React from 'react'
import { motion } from "motion/react"

const navbar = () => {
    return (
        <motion.nav 
            className="w-full fixed top-0 left-0 right-0 z-50 border-b h-auto inline-flex"
            style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-background)',
                borderBottomColor: 'var(--color-secondary)',
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex items-center px-9 py-4">
                <div className="font-main">iamaeron®</div>
                <div className="ml-4 h-px w-[500px]" style={{ backgroundColor: 'var(--color-background)' }}></div>
            </div>

            <div className="flex items-end h-auto ml-auto">
                <button 
                    className="h-full w-40 border-l font-main text-sm transition-all duration-300 text-background hover:bg-white hover:text-black cursor-pointer" 
                    style={{ 
                        borderLeftColor: 'var(--color-secondary)'
                    }}
                >
                    LET'S TALK
                </button>
           
                <button 
                    className="h-full w-40 border-l font-main text-sm transition-all duration-300 text-background hover:bg-white hover:text-black cursor-pointer"
                    style={{ 
                        borderLeftColor: 'var(--color-secondary)'
                    }}
                >
                    MENU
                </button>
            </div>
        </motion.nav>
    )
}

export default navbar