'use client';


import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight, Download, FileCheck, ClipboardList, BarChart, ChevronDown as ChevronDownIcon } from 'lucide-react';
import Breadcrumb from './Breadcrumb';
import SectionHeader from './SectionHeader';

interface ContactPageProps {
  onNavigate?: (page: any) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const partners = ["REA", "Agronomie", "Power Africa", "Shell Foundation", "World Bank", "IFC"];
  const marqueePartners = [...partners, ...partners, ...partners, ...partners];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-ag-lime selection:text-white">
      
      {/* 01. UPDATED HERO SECTION */}
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
              { label: 'Connect' },
              { label: 'Contact Us' },
            ]} />
            
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-ag-green-950">
              01 Corporate Communication — 2025
            </div>
          </motion.div>

          <motion.div variants={fadeInUp as any} className="relative w-full aspect-[21/9] md:aspect-[3/1] mb-16 group">
            <div className="absolute inset-0 rounded-[0.7rem] overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1600880210830-804791557929?q=80&w=2940&auto=format&fit=crop" 
                alt="Corporate Discussion" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ag-green-950/20 group-hover:bg-transparent transition-colors duration-1000 mix-blend-multiply"></div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 flex items-center justify-center z-10 pointer-events-none overflow-visible">
              <div className="rotate-90 whitespace-nowrap text-white text-5xl md:text-8xl font-bold tracking-tighter opacity-80 select-none origin-center">
                CONTACT
              </div>
            </div>
          </motion.div>

          {/* Swapped Grid for Paragraph Left / Title Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
            <div className="lg:col-span-5 pt-2">
              <motion.p 
                variants={fadeInUp as any}
                className="text-sm md:text-lg text-gray-500 font-light leading-relaxed max-w-md mb-8"
              >
                Whether you are a Mini-Grid Developer, Investor, or Equipment Vendor, we are ready to deploy capital and technology where it matters most.
              </motion.p>
              <motion.div variants={fadeInUp as any} className="flex gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-1.5 animate-pulse" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ag-green-950">Operating Hours: Mon - Fri / 09:00 - 17:00 WAT</span>
              </motion.div>
            </div>

            <div className="lg:col-span-7 lg:text-right">
              <motion.h1 
                variants={fadeInUp as any}
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-ag-green-950 leading-[0.95] tracking-tighter"
              >
                CONNECT WITH <br/>
                <span className="text-ag-lime">OUR TEAM.</span>
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 02: THEMED CONTACT INFO GRID */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="02" category="Channels" title="Direct Connectivity." />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[420px]"
          >
            <motion.div 
              variants={fadeInUp as any}
              className="bg-ag-green-950 rounded-[0.7rem] p-10 flex flex-col justify-between relative group hover:shadow-2xl hover:shadow-ag-green-900/20 transition-all duration-300 transform hover:-translate-y-1"
            >
               <div className="flex justify-between items-start">
                 <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">Email Channels</span>
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                   <Mail className="text-white w-5 h-5 stroke-[1.5]" />
                 </div>
               </div>
               <div>
                 <div className="text-3xl font-medium text-white mb-2 leading-tight">
                   info@<span className="text-ag-lime">agassetco.com</span>
                 </div>
                 <p className="text-white/60 text-sm leading-relaxed font-light">
                   General correspondence and partnership inquiries. We aim to respond within 24 business hours.
                 </p>
               </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp as any}
              className="relative rounded-[0.7rem] overflow-hidden p-10 flex flex-col justify-between group h-full min-h-[350px] transform hover:-translate-y-1 transition-transform duration-300"
            >
               <div className="absolute inset-0">
                 <img 
                   src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?q=80&w=2874&auto=format&fit=crop" 
                   alt="Lagos Office Location" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale mix-blend-multiply opacity-80"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-ag-green-900/90 via-ag-green-900/60 to-ag-green-900/40"></div>
               </div>
               <div className="relative z-10 flex justify-end">
                 <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors">
                   <MapPin className="text-white w-5 h-5 stroke-[1.5]" />
                 </div>
               </div>
               <div className="relative z-10">
                 <div className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-2">Operational Hub</div>
                 <h3 className="text-2xl text-white font-medium mb-3">123 Solar Avenue, Lagos</h3>
                 <p className="text-white/80 leading-relaxed font-light text-sm max-w-[95%]">
                   Our central headquarters in Nigeria. Visit us for technical onboarding and strategic planning.
                 </p>
               </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp as any}
              className="bg-[#F3F4F6] rounded-[0.7rem] p-10 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
               <div className="flex justify-between items-start mb-4">
                 <span className="text-ag-green-950/60 text-[10px] font-bold uppercase tracking-widest">Global Support</span>
                 <div className="w-12 h-12 rounded-full border border-ag-green-950/10 flex items-center justify-center bg-white shadow-sm group-hover:border-ag-lime transition-colors">
                   <Phone className="text-ag-green-950 w-5 h-5 stroke-[1.5]" />
                 </div>
               </div>
               <div className="flex flex-col h-full justify-end">
                 <div className="text-3xl font-medium text-ag-green-950 mb-4 leading-tight">
                   +234 800 <span className="text-ag-lime">AGASSET</span>
                 </div>
                 <p className="text-ag-green-950/60 text-sm leading-relaxed font-light">
                   Dedicated line for active partners and field operations support.
                 </p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 03: THE FORM & MAP */}
      <section className="py-24 bg-white px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="03" category="Inquiry" title="Formal Request." />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp as any}
              className="flex flex-col h-full"
            >
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="relative group">
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full bg-transparent border-b border-gray-300 py-4 text-ag-green-950 focus:outline-none focus:border-ag-lime transition-colors font-medium placeholder:text-gray-400"
                      />
                   </div>
                   <div className="relative group">
                      <input 
                        type="text" 
                        placeholder="Company Name" 
                        className="w-full bg-transparent border-b border-gray-300 py-4 text-ag-green-950 focus:outline-none focus:border-ag-lime transition-colors font-medium placeholder:text-gray-400"
                      />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="relative group">
                      <input 
                        type="email" 
                        placeholder="Work Email" 
                        className="w-full bg-transparent border-b border-gray-300 py-4 text-ag-green-950 focus:outline-none focus:border-ag-lime transition-colors font-medium placeholder:text-gray-400"
                      />
                   </div>
                   <div className="relative group">
                      <select 
                        className="w-full bg-transparent border-b border-gray-300 py-4 text-ag-green-950 focus:outline-none focus:border-ag-lime transition-colors font-medium cursor-pointer appearance-none"
                      >
                         <option value="" disabled selected>Your Role</option>
                         <option value="developer">Mini-Grid Developer</option>
                         <option value="investor">Institutional Investor</option>
                         <option value="vendor">Equipment Vendor</option>
                         <option value="other">Other</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                         <ChevronDownIcon />
                      </div>
                   </div>
                </div>

                <div className="relative group">
                   <textarea 
                     rows={4}
                     placeholder="Message / Brief" 
                     className="w-full bg-transparent border-b border-gray-300 py-4 text-ag-green-950 focus:outline-none focus:border-ag-lime transition-colors font-medium placeholder:text-gray-400 resize-none"
                   />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-between w-full bg-ag-green-950 text-white p-1 pr-1 rounded-full hover:bg-ag-lime transition-all duration-500 shadow-xl shadow-ag-green-950/10 mt-12"
                >
                   <span className="pl-8 font-bold text-sm tracking-widest uppercase">Send Inquiry</span>
                   <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-ag-green-950 transition-transform group-hover:rotate-45">
                      <ArrowRight className="w-5 h-5" />
                   </div>
                </motion.button>
              </form>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp as any}
              className="relative h-full min-h-[400px] lg:min-h-full rounded-[0.7rem] overflow-hidden shadow-inner bg-gray-200 border border-white"
            >
               <img 
                 src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?q=80&w=2874&auto=format&fit=crop" 
                 alt="Operational Hub Location" 
                 className="w-full h-full object-cover grayscale transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-ag-green-950/10 mix-blend-multiply"></div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex items-center justify-center">
                     <div className="absolute w-16 h-16 bg-ag-lime rounded-full animate-ping opacity-40" />
                     <div className="relative z-10 w-6 h-6 bg-ag-lime border-4 border-white rounded-full shadow-2xl" />
                  </div>
               </div>

               <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-[0.7rem] shadow-2xl border border-white">
                  <div className="text-[10px] font-bold text-ag-lime uppercase tracking-widest mb-1">HQ & Operations Hub</div>
                  <div className="text-sm font-bold text-ag-green-950">Victoria Island, Lagos</div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04. UNIFIED PRE-FOOTER */}
      <section className="relative bg-ag-green-950 py-24 overflow-hidden border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-20"
        >
          <motion.div variants={fadeInUp as any} className="w-full border-b border-white/10 pb-12">
            <div className="text-center mb-10">
               <p className="text-[10px] font-bold text-ag-lime uppercase tracking-[0.3em] opacity-80">
                  TRUSTED BY GLOBAL INSTITUTIONS & INFRASTRUCTURE LEADERS
               </p>
            </div>
            <div className="relative overflow-hidden h-12">
                <div className="flex items-center gap-16 md:gap-32 w-max whitespace-nowrap animate-marquee-right">
                   {marqueePartners.map((name, i) => (
                     <span key={i} className="text-2xl md:text-4xl font-serif font-bold text-white/20 hover:text-white transition-colors cursor-default select-none">{name}</span>
                   ))}
                </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end pb-8">
            <motion.div variants={fadeInUp as any}>
               <h2 className="text-[3.5rem] md:text-[5rem] leading-[1.05] font-bold text-white tracking-tighter mb-8">
                 Ready to <br /> Scale Your <br /> <span className="text-ag-lime">Impact?</span>
               </h2>
               <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-lg">
                 Join the ecosystem bridging the gap between energy and economy. We provide the demand anchor and financing your project needs to thrive.
               </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp as any}
              className="bg-white p-10 md:p-14 w-full rounded-[3rem] shadow-2xl relative"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-ag-green-950 mb-10 leading-[1.2] tracking-tight border-b border-gray-100 pb-6">
                 Technical Support & <br/><span className="text-ag-lime">Partner Resources.</span>
              </h3>
              
              <div className="flex flex-col gap-4">
                 <motion.button whileHover={{ scale: 1.01 }} className="group flex items-center justify-between w-full bg-ag-green-950 text-white p-1 pr-1 rounded-full hover:bg-ag-lime transition-all duration-500 shadow-xl shadow-ag-green-950/20">
                    <div className="flex items-center gap-4 pl-8">
                       <ClipboardList className="w-5 h-5 text-ag-lime group-hover:text-white transition-colors" />
                       <span className="font-bold text-[10px] tracking-[0.2em] uppercase">Partnership Proposal</span>
                    </div>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-ag-green-950 transition-transform group-hover:rotate-45">
                       <ArrowRight className="w-5 h-5" />
                    </div>
                 </motion.button>

                 <motion.button whileHover={{ scale: 1.01 }} className="group flex items-center justify-between w-full bg-gray-50 border border-gray-100 text-ag-green-950 p-1 pr-1 rounded-full hover:bg-ag-green-950 hover:text-white transition-all duration-500">
                    <div className="flex items-center gap-4 pl-8">
                       <BarChart className="w-5 h-5 text-ag-lime" />
                       <span className="font-bold text-[10px] tracking-[0.2em] uppercase">Impact Framework (PDF)</span>
                    </div>
                    <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center text-ag-green-950 transition-transform group-hover:rotate-45">
                       <Download className="w-5 h-5" />
                    </div>
                 </motion.button>

                 <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Join the ecosystem. <a href="#" className="text-ag-lime hover:underline underline-offset-4 ml-1">Contact PR Team</a></p>
                 </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ag-lime/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ag-green-900/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Marquee Keyframes Styling */}
      <style>{`
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-right {
          animation: marquee-right 60s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default ContactPage;
