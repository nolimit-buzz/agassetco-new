'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ImpactMetrics: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-ag-green-950 overflow-hidden snap-start relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            className="text-center px-4 py-8"
          >
            <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-ag-lime mb-2 font-sans">
              500+
            </div>
            <div className="text-white/60 uppercase tracking-widest text-sm font-medium">Assets Deployed</div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            className="text-center px-4 py-8"
          >
            <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-green-400 mb-2 font-sans">
              $1.2M+
            </div>
            <div className="text-white/60 uppercase tracking-widest text-sm font-medium">SME Revenue Generated</div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
              }
            }}
            className="text-center px-4 py-8"
          >
            <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400 mb-2 font-sans">
              120k
            </div>
            <div className="text-white/60 uppercase tracking-widest text-sm font-medium">MWh Consumed</div>
          </motion.div>

        </motion.div>
      </div>
      
       {/* Top Separator */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-center z-40">
        <div className="h-px w-full max-w-[95%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
};

export default ImpactMetrics;