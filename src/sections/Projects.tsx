import React from 'react'
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { SectionHeader } from '@/components/SectionHeader';
import weather from "@/assets/images/weather 1.png";
import book from "@/assets/images/book.png";
import ecommerce from "@/assets/images/ecommerce.png";
import { Card } from '@/components/Cards';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from 'next/image';

const portfolioProjects = [
  {
    company: "WeatherChrome Inc",
    year: "2024",
    title: "Dynamic Weather App Engine",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/BlckJhn",
    image: weather,
  },
  {
    company: "Chapters Cove.",
    year: "2024",
    title: "Effective Book Management System",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://github.com/BlckJhn",
    image: book,
  },
  {
    company: "JBR Limited",
    year: "2023",
    title: "Alternative E-commerce Strategy",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/BlckJhn",
    image: ecommerce,
  },
];

export default function Projects() {
  return (
    <div id='project'>   
        <section className="pb-30 sm:py-52 lg:py-52" >  
      <SectionHeader 
          eyebrow="Real-world results"
          title="Featured Projects"
          descriptions="See how I transformed concepts into engaging digital experiences"
        />
        <div className="container">
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:mt-16 lg:px-20 pb-0 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-red-400 to-sky-400 gap-2 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                    <span>{project.company}</span>
                    <span> &bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 font-extrabold md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="w-5 h-5 md:w-6 h-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-950 text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:max-w-none lg:w-auto"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
        </section> 
    </div>
  
  )
}
