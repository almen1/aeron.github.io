import React from 'react'

const footer = () => {
  return (
    <footer 
      className="w-full p-6"
      style={{ 
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--color-background)'
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p style={{ color: 'var(--color-text-muted)' }}>
          © 2024 Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default footer