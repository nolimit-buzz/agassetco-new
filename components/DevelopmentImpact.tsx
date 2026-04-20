'use client';


import React, { useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { Coins, Users, Zap, Briefcase, Leaf, Heart, Image as ImageIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';

// Counter Component for animated stats
const Counter = ({ from, to, duration = 2, suffix = "", decimals = 0 }: { from: number; to: number; duration?: number; suffix?: string; decimals?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        node.textContent = value.toLocaleString(undefined, { 
          minimumFractionDigits: decimals, 
          maximumFractionDigits: decimals 
        }) + suffix;
      },
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [from, to, duration, suffix, decimals, isInView]);

  return <span ref={nodeRef} className="font-bold tabular-nums font-sans" />;
};

const DevelopmentImpact: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } 
    }
  };

  return (
    <section className="py-32 bg-white font-sans selection:bg-ag-lime selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER - Using standard component with requested title */}
        <SectionHeader 
          number="03" 
          category="Impact Track Record" 
          title={<>We act as a <span className="text-ag-lime">catalyst</span> for institutional & impact investment.</>} 
        />

        {/* CURATED BENTO GRID - Exactly 8 high-impact boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Box 1: Total Investment */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-ag-lime rounded-[2rem] p-10 flex flex-col justify-between min-h-[320px] group hover:shadow-2xl hover:shadow-ag-lime/20 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Coins className="text-ag-green-950 w-6 h-6" />
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-ag-green-950 tracking-tighter mb-4 font-sans">
                ₦<Counter from={0} to={1.2} suffix="B+" decimals={1} />
              </div>
              <p className="text-ag-green-950/70 font-bold text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                Total project investment <br/> committed to date
              </p>
            </div>
          </motion.div>

          {/* Box 2: Rural Farming Image (TALL) */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:row-span-2 rounded-[2rem] overflow-hidden relative group min-h-[400px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1595838788863-29a377d0a7d5?q=80&w=2874&auto=format&fit=crop" 
              alt="Rural Agriculture" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ag-green-950/20 group-hover:bg-transparent transition-colors duration-1000" />
            <div className="absolute bottom-8 left-8 text-white z-10">
               <span className="text-[10px] font-bold uppercase tracking-widest bg-ag-lime/90 backdrop-blur-md px-4 py-2 rounded-full text-ag-green-950 shadow-lg">Field Operations</span>
            </div>
          </motion.div>

          {/* Box 3: Smallholders Access */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#E8F1FD] rounded-[2rem] p-10 flex flex-col justify-between min-h-[320px] group hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <Users className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-ag-green-950 tracking-tighter mb-4 font-sans">
                <Counter from={0} to={5000} suffix="+" />
              </div>
              <p className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                Smallholders with access to <br/> new or improved infrastructure
              </p>
            </div>
          </motion.div>

          {/* Box 4: Productive Assets */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#F1F8E9] rounded-[2rem] p-10 flex flex-col justify-between min-h-[320px] group hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Zap className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-ag-green-950 tracking-tighter mb-4 font-sans">
                <Counter from={0} to={500} suffix="+" />
              </div>
              <p className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                Productive assets successfully <br/> reached financial close
              </p>
            </div>
          </motion.div>

          {/* Box 5: Domestic Capital */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-ag-green-950 rounded-[2rem] p-10 flex flex-col justify-between min-h-[320px] group hover:shadow-2xl hover:shadow-ag-green-900/50 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Briefcase className="text-ag-lime w-6 h-6" />
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4 font-sans">
                ₦<Counter from={0} to={850} suffix="M" />
              </div>
              <p className="text-white/40 font-bold text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                Domestic Capital <br/> Mobilized via Institutional Partners
              </p>
            </div>
          </motion.div>

          {/* Box 6: Carbon Offset */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#F1F8E9] rounded-[2rem] p-10 flex flex-col justify-between min-h-[320px] group hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Leaf className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-ag-green-950 tracking-tighter mb-4 font-sans">
                <Counter from={0} to={1.2} suffix="k" decimals={1} />
              </div>
              <p className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                Metric Tons of Carbon <br/> Offset (CO2e) Per Year
              </p>
            </div>
          </motion.div>

          {/* Box 7: Solar Infrastructure Image */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[2rem] overflow-hidden relative group min-h-[320px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2944&auto=format&fit=crop" 
              alt="Solar Site" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ag-green-950/20 group-hover:bg-transparent transition-colors duration-1000" />
            <div className="absolute top-8 left-8">
               <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white border border-white/20">Infrastructure Hub</span>
            </div>
          </motion.div>

          {/* Box 8: Female SME Support */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-ag-green-950 rounded-[2rem] p-10 flex flex-col justify-between min-h-[320px] group hover:shadow-2xl hover:shadow-ag-green-900/50 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Heart className="text-ag-lime w-6 h-6" />
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4 font-sans">
                <Counter from={0} to={185} suffix="+" />
              </div>
              <p className="text-white/40 font-bold text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                Female-Led SMEs Supported <br/> through specialized financing
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default DevelopmentImpact;
