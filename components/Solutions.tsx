'use client';


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const solutions = [
  {
    id: '01',
    title: "Lease-to-Own Financing",
    subtitle: "Capital Access",
    description: "We remove the barrier to entry. Farmers receive high-yield machinery for zero money down, paying small amounts aligned with their harvest cycles.",
    bgImage: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=2940&auto=format&fit=crop", // Reliable Wheat Field
    cardImage: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=2787&auto=format&fit=crop"
  },
  {
    id: '02',
    title: "Energy-Linked Deployment",
    subtitle: "Grid Stability",
    description: "Deliberate deployment of high-load assets (mills, cold chains) to electrified areas creates predictable 'Anchor Tenant' demand for mini-grids.",
    bgImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2944&auto=format&fit=crop", // Solar at Sunset
    cardImage: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2916&auto=format&fit=crop"
  },
  {
    id: '03',
    title: "Tech-Enabled Operations",
    subtitle: "Asset Security",
    description: "Our IoT infrastructure provides real-time tracking, remote lockout capabilities, and predictive maintenance alerts to protect asset value.",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop", // Tech Network
    cardImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
  }
];

const Solutions: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % solutions.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  const currentSolution = solutions[currentIndex];

  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      // Fix: Casting ease array to any to resolve framer-motion Variants type mismatch
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      // Fix: Casting ease array to any to resolve framer-motion Variants type mismatch
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    })
  };

  return (
    <section className="bg-white relative snap-start z-20">
      
      {/* 1. Top Header Section (White Background) */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* Meta Row */}
        <div className="flex justify-between items-end border-b border-gray-200 pb-4 mb-12">
          <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-ag-green-950/60">
            <span>03 Our Solutions</span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-ag-green-950/60">
            <span>AgAsset Co</span>
            <span>2025</span>
          </div>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
           <div className="lg:col-span-7">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-5xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.05] tracking-tight text-ag-green-950"
             >
               Integrated systems for <br/> <span className="text-ag-lime">rural prosperity.</span>
             </motion.h2>
           </div>
           <div className="lg:col-span-5 pb-2">
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-xl text-gray-500 font-light leading-relaxed"
             >
               Our solutions bridge the gap between energy access and income generation through an integrated, data-driven approach to asset financing.
             </motion.p>
           </div>
        </div>
      </div>

      {/* 2. Cinematic Carousel Section */}
      <div className="relative w-full h-[700px] bg-ag-green-950 overflow-hidden">
        
        {/* Background Parallax Layer */}
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentSolution.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={currentSolution.bgImage} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            
            {/* GRADIENT OVERLAY STRATEGY */}
            {/* 1. Top Lightness: Keeps the top part of the image clear */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent" />

            {/* 2. Deep Blend at Bottom: Transitions smoothly into the next dark section */}
            <div className="absolute inset-0 bg-gradient-to-t from-ag-green-950 via-ag-green-950/70 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Center Floating Card */}
        <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentSolution.id}
                custom={direction}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-[2rem] p-4 shadow-2xl w-full max-w-[420px]"
              >
                 {/* Inner Image */}
                 <div className="relative aspect-[4/3] w-full rounded-[1.5rem] overflow-hidden mb-6 group">
                    <img 
                      src={currentSolution.cardImage} 
                      alt={currentSolution.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                       <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-ag-green-950">
                          {currentSolution.subtitle}
                       </span>
                    </div>
                 </div>

                 {/* Inner Content */}
                 <div className="px-2 pb-4">
                    <h3 className="text-2xl font-medium text-ag-green-950 mb-3 leading-tight">
                      {currentSolution.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
                      {currentSolution.description}
                    </p>
                    <button className="text-xs font-bold uppercase tracking-widest text-ag-lime flex items-center gap-2 group hover:text-ag-green-950 transition-colors">
                       Learn More 
                       <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                 </div>
              </motion.div>
            </AnimatePresence>
        </div>

        {/* Bottom Navigation Controls */}
        <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex justify-between items-end text-white">
           <button 
             onClick={prevSlide}
             className="flex items-center gap-3 hover:text-ag-lime transition-colors group"
           >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest">Previous</span>
           </button>

           <div className="flex gap-2 mb-1">
              {solutions.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-ag-lime' : 'w-2 bg-white/20'}`}
                />
              ))}
           </div>

           <button 
             onClick={nextSlide}
             className="flex items-center gap-3 hover:text-ag-lime transition-colors group"
           >
              <span className="text-xs font-bold uppercase tracking-widest">Next</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
