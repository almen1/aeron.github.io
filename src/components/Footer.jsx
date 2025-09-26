import React from 'react'

const footer = () => {
  return (
    <footer 
      className="w-full fixed bottom-0 left-0 right-0 py-3 px-9"
      style={{ 
        backgroundColor: 'var(--color-primary)'
      }}
    >
      <div className="text-center text-sm font-light">
        <p className="font-main text-background">
          DESIGNED BY AERON&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;MADE WITH REACT&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;BASED IN THE PHILIPPINES
        </p>
      </div>
    </footer>
  )
}

export default footer