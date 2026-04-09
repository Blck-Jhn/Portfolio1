import React, { Fragment } from 'react';
import Image from 'next/image';

// Components
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Cards';

// Assets
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import grainImage from "@/assets/images/grain.jpg";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ CareerLens",
    text: "John’s AI integration was a game-changer. He didn't just build a tool; he created an intelligent experience that boosted our keyword detection accuracy to 85%. His work is meticulously executed.",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Design Lead @ Onyx & Ivy",
    text: "John is a rarity—a developer with a true eye for design. He took our boutique vision and translated it into a high-performance storefront with a 50% increase in load speeds.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ Chapters Cove",
    text: "The transition to our new book management system was seamless. John’s focus on user flow led to a 20% boost in sales within the first quarter. Absolute professional.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ ClearMint",
    text: "Security was our top priority for the wealth center. John delivered bank-grade encryption without sacrificing the smooth, modern UI our users love. He's a full-stack powerhouse.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "IT Director @ JBR Limited",
    text: "Working with John was the best decision we made for our digital overhaul. He is an excellent communicator who bridges the gap between complex code and business goals effortlessly.",
    avatar: memojiAvatar5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className='py-16 lg:py-24 relative overflow-x-clip'>
     
      <div 
        className='absolute inset-0 -z-30 opacity-5 pointer-events-none' 
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      
      <div className="container">
        <SectionHeader 
          eyebrow="Social Proof"
          title="Industry Perspectives"
          descriptions="Hear from the leaders and partners I've collaborated with to build high-impact digital solutions."
        />       
       
        <div className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none pr-8 gap-8 animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]">
           
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card 
                    key={`${testimonial.name}-${index}`} 
                    className="max-w-xs p-6 md:p-8 md:max-w-md transition-all duration-300 hover:-rotate-2 hover:border-emerald-500/40 hover:shadow-xl"
                  >
                    <div className="flex gap-4 items-center">
                     
                      <div className="w-14 h-14 bg-gray-800 border border-white/10 rounded-full flex-shrink-0 overflow-hidden inline-flex items-center justify-center">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="max-h-full w-auto"
                        />
                      </div>            
                      
                      <div>
                        <div className="font-bold text-white tracking-tight text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-emerald-400 font-medium">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>                  
                  
                    <p className="mt-4 md:mt-6 text-sm md:text-base text-white/70 leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}