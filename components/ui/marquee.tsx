"use client";

import Image from "next/image";

interface MarqueeProps {
    logos: string[];
}

export function Marquee({ logos }: MarqueeProps) {
    return (
        <div className="relative flex overflow-hidden group">
            <style jsx global>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          animation: marquee-scroll 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
            <div className="animate-marquee-scroll">
                {/* First Set */}
                <div className="flex shrink-0 items-center gap-16 px-8">
                    {logos.map((logo, index) => (
                        <div key={`set1-${index}`} className="flex items-center justify-center w-32 h-16">
                            <Image
                                src={logo}
                                alt="Payment Partner"
                                width={120}
                                height={60}
                                className="object-contain max-h-12"
                            />
                        </div>
                    ))}
                </div>
                {/* Second Set (Duplicate) */}
                <div className="flex shrink-0 items-center gap-16 px-8">
                    {logos.map((logo, index) => (
                        <div key={`set2-${index}`} className="flex items-center justify-center w-32 h-16">
                            <Image
                                src={logo}
                                alt="Payment Partner"
                                width={120}
                                height={60}
                                className="object-contain max-h-12"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
