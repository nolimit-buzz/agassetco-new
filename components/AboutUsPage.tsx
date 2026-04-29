'use client';


import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Lock, 
  TrendingUp as TrendingUpIcon, 
  Handshake, 
  Building2, 
  Zap, 
  Users, 
  Download, 
  Search, 
  Activity, 
  Cpu, 
  Plus, 
  FileText,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  FileCheck,
  Target
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import DevelopmentImpact from './DevelopmentImpact';
import Breadcrumb from './Breadcrumb';

interface AboutUsPageProps {
  onNavigate?: (page: any) => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  const partners = ["REA", "Agronomie", "Power Africa", "Shell Foundation", "World Bank", "IFC"];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  const imageEntrance = {
    hidden: { opacity: 0, scale: 1.08 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-ag-lime selection:text-white">
      
      {/* 01. PRESENTATION HERO SECTION */}
      <section className="pt-32 pb-24 bg-white overflow-hidden px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Standardized Meta Header with Breadcrumbs */}
          <motion.div variants={fadeInUp as any} className="flex flex-row items-center justify-between mb-12 border-b border-gray-100 pb-8">
            <Breadcrumb items={[
              { label: 'Home', onClick: () => onNavigate?.('home') },
              { label: 'Company' },
              { label: 'About Us' },
            ]} />
            
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-ag-green-950">
              01 AgAsset Corporate Presentation — 2025
            </div>
          </motion.div>

          <motion.div variants={imageEntrance as any} className="relative w-full aspect-[21/9] md:aspect-[3/1] mb-16 group">
            <div className="absolute inset-0 rounded-[0.7rem] overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2940&auto=format&fit=crop" 
                alt="Working Lands" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ag-green-950/10 group-hover:bg-transparent transition-colors duration-1000 mix-blend-multiply"></div>
            </div>
            
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 flex items-center justify-center z-10 pointer-events-none overflow-visible">
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="rotate-90 whitespace-nowrap text-white text-5xl md:text-8xl font-bold tracking-tighter select-none origin-center"
              >
                AGASSET
              </motion.div>
            </div>
          </motion.div>

          {/* Swapped Grid for Paragraph Left / Title Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
            <div className="lg:col-span-5 pt-2">
              <motion.p 
                variants={fadeInUp as any}
                className="text-sm md:text-lg text-gray-500 font-light leading-relaxed max-w-md mb-8"
              >
                AgAsset Co is a specialized asset vehicle dedicated to bridging the gap between energy access and productive use. We finance, deploy, and manage machinery at scale across Sub-Saharan Africa.
              </motion.p>
              <motion.button 
                variants={fadeInUp as any}
                className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ag-green-950 group"
              >
                Explore Mandate <Plus className="w-3 h-3 text-ag-lime group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>
            </div>

            <div className="lg:col-span-7 lg:text-right">
              <motion.h1 
                variants={fadeInUp as any}
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-ag-green-950 leading-[0.95] tracking-tighter"
              >
                EXECUTION <br/>
                <span className="text-ag-lime">ENGINE.</span>
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 02. PURPOSE-BUILT STRUCTURE */}
      <section className="py-24 bg-white border-t border-gray-100">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6"
        >
          <SectionHeader number="02" category="Structure" title="Purpose-Built for Scale." />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div variants={fadeInUp as any} className="lg:col-span-5">
              <h3 className="text-3xl font-medium text-ag-green-950 mb-6">The "Last Mile" Solution</h3>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-6">
                While developers build grids and farmers grow crops, a missing link remained: the capital-intensive machinery required to process harvest. We fill that void.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-ag-green-950/40">
                <span>Infrastructure</span>
                <span className="w-1 h-1 bg-ag-lime rounded-full"></span>
                <span>Financing</span>
                <span className="w-1 h-1 bg-ag-lime rounded-full"></span>
                <span>Operations</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp as any} className="lg:col-span-7">
               <div className="relative rounded-[2.5rem] bg-gray-50/50 border border-gray-100 p-8 md:p-12 overflow-hidden shadow-inner">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                    <div className="flex-1 w-full text-center group">
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg h-full flex flex-col items-center justify-center"
                      >
                        <Building2 className="w-5 h-5 mb-4 text-gray-400" />
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Originator</div>
                        <div className="text-xl font-bold text-ag-green-950">Agronomie</div>
                      </motion.div>
                    </div>
                    <div className="flex-1 w-full text-center group relative">
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-ag-green-950 text-white p-8 rounded-2xl shadow-2xl relative z-10 border border-ag-lime/30 flex flex-col items-center justify-center h-[180px] md:h-[200px]"
                      >
                         <Zap className="w-6 h-6 mb-4 text-ag-lime animate-pulse" />
                         <div className="text-[10px] text-ag-lime uppercase tracking-widest mb-1">Asset Vehicle</div>
                         <div className="text-2xl font-bold tracking-tight mb-2">AgAsset Co</div>
                      </motion.div>
                    </div>
                    <div className="flex-1 w-full text-center group">
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg h-full flex flex-col items-center justify-center"
                      >
                        <Users className="w-5 h-5 mb-4 text-gray-400" />
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Beneficiary</div>
                        <div className="text-xl font-bold text-ag-green-950">End User</div>
                      </motion.div>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 03. DEVELOPMENT IMPACT (Integrated) */}
      <DevelopmentImpact />

