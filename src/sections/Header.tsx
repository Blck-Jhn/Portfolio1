import React from 'react'

export default function Header() {
  return (
    <div className='fixed top-3 w-full z-10 overflow-x-auto px-2'>
        <div className='flex flex-nowrap justify-center items-center gap-4 sm:gap-6 py-1 min-w-max'>
           <a href='#'className="nav-item bg-white text-black hover:bg-red-900 hover:text-white text-sm px-2 py-1 rounded ">Ajala John</a>
          <nav className="flex flex-nowrap gap-2 text-sm px-2 py-1 border border-white/15 rounded-full bg-cyan-500/10 backdrop-blur"> 
        <a href='#'className="nav-item">Home</a>
       <a href='#project'className="nav-item">Projects</a>
       <a href='#about'className="nav-item">About</a>
       <a href='#contact'className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 whitespace-nowrap">Contact</a>
      </nav>
      </div>
      </div>
  )
}

