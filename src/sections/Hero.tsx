import React from 'react'
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import  ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import Link from 'next/link';


export default function HeroSection() {
  return (
     <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0'style={{
      maskImage: 'linear-gradient(to bottom,transparent 10%,black_10%,black_70%,transparent)',pointerEvents:'none'}}>
    <div className='absolute inset-0 -z-30 opacity-5' style={{
        backgroundImage:`url(${grainImage})`,
      }}>
      </div>
      <div className='w-[380px] h-[380px] hero-ring'></div>
      <div className='w-[620px] h-[620px] hero-ring'></div>
    <div className='w-[820px] h-[820px] hero-ring'></div>
    <div className='w-[1020px] h-[1020px] hero-ring'></div>
    <div className='w-[1200px] h-[1200px] hero-ring'></div>
    <div className='w-[1400px] h-[1400px] hero-ring'></div>
    <div className='w-[1600px] h-[1600px] hero-ring'></div>
    <div className='w-[1800px] h-[1800px] hero-ring'></div>
       <HeroOrbit size={800} rotation={-72}><StarIcon className='w-28 h-28 text-cyan-500' /></HeroOrbit>
       <HeroOrbit size={800} rotation={180}><StarIcon className='w-28 h-28 text-green-500' /></HeroOrbit>
       <HeroOrbit size={800} rotation={98}><StarIcon className='w-28 h-28 text-cyan-500' /></HeroOrbit>
      <HeroOrbit size={800} rotation={50}><StarIcon className='w-28 h-28 text-green-500' /></HeroOrbit>
      <HeroOrbit size={550} rotation={20}><StarIcon className='w-12 h-12 text-emerald-500' /></HeroOrbit>
      <HeroOrbit size={550} rotation={-20}><StarIcon className='w-12 h-12 text-cyan-500' /></HeroOrbit>
      <HeroOrbit size={590} rotation={98}><StarIcon className='w-8 h-8 text-emerald-500' /></HeroOrbit>
      <HeroOrbit size={430} rotation={-14}> <SparkleIcon className='w-8 h-8 text-emerald-300/20' /></HeroOrbit>
      <HeroOrbit size={430} rotation={-34}> <SparkleIcon className='w-8 h-8 text-cyan-500' /></HeroOrbit>
      <HeroOrbit size={440} rotation={79}> <SparkleIcon className='w-5 h-5 text-emerald-300/20' /></HeroOrbit>
      <HeroOrbit size={530} rotation={178}><SparkleIcon className='w-10 h-10 text-emerald-300/20' /></HeroOrbit>
      <HeroOrbit size={710} rotation={144}><SparkleIcon className='w-14 h-14 text-emerald-300/20' /> </HeroOrbit>
      <HeroOrbit size={720} rotation={85}><div className='w-3 h-3 rounded-full bg-emerald-300/20'></div></HeroOrbit>
    <HeroOrbit size={520} rotation={-41}><div className='w-2 h-2 rounded-full bg-emerald-300/20'></div> </HeroOrbit> 
    <HeroOrbit size={650} rotation={-5}> <div className='w-2 h-2 rounded-full bg-emerald-300/20'></div> </HeroOrbit>
    <HeroOrbit size={650} rotation={-12}> <div className='w-2 h-2 rounded-full bg-emerald-300/20'></div> </HeroOrbit>
    </div>
  <div className="container">
      <div className=' flex flex-col items-center '>
      <Image src={memojiImage} className='w-[100px] h-[100px]' alt='Looking behind a screen'/>
      <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
        <div className='bg-red-500 w-[10px] h-[10px] rounded-full relative'> 
          <div className='bg-green-500 absolute inset-0 animate-ping-large rounded-full'></div>
        </div>
        <div className='text-sm font-medium'>Open to New Project Opportunities
        </div> 
      </div>
      </div>
       <div className='max-w-lg mx-auto '>
      <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide font-extrabold '>Crafting Remarkable User Experiences</h1>
      <p className='mt-4 text-center text-white/60 md:text-lg'>
      I specialize in turning design concepts into efficient, high-performing web applications. With a focus on transforming ideas into dynamic, functional solutions, I &apos;m excited to connect and discuss your next project
      </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <Link href="#project" className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-red-950/60 hover:text-white transition duration-300'>
        <span className='font-semibold'>Explore My Work</span><ArrowDown className='w-4 h-4' />
        </Link>
        <Link href='#contact' className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-green-900 hover:text-white'>
        <span>😎</span>
        <span className='font-semibold'>Let&apos;s Connect</span>
       </Link>
      </div>
     </div>
  </div>
  )
}

