import React from 'react'
import { Fragment } from 'react'
import StarIcon from "@/assets/icons/star.svg";

const words = [
  "High Performance",
  "Secure",
  "Interactive",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimizable",
  "Accessible",
  "Usable",
  "Reliable",
  "Scalable",
  "Advanced",
  "What Are you waiting for?",
];

export default function TapeSection() {
  return (
  <div className="py-18 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-900 to-red-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 flex-none py-3 pr-4 animate-move-left [animation-duration:30s]">
            {[
              ...new Array(2),
            ].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-white uppercase font-extrabold text-sm">{word}</span>
                    <StarIcon className="w-[20px] h-[20px] text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
