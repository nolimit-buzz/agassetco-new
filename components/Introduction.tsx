'use client';


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Coins, Settings, BarChart3 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const services = [
  {
    icon: Coins,
    title: "Lease-to-Own",
    desc: "Removing CapEx barriers for farmers."
  },
  {
    icon: Zap,
    title: "Smart Deployment",
    desc: "High-yield assets for grid stability."
  },
  {
    icon: BarChart3,
    title: "Tech-Enabled",
    desc: "IoT tracking for bankable data."
  },
  {
    icon: Settings,
    title: "Asset Management",
    desc: "Full lifecycle O&M support."
  }
];

const Introduction: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Fix: Casting ease array to any to resolve framer-motion Variants type mismatch
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <section id="introduction" className="bg-white py-24 md:py-32 relative snap-start">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Standardized Header */}
        <SectionHeader 
          number="01" 
          category="Introduction" 
          title={<>Pioneering Productive Use <br /> of Energy in Agriculture.</>} 
        />

        {/* 2. Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left: Cinematic Image - Updated border radius to 0.7rem */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] lg:h-auto min-h-[500px] rounded-[0.7rem] overflow-hidden shadow-2xl"
          >
            {/* Reliable High-Res Solar Farm Image */}
            <img 
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2944&auto=format&fit=crop" 
              alt="Solar Field" 
              className="w-full h-full object-cover"
            />
            {/* Minimal Overlay Info */}
            <div className="absolute bottom-8 left-8 text-white">
               <div className="text-xs font-bold uppercase tracking-widest mb-2">Focus Area</div>
               <div className="text-2xl font-medium">Solar Irrigation</div>
            </div>
          </motion.div>

          {/* Right: 2x2 Interactive Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants as any}
                className={`
                  group relative border-gray-100 p-8 flex flex-col justify-between min-h-[280px] transition-all duration-500 cursor-pointer
                  hover:bg-ag-green-950
                  ${index % 2 === 0 ? 'md:border-r' : ''}
                  ${index < 2 ? 'border-b' : ''}
                  border-b md:border-b-0
                  last:border-b-0
                `}
              >
                {/* Icon */}
                <div className="mb-6">
                  <service.icon className="w-8 h-8 text-ag-green-950 group-hover:text-ag-lime transition-colors duration-300 stroke-[1.5]" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-medium text-ag-green-950 group-hover:text-white transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-white/70 transition-colors duration-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Hover CTA */}
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-transparent group-hover:text-ag-lime transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;
