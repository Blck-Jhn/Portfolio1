import React from 'react'
import { Card } from '@/components/Cards';
import { SectionHeader } from '@/components/SectionHeader'
import { TechIcon } from '@/components/TechIcon';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import { HeroOrbit } from '@/components/HeroOrbit';
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/power.png";
import bookImage2 from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from"@/assets/icons/square-js.svg";
import ReactIcon from"@/assets/icons/react.svg";
import HtmlIcon from"@/assets/icons/html5.svg";
import CSSIcon from"@/assets/icons/css3.svg";
import ChromeIcon from"@/assets/icons/chrome.svg";
import GithubIcon from"@/assets/icons/github.svg";
import mapImage  from "@/assets/images/map.png";
import smileMemo from "@/assets/images/memoji-smile.png"; 
import SparkleIcon from "@/assets/icons/sparkle.svg";
import grainImage from "@/assets/images/grain.jpg";


const toolboxItems=[
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
},
{
  title: "HTML5",
  iconType: HtmlIcon,
},
{
  title: "React",
  iconType: ReactIcon,
},
{
  title: "Chrome",
  iconType: ChromeIcon,
},
{
  title: "Github",
  iconType: GithubIcon,
},

]


const hobbies=[
  {
    title:'Drawing',
    emoji: '🖋️',
    left:'5%',
    top:'5%',
  },
  {
    title:'Photography',
    emoji: '📷',
    left:'50%',
    top:'5%',
  },

  {
    title:'Music',
    emoji: '🎧',
    left:'35%',
    top:'40%',
  },
  {
    title:'Reading',
    emoji: '📖',
    left:'10%',
    top:'35%',
  },
  {
    title:'Gaming',
    emoji: '🎮',
    left:'70%',
    top:'45%',
  },
  {
    title:'Fitness',
    emoji: '🏃‍♀️‍➡️',
    left:'5%',
    top:'65%',
  },
  {
    title:'Energy',
    emoji: '⚡',
    left:'45%',
    top:'70%',
  },
]


export default function AboutSection() {
  return (
     <div  id='about' className="py-20 lg:py-28 relative z-0 overflow-x-clip">
        <div className="absolute inset-0" style={{
          maskImage: 'linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)'
        }}>
            <div className="absolute inset-0 -z-30 opacity-5"style={{
            backgroundImage: `url(${grainImage.src})`}}>
            </div>
         {/* Hero Rings */}
                <div>
                    <div className="w-[620px] h-[620px] hero-ring"></div>
                    <div className="w-[820px] h-[820px] hero-ring"></div>
                    <div className="w-[1020px] h-[1020px] hero-ring"></div>
                    <div className="w-[1200px] h-[1200px] hero-ring"></div>
                </div>
        {/* Hero Orbit Elements */}
                 <HeroOrbit size={800} rotation={-72}><StarIcon className="w-28 h-28 text-emerald-500" /></HeroOrbit>
                 <HeroOrbit size={550} rotation={20}> <StarIcon className="w-12 h-12 text-emerald-500" /></HeroOrbit>
                <HeroOrbit size={590} rotation={98}><StarIcon className="w-8 h-8 text-emerald-500" /></HeroOrbit>
                <HeroOrbit size={430} rotation={-14}><SparkleIcon className="w-8 h-8 text-emerald-300/20" /></HeroOrbit>
                <HeroOrbit size={440} rotation={79}><SparkleIcon className="w-5 h-5 text-emerald-300/20" /></HeroOrbit>
                <HeroOrbit size={530} rotation={178}> <SparkleIcon className="w-10 h-10 text-emerald-300/20" /></HeroOrbit>
                <HeroOrbit size={710} rotation={144}><SparkleIcon className="w-14 h-14 text-emerald-300/20" /></HeroOrbit>
                <HeroOrbit size={720} rotation={85}><div className="w-3 h-3 rounded-full bg-emerald-300/20"></div></HeroOrbit>
                <HeroOrbit size={520} rotation={-41}><div className="w-2 h-2 rounded-full bg-emerald-300/20"></div></HeroOrbit>
                <HeroOrbit size={650} rotation={-5}><div className="w-2 h-2 rounded-full bg-emerald-300/20"></div></HeroOrbit>
      </div>
       <div className="container">
            <SectionHeader eyebrow="About Me"title="A Sneak Peak at My Universe"descriptions="Learn more about who I am, what I do,and what inspires Me"/>
                <div className="mt-20 flex flex-col gap-8">
                    <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
                        <Card className="h-[320px] md:col-span-2 lg:col-span-1" >
                        <CardHeader title="My Literature Collection" description="Explore the books shaping my perspective."/>
                            <div className="w-40 mx-auto mt-2 md:mt-0">
                                <div className="flex gap-2 ">
                                 <Image src={bookImage2} alt="Book cover 2" />
                                    {/* <Image src={bookImage} alt="Book cover" className=" h-40" /> */}
                                </div>
                            </div>
                        </Card>
                        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                            <CardHeader title="My ToolBox" description="Explore the technologies and tools I use to craft exceptional digital experiences" className=""/>
                            <ToolboxItems toolboxItems={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:40s]" />
                            <ToolboxItems toolboxItems={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:40s] " />
                        </Card>
                    </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
                    <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                        <CardHeader title="Beyond the Code" description="EExplore my interests and hobbies beyond the digital World" className="px-6 py-6"/>
                            <div className="relative flex-1">{hobbies.map((hobby) => (
                            <div key={hobby.title} className="inline-flex gap-2 px-6 items-center bg-gradient-to-r from-emerald-600 to-sky-500 rounded-full py-1.5 absolute" style={{left:hobby.left, top:hobby.top}} >
                            <span className="font-medium text-gray-950">{hobby.title}</span>
                            <span>{hobby.emoji}</span></div> ))}
                        </div>
                    </Card>
                    <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                        <Image src={mapImage} alt="map"  className="h-full w-full object-cover object-left-top"/>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-yellow-600 to-black after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r         from-red-600 to-black -z-10 animate-ping [animation-duration:2s]"></div>
                            <div className="absolute inset-0 bg-gradient-to-r
                             from-green-600 to-black -z-10 rounded-full"></div>
                            <Image src={smileMemo} alt="smiling" className="w-20 h-20" />
                        </div>
                     </Card>
                </div>
            </div>
         </div>
    </div>
  );
}
