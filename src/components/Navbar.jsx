import React from 'react'

const navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 right-0 z-50 border-b h-auto inline-flex"
            style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-background)',
                borderBottomColor: 'var(--color-secondary)',
            }}
        >
            <div className="flex items-center px-9 py-3">
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
        </nav>

    )
}

export default navbar