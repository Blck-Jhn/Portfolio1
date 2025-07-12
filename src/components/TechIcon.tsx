import React from "react";

export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;

  return (
    <>
      {/* SVG gradient for the icon */}
      <svg className="w-0 h-0 absolute">
        <defs>
          <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stopColor="rgb(110, 231, 183)" />
            <stop offset="100%" stopColor="rgb(255, 81, 71)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* The dynamic component passed as a prop */}
      <Component className="w-10 h-10 text-sky-500 fill-[url(#tech-icon-gradient)] " />
    </>
  );
};