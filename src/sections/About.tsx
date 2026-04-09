import React from 'react';
import { Card } from '@/components/Cards';
import { SectionHeader } from '@/components/SectionHeader'
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import { HeroOrbit } from '@/components/HeroOrbit';
import Image from "next/image";

// Icons & Images
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import bookImage2 from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileMemo from "@/assets/images/memoji-smile.png"; 
import grainImage from "@/assets/images/grain.jpg";

const toolboxItems = [
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Next.js", iconType: ReactIcon }, 
  { title: "Tailwind", iconType: CSSIcon },
  { title: "Framer Motion", iconType: SparkleIcon }, // Added for flair
  { title: "Node.js", iconType: JavascriptIcon },
  { title: "Github", iconType: GithubIcon },
];

const hobbies = [
  { title: 'Digital Art', emoji: '🖋️', left: '5%', top: '5%' },
  { title: 'Photography', emoji: '📷', left: '50%', top: '5%' },
  { title: 'Lo-fi Music', emoji: '🎧', left: '35%', top: '40%' },
  { title: 'Reading', emoji: '📖', left: '10%', top: '35%' },
  { title: 'Gaming', emoji: '🎮', left: '70%', top: '45%' },
  { title: 'Fitness', emoji: '🏃‍♀️‍➡️', left: '5%', top: '65%' },
  { title: 'Bio-Hacking', emoji: '⚡', left: '45%', top: '70%' },
];

export default function AboutSection() {
  return (
    <div id='about' className="py-20 lg:py-28 relative z-0 overflow-x-clip">
      <div className="absolute inset-0" style={{
        maskImage: 'linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)'
      }}>
        <div className="absolute inset-0 -z-30 opacity-5" style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>

        {/* Hero Rings & Orbits */}
        <div className="w-[620px] h-[620px] hero-ring"></div>
        <div className="w-[820px] h-[820px] hero-ring"></div>
        <div className="w-[1020px] h-[1020px] hero-ring"></div>
        <div className="w-[1200px] h-[1200px] hero-ring"></div>

        <HeroOrbit size={800} rotation={-72}><StarIcon className="w-28 h-28 text-emerald-500" /></HeroOrbit>
        <HeroOrbit size={550} rotation={20}> <StarIcon className="w-12 h-12 text-emerald-500" /></HeroOrbit>
        <HeroOrbit size={590} rotation={98}><StarIcon className="w-8 h-8 text-emerald-500" /></HeroOrbit>
        <HeroOrbit size={430} rotation={-14}><SparkleIcon className="w-8 h-8 text-emerald-300/20" /></HeroOrbit>
        <HeroOrbit size={530} rotation={178}> <SparkleIcon className="w-10 h-10 text-emerald-300/20" /></HeroOrbit>
        <HeroOrbit size={710} rotation={144}><SparkleIcon className="w-14 h-14 text-emerald-300/20" /></HeroOrbit>
      </div>

      <div className="container relative z-10">
        <SectionHeader 
          eyebrow="About Me" 
          title={
            <>
              A Sneak Peek at My <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Universe</span>
            </>
          }
          descriptions="Discover the tools I master, the ideas I devour, and the passions that fuel my creativity." 
        />

        <div className="mt-20 flex flex-col gap-8">
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader 
                title="The Mental Shelf" 
                description="Exploring the literature and philosophies that shape my creative perspective." 
              />
              <div className="w-40 mx-auto mt-2 md:mt-0 transition-transform duration-500 hover:rotate-6">
                <Image src={bookImage2} alt="Book cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2 overflow-hidden">
              <CardHeader 
                title="The Tech Stack" 
                description="The modern toolkit I use to engineer high-performance, accessible digital experiences." 
              />
              <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <ToolboxItems 
                  toolboxItems={toolboxItems} 
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]" 
                />
                <ToolboxItems 
                  toolboxItems={toolboxItems} 
                  className="mt-6" 
                  itemsWrapperClassName="animate-move-right [animation-duration:30s]" 
                />
              </div>
            </Card>
          </div>
          {/* Second Row: Hobbies & Location */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="Life Outside the IDE" 
                description="Exploring my interests and inspirations beyond the digital landscape." 
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div 
                    key={hobby.title} 
                    className="inline-flex gap-2 px-6 items-center bg-white/10 backdrop-blur-md border border-white/10 rounded-full py-1.5 absolute transition-all hover:scale-110 hover:bg-white/20 cursor-default" 
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="font-medium text-white">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div> 
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image 
                src={mapImage} 
                alt="map" 
                className="h-full w-full object-cover object-left-top opacity-60 transition-opacity duration-500 hover:opacity-100" 
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full shadow-2xl">
                
                <div className="absolute inset-0 rounded-full bg-emerald-400 -z-10 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full"></div>
                <Image src={smileMemo} alt="smiling" className="w-20 h-20 relative z-10" />
              </div>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}