import React from 'react';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";


export default function ContactSection() {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
        <div className="container">
            <div className="bg-gradient-to-l from-green-800 to-white text-gray-900 py-8 px-10 rounded-3xl  text-center relative overflow-hidden z-0 md:text-left">
              <div className="absolute inset-0 opacity-5 -z-10" style={{
                backgroundImage:`url(${grainImage.src})`,
              }}>
                
              </div>
              <div className="flex flex-col gap-8 items-center  md:gap-16 md:flex-row">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-green">Let &apos;s Create something amazing together</h2>
                  <p className="text-sm md:text-base mt-2">
                    Ready to bring your next project to Life? Let &apos;s connect and discuss how I can help you achieve your goals.
                  </p>
                </div>
                <div className='flex flex-col items-center gap-6'>
                  <a href="tel:+2348151814057" className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                    <span className="font-semibold">Contact Me</span>
                    <ArrowUpRightIcon className="w-4 h-4"/>
                  </a>
                  <a href="mailto:johnajala84@gmail.com" className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 cursor-pointer"> <span className="font-semibold">Email Me</span>
                    <ArrowUpRightIcon className="w-4 h-4" /></a>
                </div>
                </div>
          </div>
        </div>
    </div>
  )
}
