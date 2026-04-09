import React from 'react';
import Image from 'next/image';

// Component Imports
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Cards';

// Asset Imports
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import career from "@/assets/images/career.png";
import book from "@/assets/images/book.png";
import clearmint from "@/assets/images/clearmint.png";
import onyxandivy from "@/assets/images/onyxandivy.png";

const portfolioProjects = [
  {
    company: "CareerLens",
    year: "2026",
    title: "AI Resume Intelligence Platform",
    results: [
      { title: "Achieved 85% keyword precision for ATS optimization" },
      { title: "Reduced resume tailoring time by 60% for job seekers" },
      { title: "Mobile-first architecture drove 35% increase in traffic" },
    ],
    link: "https://career-lens-ljjt.vercel.app/",
    image: career,
  },
  {
    company: "Chapters Cove",
    year: "2024",
    title: "Curated Literary Commerce Experience",
    results: [
      { title: "Implemented seamless inventory-to-sales pipeline" },
      { title: "Expanded digital customer footprint by 35%" },
      { title: "Optimized conversion funnels resulting in 20% sales growth" },
    ],
    link: "https://chapter-cove-1.vercel.app/",
    image: book,
  },
  {
    company: "ClearMint",
    year: "2026",
    title: "AI Financial Wellness Dashboard",
    results: [
      { title: "Engineered real-time predictive spending analytics" },
      { title: "Boosted average user savings by 18.4% via AI insights" },
      { title: "Deployed bank-grade AES-256 encryption protocols" },
    ],
    link: "https://clear-mint-f5bo.vercel.app/",
    image: clearmint,
  },
  {
    company: "Onyx & Ivy",
    year: "2026",
    title: "High-Performance Luxury E-Store",
    results: [
      { title: "Reduced Page Content Load (LCP) by 50%" },
      { title: "Custom headless CMS integration for dynamic scaling" },
      { title: "Enhanced mobile conversion rates by 40% via UX audit" },
    ],
    link: "https://onyx-and-ivy.vercel.app/",
    image: onyxandivy,
  },
];

export default function Projects() {
  return (
    <section id="project" className="py-20 lg:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world results"
          title="Featured Projects"
          descriptions="See how I transformed concepts into engaging digital experiences"
        />

        <div className="flex flex-col mt-10 gap-20 md:mt-24">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:px-20 pb-0 sticky overflow-hidden"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  {/* Company & Year Badge */}
                  <div className="bg-gradient-to-r from-red-400 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span className="text-white/20">&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 font-extrabold md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  {/* Results List */}
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-3 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0 text-sky-400" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 transition-all hover:bg-gray-200 active:scale-95"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>

                {/* Project Image */}
                <div className="relative group">
                  <Image
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:max-w-none lg:w-auto rounded-t-xl transition-transform duration-500 group-hover:-translate-y-2"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}