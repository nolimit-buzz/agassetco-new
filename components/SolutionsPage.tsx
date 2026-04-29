'use client';


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Zap, 
  Briefcase, 
  Database, 
  ShieldCheck, 
  ChevronDown, 
  Download, 
  Cog, 
  Snowflake, 
  Droplets, 
  Truck,
  Plus,
  Activity,
  Cpu,
  BarChart,
  ClipboardList
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import Breadcrumb from './Breadcrumb';

interface SolutionsPageProps {
  onNavigate?: (page: any) => void;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do you handle credit risk in remote areas?",
      a: "We utilize a three-layered approach: rigorous upfront vetting via Agronomie's agricultural data, mandatory digital payment collection, and IoT-enabled remote lockout capabilities for non-compliant assets."
    },
    {
      q: "Are the machines AC or DC powered?",
      a: "Our portfolio is grid-agnostic. We provide equipment tailored to the specific electrical architecture of the site, whether it's a 230V AC mini-grid or specialized 48V/96V DC solar systems."
    },
    {
      q: "What happens when a machine breaks down?",
      a: "We maintain a hub-and-spoke O&M model. Our central operations center tracks performance telemetry, while localized rapid response teams handle physical repairs and spare parts inventory."
    }
  ];

  const partners = ["REA", "Agronomie", "Power Africa", "Shell Foundation", "World Bank", "IFC"];
  const marqueePartners = [...partners, ...partners, ...partners, ...partners];

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
              { label: 'Services' },
              { label: 'Solutions' },
            ]} />
            
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-ag-green-950">
              01 Solutions Portfolio Overview — 2025
            </div>
          </motion.div>

          <motion.div variants={imageEntrance as any} className="relative w-full aspect-[21/9] md:aspect-[3/1] mb-16 group">
            <div className="absolute inset-0 rounded-[0.7rem] overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2944&auto=format&fit=crop" 
                alt="Solar Utility Infrastructure" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ag-green-950/20 group-hover:bg-transparent transition-colors duration-1000 mix-blend-multiply"></div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 flex items-center justify-center z-10 pointer-events-none overflow-visible">
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="rotate-90 whitespace-nowrap text-white text-5xl md:text-8xl font-bold tracking-tighter select-none origin-center"
              >
                SOLUTIONS
              </motion.div>
            </div>
          </motion.div>

          {/* Swapped Grid for Consistency */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
            <div className="lg:col-span-5 pt-2">
              <motion.p 
                variants={fadeInUp as any}
                className="text-sm md:text-lg text-gray-500 font-light leading-relaxed max-w-md mb-8"
              >
                We deploy, finance, and manage the critical asset portfolios that transform rural communities into commercial hubs through the Productive Use of Energy.
              </motion.p>
              <motion.button 
                variants={fadeInUp as any}
                className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ag-green-950 group"
              >
                View Catalog <Plus className="w-3 h-3 text-ag-lime group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>
            </div>

            <div className="lg:col-span-7 lg:text-right">
              <motion.h1 
                variants={fadeInUp as any}
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-ag-green-950 leading-[0.95] tracking-tighter"
              >
                PUE-AS-A- <br/>
                <span className="text-ag-lime">SERVICE.</span>
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. SECTION 02: THE BUSINESS MODELS */}
      <section className="py-24 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6"
        >
          <SectionHeader number="02" category="Engagement Models" title="Flexibility in Partnership." />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[0.5px] bg-gray-200 border-[0.5px] border-gray-200 rounded-[2rem] overflow-hidden">
            <motion.div variants={fadeInUp as any} className="bg-white p-12 md:p-16 flex flex-col justify-between group transition-colors duration-500 hover:bg-gray-50/50">
               <div>
                  <div className="flex justify-between items-start mb-12">
                     <span className="text-[10px] font-bold text-ag-lime uppercase tracking-[0.2em]">Model A</span>
                     <Briefcase className="w-8 h-8 text-ag-green-950/20 group-hover:text-ag-lime transition-colors duration-300" />
                  </div>
                  <h3 className="text-4xl font-medium text-ag-green-950 mb-6 tracking-tight">Asset Ownership Model</h3>
                  <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">Financed 100% by AgAsset Co. Ownership transfers to the partner after the lease term concludes. Ideal for established SMEs.</p>
               </div>
               <button className="mt-16 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ag-green-950 hover:text-ag-lime transition-colors">
                  Request Specs <ArrowUpRight className="w-4 h-4" />
               </button>
            </motion.div>

            <motion.div variants={fadeInUp as any} className="bg-ag-green-950 p-12 md:p-16 flex flex-col justify-between group transition-colors duration-500 hover:bg-ag-green-900">
               <div>
                  <div className="flex justify-between items-start mb-12">
                     <span className="text-[10px] font-bold text-ag-lime uppercase tracking-[0.2em]">Model B</span>
                     <Zap className="w-8 h-8 text-white/10 group-hover:text-ag-lime transition-colors duration-300" />
                  </div>
                  <h3 className="text-4xl font-medium text-white mb-6 tracking-tight">PUE-as-a-Service</h3>
                  <p className="text-lg text-white/60 font-light leading-relaxed mb-8">We retain long-term ownership. Users pay per-service (kg/liter/hour). Full O&M is included in the service fee.</p>
               </div>
               <button className="mt-16 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-ag-lime transition-colors">
                  Inquire Now <ArrowUpRight className="w-4 h-4" />
               </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. SECTION 03: ASSET CATEGORIES */}
      <section className="py-24 bg-white border-t border-gray-100">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6"
        >
          <SectionHeader number="03" category="Portfolio" title="High-Impact Categories." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[0.5px] bg-gray-200 border-[0.5px] border-gray-200">
            {[
              { title: "Agro-Processing", icon: Cog, desc: "Industrial-grade milling and hulling that reduces post-harvest loss." },
              { title: "Cold Chain", icon: Snowflake, desc: "Localized temperature-controlled logistics for fishery and dairy." },
              { title: "Water Systems", icon: Droplets, desc: "Solar-powered irrigation providing year-round farming independence." },
              { title: "E-Mobility", icon: Truck, desc: "Replacing fossil-fuel delivery logistics with efficient electric transport." }
            ].map((item, i) => (
              <motion.div 
                variants={fadeInUp as any}
                key={i} 
                className="bg-white p-10 flex flex-col justify-between group transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]"
              >
                <div>
                   <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 mb-10 flex items-center justify-center border-[0.5px] border-gray-100 rounded-[0.7rem] group-hover:border-ag-lime group-hover:bg-ag-lime/5 transition-all"
                   >
                      <item.icon className="w-6 h-6 text-ag-green-950 group-hover:text-ag-lime transition-colors stroke-[1.5]" />
                   </motion.div>
                   <h4 className="text-xl font-bold text-ag-green-950 mb-4">{item.title}</h4>
                   <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-12 h-[2px] w-0 bg-ag-lime group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. SECTION 04: MANAGEMENT & OPERATIONS */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <SectionHeader number="04" category="Management" title="Hub-and-Spoke Operations." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
               variants={fadeInUp as any}
               className="relative rounded-[0.7rem] overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] shadow-2xl group"
            >
               <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Telemetry Operations Interface" />
               <div className="absolute inset-0 bg-ag-green-950/20 group-hover:bg-transparent transition-colors duration-1000 mix-blend-multiply" />
               <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[0.7rem]">
                  <div className="flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest mb-2">
                     <span className="w-2 h-2 bg-ag-lime rounded-full animate-pulse" />
                     Live Telemetry Feed
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                     <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-ag-lime" />
                  </div>
               </div>
            </motion.div>

            <motion.div variants={fadeInUp as any}>
               <h2 className="text-4xl md:text-5xl font-medium text-ag-green-950 mb-8 leading-[1.1] tracking-tight">Reliable Asset <br/><span className="text-ag-lime">Performance.</span></h2>
               <div className="space-y-10">
                  {[
                    { title: "Smart Selection", icon: Database, desc: "Commercial viability testing via Agronomie's deep-market data before deployment." },
                    { title: "IoT Telemetry", icon: Zap, desc: "Real-time tracking and remote lockout capabilities for credit risk mitigation." },
                    { title: "Last-Mile Support", icon: ShieldCheck, desc: "Local technical partners and on-site servicing for guaranteed asset uptime." }
                  ].map((feat, i) => (
                    <motion.div whileHover={{ x: 10 }} key={i} className="flex gap-6 group transition-all">
                       <motion.div 
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className="shrink-0 w-12 h-12 bg-white rounded-[0.7rem] flex items-center justify-center text-ag-green-950 shadow-sm border border-gray-100 group-hover:bg-ag-green-950 group-hover:text-white transition-all duration-300"
                       >
                          <feat.icon className="w-5 h-5 stroke-[1.5]" />
                       </motion.div>
                       <div>
                          <h4 className="text-xl font-bold text-ag-green-950 mb-2">{feat.title}</h4>
                          <p className="text-gray-500 font-light leading-relaxed">{feat.desc}</p>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 5. SECTION 05: B2B SYNERGY */}
      <section className="py-32 bg-gray-900 text-white overflow-hidden relative">
         <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
         >
            <motion.span variants={fadeInUp as any} className="text-xs font-bold text-ag-lime uppercase tracking-[0.3em] mb-8 block">05 B2B Synergy</motion.span>
            <motion.h2 variants={fadeInUp as any} className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
               Partnering with <br/> Mini-Grid Developers.
            </motion.h2>
            <motion.p variants={fadeInUp as any} className="text-xl text-white/50 font-light leading-relaxed mb-12">
               Your grid needs load. We provide the demand anchor. Zero CapEx for you, stable ARPU for the grid. Together, we make rural electrification profitable.
            </motion.p>
            <motion.div variants={fadeInUp as any} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
               {["Daytime consumption optimization", "Anchor load stability", "Revenue share opportunities", "Integrated smart metering"].map((check, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-ag-lime/20 flex items-center justify-center text-ag-lime"><ArrowRight className="w-3 h-3" /></div>
                    <span className="text-sm font-medium text-white/80">{check}</span>
                 </div>
               ))}
            </motion.div>
         </motion.div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
      </section>

      {/* 6. SECTION 06: FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader number="06" category="Inquiries" title="Frequently Asked." />
          <div className="mt-12 space-y-2">
            {faqs.map((faq, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={i} 
                className="border-b border-gray-100 last:border-b-0"
              >
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full py-8 flex items-center justify-between text-left group">
                  <span className={`text-xl font-medium transition-colors duration-300 ${openFaq === i ? 'text-ag-lime' : 'text-ag-green-950 group-hover:text-ag-green-700'}`}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-300 transition-transform duration-500 ${openFaq === i ? 'rotate-180 text-ag-lime' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pb-8 text-gray-500 font-light leading-relaxed">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. UNIFIED ECOSYSTEM & CTA SECTION */}
      <section className="relative bg-ag-green-950 py-24 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-20"
        >
          <motion.div variants={fadeInUp as any} className="w-full border-b border-white/10 pb-12">
            <div className="text-center mb-10"><p className="text-[10px] font-bold text-ag-lime uppercase tracking-[0.3em] opacity-80">TRUSTED BY GLOBAL INSTITUTIONS & INFRASTRUCTURE LEADERS</p></div>
            <div className="relative overflow-hidden h-12">
                <div className="flex items-center gap-16 md:gap-32 w-max whitespace-nowrap">
                   {marqueePartners.map((name, i) => (
                     <span key={i} className="text-2xl md:text-4xl font-serif font-bold text-white/20 hover:text-white transition-colors cursor-default">{name}</span>
                   ))}
                </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end pb-8">
            <motion.div variants={fadeInUp as any}>
               <h2 className="text-[3.5rem] md:text-[5rem] leading-[1.05] font-bold text-white tracking-tighter mb-8">
                 Empower Your <br /> Grid. Drive <span className="text-ag-lime">ARPU.</span>
               </h2>
               <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-lg">
                 We provide the demand anchor your mini-grid needs to thrive. Partner with us to optimize load profiles and maximize the commercial viability of your energy assets.
               </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp as any}
              className="bg-white p-10 md:p-14 w-full rounded-[3rem] shadow-2xl relative"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-ag-green-950 mb-10 leading-[1.2] tracking-tight border-b border-gray-100 pb-6">
                 Technical Onboarding & <br/><span className="text-ag-lime">Asset Integration.</span>
              </h3>
              
              <div className="flex flex-col gap-4">
                 <motion.button whileHover={{ scale: 1.01 }} className="group flex items-center justify-between w-full bg-ag-green-950 text-white p-1 pr-1 rounded-full hover:bg-ag-lime transition-all duration-500 shadow-xl shadow-ag-green-950/20">
                    <div className="flex items-center gap-4 pl-8">
                       <ClipboardList className="w-5 h-5 text-ag-lime group-hover:text-white transition-colors" />
                       <span className="font-bold text-[10px] tracking-[0.2em] uppercase">Partnership Proposal</span>
                    </div>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-ag-green-950 transition-transform group-hover:rotate-45 group-hover:scale-90"><ArrowRight className="w-5 h-5" /></div>
                 </motion.button>

                 <motion.button whileHover={{ scale: 1.01 }} className="group flex items-center justify-between w-full bg-gray-50 border border-gray-100 text-ag-green-950 p-1 pr-1 rounded-full hover:bg-ag-green-950 hover:text-white transition-all duration-500">
                    <div className="flex items-center gap-4 pl-8">
                       <BarChart className="w-5 h-5 text-ag-lime" />
                       <span className="font-bold text-[10px] tracking-[0.2em] uppercase">Technical Specs (PDF)</span>
                    </div>
                    <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center text-ag-green-950 transition-transform group-hover:rotate-45 group-hover:scale-90"><Download className="w-5 h-5" /></div>
                 </motion.button>

                 <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Join the ecosystem. <a href="#" className="text-ag-lime hover:underline underline-offset-4 ml-1">Download Media Kit</a></p>
                 </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ag-lime/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ag-green-900/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
      </section>

    </div>
  );
};

export default SolutionsPage;
