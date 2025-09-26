import React, { useState, useRef } from 'react';
import { motion } from "motion/react";

const BackToTop = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showText, setShowText] = useState(false);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowText(true);
    
    // Clear any pending timeout from previous mouse leave
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }
    animationRef.current = setInterval(() => {
      setRotation(prev => (prev + 2) % 360);
    }, 15);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Keep the text visible during the fade out
    timeoutRef.current = setTimeout(() => {
      setShowText(false);
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    }, 600); // Match the fade out duration
  };

  return (
    <motion.div
      className="fixed bottom-12 right-12 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.button
        className="relative w-16 h-16 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-primary)'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={scrollToTop}
        whileHover={{
          scale: [1, 1.1, 1],
          transition: {
            duration: 0.6,
            ease: "easeInOut"
          }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Arrow pointing up */}
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            y: isHovered ? [-2, 2, -2] : 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut"
          }}
        >
          <path d="m18 15-6-6-6 6"/>
        </motion.svg>

        {/* Circular text path - outside the button */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            rotate: `${rotation}deg`
          }}
        >
          <svg
            className="absolute -inset-3 w-[88px] h-[88px]"
            viewBox="0 0 100 100"
            style={{ transform: 'rotate(-90deg)' }}
          >
            <defs>
              <path
                id="textPath"
                d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                fill="none"
              />
            </defs>
            <motion.text
              className="font-main text-sm font-light"
              style={{
                fill: 'var(--color-background)',
                fontSize: '12px'
              }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8
              }}
              transition={{
                duration: isHovered ? 0.2 : 0.6,
                ease: isHovered ? "easeOut" : "easeInOut"
              }}
            >
              <textPath href="#textPath" startOffset="0%">
                {showText ? "BACK TO TOP" : ""}
              </textPath>
            </motion.text>
          </svg>
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default BackToTop;