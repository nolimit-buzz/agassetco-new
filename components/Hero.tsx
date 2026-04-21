'use client';


import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Counter Component for animated stats
const Counter = ({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) => {
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        node.textContent = Math.round(value).toLocaleString() + suffix;
      },
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [from, to, duration, suffix]);

  return <span ref={nodeRef} />;
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Parallax Background: Moves slower than scroll (Downwards)
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
  
  // Title Parallax: Moves faster than scroll (Upwards)
  const titleY = useTransform(scrollY, [0, 500], [0, -200]);
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Sub-content Parallax: Moves at a different speed for depth
  const subContentY = useTransform(scrollY, [0, 500], [0, -100]);
  const subContentOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  // Robust Autoplay Handling
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
        video.muted = true;
        const playVideo = async () => {
            try {
                await video.play();
            } catch (error) {
                console.warn("Autoplay prevented by browser policy:", error);
            }
        };
        playVideo();
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden font-sans bg-ag-green-950 snap-start">
      
      {/* 1. Background Visual */}
      <div className="absolute inset-0 z-0">
         <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[130vh]">
             <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full absolute inset-0 -z-10"
                poster="https://images.pexels.com/photos/11679511/pexels-photo-11679511.jpeg"
             >
                <source src="https://videos.pexels.com/video-files/30583911/13097057_2560_1440_30fps.mp4" type="video/mp4" />
             </video>
         </motion.div>
         
         {/* Layer 1: Dark Overlay for Readability */}
         <div className="absolute inset-0 bg-black/50 z-0"></div>

         {/* Layer 2: Readability Gradient (Darker at bottom for text contrast) */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ag-green-950/20 to-ag-green-950 z-0"></div>
         
         {/* Optional: Subtle vignette */}
         <div className="absolute inset-0 bg-radial-gradient from-transparent to-ag-green-950/60 opacity-60 z-0"></div>
      </div>

      {/* 2. Main Content Layout */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 pt-32 pb-12 flex flex-col justify-between">
        
        {/* TOP/CENTER: Headline Area */}
        <div className="flex-1 flex items-center">
            <div className="max-w-4xl">
                <motion.h1 
                    style={{ y: titleY, opacity: titleOpacity }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(3.5rem,8vw,6.2rem)] leading-[1.05] font-bold text-white tracking-tight drop-shadow-lg will-change-transform"
                >
                    Productive Use <br />
                    of <span className="text-ag-lime">Energy Financing.</span>
                </motion.h1>
            </div>
        </div>

        {/* BOTTOM CLUSTER: Anchored Elements */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/10 pt-8">
            
            {/* Bottom-Left: Subtext & CTA */}
            <motion.div 
                style={{ y: subContentY, opacity: subContentOpacity }}
                className="max-w-md will-change-transform"
            >
                <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg text-white/90 font-light leading-relaxed mb-8 drop-shadow-md"
                >
                    We bridge the gap between solar mini-grids and rural economic growth, turning energy access into income generation.
                </motion.p>
                
                <motion.button 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="group bg-white hover:bg-ag-lime text-ag-green-950 hover:text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-ag-lime/20 "
                >
                    Partner With Us
                    <div className="w-8 h-8 bg-ag-green-950 group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:text-ag-green-950" />
                    </div>
                </motion.button>
            </motion.div>

            {/* Bottom-Right: Data/Stats */}
            <div className="flex gap-12 md:gap-16 ">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-sans tabular-nums drop-shadow-md">
                        <Counter from={0} to={500} suffix="+" />
                    </div>
                    <div className="text-xs font-bold text-ag-lime uppercase tracking-widest drop-shadow-sm">
                        Active Assets
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-sans tabular-nums drop-shadow-md">
                        <Counter from={0} to={120} suffix="k+" />
                    </div>
                    <div className="text-xs font-bold text-ag-lime uppercase tracking-widest drop-shadow-sm">
                        MWh Consumed
                    </div>
                </motion.div>
            </div>
        </div>

      </div>
      
      {/* Separator to TrustBar */}
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center z-40">
        <div className="h-px w-full max-w-[95%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