      {/* 04. OPERATIONS */}
      <section className="py-24 bg-ag-green-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Animated Diagram */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center order-2 lg:order-1"
            >
                {/* Orbital Rings */}
                <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full" />
                <div className="absolute w-[250px] h-[250px] md:w-[320px] md:h-[320px] border border-white/10 rounded-full" />
                
                {/* SVG Connections with Improved Stroke */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {[
                      "M 50% 50% Q 35% 35% 20% 40%",
                      "M 50% 50% Q 65% 30% 80% 35%",
                      "M 50% 50% Q 35% 65% 25% 75%",
                      "M 50% 50% Q 65% 75% 75% 85%"
                    ].map((path, i) => (
                      <motion.path 
                        key={i}
                        d={path} 
                        stroke="#78BC42" 
                        strokeWidth="2" 
                        strokeOpacity="0.4" 
                        strokeDasharray="6 6"
                        fill="none" 
                        initial={{ pathLength: 0, strokeDashoffset: 0 }} 
                        whileInView={{ pathLength: 1, strokeDashoffset: [0, -24] }} 
                        transition={{ 
                          pathLength: { duration: 1.5, delay: i * 0.2 },
                          strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" }
                        }} 
                      />
                    ))}
                </svg>

                {/* Central Node with Pulse */}
                <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full bg-ag-lime blur-xl"
                    />
                    <div className="relative z-10 w-full h-full rounded-[0.7rem] bg-ag-green-950 border-2 border-ag-lime flex items-center justify-center shadow-[0_0_50px_rgba(120,188,66,0.3)]">
                        <motion.div 
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="w-12 h-12 bg-ag-lime/10 rounded-xl flex items-center justify-center"
                        >
                           <Building2 className="text-ag-lime w-8 h-8" />
                        </motion.div>
                    </div>
                </div>

                {/* Satellite Nodes */}
                <div className="absolute top-[35%] left-[15%] flex flex-col items-center group">
                    <motion.div 
                      whileHover={{ scale: 1.15 }}
                      className="w-16 h-16 rounded-[0.7rem] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-3 group-hover:bg-ag-lime/20 transition-all cursor-pointer"
                    >
                        <Activity className="text-ag-lime w-6 h-6" />
                    </motion.div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-60">Telemetry</span>
                </div>

                <div className="absolute top-[30%] right-[12%] flex flex-col items-center group">
                    <motion.div 
                      whileHover={{ scale: 1.15 }}
                      className="w-16 h-16 rounded-[0.7rem] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-3 group-hover:bg-ag-lime/20 transition-all cursor-pointer"
                    >
                        <Search className="text-ag-lime w-6 h-6" />
                    </motion.div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-60">Predictive</span>
                </div>

                <div className="absolute bottom-[20%] left-[20%] flex flex-col items-center group">
                    <motion.div 
                      whileHover={{ scale: 1.15 }}
                      className="w-16 h-16 rounded-[0.7rem] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-3 group-hover:bg-ag-lime/20 transition-all cursor-pointer"
                    >
                        <Lock className="text-ag-lime w-6 h-6" />
                    </motion.div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-60">Remote Lock</span>
                </div>

                <div className="absolute bottom-[10%] right-[22%] flex flex-col items-center group">
                    <motion.div 
                      whileHover={{ scale: 1.15 }}
                      className="w-16 h-16 rounded-[0.7rem] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-3 group-hover:bg-ag-lime/20 transition-all cursor-pointer"
                    >
                        <Zap className="text-ag-lime w-6 h-6" />
                    </motion.div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-60">Load Control</span>
                </div>
            </motion.div>

            {/* Right: Text Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl order-1 lg:order-2"
            >
                <div className="text-[10px] font-bold text-ag-lime uppercase tracking-[0.3em] mb-6">04 OPERATIONS</div>
                <h2 className="text-4xl md:text-5xl font-bold text-ag-green-950 leading-[1.1] tracking-tight mb-8">
                  Operational <br/> Excellence <br/> Beyond the Grid.
                </h2>
                <p className="text-lg text-gray-500 font-light leading-relaxed mb-12">
                  Financing is easy. Keeping assets running in remote locations is hard. That is our core competency. We leverage real-time data to de-risk investments and maximize runtime.
                </p>

                <div className="space-y-8">
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-[0.7rem] bg-gray-50 flex items-center justify-center border border-gray-100"><Activity className="w-5 h-5 text-ag-green-950" /></div>
                      <div>
                        <h4 className="font-bold text-ag-green-950">Centralized Monitoring</h4>
                        <p className="text-sm text-gray-400 font-light">Remote oversight via global satellite telemetry.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-[0.7rem] bg-gray-50 flex items-center justify-center border border-gray-100"><Cpu className="w-5 h-5 text-ag-green-950" /></div>
                      <div>
                        <h4 className="font-bold text-ag-green-950">IoT Lifecycle Management</h4>
                        <p className="text-sm text-gray-400 font-light">Digital integration for predictive maintenance.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-[0.7rem] bg-gray-50 flex items-center justify-center border border-gray-100"><Users className="w-5 h-5 text-ag-green-950" /></div>
                      <div>
                        <h4 className="font-bold text-ag-green-950">Rapid Response Teams</h4>
                        <p className="text-sm text-gray-400 font-light">Localized implementation for physical repairs.</p>
                      </div>
                   </div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05. CORE VALUES */}
      <section className="py-24 bg-white border-b border-gray-100">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6"
        >
          <SectionHeader number="05" category="Principles" title="The Values That Drive Us." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[420px]">
            {/* Card 1: Our Mission */}
            <motion.div 
              variants={fadeInUp as any}
              className="bg-ag-green-950 rounded-[0.7rem] p-8 flex flex-col justify-between relative group hover:shadow-2xl hover:shadow-ag-green-900/20 transition-all duration-300 transform hover:-translate-y-1"
            >
               <div className="flex justify-between items-start">
                 <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Our Mission</span>
                 <motion.div 
                   animate={{ rotate: [0, 5, -5, 0] }}
                   transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                   className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors"
                 >
                   <ShieldCheck className="text-white w-5 h-5 stroke-[1.5]" />
                 </motion.div>
               </div>
               <div>
                 <div className="text-4xl font-medium text-white mb-4 leading-tight">
                   The Impact <br/><span className="text-ag-lime">Mandate</span>
                 </div>
                 <p className="text-white/60 text-sm leading-relaxed font-light">
                   To de-risk the adoption of productive machinery in rural markets, turning energy access into tangible economic output.
                 </p>
               </div>
            </motion.div>

            {/* Card 2: Our Vision */}
            <motion.div 
              variants={fadeInUp as any}
              className="relative rounded-[0.7rem] overflow-hidden p-8 flex flex-col justify-between group h-full min-h-[350px] transform hover:-translate-y-1 transition-transform duration-300"
            >
               <div className="absolute inset-0">
                 <img 
                   src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?q=80&w=2874&auto=format&fit=crop" 
                   alt="Productive Future" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale mix-blend-multiply opacity-80"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-ag-green-900/90 via-ag-green-900/40 to-ag-green-900/20"></div>
               </div>
               <div className="relative z-10 flex justify-end">
                 <motion.div 
                   animate={{ y: [0, -4, 0] }}
                   transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                   className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors"
                 >
                   <TrendingUpIcon className="text-white w-5 h-5 stroke-[1.5]" />
                 </motion.div>
               </div>
               <div className="relative z-10">
                <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">The Long View</div>
                 <h3 className="text-2xl text-white font-medium mb-3">Community Wealth</h3>
                 <p className="text-white/80 leading-relaxed font-light text-sm max-w-[95%]">
                   A continent where every electron generated by a mini-grid is consumed by a machine that creates wealth for a community.
                 </p>
               </div>
            </motion.div>

            {/* Card 3: Asset-as-a-Service */}
            <motion.div 
              variants={fadeInUp as any}
              className="bg-[#F3F4F6] rounded-[0.7rem] p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
               <div className="flex justify-between items-start mb-4">
                 <span className="text-ag-green-950/60 text-xs font-bold uppercase tracking-widest">Our Model</span>
                 <motion.div 
                   whileHover={{ scale: 1.1 }}
                   className="w-12 h-12 rounded-full border border-ag-green-950/10 flex items-center justify-center bg-white shadow-sm"
                 >
                   <Handshake className="text-ag-green-950 w-5 h-5 stroke-[1.5]" />
                 </motion.div>
               </div>
               <div className="flex flex-col h-full justify-end">
                 <div className="mb-6">
                    <h3 className="text-2xl text-ag-green-950 font-medium mb-3 leading-tight">Asset-as-a-Service</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      We believe ownership shouldn't be a barrier. Our model replaces high CapEx with manageable OpEx, aligned with harvest cycles.
                    </p>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {["#CAPEX", "#OPEX", "#SCALE"].map((tag) => (
                      <span key={tag} className="px-4 py-2 text-[10px] font-bold rounded-full bg-white text-ag-green-950 border border-gray-200 group-hover:border-ag-green-950 transition-colors">
                        {tag}
                      </span>
                    ))}
                 </div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 06. LEADERSHIP */}
      <section className="py-24 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6"
        >
          <SectionHeader number="06" category="Governance" title="Guided by Industry Veterans." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { name: "Dr. Tunde Ojo", title: "Chairman", img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop" },
              { name: "Sarah Van Dorn", title: "CEO", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
              { name: "Michael Abara", title: "Technical Director", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop" },
              { name: "Elena Rossi", title: "CIO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" }
            ].map((person, i) => (
              <motion.div variants={fadeInUp as any} key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded-[0.7rem] mb-6 bg-gray-100 relative">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold text-ag-green-950 group-hover:text-ag-lime transition-colors">{person.name}</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mt-1">{person.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 07. ECOSYSTEM & CALL OUT */}
      <section className="relative bg-ag-green-950 py-32 overflow-hidden border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <motion.div variants={fadeInUp as any} className="w-full border-b border-white/10 pb-16 mb-24">
            <div className="text-center mb-12">
              <p className="text-[10px] font-bold text-ag-lime uppercase tracking-[0.3em] opacity-80">TRUSTED BY GLOBAL INSTITUTIONS & INFRASTRUCTURE LEADERS</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
               {partners.map((name, i) => (
                 <span key={i} className="text-2xl md:text-3xl font-serif font-bold text-white hover:text-ag-lime transition-colors cursor-default select-none">{name}</span>
               ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <motion.div variants={fadeInUp as any}>
               <h2 className="text-[3.5rem] md:text-[5rem] leading-[1.05] font-bold text-white tracking-tighter mb-10">
                 Align Your <br /> Capital with <br /> <span className="text-ag-lime">Impact.</span>
               </h2>
               <p className="text-lg text-gray-400 font-light leading-relaxed max-w-md mb-8">
                 By choosing renewable energy financing, you lower energy costs, reduce carbon emissions, and support innovative solutions that benefit our planet. Whether you are a mini-grid developer seeking utilization or an investor seeking impact, we have the vehicle to execute.
               </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp as any}
              className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
            >
                <div className="mb-10">
                   <h3 className="text-3xl md:text-4xl font-medium text-ag-green-950 leading-tight mb-2">
                     Knowledge Center & <br/><span className="text-ag-lime">Corporate Resources.</span>
                   </h3>
                </div>

                <div className="space-y-4">
                   <motion.button whileHover={{ scale: 1.01 }} className="group flex items-center justify-between w-full bg-ag-green-950 text-white p-1 pr-1 rounded-full hover:bg-ag-lime transition-all duration-500 shadow-xl shadow-ag-green-950/20">
                      <div className="flex items-center gap-4 pl-8">
                         <FileCheck className="w-5 h-5 text-ag-lime group-hover:text-white transition-colors" />
                         <span className="font-bold text-[10px] tracking-[0.2em] uppercase">Corporate Profile (PDF)</span>
                      </div>
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-ag-green-950 transition-transform group-hover:rotate-45">
                         <Download className="w-5 h-5" />
                      </div>
                   </motion.button>

                   <motion.button whileHover={{ scale: 1.01 }} className="group flex items-center justify-between w-full bg-gray-50 border border-gray-100 text-ag-green-950 p-1 pr-1 rounded-full hover:bg-ag-green-950 hover:text-white transition-all duration-500">
                      <div className="flex items-center gap-4 pl-8">
                         <TrendingUp className="w-5 h-5 text-ag-lime" />
                         <span className="font-bold text-[10px] tracking-[0.2em] uppercase">Impact Report 2024</span>
                      </div>
                      <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center text-ag-green-950 transition-transform group-hover:rotate-45">
                         <Download className="w-5 h-5" />
                      </div>
                   </motion.button>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Need specialized data? <a href="#" className="text-ag-lime hover:underline underline-offset-4 ml-1">Contact Partnerships</a>
                   </p>
                </div>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ag-lime/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ag-green-900/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
      </section>

    </div>
  );
};

export default AboutUsPage;
