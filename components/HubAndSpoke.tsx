'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wifi, Users, Briefcase, Settings } from 'lucide-react';

const HubAndSpoke: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Configuration for the spokes
  const spokes = [
    { 
      id: 1,
      icon: Wifi, 
      title: "IoT Tracking", 
      desc: "Real-time monitoring",
      x: 25, y: 20, // Percentages 
      textAlign: "right",
      textStyle: { right: "120%", top: "50%", transform: "translateY(-50%)" },
      control: { x: 50, y: 20 } 
    },
    { 
      id: 2,
      icon: Settings, 
      title: "Maintenance", 
      desc: "Rapid response teams",
      x: 75, y: 20,
      textAlign: "left",
      textStyle: { left: "120%", top: "50%", transform: "translateY(-50%)" },
      control: { x: 50, y: 20 }
    },
    { 
      id: 3,
      icon: Users, 
      title: "End Users", 
      desc: "SME Integration",
      x: 25, y: 80, 
      textAlign: "right",
      textStyle: { right: "120%", top: "50%", transform: "translateY(-50%)" },
      control: { x: 50, y: 80 }
    },
    { 
      id: 4,
      icon: Briefcase, 
      title: "Capital", 
      desc: "De-risked Deployment",
      x: 75, y: 80, 
      textAlign: "left",
      textStyle: { left: "120%", top: "50%", transform: "translateY(-50%)" },
      control: { x: 50, y: 80 }
    }
  ];

  return (
    <section ref={containerRef} className="min-h-screen flex items-center py-24 bg-ag-green-950 relative overflow-hidden snap-start">
      
      {/* Top Separator */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-center z-40">
        <div className="h-px w-full max-w-[95%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ag-lime/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div style={{ y: contentY }} className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* HEADER SECTION - GRID LAYOUT */}
        <div className="w-full mb-16 md:mb-24 text-white">
            {/* Top Border */}
            <div className="w-full h-px mb-6 bg-white/20" />
            
            {/* Meta Labels */}
            <div className="flex justify-between items-end mb-12 opacity-60">
                <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
                    <span>04 Our Hub</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest">
                    <span>2025</span>
                </div>
            </div>

            {/* Split Content: Title & Description */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                {/* Title Column */}
                <div className="lg:col-span-7">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl lg:text-[5rem] font-medium leading-[1.05] tracking-tight"
                    >
                        Hub-and-Spoke <br/><span className="text-ag-lime">O&M Infrastructure.</span>
                    </motion.h2>
                </div>

                {/* Description Column - Side by Side */}
                <div className="lg:col-span-5 pb-2">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-white/70 font-light leading-relaxed"
                    >
                        We don't just finance; we manage. Through Agronomie's infrastructure, we provide IoT tracking and maintenance, protecting asset value.
                    </motion.p>
                </div>
            </div>
        </div>

        {/* 3. Interactive Diagram */}
        <div className="relative h-[600px] w-full max-w-4xl mx-auto hidden md:block">
          
          {/* SVG Layer for Connecting Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
             <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#78BC42" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#78BC42" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#78BC42" stopOpacity="0.2" />
                </linearGradient>
             </defs>
             {spokes.map((spoke, i) => (
               <motion.path
                 key={i}
                 d={`M ${spoke.x} ${spoke.y} Q ${spoke.control.x} ${spoke.control.y} 50 50`}
                 stroke="url(#lineGradient)"
                 strokeWidth="1.5"
                 strokeDasharray="4 4"
                 fill="none"
                 vectorEffect="non-scaling-stroke"
                 initial={{ pathLength: 0, opacity: 0 }}
                 whileInView={{ pathLength: 1, opacity: 0.6 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeInOut" }}
               />
             ))}
          </svg>

          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <motion.div 
               initial={{ scale: 0.5, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
               className="relative w-64 h-64 rounded-full bg-ag-green-900/90 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center text-center p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
             >
                {/* Inner Ring */}
                <div className="absolute inset-0 rounded-full border border-ag-lime/20 scale-90" />
                
                {/* Core Icon */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg shadow-ag-lime/20">
                    <div className="w-6 h-6 bg-ag-green-950 rounded-sm rotate-45" />
                </div>
                
                <h3 className="text-white font-bold text-xl leading-tight mb-2">AgAsset Co</h3>
                <div className="w-8 h-0.5 bg-ag-lime mb-2"></div>
                <p className="text-xs text-white/60 font-medium uppercase tracking-wide leading-relaxed">
                  Centralized Operations <br/>& Financing Vehicle
                </p>
             </motion.div>
          </div>

          {/* Spokes */}
          {spokes.map((spoke, i) => (
            <div 
              key={spoke.id}
              className="absolute z-10"
              style={{ left: `${spoke.x}%`, top: `${spoke.y}%`, transform: 'translate(-50%, -50%)' }}
            >
               {/* Icon Wrapper */}
               <motion.div
                 initial={{ scale: 0, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                 className="relative group cursor-pointer"
               >
                  <div className="w-20 h-20 rounded-full bg-ag-green-900 border border-ag-green-700 flex items-center justify-center shadow-lg group-hover:border-ag-lime group-hover:shadow-[0_0_30px_rgba(120,188,66,0.2)] transition-all duration-300 relative z-10">
                    <spoke.icon className="text-white w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full bg-ag-lime/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
               </motion.div>

               {/* Text Content */}
               <motion.div
                 initial={{ opacity: 0, x: spoke.textAlign === 'right' ? -20 : 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                 className="absolute w-56 pointer-events-none"
                 style={{ 
                   textAlign: spoke.textAlign as any,
                   ...spoke.textStyle 
                 }}
               >
                 <h4 className="text-white font-bold text-lg mb-1">{spoke.title}</h4>
                 <p className="text-sm text-white/50 leading-snug">{spoke.desc}</p>
               </motion.div>
            </div>
          ))}

        </div>

        {/* Mobile View (Linear Stack) */}
        <div className="md:hidden grid grid-cols-1 gap-4 mt-8">
           {spokes.map((spoke, i) => (
             <motion.div
               key={spoke.id}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white/5 p-6 rounded-xl border border-white/5 flex items-center gap-4"
             >
                <div className="w-12 h-12 rounded-full bg-ag-green-800 flex items-center justify-center shrink-0">
                   <spoke.icon className="text-ag-lime w-6 h-6" />
                </div>
                <div>
                   <h4 className="text-white font-bold">{spoke.title}</h4>
                   <p className="text-xs text-white/50">{spoke.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>

      </motion.div>
      
      {/* Bottom Premium Separator */}
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center z-40">
        <div className="h-px w-full max-w-[95%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute w-1.5 h-1.5 rotate-45 bg-ag-lime shadow-[0_0_10px_rgba(120,188,66,0.5)]" />
      </div>
    </section>
  );
};

export default HubAndSpoke;