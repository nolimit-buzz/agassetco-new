'use client';


import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  category: string;
  title: React.ReactNode;
  dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, category, title, dark = false }) => {
  return (
    <div className={`w-full mb-20 md:mb-28 ${dark ? 'text-white' : 'text-ag-green-950'}`}>
      {/* Top Border Line: Thin and subtle */}
      <div className={`w-full h-[1px] mb-8 ${dark ? 'bg-white/10' : 'bg-gray-100'}`} />
      
      {/* Meta Labels Row: Wide tracking, small font for premium feel */}
      <div className="flex justify-between items-center text-sm font-bold uppercase tracking-[0.3em] opacity-80 mb-14">
        <div className="flex items-center gap-4">
          <span className={dark ? 'text-ag-lime' : 'text-ag-green-950'}>{number}</span>
          <span className={`w-8 h-px ${dark ? 'bg-white/10' : 'bg-gray-100'}`}></span>
          <span className="text-gray-400">{category}</span>
        </div>
        <span className="text-gray-400">AGASSET — 2025</span>
      </div>

      {/* Massive Headline: High contrast, tight leading and tracking */}
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tighter max-w-5xl"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeader;
