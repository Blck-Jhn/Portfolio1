import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-10 gap-20 sm:gap-1.5 py-0.5'>
       <a href='#'className="nav-item bg-white text-black hover:bg-red-900 hover:text-white sm: mx-0.5 px-1 ">Ajala John</a>
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-cyan-500/10 backdrop-blur"> 
       <a href='#'className="nav-item">Home</a>
       <a href='#project'className="nav-item">Projects</a>
       <a href='#about'className="nav-item">About</a>
       <a href='#contact'className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
      </div>
  )
}

