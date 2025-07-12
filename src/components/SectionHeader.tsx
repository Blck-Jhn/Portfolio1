import React from 'react'

export const SectionHeader = ({
  title,
  eyebrow,
  descriptions,
}:{
  title:string,
  eyebrow:string,
  descriptions:string;
}) => {
  return (
    <>
    <div className="flex justify-center">
    <p className="uppercase font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400  text-center "> 
      {eyebrow}
       </p>
      </div> 
    <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl font-extrabold">{title}</h2>
    <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl"> {descriptions} </p>
    </>
  )
}