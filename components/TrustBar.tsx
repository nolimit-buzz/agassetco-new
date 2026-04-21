'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TrustBar: React.FC = () => {
  const partners = [
    "World Bank",
    "REA",
    "Agronomie",
    "Power Africa",
    "Shell Foundation"
  ];

  // Quadruple the list to ensure seamless infinite scrolling
  const marqueeList = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-ag-green-950 py-16 md:py-24 border-b border-white/5 relative z-30 snap-start overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title - Styled like the Hero Section Label */}
        <div className="text-center mb-12 md:mb-16">
           <p className="text-base font-bold text-ag-lime uppercase tracking-[0.2em] drop-shadow-sm">
             Trusted by Global Institutions & Infrastructure Leaders
           </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden group">
            
            {/* Gradient Masks for smooth fade in/out */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-ag-green-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-ag-green-950 to-transparent z-10 pointer-events-none" />

            <motion.div 
                className="flex items-center gap-16 md:gap-32 w-max"
                // Slide from 0 to -25% (since list is quadrupled, this loops perfectly)
                animate={{ x: ["0%", "-25%"] }} 
                transition={{ 
                    repeat: Infinity, 
                    duration: 30, 
                    ease: "linear" 
                }}
            >
                {marqueeList.map((name, i) => (
                    <span 
                        key={i} 
                        className="text-3xl md:text-4xl font-serif font-bold text-white/30 whitespace-nowrap group-hover:text-white transition-colors duration-700 cursor-default select-none"
                    >
                        {name}
                    </span>
                ))}
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TrustBar;