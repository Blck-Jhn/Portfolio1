import React, { Fragment } from 'react';
import StarIcon from "@/assets/icons/star.svg";

const words = [
  "High Performance",
  "Secure Architecture",
  "SEO Optimized",
  "Interactive Design",
  "User Centric",
  "Responsive",
  "Scalable Systems",
  "Clean Code",
  "Accessible",
  "Robust",
  "Future Proof",
  "Maintainable",
];

export default function TapeSection() {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">      
      <div className="bg-gradient-to-r from-emerald-500 via-red-900 to-sky-400 -rotate-3 -mx-1 shadow-xl">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 flex-none py-3 pr-4 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-white uppercase font-extrabold text-sm tracking-tighter">
                      {word}
                    </span>
                    <StarIcon className="w-6 h-6 text-gray-950 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}