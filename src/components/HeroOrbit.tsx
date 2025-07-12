import { PropsWithChildren } from "react";

export const HeroOrbit = ({children, size,rotation,spinDuration="12s"}: PropsWithChildren<{size: number; rotation:number; spinDuration?:string;}>) => {
    return (
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20'>
            <div className="animate-spin " style={{
                animationDuration: spinDuration,
            }}> 
            <div className='flex items-start justify-start ' style={{
                height: `${size}px`,  
                width: `${size}px`, 
                transform: `rotate(${rotation}deg)`,
            }}>
                <div className='inline-flex ' style={{
                    transform: `rotate(-${rotation *-1}deg)`,
                   
                }}>
                    {children}
                </div>
            </div> 
            </div>
        </div>
    );
};