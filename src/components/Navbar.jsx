import React from 'react'

const navbar = () => {
  return (
    <nav 
      className="w-full p-4"
      style={{ 
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-background)'
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold font-main">Portfolio</div>
        <div className="space-x-6">
          <a href="#about" className="hover:opacity-70 transition-opacity font-main">About</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity font-main">Projects</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity font-main">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default navbar