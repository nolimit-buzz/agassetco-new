'use client';


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';

interface TermsPageProps {
  type: 'Terms & Conditions' | 'Privacy Policy';
  /* Updated union to include missing pages used in App.tsx handleNavigate */
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'portfolio' | 'news' | 'contact' | 'terms' | 'privacy' | 'news-detail') => void;
}

const SECTIONS = [
  { id: 'intro', num: '01', title: 'Introduction' },
  { id: 'data', num: '02', title: 'Data Protection' },
  { id: 'usage', num: '03', title: 'Asset Usage' },
  { id: 'intellect', num: '04', title: 'Intellectual Property' },
  { id: 'law', num: '05', title: 'Governing Law' }
];

const TermsPage: React.FC<TermsPageProps> = ({ type, onNavigate }) => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Fix: Casting ease array to any to resolve framer-motion Variants type mismatch
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-ag-lime selection:text-white pb-32">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="pt-32 pb-20 bg-white overflow-hidden px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* META HEADER: Adjusted to match News/Portfolio style */}
          <motion.div variants={fadeInUp as any} className="flex flex-row items-center justify-between mb-12 border-b border-gray-100 pb-8">
            <Breadcrumb items={[
              { label: 'Home', onClick: () => onNavigate?.('home') },
              { label: 'Legal' },
              { label: type },
            ]} />
            
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-ag-green-950">
              Legal Compliance Framework — v2.5
            </div>
          </motion.div>

          <div className="relative w-full">
            {/* Background branding text */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 flex items-center justify-center z-0 pointer-events-none overflow-visible opacity-[0.03]">
              <div className="rotate-90 whitespace-nowrap text-ag-green-950 text-8xl md:text-9xl font-bold tracking-tighter select-none origin-center">
                {type === 'Privacy Policy' ? 'PRIVACY' : 'TERMS'}
              </div>
            </div>

            {/* ASYMMETRIC CONTENT: Title Right, Info Left */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-5 pb-4">
                <motion.p variants={fadeInUp as any} className="text-lg text-gray-500 font-light leading-relaxed mb-10 max-w-sm">
                  Our governance frameworks ensure transparency, security, and operational excellence across all AgAsset Co digital and physical touchpoints.
                </motion.p>
                <motion.div variants={fadeInUp as any} className="flex gap-8">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Status</p>
                    <p className="text-sm font-bold text-ag-green-950 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-ag-lime animate-pulse"></span>
                      Effective
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Last Updated</p>
                    <p className="text-sm font-bold text-ag-green-950">Jan 12, 2025</p>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-7 lg:text-right">
                <motion.h1 
                  variants={fadeInUp as any}
                  className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold text-ag-green-950 leading-[0.9] tracking-tighter"
                >
                  {type === 'Terms & Conditions' ? 'TERMS OF ' : 'PRIVACY '} <br/>
                  <span className="text-ag-lime">{type === 'Terms & Conditions' ? 'SERVICE.' : 'POLICY.'}</span>
                </motion.h1>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. MAIN CONTENT AREA (Split Layout) */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* STICKY SIDEBAR (Table of Contents) */}
          <aside className="lg:col-span-3 hidden lg:block sticky top-32 pb-20 self-start">
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 border-b border-gray-100 pb-8 mb-10">
              Table of Contents
            </div>
            
            <nav className="flex flex-col gap-0 relative">
              {/* Vertical Progress Line */}
              <div className="absolute left-[3px] top-0 bottom-0 w-px bg-gray-100" />
              
              {SECTIONS.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <a 
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`text-xs font-bold uppercase tracking-widest transition-all duration-500 flex items-center gap-8 pl-1.5 py-6 relative group ${
                      isActive ? 'text-ag-green-950' : 'text-gray-300 hover:text-ag-green-950/70'
                    }`}
                  >
                    {/* Active Dot */}
                    <div className={`absolute left-0 w-[7px] h-[7px] rounded-full z-10 transition-all duration-500 ${
                      isActive ? 'bg-ag-lime scale-100' : 'bg-transparent scale-0'
                    }`} />
                    
                    <span className={`text-[11px] transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                      {section.num}
                    </span>
                    <span className="relative pb-1">
                      {section.title}
                      {isActive && (
                        <motion.div 
                          layoutId="sidebarUnderline"
                          className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-ag-green-950"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* SUPPORT CARD */}
            <div className="mt-20 p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
              <p className="text-[10px] font-bold text-ag-green-950 uppercase tracking-[0.2em] mb-4">Support</p>
              <p className="text-xs text-gray-500 font-light leading-relaxed mb-10">
                Have questions regarding our legal framework? Reach out to our compliance team.
              </p>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }} 
                className="text-[10px] font-bold text-ag-lime uppercase tracking-[0.25em] hover:text-ag-green-950 transition-colors"
              >
                Contact Compliance
              </a>
            </div>
          </aside>

          {/* SCROLLABLE CONTENT */}
          <div className="lg:col-span-9">
            <div className="space-y-40">
              
              {/* SECTION 01 */}
              <article id="intro" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">01</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>LEGAL / INTRO</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Defining our <span className="text-ag-lime italic font-serif">mandate</span> and operational guardrails.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p className="text-2xl text-ag-green-950/80 font-normal leading-snug">
                    This document serves as the primary governing framework for all interactions within the AgAsset Co ecosystem.
                  </p>
                  <p>
                    By accessing our digital platforms or engaging in our asset-financing models, you enter into a binding agreement with AgAsset Co, a subsidiary of Agronomie. Our mission is to bridge the gap between energy access and economic production, and these terms ensure that this bridge remains stable, secure, and transparent for all stakeholders.
                  </p>
                  <p>
                    We reserve the right to modify these terms as rural energy markets evolve. Any major changes will be communicated via the primary contact channel associated with your partnership or user profile.
                  </p>
                </div>
              </article>

              {/* SECTION 02 */}
              <article id="data" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">02</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>PRIVACY / DATA</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Data integrity and <span className="text-ag-lime">IoT privacy</span> protocols.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>
                    AgAsset Co leverages Internet of Things (IoT) telemetry to track asset health, power consumption, and repayment performance. This data is the lifeblood of our bankability model.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                      <h4 className="text-lg font-bold text-ag-green-950 mb-4">Operational Data</h4>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">Telemetry related to machine run-time, load synchronization with mini-grids, and maintenance indicators. This is used solely for technical O&M.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                      <h4 className="text-lg font-bold text-ag-green-950 mb-4">Financial Metadata</h4>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">Payment history and digital footprint on mobile money rails. This informs credit scoring for future asset upgrades.</p>
                    </div>
                  </div>
                  <p>
                    We adhere to international data protection standards. Your telemetry data is never sold to third parties. Access is restricted to authorized operations personnel and relevant mini-grid utility partners.
                  </p>
                </div>
              </article>

              {/* SECTION 03 */}
              <article id="usage" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">03</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>ASSETS / USAGE</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Responsible use and <span className="text-ag-lime">operational</span> accountability.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>
                    Productive Use of Energy (PUE) assets are high-value investments. Users are granted access under a clear mandate of "commercial agricultural use."
                  </p>
                  <ul className="space-y-6 list-none p-0">
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Technical Compliance:</strong> Any attempt to bypass IoT monitoring or tamper with internal power limiters is a material breach of contract.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Grid Synchronization:</strong> High-load assets must only be operated during approved grid windows to prevent regional outages.</p>
                    </li>
                    <li className="flex gap-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-ag-lime mt-4 shrink-0" />
                      <p><strong className="text-ag-green-950">Safety Standards:</strong> Operators must undergo AgAsset certified training before operating industrial-grade milling or cold-chain equipment.</p>
                    </li>
                  </ul>
                </div>
              </article>

              {/* SECTION 04 */}
              <article id="intellect" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">04</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>SYSTEMS / IP</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Ownership of our <span className="text-ag-lime">proprietary</span> IP.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>
                    The "Hub-and-Spoke" operational blueprints, custom IoT firmware, and the AgAsset risk-scoring algorithm are the exclusive property of AgAsset Co and Agronomie.
                  </p>
                  <p>
                    We encourage research and academic collaboration; however, any commercial exploitation of our operational frameworks or branding without prior written consent is strictly prohibited.
                  </p>
                </div>
              </article>

              {/* SECTION 05 */}
              <article id="law" className="scroll-mt-32">
                <div className="border-t border-ag-green-950 pt-8 mb-12">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
                    <div className="flex items-center gap-4">
                      <span className="text-ag-green-950">05</span>
                      <span className="w-8 h-px bg-gray-100"></span>
                      <span>GOVERNANCE / LAW</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl">
                    Legal jurisdiction and <span className="text-ag-lime">dispute</span> resolution.
                  </h2>
                </div>
                <div className="prose prose-xl max-w-none text-gray-500 font-light leading-relaxed space-y-8">
                  <p>
                    These terms are governed by the laws of the Federal Republic of Nigeria, with specialized provisions for cross-border institutional investments where applicable.
                  </p>
                  <p>
                    In the event of a dispute, stakeholders agree to engage in a 30-day "Good Faith" mediation period. If unresolved, disputes shall be settled through binding arbitration in Lagos, Nigeria, in accordance with the Arbitration and Conciliation Act.
                  </p>
                </div>
              </article>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default TermsPage;
